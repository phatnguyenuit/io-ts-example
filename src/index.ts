import { proposeUser } from 'util/user';

proposeUser({
  id: 1,
  name: 'Phat Nguyen',
  username: 'phatnt',
  email: 'phatnt.uit@gmail.com',
});

proposeUser({
  id: 'xyz',
  username: 12345,
});

proposeUser();
