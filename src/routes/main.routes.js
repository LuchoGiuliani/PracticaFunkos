const {Router} = require('express');
const router = Router()

let {homeMobile, listado, home, listadoMobile} = require('../controllers/main.controller');

router.get('/', home);
router.get('/listado', listado)
router.get('/homeMobile', homeMobile)
router.get('/listadoMobile', listadoMobile)
module.exports= router

