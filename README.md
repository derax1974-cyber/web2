# 🎮 DrHousePcclinic - Servicios de Consolas

Sitio web profesional para servicios de desbloqueo, mantenimiento y carga de juegos para todas las consolas.

![DrHousePcclinic](https://images.pexels.com/photos/34592708/pexels-photo-34592708.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=800)

## ✨ Características

- 🎨 **Diseño moderno** con tema oscuro tecnológico y efectos neón
- 📱 **100% Responsive** - Funciona en móvil, tablet y desktop
- ⚡ **Animaciones fluidas** con Framer Motion
- 🎠 **Carrusel de promociones** con auto-play y navegación
- 📢 **Marquee ticker** con ofertas animadas
- 🖼️ **Galería interactiva** con lightbox y filtros por categoría
- 💬 **Integración WhatsApp** - Botón flotante y enlaces directos
- 🎯 **SEO optimizado** y carga rápida

## 🛠️ Tecnologías

- **React 19** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS 4** - Framework de estilos
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

## 📦 Instalación

1. **Clona el repositorio:**
```bash
git clone https://github.com/tu-usuario/drhousepcclinic.git
cd drhousepcclinic
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Inicia el servidor de desarrollo:**
```bash
npm run dev
```

4. **Abre en tu navegador:**
```
http://localhost:5173
```

## 🚀 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run preview` | Preview del build de producción |

## 📁 Estructura del Proyecto

```
drhousepcclinic/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── MarqueeTicker.tsx
│   │   ├── Services.tsx
│   │   ├── NeonBanner.tsx
│   │   ├── Consoles.tsx
│   │   ├── PromoBanners.tsx
│   │   ├── Gallery.tsx
│   │   ├── MiniBanners.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── utils/           # Utilidades
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎮 Servicios Incluidos

- **Desbloqueo de Consolas**: PS3, PS4, PS5, Xbox 360/One/Series, Nintendo Switch, Wii, PSP, PS Vita
- **Carga de Juegos**: Catálogo de +10,000 títulos
- **Mantenimiento**: Limpieza, pasta térmica, reparación HDMI
- **Modificación de Hardware**: SSD, chips mod, LEDs
- **Disco Duro Externo**: Preparado con juegos
- **Emuladores Retro**: SNES, N64, GBA, PS1, Sega

## 📞 Contacto

- **WhatsApp:** +56 9 8603 7780
- **Email:** derax1974@gmail.com

## 🚀 Deploy

### GitHub Pages

1. Actualiza `vite.config.ts` con la base URL:
```typescript
export default defineConfig({
  base: '/drhousepcclinic/',
  // ... resto de config
})
```

2. Ejecuta el build:
```bash
npm run build
```

3. Sube la carpeta `dist/` a GitHub Pages.

### Netlify / Vercel

Simplemente conecta tu repositorio y configura:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

## 📄 Licencia

MIT License - Libre para uso personal y comercial.

---

Hecho con 💜 por DrHousePcclinic
