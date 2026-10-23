const MAX_LENGTH = {
    name: 100,
    email: 254,
    subject: 200,
    message: 5000,
};

function json(data, status, headers = {}) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store",
            ...headers,
        },
    });
}

function getCorsHeaders(request, env) {
    const origin = request.headers.get("Origin");
    const allowedOrigins = (env.ALLOWED_ORIGINS || "")
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean);

    if (!origin || !allowedOrigins.includes(origin)) {
        return null;
    }

    return {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
        Vary: "Origin",
    };
}

function escapeHtml(value) {
    return value.replace(/[&<>"']/g, (char) => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };

        return entities[char];
    });
}

export async function onRequestOptions({ request, env }) {
    const corsHeaders = getCorsHeaders(request, env);

    if (!corsHeaders) {
        return new Response(null, { status: 403 });
    }

    return new Response(null, {
        status: 204,
        headers: corsHeaders,
    });
}

export async function onRequestPost({ request, env }) {
    const corsHeaders = getCorsHeaders(request, env);

    if (!corsHeaders) {
        return json({ error: "Origin ไม่ได้รับอนุญาต" }, 403);
    }

    const headers = {
        ...corsHeaders,
    };

    if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
        return json({ error: "ระบบอีเมลยังตั้งค่าไม่ครบ กรุณาลองใหม่ภายหลัง" }, 500, headers);
    }

    const contentType = request.headers.get("Content-Type") || "";

    if (!contentType.toLowerCase().includes("application/json")) {
        return json({ error: "รูปแบบข้อมูลไม่ถูกต้อง" }, 415, headers);
    }

    let data;

    try {
        data = await request.json();
    } catch {
        return json({ error: "ไม่สามารถอ่านข้อมูลได้" }, 400, headers);
    }

    if (!data || typeof data !== "object" || Array.isArray(data)) {
        return json({ error: "ข้อมูลไม่ถูกต้อง" }, 400, headers);
    }

    // Honeypot: หากบอทกรอกช่องนี้ ให้ปฏิเสธคำขอ
    if (typeof data.website === "string" && data.website.trim()) {
        return json({ ok: true }, 200, headers);
    }

    const name = typeof data.name === "string" ? data.name.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const subject = typeof data.subject === "string" ? data.subject.trim() : "";
    const message = typeof data.message === "string" ? data.message.trim() : "";

    if (!name || !email || !subject || !message) {
        return json({ error: "กรุณากรอกข้อมูลให้ครบทุกช่อง" }, 400, headers);
    }

    if (
        name.length > MAX_LENGTH.name ||
        email.length > MAX_LENGTH.email ||
        subject.length > MAX_LENGTH.subject ||
        message.length > MAX_LENGTH.message
    ) {
        return json({ error: "ข้อมูลบางช่องยาวเกินกำหนด" }, 400, headers);
    }

    if (/[\r\n]/.test(email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return json({ error: "รูปแบบอีเมลไม่ถูกต้อง" }, 400, headers);
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    try {
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: env.CONTACT_FROM_EMAIL,
                to: [env.CONTACT_TO_EMAIL],
                reply_to: email,
                subject: `[Portfolio Contact] ${subject}`,
                html: `
                    <h2>มีข้อความใหม่จาก Portfolio</h2>
                    <p><strong>ชื่อ:</strong> ${safeName}</p>
                    <p><strong>อีเมล:</strong> ${safeEmail}</p>
                    <p><strong>หัวข้อ:</strong> ${safeSubject}</p>
                    <hr />
                    <p>${safeMessage}</p>
                `,
                text: [`ชื่อ: ${name}`, `อีเมล: ${email}`, `หัวข้อ: ${subject}`, "", message].join("\n"),
            }),
        });

        if (!response.ok) {
            // ไม่ส่งรายละเอียดภายในของ Resend กลับไปให้ผู้ใช้
            return json({ error: "ส่งอีเมลไม่สำเร็จ กรุณาลองใหม่ภายหลัง" }, 502, headers);
        }

        return json({ ok: true }, 200, headers);
    } catch {
        return json({ error: "ไม่สามารถเชื่อมต่อบริการอีเมลได้" }, 502, headers);
    }
}
