import { Home, UserRound, Layers3, FolderGit2, Milestone, Mail } from "lucide-react";

export const navigation = [
    { label: "Home", href: "#home", icon: Home , labelTh: "หน้าแรก"},
    { label: "About", href: "#about", icon: UserRound, labelTh: "เกี่ยวกับฉัน"},
    { label: "Skills", href: "#skills", icon: Layers3, labelTh: "ทักษะ"},
    { label: "Projects", href: "#projects", icon: FolderGit2, labelTh: "ผลงาน"},
    { label: "Timeline", href: "#timeline", icon: Milestone, labelTh: "เส้นทางของฉัน"},
    { label: "Contact", href: "#contact", icon: Mail, labelTh: "ติดต่อ"},
];


export const personalInfo = {
    name: "Ghuninew",
    displayName: "GhuniNew",
    profileImage: "/src/assets/GhuniNew_full_color.avif",
    role: "Web Developer & IT Technician",
    roleTh: "นักพัฒนาเว็บไซต์และช่างเทคนิค IT",

    headline: "Building practical solutions with code and technology.",
    headlineTh: "สร้างโซลูชันที่ใช้งานได้จริง ด้วยโค้ดและเทคโนโลยี",

    bio: "I develop practical web applications, optimize user experiences, and maintain IT systems and network infrastructure.",
    bioTh: "พัฒนา Web Application พร้อมดูแลระบบ IT และโครงสร้างพื้นฐานเครือข่าย",

    aboutText:
        "ผมทำงานด้าน IT Support และพัฒนา Web Application โดยนำประสบการณ์ด้านระบบ IT และเครือข่ายมาสร้างเครื่องมือที่ช่วยแก้ปัญหาและทำให้การทำงานง่ายขึ้น",

    quote: "ไม่ใช่แค่ทำงานให้เสร็จ แต่ทำให้ดีขึ้นได้เสมอ",

    location: "Thailand",
    email: "aakanun43@gmail.com",
    facebookUrl: "https://www.facebook.com/ghuninew/",
    linkedinUrl: "https://www.linkedin.com/in/ghuninew-jonjaras-35485418a/",

    interests: [
        "Web Development",
        "IT Support",
        "Network Infrastructure",
        "Self-hosted Services",
        "Performance Optimization",
        "3D & Blender",
    ],

    githubUrl: "https://github.com/ghuninew1",
};



export const techStack = [
    {
        name: "React",
        category: "Frontend",
        description: "Web application development",
        color: "from-cyan-500/20 to-blue-500/20",
    },
    {
        name: "JavaScript",
        category: "Frontend",
        description: "Modern JavaScript development",
        color: "from-yellow-500/20 to-amber-500/20",
    },
    {
        name: "Tailwind CSS",
        category: "Frontend",
        description: "Responsive UI development",
        color: "from-teal-500/20 to-cyan-500/20",
    },
    {
        name: "Git & GitHub",
        category: "Deployment",
        description: "Version control and project management",
        color: "from-slate-500/20 to-gray-500/20",
    },
    {
        name: "Cloudflare",
        category: "Platform",
        description: "Pages, Workers and D1",
        color: "from-orange-500/20 to-amber-500/20",
    },
    {
        name: "Networking",
        category: "Infrastructure",
        description: "MikroTik, VPN and network systems",
        color: "from-emerald-500/20 to-teal-500/20",
    },
    {
        name: "IT Support",
        category: "Technical Support",
        description: "Hardware, software and user support",
        color: "from-blue-600/20 to-cyan-600/20",
    },
    {
        name: "Docker",
        category: "Infrastructure",
        description: "Containerized applications and self-hosted services",
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        name: "QNAP NAS",
        category: "Storage & Infrastructure",
        description: "NAS administration, SSH access, and storage services",
        color: "from-red-500/20 to-orange-500/20",
    },

];


