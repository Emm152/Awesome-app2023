// Importando el enrutador de express
import { Router } from 'express';
// Importando productos
import { products } from './admin.routes.js';

// Creando una instancia del enrutador de express
const router = Router();

// GET /
router.get(["/", "/home"], (_, res) => {
  console.log(`📔 Inventario de productos: ${JSON.stringify(products)}`);
  console.log("📒 Sirviendo recurso: 'shop.html'");
  res.render('shop', {
    shop: 'active',
    docTitle: "Tienda",
    viewStyle: '/css/product.css',
    isProductsListEmpty: products.length === 0,
    products
  });
});
// GET /about
router.get('/about', (req, res) => {
  console.log("📢 Sirviendo la ruta '/about'");
  // Se contesta al server
  res.send(`
    <h1>🪄 About...</h1>
    <p>App for Fullstack Web Dev Course I!</p>
  `);
});

export default router;