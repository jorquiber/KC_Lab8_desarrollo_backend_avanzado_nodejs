var express = require('express');
var router = express.Router();
const Anuncio = require('../../models/Anuncio');

// POST /api/anuncios (body)
// Crea un anuncio
router.post('/', async (req, res, next) => {
    try {
      const data = req.body;
  
      // creamos una instancia de anuncio en memoria
      const anuncio = new Anuncio(data);
  
      // lo persistimos en la BD
      const anuncioGuardado = await anuncio.save();
  
      res.json({ result: anuncioGuardado });
  
    } catch (error) {
      next(error);
    }
  });

  module.exports = router;