# 📤 Guía de Deploy a GitHub

## Pasos para subir el proyecto a GitHub

### 1️⃣ Crear repositorio en GitHub

1. Ve a [github.com](https://github.com)
2. Inicia sesión en tu cuenta
3. Haz clic en el **+** (arriba a la derecha) → **New repository**
4. Nombre: `drhousepcclinic` (o el que prefieras)
5. Descripción: "Sitio web profesional de servicios de consolas"
6. Selecciona **Public**
7. NO marques "Initialize with README" (ya lo tenemos)
8. Haz clic en **Create repository**

### 2️⃣ Configurar Git localmente

En tu terminal, en la carpeta del proyecto:

```bash
# Inicializa el repositorio
git init

# Configura tu nombre y email (si no lo hiciste antes)
git config user.name "Tu Nombre"
git config user.email "tu@email.com"

# Agrega todos los archivos
git add .

# Haz el primer commit
git commit -m "feat: sitio web DrHousePcclinic - desbloqueos y mantenimiento de consolas"

# Cambia la rama a 'main'
git branch -M main

# Agrega el repositorio remoto (cambia TU-USUARIO por tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/drhousepcclinic.git

# Sube el código a GitHub
git push -u origin main
```

### 3️⃣ Configurar GitHub Pages (Deploy Automático)

1. En tu repositorio de GitHub, ve a **Settings**
2. En el menú izquierdo, selecciona **Pages**
3. Bajo "Build and deployment":
   - **Source**: Selecciona **GitHub Actions**
4. ¡Listo! El workflow se ejecutará automáticamente

### 4️⃣ Ver el sitio desplegado

Tu sitio estará disponible en:
```
https://TU-USUARIO.github.io/drhousepcclinic/
```

(Puede tomar 1-2 minutos en estar disponible la primera vez)

---

## 🔄 Cómo hacer cambios después

```bash
# 1. Haz tus cambios en los archivos

# 2. Agrega los cambios
git add .

# 3. Commit con mensaje descriptivo
git commit -m "fix: descripción del cambio"

# 4. Sube a GitHub
git push origin main
```

El sitio se actualizará automáticamente en unos segundos.

---

## 🛠️ Cambios de configuración importantes

Si necesitas cambiar algo en la URL de GitHub Pages:

**Edita `vite.config.ts`:**
```typescript
export default defineConfig({
  base: '/drhousepcclinic/', // Cambia si tu repo tiene otro nombre
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
```

Luego haz push y GitHub Actions redeployará automáticamente.

---

## ✅ Verificar que todo funciona

```bash
# Instala dependencias (si aún no lo hiciste)
npm install

# Prueba localmente
npm run dev

# Genera el build de producción
npm run build

# Vista previa del build
npm run preview
```

---

## 📝 Información del Repositorio

### Para mejorar tu perfil de GitHub:

1. Agrega una descripción: "Sitio web de servicios de consolas con React, Vite y Tailwind CSS"
2. Agrega topics (etiquetas):
   - `react`
   - `vite`
   - `tailwindcss`
   - `framer-motion`
   - `typescript`
   - `gaming`
   - `website`
3. Agrega un .gitignore ✅ (ya está)
4. Agrega una licencia ✅ (MIT)
5. Agrega README.md ✅ (ya está)

---

## 🔐 Proteger la rama main (opcional pero recomendado)

1. Ve a **Settings** → **Branches**
2. Bajo "Branch protection rules", haz clic en **Add rule**
3. Branch name pattern: `main`
4. Marca "Require pull request reviews before merging"
5. Marca "Require branches to be up to date"
6. Guarda

---

## 🚨 Si algo sale mal

### Error: "fatal: not a git repository"
```bash
git init
git remote add origin https://github.com/TU-USUARIO/drhousepcclinic.git
```

### Error: "permission denied"
```bash
# Usa SSH en lugar de HTTPS
git remote set-url origin git@github.com:TU-USUARIO/drhousepcclinic.git
```

### El sitio no se actualiza
1. Ve a **Actions** en tu repo
2. Verifica que el workflow se ejecutó (debe estar verde ✅)
3. Si falla, revisa los logs
4. Espera 2-3 minutos antes de refrescar

---

## 📞 Contacto en el sitio

Asegúrate de que los datos de contacto estén actualizados:
- WhatsApp: +56 9 8603 7780
- Email: derax1974@gmail.com

Estos están configurados en los componentes de Contact, Footer y todos los banners.

---

¡Listo! Tu sitio está en vivo en GitHub Pages 🎉
