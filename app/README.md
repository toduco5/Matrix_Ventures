# Matrix Ventures — Hệ Sinh Thái Cộng Đồng Kết Nối Đầu Tư

## Cấu trúc

```
app/src/
├── components/
│   ├── layout/ (Header, Footer)
│   ├── ecosystem/ (Hero, RoleCards, Flow, Stats, WhyTrust)
│   ├── campaigns/ (CampaignCard)
│   ├── shared/ (StatusBadge, SectorTag, ProgressBar, AnimatedCounter)
│   └── ui/ (LanguageSwitcher)
├── pages/
│   ├── Home.jsx, Ecosystem.jsx, Campaigns.jsx, CampaignDetail.jsx
│   ├── Ventures.jsx, VentureDetail.jsx, Mechanisms.jsx
│   ├── CaseStudies.jsx, Contact.jsx, FlowProcess.jsx
│   ├── About.jsx, Sectors.jsx, IR.jsx
├── data/ (campaigns.js, ventures.js, mechanisms.js, caseStudies.js, stats.js)
├── i18n/ (LanguageContext.jsx, useTranslation.js, locales/vi.json, en.json)
└── styles/ (index.css, tokens.css)
```

## Chạy

```bash
cd app
npm install
npm run dev      # http://localhost:8080
npm run build    # production
npm run lint     # oxlint
```

## Thư viện cần cài (đã cài trong package.json)

- react, react-dom, react-router-dom
- framer-motion (animation)
- recharts (biểu đồ)
- vite, @vitejs/plugin-react, oxlint
- tailwindcss, postcss, autoprefixer (đã thêm cho build đúng)

## Chức năng chính

- I18n VN/EN (LanguageSwitcher — lưu localStorage, cập nhật document.lang)
- 1 trang Ecosystem (`/ecosystem`) — 1-page scroll với 4 vai trò + quy trình 5 bước
- Trang Flow riêng (`/flow`) — biểu đồ động 5 bước với thanh tiến độ
- Trang Contact (`/contact`) — form gửi yêu cầu hợp tác
- Các module: Campaigns, Ventures, Mechanisms, Case Studies
- Footer: 107 Nguyen Nhu (KonTum, Thanh Xuan, Hanoi), (+84) 332318460, contact@matrixventures.vn, 8:00-18:00 T2-T6
- Header: Nút "Liên Hệ" màu vàng duy nhất (link `/contact`)
- Logo: `/logo-mark.png`
- Build: Thành công, 0 lỗi lint, 0 lỗi build
