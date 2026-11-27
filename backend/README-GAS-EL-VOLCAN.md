# Backend Gas El Volcán — Spring Boot

## Requisitos
Java 17 o superior e Internet la primera vez que Maven Wrapper descarga dependencias.
Este proyecto conserva el `pom.xml` generado por Spring Initializr (Spring Boot 4.2.0).
No hace falta instalar `mvn` globalmente.

## Ejecutar en Windows
Abrir PowerShell **dentro de la carpeta `backend`**:

```powershell
.\mvnw.cmd spring-boot:run
```

La primera vez descargará dependencias. API: `http://localhost:8080/api/productos`.
Comprobar: `http://localhost:8080/api/salud` → `{"estado":"ok","servicio":"gas-el-volcan"}`.

Si falla, obtener el mensaje completo de Maven, no instalar otro Java al azar.

## Endpoints
| Método | Ruta | Uso | Esperado |
|---|---|---|---|
| GET | /api/productos | Lista completa | 200 |
| GET | /api/productos/1 | Producto por ID | 200 o 404 |
| POST | /api/productos | Crea producto (JSON) | 201 o 400/409 |
| PUT | /api/productos/1 | Actualiza producto (JSON completo) | 200 o 400/404/409 |
| DELETE | /api/productos/1 | Elimina producto | 204 o 404 |
| GET | /api/salud | Comprueba API en ejecución | 200 |

Ejemplo JSON para POST/PUT:
```json
{
  "codigo": "AC005",
  "categoria": "Accesorios",
  "nombre": "Accesorio de prueba",
  "descripcion": "Producto para comprobar la API",
  "unidad": "Unidad",
  "precio": 2500,
  "precioComercial": 2200,
  "stock": 10,
  "imagen": "assets/accesorio.svg"
}
```

## Persistencia de datos
La base de datos H2 es de **archivo**, no de memoria. Se guarda en
`backend/data/gaselvolcan.mv.db` (si ejecutas desde backend).
En el primer inicio se cargan los 15 productos conocidos del frontend.
**No se repueblan** al reiniciar si la base tiene productos. No borrar
`data/` si se quiere conservar el CRUD.
Atención: el producto 15 fue entregado con el mismo nombre y descripción
que el 14, pero su código es distinto (`AC004`).

## Conectar React
La carpeta React existente no se modifica en este ZIP.
Configura el frontend para que sus llamadas `fetch` o Axios apunten a
`http://localhost:8080/api/productos` en desarrollo o a la dirección
publicada de EC2 al desplegar. En Vite se recomienda `VITE_API_URL`
y utilizar `import.meta.env.VITE_API_URL` como URL base.
Importante: cambiar únicamente el frontend no basta; las vistas que usan
datos estáticos deberán consumir realmente los endpoints HTTP.
CORS acepta `http://localhost:5173` y `http://127.0.0.1:5173`
por defecto; cambiar `CORS_ORIGINS` si se publica el frontend.

## Compilar y desplegar en AWS EC2
En Windows, desde backend:
```powershell
.\mvnw.cmd clean package
```
Genera un JAR ejecutable bajo `target/`. Transfiérelo con SCP usando
solo las claves y recursos autorizados por la institución. En EC2 debe
haber una versión de Java compatible y persistencia en disco.

Ejecutar desde el directorio deseado de la instancia:
```bash
java -jar backend-0.0.1-SNAPSHOT.jar
```
Establecer `PORT`, `DB_URL`, `CORS_ORIGINS` y credenciales externas antes
de iniciar, cuando corresponda. No almacenar contraseñas ni claves en Git.
Configurar security group para admitir **solo acceso necesario** a la API,
preferentemente desde IPs autorizadas o a través de un proxy HTTPS.
Restringir SSH al origen autorizado. No exponer H2 ni su consola.

Este ejemplo es apropiado para una evaluación; para producción deben
incorporarse autenticación, control de acceso, TLS, backups, monitoreo
y una base de datos gestionada con garantías de concurrencia.

## Postman
Crear una colección con:
1. GET `/api/productos` → lista JSON, 200
2. POST `/api/productos` → creado, 201
3. PUT `/api/productos/{id}` → actualizado, 200
4. DELETE `/api/productos/{id}` → eliminado, 204
5. GET `/api/productos/999999` → no encontrado, 404
6. POST con datos inválidos (por ejemplo `stock:-1`) → 400

Para la evaluación, repetir **contra la dirección real de EC2**, no
solamente contra localhost. Guardar respuestas/capturas reales y exportar
colección Postman.

## Comprobación
Este paquete se generó a partir del proyecto Spring Initializr aportado.
No se ha confirmado aquí una compilación Maven ni un despliegue AWS
en ejecución; validar el arranque y los endpoints en el computador.
