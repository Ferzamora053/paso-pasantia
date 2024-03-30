# Base de Datos

## Fundamentos de SQL

### 1. Objetivos

- Establecer la conexión a una base de datos relacional.
- Analizar la estructura de distintas tablas en una base de datos.
- Escribir consultas básicas que permitan obtener los campos de una tabla, ordenar y limitar los resultados.
- Combinar datos entre una o mas tablas

### 2. Contenido

---

#### <ins>Bases de Datos Relacionales</ins>

La base de datos relacionales son sistemas que permiten organizar y gestionar grandes cantidades de información de manera estructurada.
Vamos a adentrarnos en la conexión a una base de datos relacional especifica __MySQL__

El proceso se encarga de acceder a la información almacenada en una base de datos desde una aplicación o de un programa externo, el proceso se basa en el modelo Cliente-Servidor. La información de la base de datos se resguarda en un servidor, el cual está encargada de recibir y procesar las solicitudes de acceso de los datos.

Por otro lado, el cliente es el programa que se utiliza para interactuar con la base de datos, este cliente enviar peticiones al servidor solicitando datos especifico. El servidor entrega los resultados de las consultas realizadas, estos pueden ser modificados o se puede agregar más datos. 

Para crear una base de datos, se utiliza lo siguiente:


    CREATE DATABASE <nombre>;

---

#### <ins>Estructura de una tabla</ins>

Al acceder a la base de dato, estos datos están ubicados dentro de un listado de distintas bases, las cuales contienen *tablas*, estas son estructuras organizadas que almacenan los datos de manera organizada. Estas tablas contienen lo siguiente:

1. Renglones
2. Columnas
3. Llaves primarias y foráneas.
4. Datos
5. Tipos de datos

Para crear una nueva tabla, se utiliza el comando SQL de la siguiente forma (en su forma más simple):


    CREATE TABLE usuarios (
        id INT,  
        nombre VARCHAR(50),   
        edad INT,    
        email VARCHAR(100)  
    );


Al igual que en muchos otros sistemas de gestión de bases de datos relacionales, hay varios tipos de datos que se pueden usar para definir columnas en una tabla. Aquí tienes una lista de los tipos de datos más comunes en MySQL:

1. **Números enteros:**
   - `INT` o `INTEGER`: Entero normal. Puede almacenar valores entre -2,147,483,648 y 2,147,483,647 (sin signo, de 0 a 4,294,967,295).

2. **Números decimales:**
   - `DECIMAL`: Número decimal con precisión fija.
   - `FLOAT`: Número de punto flotante.

3. **Cadenas de caracteres:**
   - `CHAR`: Cadena de caracteres de longitud fija.
   - `VARCHAR`: Cadena de caracteres de longitud variable.
   - `TEXT`: Texto de longitud variable (puede contener hasta 65,535 caracteres).

4. **Fechas y tiempos:**
   - `DATE`: Fecha en formato 'YYYY-MM-DD'.
   - `TIME`: Hora en formato 'HH:MM:SS'.
   - `DATETIME`: Fecha y hora en formato 'YYYY-MM-DD HH:MM:SS'.
   - `YEAR`: Año en formato 'YYYY' o 'YY'.

Estos datos son algunos tipos de datos, la elección del tipo de datos depende de la naturaleza de los datos a almacenar y tambien de los requisitos específicos para el uso en los diferentes 

---

#### <ins>Estructura de una consulta</ins>

En su forma más básica una consulta se compone de:

1. `SELECT`: Esta cláusula se encarga de obtener los datos en los campos o las columnas de la tabla específicos que queremos recuperar. Por ejemplo:

    ```sql
    SELECT campo1, campo2 FROM tabla;
    ```

2. `FROM`: Indica la tabla o tablas en donde se obtienen los datos, es decir, se especifica la fuente en donde se extraerán los datos. Por ejemplo:

    ```sql
    SELECT * FROM tabla;
    ```

3. `WHERE`: Se utiliza para aplicar condiciones o filtros a los datos que se estan seleccionando. Por ejemplo:

    ```sql
    SELECT campo1, campo2 FROM tabla WHERE condicion;
    ```

---

#### <ins>Ordenamientos y límites</ins>
Una vez obtenidos los datos requeridos mediante una consulta, es posible ordenar de manera específica los datos o de limitar la cantidad de registros. Para lograr esto, se utilizan las siguientes clausulas:

- `ORDER BY`: esta cláusula se utiliza para ordenar los resultados, estos pueden ser en forma ascendente o descendente.

    ```sql
    SELECT campo1, campo2 FROM tabla ORDER BY campo1 ASC;
    ```

Este ordena los resultados de la consulta en orden ascendente.

- `LIMIT`: Esta cláusula se utiliza para limitar el número de registro obtenidos por la consulta.

    ```sql
    SELECT campo1, campo2 FROM tabla LIMIT 10;
    ```

Esto limita los resultados a solo los primeros 10 registros

---

#### <ins>Clasificación de *joins*</ins>

Para relacionar tablas en las consultas SQL, se utilizan los `joins`, estos permiten combinar datos entre dos o más tablas, están se asocian con las llaves primarias y foáneas de las tablas involucradas. Existen 3 tipos de `join`.

1. `INNER JOIN`: Esta cláusula devuelve los registros que tienen coincidencias en ambas tablas. Solo se incluyen las filas donde existen el mismo registro. Por ejemplo:

    ```sql
    SELECT t1.campo1, t2.campo2 
    FROM tabla1 AS t1
    INNER JOIN tabla2 AS t2 ON t1.clave_primaria = t2.clave_foranea;
    ```

2. `LEFT JOIN`: Este tipo de join devuelve todos los registros de la tabla izquierda y los registros coinciden de la tabla derecha. Por ejemplo:

    ```sql
    SELECT t1.campo1, t2.campo2 
    FROM tabla1 AS t1
    LEFT JOIN tabla2 AS t2 ON t1.clave_primaria = t2.clave_foranea;

    ```

3. `RIGHT JOIN`: Devuelve todos los registros de la tabla derecha con los registros que coinciden con la tabla izquierda. Por ejemplo:

    ```sql
    SELECT t1.campo1, t2.campo2 
    FROM tabla1 AS t1
    RIGHT OUTER JOIN tabla2 AS t2 ON t1.clave_primaria = t2.clave_foranea;
    ```

---

