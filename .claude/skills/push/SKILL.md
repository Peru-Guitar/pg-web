---
name: push
description: Reglas para hacer push en Peru Guitar (pg-web, el portal). Úsalo cuando el usuario pida "push", "sube los cambios", "publica" o similar, y también antes de cualquier git push. Nunca hagas push si el usuario no lo pidió explícitamente; al pedirlo, propone si la versión es patch, minor o major y actualiza package.json.
---

# Push en Peru Guitar (pg-web)

Hacer push a `main` publica el sitio en GitHub Pages (peruguitar.com). Por eso:

## 1. Nunca hagas push sin que te lo pidan

- **No ejecutes `git push`** a menos que el usuario lo pida explícitamente en ese mensaje ("haz push", "sube", "publica"…).
- Hacer commit no implica push. Terminar una tarea no implica push. Un push aprobado antes no autoriza el siguiente.
- Si crees que convendría subir, dilo en una línea y espera.

## 2. Cuando pida push: primero la versión

La versión sigue semver en `0.x.y` hasta que el usuario decida el `1.0.0`. Mientras tanto, lo que sería **major** sube el minor.

Antes de subir, revisa lo que se va a publicar (`git log origin/main..HEAD`, `git diff origin/main --stat` y lo que esté sin commitear) y dile al usuario qué tipo de versión es, con la versión actual de `package.json` y la propuesta:

| Tipo | Cuándo | Ejemplo |
|---|---|---|
| **minor** | Algo nuevo: sección, página, recurso o función nueva; o un cambio grande (rediseño) | `0.1.0 → 0.2.0` |
| **patch** | Arreglos, posts nuevos o editados, ajustes de textos, retoques visuales | `0.1.0 → 0.1.1` |

Formato de la respuesta:

> Cambios: <resumen corto>
> Versión: **patch** — 0.1.0 → 0.1.1 (motivo en una línea)
> ¿Subo con esa versión?

Espera la confirmación (el usuario puede elegir otro tipo).

## 3. Al confirmar

1. Actualiza `"version"` en `package.json` y `package-lock.json` con `npm version <tipo> --no-git-tag-version`. El footer muestra esa versión sola (`NEXT_PUBLIC_APP_VERSION`) y enlaza a `/novedades` (noindex, fuera del sitemap).
2. Agrega la versión a las **Novedades** (`src/content/changelog.ts`), arriba de todo: `version`, `date` (hoy, `AAAA-MM-DD`; la página junta sola las versiones del mismo día) y `notes`.
   - Notas **muy breves**, una por mejora, en palabras del lector ("Nuevo post sobre cómo grabar guitarras."), sin detalles técnicos.
   - **Nunca información técnica ni de seguridad**: nada de claves, correos, URLs internas, nombres de archivos o servicios, ni datos de usuarios. Una nota nunca debe revelar qué estaba expuesto o cómo se podía aprovechar un fallo.
   - Los arreglos de seguridad se describen de forma **superficial**, por lo que el lector ve: "Se corrigió un error con el nombre de usuario.", nunca "Antes se exponían las contraseñas.".
   - Si no hay nada visible para el lector, una sola nota genérica ("Mejoras y arreglos.").
3. Corre la build (`npm run build`) y el lint (`npm run lint`). Si fallan, para y avisa.
4. Haz commit (incluye el cambio de versión y las novedades). No agregues archivos sin seguimiento que no sean parte del cambio.
5. `git push` como **último paso, separado**, nunca encadenado con el commit: el usuario puede escribir "espera" a último momento.
