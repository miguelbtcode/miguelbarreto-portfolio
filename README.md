# 🚀 Miguel Barreto - Portfolio

> Fullstack Developer especializado en .NET Core, React y arquitecturas Cloud

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC)

## ✨ Características

- 🎨 **Diseño Moderno** - UI elegante con animaciones fluidas usando Framer Motion
- 📱 **Completamente Responsive** - Optimizado para todos los dispositivos
- 🌙 **Modo Oscuro** - Tema dark con colores accent personalizados
- 🖼️ **Galería Interactiva** - Carrusel de imágenes con navegación suave
- 📧 **Formulario de Contacto** - Sistema de mensajería integrado
- ⚡ **Performance Optimizada** - Carga rápida y SEO optimizado
- 🎯 **Animaciones Avanzadas** - Transiciones y efectos visuales atractivos

## 🛠️ Tecnologías

### Frontend

- **Next.js 14** - Framework React con SSR
- **TypeScript** - Tipado estático para mejor desarrollo
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Librería de animaciones
- **Swiper.js** - Carrusel de componentes moderno

### UI/UX

- **Lucide React** - Iconos modernos y consistentes
- **React Icons** - Amplia colección de iconos
- **Custom Components** - Componentes reutilizables diseñados desde cero

### Development Tools

- **ESLint & Prettier** - Linting y formateo de código
- **React Hook Form** - Manejo eficiente de formularios
- **Responsive Design** - Mobile-first approach

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+
- npm, yarn, pnpm o bun

### Instalación

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/miguelbtcode/portfolio.git
   cd portfolio
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecuta el servidor de desarrollo**

   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abre tu navegador**

   Visita [http://localhost:3000](http://localhost:3000) para ver el resultado.

## 📁 Estructura del Proyecto

```
portfolio/
├── 📂 app/
│   ├── 📂 work/              # Página de proyectos
│   ├── 📂 services/          # Página de servicios
│   ├── 📂 resume/           # Página de currículum
│   ├── 📂 contact/          # Página de contacto
│   └── 📄 layout.js         # Layout principal
├── 📂 components/
│   ├── 📂 ui/               # Componentes de UI base
│   ├── 📄 Header.jsx        # Navegación principal
│   ├── 📄 PageTransition.jsx # Transiciones de página
│   └── 📄 StairTransition.jsx # Efectos de transición
├── 📂 lib/                  # Utilidades y configuraciones
├── 📂 public/
│   └── 📂 assets/           # Imágenes y recursos estáticos
└── 📄 tailwind.config.js    # Configuración de Tailwind
```

## 🎨 Personalización

### Colores Accent

El portfolio usa un sistema de colores accent personalizable. Para cambiar el color principal:

```css
/* globals.css */
:root {
  --accent: 0 255 153; /* Verde por defecto */
}
```

### Agregar Proyectos

Edita el archivo `app/work/page.jsx` para agregar nuevos proyectos:

```javascript
const projects = [
  {
    num: "02",
    category: "Frontend",
    title: "Tu Nuevo Proyecto",
    description: "Descripción del proyecto...",
    stack: [{ name: "React" }, { name: "TypeScript" }],
    images: ["/assets/work/proyecto/imagen.png"],
    live: "https://tu-proyecto.com",
    github: "https://github.com/tu-usuario/proyecto",
  },
];
```

## 📧 Configuración de Contacto

Para configurar el formulario de contacto, edita las variables de entorno:

```bash
# .env.local
NEXT_PUBLIC_CONTACT_EMAIL=tu-email@ejemplo.com
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio con [Vercel](https://vercel.com)
2. Las configuraciones se detectan automáticamente
3. ¡Despliega con un clic!

### Otros Proveedores

```bash
# Build para producción
npm run build

# Inicia el servidor de producción
npm start
```

## 📈 Performance

- ⚡ **Lighthouse Score**: 95+ en todas las métricas
- 🎯 **Core Web Vitals**: Optimizado para UX
- 📱 **Mobile-First**: Diseño responsive desde el inicio
- 🖼️ **Imágenes Optimizadas**: Next.js Image optimization

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🌟 ¿Te gusta el proyecto?

Si este portfolio te ha sido útil, ¡dale una ⭐ al repositorio!

---

<div align="center">

**[🌐 Ver Portfolio](https://miguelbarreto.dev)** • **[📧 Contacto](mailto:mabt2206@gmail.com)** • **[💼 LinkedIn](https://linkedin.com/in/miguelbarreto-dev)**

</div>
