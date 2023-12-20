const express = require('express');
const cors = require('cors');
const app = express();
const { port } = require('./config');
const db = require('./utils/database');
const logger = require('morgan');
<<<<<<< HEAD
const swaggerDocs = require('./utils/swagger');
=======
>>>>>>> origin/main

const userRouter = require('./core/users/users.router');
const authRouter = require('./core/auth/auth.router');
const maintenanceRouter = require('./core/maintenance/maintenance.router');
const condominuimsRouter = require('./core/condominiums/condominiums.router');
<<<<<<< HEAD
const paymentsRouter = require('./core/payments/payments.router');
=======
>>>>>>> origin/main
const complaintRouter = require('./core/complaint/complaint.router');
const amenitieRouter = require('./core/amenities/amenities.router');
const initModels = require('./models/initModels');
const path = require('path');

<<<<<<< HEAD
app.use(logger('dev'));
=======
app.use(logger('dev'))
>>>>>>> origin/main
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

<<<<<<< HEAD
initModels();

=======
>>>>>>> origin/main
db.authenticate()
  .then(() => {
    console.log('Database Authenticated');
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
<<<<<<< HEAD
  .then(() => {
    console.log('Database Synced');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/api/v1', (req, res) => {
  res.status(200).json({
    message: `Documentation available at: http://localhost:${port}/api/v1/docs`,
=======
    .then(()=> {
        console.log('Database Synced')
    })
    .catch(err => {
        console.log(err)
    })

    initModels();



app.get('/api/v1', (req, res) => {
  res.status(200).json({
    message: 'OK!',
>>>>>>> origin/main
    users: `localhost:${port}/api/v1/users`,
    login: `localhost:${port}/api/v1/auth/login`,
    amenities: `localhost:${port}/api/v1/amenities`,
    maintenance: `localhost:${port}/api/v1/maintenance`,
    complaint: `localhost:${port}/api/v1/complaint`,
    condominuims: `localhost:${port}/api/v1/condominuims`,
<<<<<<< HEAD
    payments: `localhost:${port}/api/v1/payments`
  });
});

app.use('/api/v1/docs', swaggerDocs.serve, swaggerDocs.setup);
=======
  });
});

>>>>>>> origin/main
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/amenities', amenitieRouter);
app.use('/api/v1/maintenance', maintenanceRouter);
app.use('/api/v1/complaint', complaintRouter);
<<<<<<< HEAD
app.use('/api/v1/condominuims', condominuimsRouter);
app.use('/api/v1/payments', paymentsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(
    `Documentation available at http://localhost:${port}/api/v1/docs`
  );
=======
app.use("/api/v1/condominuims", condominuimsRouter )

app.get('*', (req,res) =>{
   res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.listen(port, () => {
>>>>>>> origin/main
  console.log(`Server started on port ${port}`);
});
