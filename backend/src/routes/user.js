const {Router} = require('express');
const router = Router();

const userDB = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie.wilson@example.com',
  },
];

router.get('/:id', (request, response) => {
  const {id} = request.params;

  response.send(userDB);
});

module.exports = router;
