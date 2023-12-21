const router = require('express').Router();
<<<<<<< HEAD
const {postCondoHandler, getAllCondoHandler, updateCondoHandler, deleteCondoHandler} = require('../../core/condominiums/condominiums.services')
=======
const {postCondoHandler, getAllCondoHandler, updateCondoHandler, deleteCondoHandler} = require('./condominiums.services')
>>>>>>> origin/main

//? Main Route

//Necesito hacer un crud de mantenimiento

//? ruta para hacer un get de mantenimiento.

router.get('/', getAllCondoHandler);

router.post('/', postCondoHandler )

router.patch('/:id', updateCondoHandler)

router.delete('/:id', deleteCondoHandler)

module.exports = router
