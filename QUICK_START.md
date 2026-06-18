# ⚡ Inicio Rápido

## 5 Pasos para subir a GitHub

### 1. Abre terminal en la carpeta del proyecto

```bash
# Navega a la carpeta del proyecto
cd ruta/del/proyecto
```

### 2. Configura Git (primera vez solo)

```bash
git config user.name "Tu Nombre"
git config user.email "tu@email.com"
```

### 3. Inicializa y haz commit

```bash
git init
git add .
git commit -m "feat: sitio web DrHousePcclinic completo"
git branch -M main
```

### 4. Conecta con tu repositorio GitHub

```bash
# Cambia TU-USUARIO por tu usuario de GitHub
git remote add origin https://github.com/TU-USUARIO/drhousepcclinic.git

# Sube el código
git push -u origin main
```

### 5. Activa GitHub Pages

En GitHub:
1. **Settings** → **Pages**
2. Source: **GitHub Actions**
3. ¡Listo!

El sitio estará en: `https://TU-USUARIO.github.io/drhousepcclinic/`

---

## 📋 Checklist Antes de Subir

- ✅ Node.js 20+ instalado
- ✅ `npm install` ejecutado
- ✅ `npm run build` sin errores
- ✅ `.gitignore` creado
- ✅ `README.md` completo
- ✅ `LICENSE` agregada
- ✅ Datos de contacto actualizados

---

## 🔧 Verificar que funciona

```bash
# Prueba en desarrollo
npm run dev

# Genera build
npm run build

# Vista previa
npm run preview
```

---

## 📚 Documentación Completa

- **DEPLOYMENT.md** - Instrucciones detalladas de deploy
- **DEVELOPMENT.md** - Guía de desarrollo
- **CONTRIBUTING.md** - Cómo contribuir
- **CHANGELOG.md** - Historial de cambios

---

## 🚨 Error Común: "fatal: not a git repository"

Si sale este error:
```bash
git init
```

---

## 💬 Cambios de Contacto

Busca y reemplaza en el código:
- `56986037780` → Tu WhatsApp
- `derax1974@gmail.com` → Tu email

---

¡Listo para GitHub! 🚀
