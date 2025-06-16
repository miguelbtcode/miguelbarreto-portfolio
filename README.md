# 🚀 Miguel Barreto - Personal Portfolio

> My personal portfolio built with Next.js 14, TypeScript and Tailwind CSS

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC)

**[🌐 View Live Portfolio](https://miguelbarretodev.vercel.app/)**

## 📋 About This Project

This is my personal portfolio where I showcase my projects, professional experience, and skills as a Fullstack Developer. I built it from scratch to reflect my programming style and the technologies I master.

### ✨ Implemented Features

- 🎨 **Modern & Minimalist Design** - Elegant UI with custom color palette
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🌙 **Dark Theme** - Dark mode with green accents (#00ff99)
- 🖼️ **Project Gallery** - Interactive carousel with Swiper.js
- 📧 **Functional Contact Form** - Integrated with EmailJS
- ⚡ **Performance Optimized** - SSR with Next.js and image optimization
- 🎯 **Smooth Animations** - Fluid transitions with Framer Motion
- 📊 **Resume Section** - Interactive CV with tabs and dynamic components

## 🛠️ Tech Stack

### Core

- **Next.js 14** - React framework with App Router
- **TypeScript** - For static typing and better DX
- **Tailwind CSS** - Utility-first CSS framework

### UI/UX & Animations

- **Framer Motion** - Animations and transitions
- **Swiper.js** - Project carousel
- **Lucide React** - Modern iconography
- **React Icons** - Additional icons for technologies

### Forms

- **React Hook Form** - Efficient form handling
- **EmailJS** - Frontend email sending

### Development

- **ESLint & Prettier** - Automatic linting and formatting
- **clsx** - Conditional classes utility

## 🎨 Design Decisions

### Color Palette

```css
/* Main theme */
--primary: #1c1c22; /* Main background */
--secondary: #27272c; /* Card backgrounds */
--accent: #00ff99; /* Green accent color */
--white: #ffffff; /* Primary text */
--white-secondary: rgba(255, 255, 255, 0.8); /* Secondary text */
```

### Typography

- **Main Font**: JetBrains Mono - For a technical and modern look
- **Hierarchy**: Responsive size system with Tailwind

### Layout

- **Mobile-First**: Responsive design from 320px
- **Grid System**: CSS Grid and Flexbox for complex layouts
- **Spacing**: Consistent spacing system (4, 8, 16, 24, 32px)

## 📁 Project Structure

```
portfolio/
├── 📂 app/
│   ├── 📄 layout.jsx           # Main layout with metadata
│   ├── 📄 page.jsx             # Homepage with hero and stats
│   ├── 📂 data/                # Content data
│   │   ├── 📄 resume.data.js   # Resume data
│   │   └── 📄 projects.data.js # Projects data
│   ├── 📂 work/                # Projects page
│   ├── 📂 services/            # Services page
│   ├── 📂 resume/              # Interactive CV
│   └── 📂 contact/             # Contact form
├── 📂 components/
│   ├── 📂 ui/                  # Reusable base components
│   │   ├── 📄 tabs.jsx         # Custom tabs system
│   │   └── 📄 button.jsx       # Styled buttons
│   ├── 📄 Header.jsx           # Main navigation
│   ├── 📄 MobileNav.jsx        # Mobile menu
│   ├── 📄 PageTransition.jsx   # Page transitions
│   ├── 📄 StairTransition.jsx  # Stair effect
│   ├── 📄 Photo.jsx            # Profile photo component
│   ├── 📄 Social.jsx           # Social media links
│   ├── 📄 Stats.jsx            # Animated statistics
│   └── 📂 resume/              # CV specific components
│       ├── 📄 About.jsx        # Personal information
│       ├── 📄 Experience.jsx   # Work experience
│       ├── 📄 Education.jsx    # Academic background
│       ├── 📄 Skills.jsx       # Technical skills
│       └── 📄 Recommendations.jsx # Professional recommendations
├── 📂 public/
│   └── 📂 assets/              # Static assets
│       ├── 📂 work/            # Project screenshots
│       ├── 📂 resume/          # CV related files
│       └── 📂 recommendations/ # Profile images
├── 📂 lib/                     # Utilities and configurations
│   └── 📄 utils.js             # Helper functions
└── 📄 tailwind.config.js       # Tailwind configuration
```

## 🚀 Development Process

### 1. Planning & Design

- **Wireframing**: Sketched layout and user flow
- **Design System**: Created consistent color palette and spacing
- **Responsive Strategy**: Mobile-first approach with breakpoints

### 2. Core Development

- **Next.js Setup**: Configured with TypeScript and ESLint
- **Component Architecture**: Built reusable UI components
- **Data Management**: Centralized content in data files for easy updates

### 3. Advanced Features

- **Animation System**: Implemented page transitions and micro-interactions
- **Form Handling**: Built contact form with validation and email integration
- **Performance**: Optimized images, fonts, and bundle size

### 4. Content & Polish

- **SEO Optimization**: Added proper metadata and structured data
- **Accessibility**: Ensured keyboard navigation and screen reader support
- **Testing**: Cross-browser and device testing

## 🎯 Key Challenges Solved

### Performance Optimization

- **Image Optimization**: Used Next.js Image component for automatic optimization
- **Code Splitting**: Leveraged Next.js automatic code splitting
- **Font Loading**: Optimized font loading with `next/font`

### Responsive Design

- **Complex Layouts**: Created flexible grid systems for different screen sizes
- **Touch Interactions**: Implemented touch-friendly navigation for mobile
- **Progressive Enhancement**: Ensured graceful degradation

### Animation Performance

- **GPU Acceleration**: Used transform and opacity for smooth animations
- **Reduced Motion**: Respected user preferences for reduced motion
- **Optimized Renders**: Minimized re-renders with proper component structure

## 📈 Performance Metrics

- ⚡ **Lighthouse Score**: 95+ across all metrics
- 🎯 **Core Web Vitals**: Optimized for user experience
- 📱 **Mobile Performance**: Fast loading on 3G networks
- 🖼️ **Image Optimization**: WebP format with fallbacks

## 🔧 Local Development

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/miguelbtcode/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🚀 Deployment

**Hosted on Vercel** - Automatic deployments from main branch with:

- **Edge Functions**: For optimal performance
- **Analytics**: Built-in performance monitoring
- **Custom Domain**: Professional domain setup

## 📧 Contact

- **Email**: mabt2206@gmail.com
- **LinkedIn**: [Miguel Barreto Torres](https://www.linkedin.com/in/miguelbarretotorres/)
- **Portfolio**: [miguelbarretodev.vercel.app](https://miguelbarretodev.vercel.app/)

---

<div align="center">

**Built with ❤️ by Miguel Barreto**

</div>
