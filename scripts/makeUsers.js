const faker = require('faker');

console.log(Array(10).fill(0).map(() => {
  const fname = faker.name.firstName();
  const lname = faker.name.lastName();

  return {
    fname,
    lname,
    email: faker.internet.email(fname, lname),
  };
}));
