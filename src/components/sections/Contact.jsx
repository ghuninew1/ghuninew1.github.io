import { useState } from "react";
import { ArrowUpRight, LoaderCircle, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contactInfo, personalInfo } from "../../data/portfolioData";
import { Github } from "../../utils/github";
import useResend from "../../hooks/useResend";
import { cx } from "../../utils/cx";

const inputClass =
    "w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/15";

export default function Contact() {
    const { sendEmail, loading, success, error, resetStatus } = useResend();
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));

        if (success || error) resetStatus();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formElement = event.currentTarget;
        const result = await sendEmail(form);

        if (result.ok) {
            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
                website: "",
            });
            formElement.reset();
        }
    };

    const socialClass =
        "inline-flex min-h-11 items-center gap-2 rounded-full apple-glass-subtle px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-indigo-500 dark:hover:text-indigo-400";

    return (
        <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-3xl apple-glass p-6 shadow-2xl sm:p-10 lg:p-14">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-indigo-500/15 blur-[100px]"
                    />

                    <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
                        <div className="flex flex-col">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
                                Get in Touch
                            </p>

                            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                                Let’s build something useful.
                            </h2>

                            <p className="mt-5 leading-8 text-muted-foreground">
                                สนใจพูดคุยเกี่ยวกับการพัฒนาเว็บไซต์ เทคโนโลยี หรือโปรเจกต์ต่าง ๆ
                                ส่งข้อความถึงฉันได้จากฟอร์มนี้
                            </p>

                            <p className="mt-4 leading-7 text-muted-foreground">{personalInfo.role}</p>

                            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="flex size-8 items-center justify-center rounded-full apple-glass-subtle">
                                    <MapPin className="size-4 text-indigo-500 dark:text-indigo-400" />
                                </div>
                                {personalInfo.location}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {contactInfo.github && (
                                    <a
                                        href={contactInfo.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                                    >
                                        <Github className="size-4" />
                                        GitHub
                                        <ArrowUpRight className="size-4" />
                                    </a>
                                )}

                                {contactInfo.facebook && (
                                    <a
                                        href={contactInfo.facebook}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={socialClass}
                                    >
                                        Facebook
                                        <ArrowUpRight className="size-4" />
                                    </a>
                                )}

                                {contactInfo.linkedin && (
                                    <a
                                        href={contactInfo.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={socialClass}
                                    >
                                        LinkedIn
                                        <ArrowUpRight className="size-4" />
                                    </a>
                                )}

                                {contactInfo.email && (
                                    <a href={`mailto:${contactInfo.email}`} className={socialClass}>
                                        Email
                                        <ArrowUpRight className="size-4" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="rounded-2xl border border-border/50 bg-background/35 p-5 backdrop-blur-xl sm:p-7"
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-foreground">Send me a message</h3>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    กรอกข้อมูลด้านล่าง แล้วฉันจะได้รับข้อความทางอีเมล
                                </p>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="min-w-0">
                                    <label
                                        htmlFor="contact-name"
                                        className="mb-2 block text-sm font-medium text-foreground"
                                    >
                                        ชื่อของคุณ
                                    </label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        maxLength={100}
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="ชื่อผู้ติดต่อ"
                                        className={inputClass}
                                        disabled={loading}
                                    />
                                </div>

                                <div className="min-w-0">
                                    <label
                                        htmlFor="contact-email"
                                        className="mb-2 block text-sm font-medium text-foreground"
                                    >
                                        อีเมล
                                    </label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        maxLength={254}
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className={inputClass}
                                        disabled={loading}
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="contact-subject"
                                        className="mb-2 block text-sm font-medium text-foreground"
                                    >
                                        หัวข้อ
                                    </label>
                                    <input
                                        id="contact-subject"
                                        name="subject"
                                        type="text"
                                        maxLength={200}
                                        required
                                        value={form.subject}
                                        onChange={handleChange}
                                        placeholder="ต้องการติดต่อเรื่องอะไร?"
                                        className={inputClass}
                                        disabled={loading}
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="contact-message"
                                        className="mb-2 block text-sm font-medium text-foreground"
                                    >
                                        ข้อความ
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={5}
                                        maxLength={5000}
                                        required
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="เขียนข้อความของคุณที่นี่..."
                                        className={cx(inputClass, "min-h-36 resize-y")}
                                        disabled={loading}
                                    />
                                    <p className="mt-2 text-right text-xs text-muted-foreground">
                                        {form.message.length}/5000
                                    </p>
                                </div>
                            </div>

                            {/* Honeypot: ซ่อนจากผู้ใช้ แต่บอตพื้นฐานอาจกรอกช่องนี้ */}
                            <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
                                <label htmlFor="contact-website">Leave this field empty</label>
                                <input
                                    id="contact-website"
                                    name="website"
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={form.website}
                                    onChange={handleChange}
                                />
                            </div>

                            {success && (
                                <div
                                    role="status"
                                    className="mt-5 flex items-start gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-600 dark:text-emerald-400"
                                >
                                    <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                                    <p>ส่งข้อความสำเร็จแล้ว ขอบคุณที่ติดต่อมา</p>
                                </div>
                            )}

                            {error && (
                                <div
                                    role="alert"
                                    className="mt-5 flex items-start gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400"
                                >
                                    <AlertCircle className="mt-0.5 size-4 shrink-0" />
                                    <p>{error}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? (
                                    <>
                                        <LoaderCircle className="size-4 animate-spin" />
                                        กำลังส่งข้อความ...
                                    </>
                                ) : (
                                    <>
                                        <Send className="size-4" />
                                        ส่งข้อความ
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                <p className="mt-6 text-center text-xs text-muted-foreground">
                    {personalInfo.name} · {personalInfo.role}
                </p>
            </div>
        </section>
    );
}
