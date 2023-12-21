const router = require('express').Router();
const {
  postPaymentsHandler,
  getAllPaymentsHandler,
  updatePaymentsHandler,
  deletePaymentsHandler
<<<<<<< HEAD
} = require('../payments/payments.services');
=======
} = require('./payments.services');
>>>>>>> origin/main

//? Main Route

//Necesito hacer un crud de mantenimiento

//? ruta para hacer un get de mantenimiento.

router.get('/', getAllPaymentsHandler);

router.post('/', postPaymentsHandler);

router.patch('/:id', updatePaymentsHandler);

router.delete('/:id', deletePaymentsHandler);

module.exports = router;
