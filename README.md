## Aplicacion RESTSERVER CON EXPRESS Y NODE BASICO
# Peticiones:
1. GET:
    - localhost
    - localhost/id/rol
    - localhost/user?id=123456&rol=admin
2. POST:
    - localhost
    - localhost/user/id
    - localhost/user con informacion x-www-form-urlencoded
    - localhost/register con informacion por form-data
3. PUT:
    - localhost
    - localhost/id/rol
    - localhost/user?id=12334&rol=admin
    - localhost/users con informacion x-www-form.urlencoded
    - localhost/register con informacion por form-data
4. DELETE:
    - localhost
    - localhost/id/rol
    - localhost/user?id=121234&rol=3
    - localhost/users con informacion x-www-form-urlencoded
    - localhost/register con informacion por form-data
5. Manejo De Codigos De Status HTTP
    - localhost/create con informacion x-www-form-urlencoded

# NOTAS:
1. No olvidar usar npm install
2. para la peticion de manejo de codigos de error se debe enviar una variable nombre para que respoda 200.
   Si esta variable no existe responde con 400
3. Todas las peticiones fueron probradas con POSTMAN 