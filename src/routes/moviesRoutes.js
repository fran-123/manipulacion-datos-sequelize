const express = require('express');
const router = express.Router();
const {list,nueva,recommended,detail,add,create,edit,update,suprim,destroy} = require('../controllers/moviesController');

router
    .get('/movies', list)
    .get('/movies/new', nueva)
    .get('/movies/recommended', recommended)
    .get('/movies/detail/:id', detail);

//Rutas exigidas para la creación del CRUD
router.get('/movies/add',add);
router.post('/movies/create',create);
router.get('/movies/edit/:id',edit);
router.put('/movies/update/:id',update);
router.get('/movies/delete/:id',suprim);
router.delete('/movies/delete/:id',destroy);

module.exports = router;