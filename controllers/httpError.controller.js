export const err404 = (req, res) => {
    // Mostrando productos en memoria
    console.log("📢 Sirviendo la ruta 404");
    res.render('404');
}