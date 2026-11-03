import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, LoaderCircle, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contactInfo, personalInfo } from "../../data/portfolioData";
import { Github } from "../../utils/github";
import useResend from "../../hooks/useResend";
import { cx } from "../../utils/cx";
import GlassButton from "../GlassButton";
import { glassHover } from "../../utils/utils";

const inputClass =
    "w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15";

export default function Contact() {
    const reduced = useReducedMotion();
    const itemMotion = { hidden: { opacity: 0, y: reduced ? 0 : 16 }, visible: { opacity: 1, y: 0 } };
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

    const socialClass = cx(
        "group inline-flex min-h-11 items-center gap-2 rounded-full apple-glass-subtle px-5 py-2.5 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 motion-safe:hover:-translate-y-0.5",
        glassHover,
    );

    return (
        <section id="contact" className="px-5 sm:px-8 lg:px-12 py-20 lg:py-28 scroll-mt-24">
            <div className="mx-auto max-w-7xl">
                <div className="relative shadow-2xl p-6 sm:p-10 lg:p-14 rounded-sm overflow-hidden apple-glass">
                    <div
                        aria-hidden="true"
                        className="-top-24 -right-20 absolute bg-emerald-500/12 blur-[100px] rounded-full size-80 pointer-events-none"
                    />

                    <div className="relative gap-10 lg:gap-14 grid lg:grid-cols-[0.8fr_1.2fr]">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                            className="flex flex-col"
                        >
                            <motion.p
                                variants={itemMotion}
                                className="mb-3 font-semibold text-emerald-700 dark:text-emerald-400 text-sm uppercase tracking-[0.2em]"
                            >
                                Get in Touch
                            </motion.p>

                            <motion.h2
                                variants={itemMotion}
                                className="font-semibold text-foreground text-3xl sm:text-4xl lg:text-5xl tracking-tight"
                            >
                                Let’s build something useful.
                            </motion.h2>

                            <motion.p variants={itemMotion} className="mt-5 text-muted-foreground leading-8">
                                สนใจพูดคุยเกี่ยวกับการพัฒนาเว็บไซต์ เทคโนโลยี หรือโปรเจกต์ต่าง ๆ
                                ส่งข้อความถึงฉันได้จากฟอร์มนี้
                            </motion.p>

                            <p className="mt-4 text-muted-foreground leading-7">{personalInfo.role}</p>

                            <div className="flex items-center gap-2 mt-6 text-muted-foreground text-sm">
                                <div className="flex justify-center items-center rounded-full size-8 apple-glass-subtle">
                                    <MapPin className="size-4 text-emerald-700 dark:text-emerald-400" />
                                </div>
                                {personalInfo.location}
                            </div>

                            <motion.div variants={itemMotion} className="flex flex-wrap gap-3 mt-8">
                                {contactInfo.github && (
                                    <a
                                        href={contactInfo.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={cx(
                                            "group inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 motion-safe:hover:-translate-y-0.5",
                                            glassHover,
                                        )}
                                    >
                                        <Github className="size-4" />
                                        GitHub
                                        <ArrowUpRight className="size-4 transition-transform motion-safe:group-hover:translate-x-[3px]" />
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
                                        <ArrowUpRight className="size-4 transition-transform motion-safe:group-hover:translate-x-[3px]" />
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
                                        <ArrowUpRight className="size-4 transition-transform motion-safe:group-hover:translate-x-[3px]" />
                                    </a>
                                )}

                                {contactInfo.email && (
                                    <a href={`mailto:${contactInfo.email}`} className={socialClass}>
                                        Email
                                        <ArrowUpRight className="size-4 transition-transform motion-safe:group-hover:translate-x-[3px]" />
                                    </a>
                                )}
                            </motion.div>
                        </motion.div>

                        <form
                            onSubmit={handleSubmit}
                            className="bg-background/35 backdrop-blur-xl p-5 sm:p-7 border border-border/50 rounded-sm"
                        >
                            <div className="mb-6">
                                <h3 className="font-semibold text-foreground text-xl">Send me a message</h3>
                                <p className="mt-2 text-muted-foreground text-sm leading-6">
                                    กรอกข้อมูลด้านล่าง แล้วฉันจะได้รับข้อความทางอีเมล
                                </p>
                            </div>

                            <div className="gap-5 grid sm:grid-cols-2">
                                <div className="min-w-0">
                                    <label
                                        htmlFor="contact-name"
                                        className="block mb-2 font-medium text-foreground text-sm"
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
                                        className="block mb-2 font-medium text-foreground text-sm"
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
                                        className="block mb-2 font-medium text-foreground text-sm"
                                    >
                                        หัวข้อ
                                    </label>
                                    <input
                                        id="contact-subject"
                                        name="subject"
                                        type="text"
                                        maxLength={150}
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
                                        className="block mb-2 font-medium text-foreground text-sm"
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
                                    <p className="mt-2 text-muted-foreground text-xs text-right">
                                        {form.message.length}/5000
                                    </p>
                                </div>
                            </div>

                            {/* Honeypot: ซ่อนจากผู้ใช้ แต่บอตพื้นฐานอาจกรอกช่องนี้ */}
                            <div aria-hidden="true" className="-left-[10000px] absolute w-px h-px overflow-hidden">
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
                                <motion.div
                                    initial={reduced ? false : { opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25 }}
                                    role="status"
                                    className="flex items-start gap-2 bg-emerald-500/10 mt-5 p-3 border border-emerald-500/20 rounded-xl text-emerald-600 dark:text-emerald-400 text-sm"
                                >
                                    <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                                    <p>ส่งข้อความสำเร็จแล้ว ขอบคุณที่ติดต่อมา</p>
                                </motion.div>
                            )}

                            {error && (
                                <motion.div
                                    initial={reduced ? false : { opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25 }}
                                    role="alert"
                                    className="flex items-start gap-2 bg-red-500/10 mt-5 p-3 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-sm"
                                >
                                    <AlertCircle className="mt-0.5 size-4 shrink-0" />
                                    <p>{error}</p>
                                </motion.div>
                            )}

                            <GlassButton
                                type="submit"
                                disabled={loading}
                                className="inline-flex justify-center items-center gap-2 bg-foreground mt-6 px-5 py-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 w-full min-h-12 font-semibold text-background text-sm"
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
                            </GlassButton>
                        </form>
                    </div>
                </div>

                <p className="mt-6 text-muted-foreground text-xs text-center">
                    {personalInfo.name} · {personalInfo.role}
                </p>
            </div>
        </section>
    );
}
