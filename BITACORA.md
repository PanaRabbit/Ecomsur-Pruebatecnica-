# Bitacora

## Como ejecutar el codigo: 

Para asegurar que el proyecto se ejecute correctamente en cualquier máquina, es necesario instalar las siguientes dependencias de la siguiente manera:

1. En la carpeta raíz de la aplicación, ejecutar el comando `npm install`.

2. En el directorio `front`, también ejecutar el comando `npm install`.

3. Además, en la carpeta raíz y en el directorio `front`, ejecutar el comando `npm install react-router-dom --save".

## Documentacion

1 .En el código se utilizó el hook useEffect para llamar a una función asíncrona getApiProducts que hace una petición GET a la API que está corriendo en http://localhost:5000/api/products.

Luego, se espera a que la respuesta sea recibida y se llama al método .json() para obtener los datos como un objeto JSON. Después, se almacenan los datos en el estado de la aplicación a través del hook useState llamado products.

2. Cada ítem del catálogo debe tener un action button con el texto Add item to cart.

. Para lograr este objetivo, se utiliza el componente "ProductsCards" que recibe los datos del producto y renderiza la información correspondiente en una card. En la card se incluye un botón con el texto "Add item to cart" que se muestra en cada producto del catálogo.

. Este botón tiene una función asociada "addToCar" que se ejecuta cuando se hace click en él. Esta función recibe el ID y la información del producto y los agrega al carrito.

3. Si no hay stock el action button debe deshabilitarse.

. En la card del producto se incluye una verificación para determinar si hay stock disponible del producto.

. Si el producto no tiene stock, se agrega la clase "disable" al botón de agregar al carrito, lo que deshabilita el botón.

4. Cada ítem en el carro debe tener un action button para remover el ítem del carro.

. Cuando se agrega un producto al carrito, se crea un objeto con su información y se almacena en un array llamado "cartItems".

. En la página del carrito se recorre este array y se renderiza cada item en un componente llamado "ShoppingCarItem". En este componente se incluye un botón con el texto "Remove" que se muestra en cada producto del carrito.

. Este botón tiene una función asociada "removeFromCart" que se ejecuta cuando se hace click en él. Esta función recibe el ID del producto y lo elimina del carrito.

. Los items en el carrito se deben de agrupar mostrando cantidad de cada producto añadido.

. Se utiliza un contador "carItem" que se actualiza cada vez que se agrega o elimina un producto del carrito. Este contador se muestra en el header de la página.

. En la página del carrito se agrupan los productos por su ID y se muestra la cantidad de productos de cada tipo. Esto se logra utilizando el método "reduce" del array "cartItems" para crear un objeto con los ID de los productos como claves y la cantidad de productos como valores. Luego se recorre este objeto y se renderiza la información correspondiente.

## Además de estos objetivos, el código también incluye:

. Un loader que se muestra mientras se cargan los datos de la API.

. El uso de LocalStorage para guardar los productos en el carrito y que estos no se pierdan al recargar la página.

En resumen, este código implementa un catálogo de productos con la opción de agregarlos al carrito y mostrarlos en la página del carrito. Se logra deshabilitar el botón de agregar al carrito si el producto no tiene stock, y se incluyen botones para remover los productos del carrito. También se agrupan los productos por su ID y se muestra la cantidad de productos de cada tipo en el carrito.