export const projects = [
    {
        id: "issuedesk",
        title: "IssueDesk",
        subtitle: "Office IT Issue & Asset Management",
        category: "Web Application",
        status: "In Development",

        problem: "ติดตามปัญหา IT และข้อมูลอุปกรณ์ให้เป็นระบบเดียวกันได้ยาก",
        approach: "พัฒนาเว็บแอปสำหรับแจ้งปัญหา เชื่อมข้อมูลอุปกรณ์ และจัดการรูปภาพผ่าน Storage API",
        outcome: "ได้ workflow สำหรับติดตามงานและข้อมูลอุปกรณ์ โดยยังอยู่ระหว่างพัฒนา",
        description: "ระบบสำหรับแจ้งและติดตามปัญหา IT จัดการข้อมูลอุปกรณ์ และเครื่องมือสำหรับงาน IT ภายในองค์กร",

        descriptionEn:
            "An office IT management application for issue tracking, asset data, and image storage workflows.",

        highlights: [
            "IT issue reporting and tracking",
            "Asset data integration with Google Sheets",
            "Custom Storage API for image upload and management",
            "Responsive UI built with React and Tailwind CSS",
            "Performance optimization for image-heavy interfaces",
            "Cloudflare Pages deployment workflow",
        ],

        tags: [
            "React",
            "React Router",
            "Tailwind CSS v4",
            "Vite",
            "Cloudflare Pages",
            "Cloudflare D1",
            "Google Sheets API",
            "Storage API",
        ],

        githubUrl: "https://github.com/ghuninew1",
        demoUrl: "https://issuedesk.bigbrain-studio.com/",
        featured: true,
    },

    {
        id: "react-image-converter",
        title: "React Image Converter",
        subtitle: "Client-side Image Processing Tool",
        category: "Web Tool",
        status: "Built",

        problem: "การแปลงภาพจำนวนมากมักต้องพึ่งบริการภายนอกหรืออัปโหลดไฟล์ออกจากเครื่อง",
        approach: "สร้างเครื่องมือแปลงภาพในเบราว์เซอร์ ใช้ Web Worker ประมวลผล และรองรับการส่งออก ZIP",
        outcome: "ผู้ใช้แปลงภาพและดาวน์โหลดผลลัพธ์ได้จากฝั่ง Client รวมถึงไฟล์ AVIF",
        description:
            "เครื่องมือแปลงไฟล์ภาพบนเบราว์เซอร์ รองรับ AVIF และการรวมไฟล์ผลลัพธ์เป็น ZIP โดยประมวลผลฝั่ง Client เพื่อลดการพึ่งพาเซิร์ฟเวอร์",

        descriptionEn:
            "A browser-based image conversion tool with AVIF support, client-side processing, and ZIP export.",

        highlights: [
            "Client-side image conversion",
            "AVIF support with configurable quality",
            "Web Worker for image processing",
            "ZIP export using JSZip",
            "GitHub Pages deployment workflow",
        ],

        tags: ["React", "Vite", "Tailwind CSS v4", "JavaScript", "Web Workers", "AVIF", "JSZip"],

        githubUrl: "https://github.com/ghuninew1/React-Image-Converter",
        demoUrl: "https://image-converter.bigbrain-studio.com/",
        featured: true,
    },

    {
        id: "nexora",
        title: "Nexora",
        subtitle: "Private Cloud File Management",
        category: "Web Application",
        status: "Paused",

        problem: "ต้องการสำรวจรูปแบบ UI สำหรับจัดระเบียบไฟล์และ workflow อัปโหลดใน private cloud",
        approach: "ทำต้นแบบหน้าจอจัดการไฟล์ มีโฟลเดอร์ breadcrumb คิวอัปโหลด และ Drag and Drop",
        outcome:
            "ระบบ Private Cloud สำหรับจัดการไฟล์ โฟลเดอร์ การอัปโหลด และพื้นที่จัดเก็บข้อมูลผ่านเว็บ โดยโปรเจกต์พักการพัฒนาอยู่",
        description: "ระบบ Private Cloud สำหรับจัดการไฟล์ โฟลเดอร์ การอัปโหลด และพื้นที่จัดเก็บข้อมูลผ่านเว็บ",

        descriptionEn:
            "A private-cloud-inspired file management interface focused on file organization and upload workflows.",

        highlights: [
            "File browsing and breadcrumb navigation",
            "Folder and file management UI",
            "Upload queue with progress tracking",
            "Drag-and-drop file workflow",
            "Responsive layout with theme support",
        ],

        tags: ["React", "Storage", "Tailwind CSS v4", "Cloudflare Pages", "Docker"],

        githubUrl: "https://github.com/ghuninew1/nexora",
        demoUrl: "https://nexora.bigbrain-studio.com/files",
        featured: true,
    },
];



export const timeline = [
    {
        id: "it-support",
        title: "IT Support & Technical Operations",
        titleTh: "งานดูแลระบบและสนับสนุนด้าน IT",
        description:
            "ดูแลและแก้ไขปัญหาคอมพิวเตอร์ ซอฟต์แวร์ อุปกรณ์สำนักงาน และระบบเครือข่าย เพื่อให้ผู้ใช้ทำงานได้อย่างต่อเนื่อง",
        type: "IT",
    },
    {
        id: "network-infrastructure",
        title: "Network & Infrastructure",
        titleTh: "ระบบเครือข่ายและโครงสร้างพื้นฐาน",
        description: "ศึกษาทดลองและดูแลระบบเครือข่าย การเชื่อมต่อ VPN อุปกรณ์ Router และบริการจัดเก็บข้อมูลภายในระบบ",
        type: "Technical Operations",
    },
    {
        id: "web-development",
        title: "React & Frontend Development",
        titleTh: "การพัฒนาเว็บไซต์และ Frontend",
        description: "พัฒนา Web Application ด้วย React และเทคโนโลยีเว็บสมัยใหม่ โดยเน้นระบบที่ใช้งานได้จริง",
        type: "Development",
    },
    {
        id: "practical-applications",
        title: "Building Practical Applications",
        titleTh: "สร้างแอปพลิเคชันเพื่อแก้ปัญหาจริง",
        description:
            "พัฒนา IssueDesk สำหรับงาน IT ภายในองค์กร และ React Image Converter สำหรับแปลงไฟล์ภาพบนเบราว์เซอร์",
        type: "Projects",
    },
    {
        id: "continuous-improvement",
        title: "Continuous Improvement",
        titleTh: "เรียนรู้และปรับปรุงอย่างต่อเนื่อง",
        description:
            "ปรับปรุงประสิทธิภาพเว็บ ลดการโหลดข้อมูลที่ไม่จำเป็น และเลือกเทคโนโลยีให้เหมาะกับข้อจำกัดของแต่ละระบบ",
        type: "Ongoing",
    },
];


export const contactInfo = {
    github: personalInfo.githubUrl,
    email: personalInfo.email,
    facebook: personalInfo.facebookUrl,
    linkedin: personalInfo.linkedinUrl,
    location: personalInfo.location,
};
