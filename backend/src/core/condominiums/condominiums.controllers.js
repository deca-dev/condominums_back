const condos = require('../../models/condominiums.models');
const uuid = require('uuid');
//const db = require('../utils/database')

const getAllCondoController = async () => {
  const data = await condos.findAll();
  return data;
};

const createNewCondo = async (user_id, tower, room) => {
  if (tower && room) {
    return await condos.create({
      id: uuid.v4(),
      user_id,
      tower,
      room
    });
  } else {
<<<<<<< HEAD
    throw new Error('Faltan tower o room');
=======
    throw new Error('Faltan description o status');
>>>>>>> origin/main
  }
};

const patchCondoController = async (id, newData) => {
  try {
<<<<<<< HEAD
    const CondoToUpdate = await condos.findByPk(id);
    if (!CondoToUpdate) {
      throw new Error('Condominium not found');
    }
    await CondoToUpdate.update(newData);
    return CondoToUpdate;
  } catch (error) {
    console.error('Error patching Condominium:', error.message);
=======
    const maintenanceToUpdate = await condos.findByPk(id);
    if (!maintenanceToUpdate) {
      throw new Error('Maintenance not found');
    }
    await maintenanceToUpdate.update(newData);
    return maintenanceToUpdate;
  } catch (error) {
    console.error('Error patching maintenance:', error.message);
>>>>>>> origin/main
    throw error;
  }
};

const delCondoController = async (id) => {
  try {
<<<<<<< HEAD
    const delCondo = await condos.findByPk(id);
    if (!delCondo) {
      throw new Error('Condo not found');
    }
    await delCondo.destroy();
    return 'delete Condominium';
  } catch (error) {
    console.error('Error no delete Condo:', error.message);
=======
    const delMaintenance = await condos.findByPk(id);
    if (!delMaintenance) {
      throw new Error('Maintenance not found');
    }
    await delMaintenance.destroy();
    return 'delete Condominium';
  } catch (error) {
    console.error('Error no delete maintenance:', error.message);
>>>>>>> origin/main
    throw error;
  }
};

module.exports = {
  getAllCondoController,
  createNewCondo,
  patchCondoController,
  delCondoController
};
