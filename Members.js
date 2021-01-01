const { v4: uuid } = require('uuid');

const members = [
  {
    id: uuid(),
    name: 'John Doe',
    email: 'john@gmail.com',
    status: 'active'
  },
  {
    id: uuid(),
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    status: 'inactive'
  },
  {
    id: uuid(),
    name: 'Bob Williams',
    email: 'bob@gmail.com',
    status: 'active'
  }
];

module.exports = members;