# Prueba Técnica - Concept BPO

## Tecnologías usadas
- HTML, JavaScript Vanilla
- Css con Bootstrap
- PHP (solo para servir el HTML)
- API externa: JSONPlaceholder

## Funcionalidad
- Lista de usuarios desde API
- Ver detalles individuales
- Marcar como favorito (simulado con `localStorage`)

## Diseño conceptual de base de datos (favoritos)

**Tabla: `favorites`**
| Columna     | Tipo       | Descripción               |
|-------------|------------|---------------------------|
| id          | INT        | Clave primaria            |
| user_id     | INT        | ID del usuario favorito   |
| marked_at   | TIMESTAMP  | Fecha/hora de marcado     |

- `user_id` sería clave foránea a tabla `users`.
- Índice en `user_id` para consultas rápidas.

## Cómo correrlo
- Clonar el repo o descomprimir el zip
- Ejecutar `php -S localhost:8000` y abrir en navegador
# Prueba_CBPO
