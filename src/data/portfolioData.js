import {
    Home,
    UserRound,
    Layers3,
    FolderGit2,
    Milestone,
    Mail,
} from "lucide-react";

export const navigation = [
    { label: "Home", href: "#home", icon: Home, labelTh: "หน้าแรก" },
    { label: "About", href: "#about", icon: UserRound, labelTh: "เกี่ยวกับฉัน" },
    { label: "Skills", href: "#skills", icon: Layers3, labelTh: "ทักษะ" },
    { label: "Projects", href: "#projects", icon: FolderGit2, labelTh: "ผลงาน" },
    { label: "Timeline", href: "#timeline", icon: Milestone, labelTh: "ประสบการณ์" },
    { label: "Contact", href: "#contact", icon: Mail, labelTh: "ติดต่อ" },
];

export const personalInfo = {
    name: "Ghuninew",
    displayName: "GhuniNew",
    profileImage: "/src/assets/GhuniNew_full_color.avif",

    role: "Web Developer & IT Technician",
    roleTh: "นักพัฒนาเว็บไซต์และช่างเทคนิค IT",

    headline: "Building practical solutions with code and technology.",
    headlineTh: "สร้างโซลูชันที่ใช้งานได้จริงด้วยโค้ดและเทคโนโลยี",

    bio: "Web Developer & IT Technician focused on practical web applications, IT systems, and network infrastructure.",
    bioTh: "พัฒนา Web Application พร้อมดูแลระบบ IT และโครงสร้างพื้นฐานเครือข่าย",

    aboutText:
        "ผมทำงานด้าน IT Support และพัฒนา Web Application โดยนำประสบการณ์ด้านระบบ IT และเครือข่ายมาสร้างเครื่องมือที่ช่วยแก้ปัญหาและทำให้การทำงานง่ายขึ้น",

    quote: "ไม่ใช่แค่ทำงานให้เสร็จ แต่ทำให้ดีขึ้นได้เสมอ",

    location: "Thailand",
    email: "aakanun43@gmail.com",

    githubUrl: "https://github.com/ghuninew1",
    facebookUrl: "https://www.facebook.com/ghuninew/",
    linkedinUrl: "https://www.linkedin.com/in/ghuninew-jonjaras-35485418a/",
};

export const techStack = [
    {
        name: "React",
        category: "Frontend",
        description: "Web application development",
    },
    {
        name: "JavaScript",
        category: "Frontend",
        description: "Modern JavaScript development",
    },
    {
        name: "Tailwind CSS",
        category: "Frontend",
        description: "Responsive UI development",
    },
    {
        name: "Cloudflare",
        category: "Platform",
        description: "Pages, Workers and D1",
    },
    {
        name: "Docker",
        category: "Infrastructure",
        description: "Containerized services",
    },
    {
        name: "Networking",
        category: "Infrastructure",
        description: "MikroTik, VPN and network systems",
    },
    {
        name: "IT Support",
        category: "Technical Support",
        description: "Hardware, software and system support",
    },
    {
        name: "Git & GitHub",
        category: "Development",
        description: "Version control and project management",
    },
];

export const projects = [
    {
        id: "issuedesk",
        title: "IssueDesk",
        subtitle: "IT Issue & Asset Management",
        category: "Web Application",
        status: "In Development",

        description:
            "ระบบสำหรับแจ้งและติดตามปัญหา IT จัดการข้อมูลอุปกรณ์ และเครื่องมือสำหรับงาน IT ภายในองค์กร",

        tags: [
            "React",
            "Tailwind CSS",
            "Cloudflare",
            "D1",
        ],

        githubUrl: "https://github.com/ghuninew1",
        demoUrl: null,
        featured: true,
    },

    {
        id: "react-image-converter",
        title: "React Image Converter",
        subtitle: "Client-side Image Processing",
        category: "Web Tool",
        status: "Built",

        description:
            "เครื่องมือแปลงไฟล์ภาพบนเบราว์เซอร์ รองรับการประมวลผลฝั่ง Client, AVIF และการดาวน์โหลดแบบ ZIP",

        tags: [
            "React",
            "Vite",
            "Web Workers",
            "AVIF",
        ],

        githubUrl: "https://github.com/ghuninew1/React-Image-Converter",
        demoUrl: null,
        featured: true,
    },

    {
        id: "nexora",
        title: "Nexora",
        subtitle: "Private Cloud File Management",
        category: "Web Application",
        status: "In Development",

        description:
            "ระบบ Private Cloud สำหรับจัดการไฟล์ โฟลเดอร์ การอัปโหลด และพื้นที่จัดเก็บข้อมูลผ่านเว็บ",

        tags: [
            "React",
            "Cloudflare",
            "Storage",
            "Docker",
        ],

        githubUrl: "https://github.com/ghuninew1",
        demoUrl: null,
        featured: true,
    },
];

export const timeline = [
    {
        id: "it-support",
        title: "IT Support & Infrastructure",
        titleTh: "IT Support และระบบ Infrastructure",
        description:
            "ดูแลคอมพิวเตอร์ ซอฟต์แวร์ ระบบเครือข่าย และบริการ IT ภายในองค์กร",
        type: "IT",
    },
    {
        id: "web-development",
        title: "Web Development",
        titleTh: "พัฒนา Web Application",
        description:
            "พัฒนา Web Application ด้วย React และเทคโนโลยีเว็บสมัยใหม่ โดยเน้นระบบที่ใช้งานได้จริง",
        type: "Development",
    },
    {
        id: "projects",
        title: "Building Practical Solutions",
        titleTh: "พัฒนาเครื่องมือสำหรับใช้งานจริง",
        description:
            "นำประสบการณ์ด้าน IT มาพัฒนาเครื่องมือและระบบที่ช่วยแก้ปัญหาในการทำงาน",
        type: "Projects",
    },
];

export const contactInfo = {
    github: personalInfo.githubUrl,
    email: personalInfo.email,
    facebook: personalInfo.facebookUrl,
    linkedin: personalInfo.linkedinUrl,
    location: personalInfo.location,
};
