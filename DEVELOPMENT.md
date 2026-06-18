# 👨‍💻 Guía de Desarrollo

## Configuración del Entorno

### Requisitos Previos
- Node.js 20.x o superior
- npm 10.x o superior
- Git

### Setup Inicial

```bash
# Clona el repositorio
git clone https://github.com/TU-USUARIO/drhousepcclinic.git
cd drhousepcclinic

# Instala dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## Estructura de Carpetas

```
src/
├── components/          # Componentes React reutilizables
│   ├── Navbar.tsx      # Barra de navegación
│   ├── Hero.tsx        # Sección principal
│   ├── Services.tsx    # Servicios oferecidos
│   ├── Consoles.tsx    # Consolas compatibles
│   ├── Gallery.tsx     # Galería interactiva
│   ├── Pricing.tsx     # Sección de precios
│   ├── Testimonials.tsx# Testimonios de clientes
│   ├── FAQ.tsx         # Preguntas frecuentes
│   ├── Contact.tsx     # Formulario de contacto
│   ├── Footer.tsx      # Pie de página
│   ├── PromoBanners.tsx# Carrusel de promociones
│   ├── MiniBanners.tsx # Banners estáticos
│   ├── MarqueeTicker.tsx # Ticker animado
│   ├── NeonBanner.tsx  # Banner neón
│   └── WhatsAppButton.tsx # Botón WhatsApp
├── utils/              # Funciones utilitarias
│   └── cn.ts          # Combina clases Tailwind
├── App.tsx            # Componente raíz
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales

```

---

## Componentes Principales

### Navbar
- Navegación responsive
- Menú mobile con hamburguesa
- Enlaces a secciones

### Hero
- Video de fondo
- Animaciones de entrada
- Stats en tiempo real
- Galería de consolas mini

### Services (6 servicios)
1. Desbloqueo de Consolas
2. Carga de Juegos
3. Mantenimiento y Reparación
4. Modificación de Hardware
5. Disco Duro Externo
6. Configuración Online

### PromoBanners
- Carrusel con auto-play
- 5 banners temáticos
- Navegación y dots
- Barra de progreso

### Gallery
- 32 items (fotos + videos)
- 8 categorías filtrable
- Lightbox interactivo
- Lazy loading

---

## Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor con hot reload

# Producción
npm run build        # Compila para producción
npm run preview      # Vista previa del build

# Otros
npm install          # Instala dependencias
npm update           # Actualiza paquetes
```

---

## Customización

### Cambiar colores
Edita en `src/index.css`:
```css
/* Cambia estos valores */
--color-purple: #7c3aed;
--color-cyan: #06b6d4;
```

### Cambiar datos de contacto
Busca "56986037780" y "derax1974@gmail.com" en los componentes y actualiza.

### Agregar nuevas secciones
1. Crea componente en `src/components/`
2. Importa en `src/App.tsx`
3. Agrega en el JSX de App

### Cambiar consolas
Edita el array `consoles` en `src/components/Consoles.tsx`

---

## Tailwind CSS

### Clases útiles

```html
<!-- Gradientes -->
<div class="bg-gradient-to-r from-purple-600 to-cyan-600">

<!-- Sombras -->
<div class="shadow-2xl shadow-purple-500/30">

<!-- Animaciones -->
<div class="animate-pulse hover:scale-105 transition-all">

<!-- Responsive -->
<div class="text-sm sm:text-base lg:text-lg">
```

---

## Framer Motion

### Ejemplos de animaciones

```typescript
// Animación de entrada
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>

// Animación en view
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>

// Hover
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

---

## Variables de Entorno

Crea un archivo `.env.local`:

```env
VITE_WHATSAPP_NUMBER=56986037780
VITE_EMAIL=derax1974@gmail.com
VITE_LOCATION=Chile
```

Úsalas en componentes:
```typescript
const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER;
```

---

## Build para Producción

```bash
# Genera build optimizado
npm run build

# Salida en carpeta 'dist/'
# Tamaño gzip: ~133 KB
```

---

## Testing (futuro)

```bash
npm install --save-dev vitest @testing-library/react
npm run test
```

---

## Commits y Versionado

### Formato de commit
```
feat: agregar nueva sección
fix: corregir animación de hero
docs: actualizar README
style: formatear código
refactor: optimizar Gallery
```

### Semántica de versiones
- MAJOR: cambios incompatibles
- MINOR: nuevas funcionalidades
- PATCH: bug fixes

---

## Troubleshooting

### Puerto 5173 en uso
```bash
npm run dev -- --port 3000
```

### Limpiar caché
```bash
rm -rf node_modules package-lock.json
npm install
```

### Verificar TypeScript
```bash
npx tsc --noEmit
```

---

## Performance

- ✅ Lazy loading en Gallery
- ✅ Optimización de imágenes (Pexels)
- ✅ Code splitting automático
- ✅ CSS purging con Tailwind
- ✅ Minificación en build

---

## Recursos

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org)

---

¡Feliz desarrollando! 🚀
