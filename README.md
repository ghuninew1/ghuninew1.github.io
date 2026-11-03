# GhuniNew Portfolio

Personal portfolio สำหรับแสดงผลงานและทักษะด้าน IT Support, IT Technician และ Web Development สร้างด้วย React และ Vite

## เกี่ยวกับโปรเจกต์

เว็บไซต์ Portfolio แบบหน้าเดียวที่รวบรวมข้อมูลแนะนำตัว ทักษะ โปรเจกต์ ประสบการณ์/เส้นทางการเรียนรู้ และช่องทางติดต่อ โดยออกแบบให้รองรับหน้าจอหลายขนาด มีเมนูนำทางตาม Section และเลือกธีม Light, Dark หรือ System ได้

## ฟีเจอร์

- Hero แนะนำตัวพร้อมลิงก์ไปยังผลงาน ช่องทางติดต่อ และ GitHub
- Sections สำหรับ About, Skills, Projects, Timeline และ Contact
- แสดงรายละเอียดโปรเจกต์พร้อมปัญหา แนวทาง และผลลัพธ์
- Navigation ที่เน้น Section ปัจจุบัน พร้อมเมนูสำหรับมือถือ
- ฟอร์มติดต่อที่ส่งข้อความผ่าน IssueDesk Resend API
- ภาพโปรไฟล์แบบ interactive และฉาก Three.js ใน Hero
- ธีม Light / Dark / System และจดจำตัวเลือกในเบราว์เซอร์
- รองรับการเคลื่อนไหวแบบลดลงตามการตั้งค่า `prefers-reduced-motion`
- รองรับการ deploy เป็นเว็บไซต์ static บน Cloudflare Pages

## เทคโนโลยี

- React 19 และ React Router
- Vite 8
- Tailwind CSS v4
- Motion, Three.js และ React Three Fiber
- Lucide React
- GSAP และ ScrollTrigger สำหรับเอฟเฟกต์การเลื่อนบางส่วน
- Cloudflare Wrangler สำหรับ preview และ deploy

## เริ่มต้นใช้งาน

### สิ่งที่ต้องมี

- Node.js รุ่นที่รองรับ Vite 8
- pnpm

หากใช้ package manager อื่น ให้ใช้ตัวเดียวกันทั้งตอนติดตั้งและรันคำสั่ง

### ติดตั้งและรัน

```bash
pnpm install
pnpm dev
```

Vite จะแสดง URL สำหรับเปิดเว็บไซต์ในเครื่อง โดยปกติคือ `http://localhost:5173`.

## คำสั่งที่ใช้บ่อย

| คำสั่ง | คำอธิบาย |
| --- | --- |
| `pnpm dev` | เปิด development server |
| `pnpm run build` | สร้างไฟล์ production ลงใน `dist/` |
| `pnpm run lint` | ตรวจรูปแบบและข้อผิดพลาดของโค้ดด้วย ESLint |
| `pnpm run preview` | build และเปิด preview ผ่าน Wrangler Pages |
| `pnpm run deploy` | build และ deploy ไปยัง Cloudflare Pages |

คำสั่ง `preview` และ `deploy` ต้องมีการตั้งค่า Cloudflare Wrangler และบัญชีที่ได้รับอนุญาตให้เข้าถึงโปรเจกต์ปลายทาง

## โครงสร้างโปรเจกต์

```text
src/
├── components/
│   ├── common/       # คอมโพเนนต์ใช้ซ้ำ เช่น FadeInSection
│   ├── layout/       # Header, Sidebar และ AppShell
│   └── sections/     # About, Skills, Projects, Timeline และ Contact
├── data/             # ข้อมูล Portfolio และรายการโปรเจกต์
├── hooks/            # Hooks สำหรับธีม การเลื่อน และ utilities
├── pages/            # หน้า Home
├── theme/            # ตัวควบคุมธีม
└── assets/           # รูปภาพและ asset ของเว็บไซต์
```

## ปรับข้อมูล Portfolio

แก้ไขข้อมูลส่วนตัว ทักษะ รายการโปรเจกต์ และเส้นทางในไฟล์ `src/data/portfolioData.js`. รูป Hero และโลโก้อยู่ใน `src/assets/`.

ก่อนเผยแพร่ ให้ตรวจสอบอีเมล ลิงก์โซเชียล สถานะโปรเจกต์ และ URL ของ GitHub/Demo ว่าเป็นข้อมูลปัจจุบัน หากยังไม่มี Demo ให้คงค่า `demoUrl` เป็น `null`.

## หมายเหตุเรื่อง API และการตั้งค่า

- โปรเจกต์มีโค้ดตัวอย่างสำหรับเรียก Google Sheets API ใน `src/hooks/useGoogleSheet.js` ซึ่งปัจจุบันใช้ค่า placeholder (`YOUR_SPREADSHEET_ID` และ `YOUR_API_KEY`) และไม่ควรเปิดใช้งานจนกว่าจะตั้งค่าให้ถูกต้อง
- ฟอร์ม Contact ส่งข้อมูลไปยัง IssueDesk Resend API ที่กำหนดใน `src/hooks/useResend.js` โดยบริการปลายทางต้องพร้อมใช้งานและอนุญาต origin ของเว็บไซต์
- หาก deploy ใต้ path ย่อย ให้กำหนด `VITE_BASE_PATH` ก่อน build เช่น `/portfolio/`; ค่าเริ่มต้นคือ `/`

## License

เผยแพร่ภายใต้ [MIT License](LICENSE)
