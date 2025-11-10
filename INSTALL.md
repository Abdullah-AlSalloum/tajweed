# تعليمات التثبيت والتشغيل

## المتطلبات الأساسية

- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn

## خطوات التثبيت

1. تثبيت التبعيات:
```bash
npm install
```

أو باستخدام yarn:
```bash
yarn install
```

2. تشغيل المشروع في وضع التطوير:
```bash
npm run dev
```

أو:
```bash
yarn dev
```

3. افتح المتصفح على العنوان:
```
http://localhost:3000
```

## بناء المشروع للإنتاج

```bash
npm run build
npm start
```

## الملفات المهمة

- `app/page.tsx` - الصفحة الرئيسية
- `components/` - جميع المكونات
- `app/globals.css` - الأنماط العامة
- `tailwind.config.js` - إعدادات Tailwind CSS
- `next.config.js` - إعدادات Next.js

## التخصيص

### تغيير الألوان
عدّل ملف `tailwind.config.js` في قسم `colors`

### تغيير الخطوط
عدّل ملف `tailwind.config.js` في قسم `fontFamily` و `app/layout.tsx` للروابط

### إضافة محتوى
- أضف الصور في مجلد `public/`
- عدّل النصوص في ملفات المكونات داخل مجلد `components/`

## ملاحظات

- تأكد من تحديث روابط الفيديوهات والصور الفعلية
- أضف روابط الشراء والتواصل الفعلية
- يمكنك تخصيص الألوان والخطوط حسب الحاجة

