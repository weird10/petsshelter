const PetController = require ('../controllers/pet.controllers.js')

module.exports = (app) => {
    // create
    app.post('/api/addPet', PetController.addPet);
    
    // read 1
    app.get('/api/pet/:id', PetController.findOnePet);
    
    // read all
    app.get('/api/allPets', PetController.findAllPet);
    
    // update 1
    app.put('/api/updatePet/:id', PetController.updatePet);
    
    // adopt 1
    app.delete('/api/adoptPet/:id', PetController.adoptPet);
}