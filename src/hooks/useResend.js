
import { useState } from "react";

const API_URL = "https://issuedesk.bigbrain-studio.com/api/resend";

export default function useResend() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const resetStatus = () => {
        setSuccess(false);
        setError("");
    };

    const sendEmail = async (data) => {
        setLoading(true);
        resetStatus();

        try {
            if (data.website?.trim()) {
                throw new Error("ไม่สามารถส่งข้อความได้ กรุณาลองใหม่อีกครั้ง");
            }

            const response = await fetch(API_URL, {
                method: "POST",
                credentials: "omit",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.name.trim(),
                    email: data.email.trim(),
                    subject: data.subject.trim(),
                    message: data.message.trim(),
                }),
                signal: AbortSignal.timeout(30000),
            });

            const result = await response.json().catch(() => null);

            if (!response.ok || result?.success !== true) {
                throw new Error(
                    typeof result?.message === "string"
                        ? result.message
                        : "ไม่สามารถส่งข้อความได้ กรุณาลองใหม่อีกครั้ง",
                );
            }

            setSuccess(true);
            return { ok: true };
        } catch (err) {
            const message =
                err instanceof Error
                    ? err.message
                    : "เกิดข้อผิดพลาดในการส่งข้อความ";

            setError(message);
            return { ok: false, error: message };
        } finally {
            setLoading(false);
        }
    };

    return {
        sendEmail,
        loading,
        success,
        error,
        resetStatus,
    };
}
