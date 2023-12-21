const router = require('express').Router();
<<<<<<< HEAD
const maintenanceServices = require('../../core/maintenance/maintenance.services')
=======
const maintenanceServices = require('./maintenance.services')
>>>>>>> origin/main

//? Main Route

//Necesito hacer un crud de mantenimiento

//? ruta para hacer un get de mantenimiento.

router.get('/', maintenanceServices.getAllMaintHandler);

router.post('/', maintenanceServices.postMaintHandler )

router.patch('/:id', maintenanceServices.updateMaintHandler)

router.delete('/:id', maintenanceServices.deleteMaintHandler)

module.exports = router
