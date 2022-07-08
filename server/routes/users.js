const router = require('express').Router();
const { Users } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const allUsers = await Users.findAll();
    res.json(allUsers);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findOne({
      where: {
        id,
      },
    });
    const userName = user.name;
    const userSurname = user.surname;
    res.json({ userName, userSurname });
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

module.exports = router;