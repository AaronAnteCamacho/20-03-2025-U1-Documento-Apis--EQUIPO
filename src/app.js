const axios = require('axios');
const baseUrl = 'https://apis-prodcutos.onrender.com/apiV1';

//  Función para obtener todos los productos
async function getProducts() {
  try {
    const response = await axios.get(`${baseUrl}/products`);
    console.log('Todos los productos:', response.data);
  } catch (error) {
    console.error('Error al obtener productos:', error.message);
  }
}

//  Función para obtener un producto por su ID
async function getProductById(id) {
  try {
    const response = await axios.get(`${baseUrl}/products/${id}`);
    console.log(`WACHINANGOOOOOOO ${id}:`, response.data);
  } catch (error) {
    console.error(`Error al obtener el producto ${id}:`, error.message);
  }
}

//  Función para crear un nuevo producto
async function createProduct(productData) {
  try {
    const response = await axios.post(`${baseUrl}/products`, productData, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('Producto creado:', response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Mostramos el código de estado y el cuerpo de la respuesta que envía el servidor
      console.error('Error al crear el producto:', error.response.status, error.response.data);
    } else {
      // Si no existe error.response, mostramos el mensaje genérico
      console.error('Error al crear el producto:', error.message);
    }
  }
}
    

// Función para actualizar un producto existente
async function updateProduct(id, productData) {
  try {
    const response = await axios.put(`${baseUrl}/products/${id}`, productData);
    console.log(`Producto ${id} actualizado:`, response.data);
  } catch (error) {
    console.error(`Error al actualizar el producto ${id}:`, error.message);
  }
}

// Función para borrar un producto
async function deleteProduct(id) {
  try {
    const response = await axios.delete(`${baseUrl}/products/${id}`);
    console.log(`Producto ${id} eliminado:`, response.data);
  } catch (error) {
    console.error(`Error al eliminar el producto ${id}:`, error.message);
  }
}


 // Funcion Obtener el historial de precios de un producto
 
async function getProductHistory(id) {
  try {
    const response = await axios.get(`${baseUrl}/products/${id}/history`);
    console.log(`Historial de precios del producto ${id}:`, response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`Error al obtener el historial de precios del producto ${id}:`, 
                    error.response.status, 
                    error.response.data);
    } else {
      console.error(`Error al obtener el historial de precios del producto ${id}:`, 
                    error.message);
    }
  }
}



 // Funcion Obtener sugerencias de productos basadas en compras previas

async function getProductSuggestions(id) {
  try {
    const response = await axios.get(`${baseUrl}/products/${id}/sugerencias`);
    console.log(`Sugerencias de productos para el producto ${id}:`, response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`Error al obtener sugerencias del producto ${id}:`, 
                    error.response.status, 
                    error.response.data);
    } else {
      console.error(`Error al obtener sugerencias del producto ${id}:`, 
                    error.message);
    }
  }
}


 // Funcion Obtener tendencias de precios de un producto
 
async function getProductPriceTrends(id) {
  try {
    const response = await axios.get(`${baseUrl}/products/${id}/tendenciasPrecios`);
    console.log(`Tendencias de precios del producto ${id}:`, response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`Error al obtener tendencias de precios del producto ${id}:`, 
                    error.response.status, 
                    error.response.data);
    } else {
      console.error(`Error al obtener tendencias de precios del producto ${id}:`, 
                    error.message);
    }
  }
}


 // Funcion Obtener todas las categorías

async function getCategories() {
  try {
    const response = await axios.get(`${baseUrl}/categories`);
    console.log('Todas las categorías:', response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error al obtener categorías:', error.response.status, error.response.data);
    } else {
      console.error('Error al obtener categorías:', error.message);
    }
  }
}



 //Funcion Obtener una categoría por ID

async function getCategoryById(id) {
  try {
    const response = await axios.get(`${baseUrl}/categories/${id}`);
    console.log(`Categoría con ID ${id}:`, response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`Error al obtener la categoría ${id}:`, 
                    error.response.status, 
                    error.response.data);
    } else {
      console.error(`Error al obtener la categoría ${id}:`, error.message);
    }
  }
}


 
 //Funcion Obtener todas las compras

async function getAllPurchases() {
  try {
    const response = await axios.get(`${baseUrl}/purchases`);
    console.log('Todas las compras:', response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error al obtener las compras:', error.response.status, error.response.data);
    } else {
      console.error('Error al obtener las compras:', error.message);
    }
  }
}



async function main() {
  // Ejemplo de nuevo producto
  const nuevoProducto = {
    
      "id": "30",
      "nombre": "Laptop Gamer",
      "precio": 1200,
      "enStock": true,
      "categoria": "Electrónica",
      "detalles": {
        "procesador": "Intel i7",
        "ram": "16GB",
        "almacenamiento": "512GB SSD"
      },
      "historialPrecios": [
        {
          "fecha": "2023-10-01T00:00:00Z",
          "precioAnterior": 1100
        }
      ]
    
  };
    

  // Obtener todos los productos
  await getProducts();

  // Crear un nuevo producto
  await createProduct(nuevoProducto);

  // Reemplaza '123' con el ID real que se genere o desees probar
  const productoId = "YBQKoPN1Te6Q5FEkcjDy";

  // Obtener un producto por ID
  await getProductById(productoId);

  // Actualizar un producto existente
  const productoActualizado = {
    nombre: "Producto Actualizado",
    precio: 59.99,
    descripcion: "Descripción actualizada del producto",
    categoria: "Categoría actualizada",
    stock: 80
  };
  await updateProduct(productoId, productoActualizado);

  // Borrar un producto
  await deleteProduct(productoId);


  const exampleProductId = 'YBQKoPN1Te6Q5FEkcjDy'; // Reemplázalo por un ID real de producto
  const exampleCategoryId = '1'; // Reemplázalo por un ID real de categoría

  //Obtener historial de producto
  await getProductHistory(exampleProductId);

  //Obtener sugerencias de producto
  await getProductSuggestions(exampleProductId);

  //Obtener Categorias 
  await getCategories();

  //Obtener categoria por id
  await getCategoryById(exampleCategoryId);

  //Obtener todas las compras
  await getAllPurchases();
}

main();
