# GhuniNew Portfolio

Personal portfolio สำหรับแสดงผลงานและทักษะด้าน IT Support, IT Technician และ Web Development สร้างด้วย React และ Vite

## เกี่ยวกับโปรเจกต์

เว็บไซต์ Portfolio แบบหน้าเดียวที่รวบรวมข้อมูลแนะนำตัว ทักษะ โปรเจกต์ ประสบการณ์/เส้นทางการเรียนรู้ และช่องทางติดต่อ โดยออกแบบให้รองรับหน้าจอหลายขนาด มีเมนูนำทางตาม Section และเลือกธีม Light, Dark หรือ System ได้

## ฟีเจอร์

- Hero แนะนำตัวพร้อมลิงก์ไปยังผลงาน ช่องทางติดต่อ และ GitHub
- Sections สำหรับ About, Skills, Projects, Timeline และ Contact
- แสดงรายละเอียดโปรเจกต์พร้อมปัญหา แนวทาง และผลลัพธ์
- Navigation ที่เน้น Section ปัจจุบัน พร้อมเมนูสำหรับมือถือ
- ธีม Light / Dark / System และจดจำตัวเลือกในเบราว์เซอร์
- รองรับการเคลื่อนไหวแบบลดลงตามการตั้งค่า `prefers-reduced-motion`
- รองรับการ deploy เป็นเว็บไซต์ static บน Cloudflare Pages

## เทคโนโลยี

- React 19 และ React Router
- Vite 8
- Tailwind CSS v4
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
├── pages/            # หน้า Home และ Login/Register
├── theme/            # ตัวควบคุมธีม
└── assets/           # รูปภาพและ asset ของเว็บไซต์
```

## ปรับข้อมูล Portfolio

แก้ไขข้อมูลส่วนตัว ทักษะ รายการโปรเจกต์ และเส้นทางในไฟล์ `src/data/portfolioData.js`. รูป Hero และโลโก้อยู่ใน `src/assets/`.

ก่อนเผยแพร่ ให้ตรวจสอบอีเมล ลิงก์โซเชียล สถานะโปรเจกต์ และ URL ของ GitHub/Demo ว่าเป็นข้อมูลปัจจุบัน หากยังไม่มี Demo ให้คงค่า `demoUrl` เป็น `null`.

## หมายเหตุเรื่อง API และการตั้งค่า

- โปรเจกต์มีโค้ดตัวอย่างสำหรับเรียก Google Sheets API ใน `src/hooks/useGoogleSheet.js` ซึ่งปัจจุบันใช้ค่า placeholder (`YOUR_SPREADSHEET_ID` และ `YOUR_API_KEY`) และไม่ควรเปิดใช้งานจนกว่าจะตั้งค่าให้ถูกต้อง
- หน้า Login/Register เรียก endpoint `/api/auth/login` และ `/api/auth/register`; endpoint เหล่านี้ต้องมี backend/API ที่ให้บริการแยกต่างหาก
- ไฟล์ `wrangler.jsonc` ตั้งค่า output directory สำหรับ Cloudflare Pages เป็น `dist`

## License

ยังไม่ได้ระบุ License สำหรับการนำโค้ดไปใช้ซ้ำ กรุณาติดต่อเจ้าของโปรเจกต์ก่อนนำไปเผยแพร่หรือนำไปใช้ต่อ
