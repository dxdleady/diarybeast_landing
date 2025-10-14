# DiaryBeast Landing Page

Минималистичный landing page для DiaryBeast — Web3 дневника с геймификацией.

## Stack

- **Vite** — быстрый dev server и build tool
- **React 19** + **TypeScript**
- **Tailwind CSS v4** — стилизация
- **Framer Motion** — анимации

## Разработка

```bash
# Установка зависимостей
npm install

# Dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Деплой на Vercel

### Вариант 1: Через GitHub

1. Push код в GitHub репозиторий
2. Импортируй проект в Vercel: https://vercel.com/new
3. Vercel автоматически определит Vite конфиг
4. Deploy!

### Вариант 2: Через Vercel CLI

```bash
# Установка Vercel CLI
npm i -g vercel

# Деплой
vercel

# Production deploy
vercel --prod
```

## Структура

```
src/
├── components/
│   ├── Hero.tsx              # Главная секция с Beast
│   ├── DemoModal.tsx         # Интерактивное демо
│   ├── ConnectionSection.tsx # "You write → Beast grows"
│   ├── Footer.tsx            # Футер с ссылками
│   └── AsciiPet.tsx          # Компонент ASCII анимаций
├── lib/
│   ├── ascii/                # ASCII анимации (cat/dog)
│   └── utils.ts              # Утилиты (cn функция)
├── App.tsx                   # Главный компонент
└── index.css                 # Global стили + Tailwind

```

## Фичи

- ✅ Анимированный ASCII Beast (дыхание, реакции)
- ✅ Интерактивное Demo Modal (Feed/Play/Write)
- ✅ Scroll reveal анимации
- ✅ Responsive дизайн
- ✅ Светлая тема (#FAFBFC фон)
- ✅ Production-ready build

## Дизайн

Основан на сценарии из `DiaryBeast-Landing-Simple.md`:
- Минимализм в стиле football.fun
- One-screen understanding
- Show, don't tell

**Цветовая палитра:**
- Background: `#FAFBFC`
- Text primary: `#1F2937`
- Accent (Beast green): `#00D395`
- CTA (Base blue): `#0052FF`
