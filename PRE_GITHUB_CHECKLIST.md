# ✅ Checklist Pre-GitHub

Antes de subir a GitHub, verifica que todo esté listo:

---

## 🔧 Verificaciones Técnicas

### Software Requerido
- [ ] ✅ Git instalado (`git --version`)
- [ ] ✅ Node.js 20+ (`node --version`)
- [ ] ✅ npm 10+ (`npm --version`)
- [ ] ✅ Cuenta GitHub creada

### Proyecto
- [ ] ✅ `npm install` ejecutado sin errores
- [ ] ✅ `npm run dev` funciona (no hay errores)
- [ ] ✅ Puedes acceder a http://localhost:5173
- [ ] ✅ `npm run build` genera sin errores
- [ ] ✅ Carpeta `dist/` contiene `index.html`

### Configuración de Git
- [ ] ✅ Git inicializado: `git init` ejecutado
- [ ] ✅ Usuario configurado: `git config user.name "Tu Nombre"`
- [ ] ✅ Email configurado: `git config user.email "tu@email.com"`

---

## 📝 Verificaciones de Contenido

### Datos de Contacto
- [ ] ✅ WhatsApp actualizado: `56986037780` (o tu número)
- [ ] ✅ Email actualizado: `derax1974@gmail.com` (o tu email)
- [ ] ✅ Ubicación actualizada: `Centro de la Ciudad, Local 42` (o tu dirección)

### Archivos Principales
- [ ] ✅ `.gitignore` existe
- [ ] ✅ `README.md` existe
- [ ] ✅ `LICENSE` existe (MIT)
- [ ] ✅ `.github/workflows/deploy.yml` existe

### Código Fuente
- [ ] ✅ `src/App.tsx` existe
- [ ] ✅ `src/components/` contiene 15 archivos
- [ ] ✅ Todos los componentes importan correctamente
- [ ] ✅ No hay errores en TypeScript

---

## 🎨 Verificaciones de Diseño

### Visualización
- [ ] ✅ Página se ve bien en desktop
- [ ] ✅ Página se ve bien en tablet
- [ ] ✅ Página se ve bien en móvil
- [ ] ✅ Todas las imágenes cargan correctamente

### Funcionalidad
- [ ] ✅ Menú de navegación funciona
- [ ] ✅ Botón WhatsApp flotante aparece
- [ ] ✅ Carrusel de promociones funciona
- [ ] ✅ Galería con filtros funciona
- [ ] ✅ Formulario de contacto funciona
- [ ] ✅ Links a WhatsApp funcionan

### Animaciones
- [ ] ✅ Animaciones son fluidas
- [ ] ✅ No hay parpadeos
- [ ] ✅ Efectos de hover funcionan

---

## 🔐 Verificaciones de Seguridad

- [ ] ✅ No hay API keys en el código
- [ ] ✅ No hay passwords hardcodeados
- [ ] ✅ No hay datos sensibles en componentes
- [ ] ✅ Licencia MIT agregada

---

## 📦 Verificaciones de Archivos

### Documentación
- [ ] ✅ `START_HERE.md` existe
- [ ] ✅ `QUICK_START.md` existe
- [ ] ✅ `DEPLOYMENT.md` existe
- [ ] ✅ `DEVELOPMENT.md` existe
- [ ] ✅ `README.md` existe
- [ ] ✅ `CONTRIBUTING.md` existe
- [ ] ✅ `PROJECT_SUMMARY.md` existe
- [ ] ✅ `CHANGELOG.md` existe

### Configuración
- [ ] ✅ `package.json` existe y está actualizado
- [ ] ✅ `vite.config.ts` existe
- [ ] ✅ `tsconfig.json` existe
- [ ] ✅ `index.html` existe
- [ ] ✅ `.gitignore` completo
- [ ] ✅ `.editorconfig` existe
- [ ] ✅ `.prettierrc` existe
- [ ] ✅ `.nvmrc` con Node 20

### Flujos de Trabajo
- [ ] ✅ `.github/workflows/deploy.yml` existe
- [ ] ✅ Workflow configurado correctamente

---

## 🧪 Última Verificación Antes de Subir

Ejecuta esto en terminal:

```bash
# 1. Limpia y reinstala (optional pero seguro)
rm -rf node_modules package-lock.json
npm install

# 2. Desarrollo
npm run dev
# Verifica que abre en http://localhost:5173
# Presiona Ctrl+C para salir

# 3. Build de producción
npm run build
# Verifica que no hay errores
# Verifica que `dist/index.html` existe

# 4. Vista previa del build
npm run preview
# Verifica que se ve igual que en desarrollo
# Presiona Ctrl+C para salir

# 5. Estado de Git
git status
# Debe mostrar archivos listos para commit
```

---

## 🎯 Comandos Finales (En Orden)

Si todo está ✅, ejecuta en orden:

```bash
# 1. Agregar todos los archivos
git add .

# 2. Hacer commit
git commit -m "feat: sitio web DrHousePcclinic completo"

# 3. Cambiar rama a main
git branch -M main

# 4. Conectar con GitHub (REEMPLAZA TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/drhousepcclinic.git

# 5. Subir a GitHub
git push -u origin main
```

---

## ✨ Después de Subir (GitHub Pages)

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings**
3. En el menú lateral, haz clic en **Pages**
4. En "Source", selecciona **GitHub Actions**
5. ¡Espera 2-3 minutos!
6. Tu sitio estará en: `https://TU-USUARIO.github.io/drhousepcclinic/`

---

## 🆘 Si Algo Falla

### Error: "fatal: not a git repository"
```bash
git init
# Luego continúa desde el paso 2
```

### Error: "403 Forbidden" al hacer push
```bash
# Usa SSH en lugar de HTTPS
git remote set-url origin git@github.com:TU-USUARIO/drhousepcclinic.git
git push -u origin main
```

### Error: "npm run build" falla
```bash
# Limpia e instala de nuevo
rm -rf node_modules package-lock.json
npm install
npm run build
```

### El puerto 5173 está en uso
```bash
npm run dev -- --port 3000
# O usa otro puerto
```

---

## 📞 Información de Contacto a Verificar

- [ ] ✅ WhatsApp: +56 9 8603 7780 (cambiar si es necesario)
- [ ] ✅ Email: derax1974@gmail.com (cambiar si es necesario)
- [ ] ✅ Ubicación: Centro de la Ciudad, Local 42 (cambiar si es necesario)
- [ ] ✅ Horario: Lun - Sáb: 10am - 8pm (cambiar si es necesario)

---

## 🎉 ¡Estás Listo!

Si marcaste todo como ✅, puedes subir a GitHub sin problemas.

**Próximo paso:** Lee [QUICK_START.md](QUICK_START.md)

---

## 📊 Resumen

| Categoría | Estado |
|-----------|--------|
| Software requerido | ✅ |
| Proyecto | ✅ |
| Git | ✅ |
| Contenido | ✅ |
| Diseño | ✅ |
| Seguridad | ✅ |
| Archivos | ✅ |
| Documentación | ✅ |

**Todo Listo: 100% ✅**

---

¡A subir a GitHub! 🚀
