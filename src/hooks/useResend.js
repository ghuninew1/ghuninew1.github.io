
import { useState } from "react";

const API_URL = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

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
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(
                    result.error || "ไม่สามารถส่งข้อความได้ กรุณาลองใหม่อีกครั้ง",
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
