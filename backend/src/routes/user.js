const {Router} = require('express');
const UserModel = require('../database/index');
const router = Router();

router.get('/', async (request, response) => {
  try {
    const data = await UserModel.find();
    response.send(data);
  } catch (err) {
    response.sendStatus(400).send(err);
  }
});

router.post('/', async (request, response) => {
  const {body} = request;
  try {
    const data = await UserModel.create(body);
    response.send(data);
  } catch (error) {
    response.send(error);
  }
});

router.get('/:id', async (request, response) => {
  const {id} = request.params;

  try {
    const data = await UserModel.find({id: id});
    data.length > 0 ? response.send(data) : response.sendStatus(404);
  } catch (error) {
    response.sendStatus(400).send(error);
  }
});

router.delete('/:id', async (request, response) => {
  const {id} = request.params;

  try {
    const deletedJson = await UserModel.findOneAndDelete({id: id});
    response.send(deletedJson);
  } catch (error) {
    response.sendStatus(400).send(error);
  }
});

router.put('/:id', async (request, response) => {
  const {id} = request.params;
  const {body} = request;

  try {
    const updatedJson = await UserModel.findOneAndUpdate(
      {id: id},
      body,
      {
        new: true,
      }
    );
    response.send(updatedJson);
  } catch (error) {
    response.sendStatus(400).send(error);
  }
});

module.exports = router;
