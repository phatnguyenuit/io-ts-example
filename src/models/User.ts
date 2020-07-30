import * as t from 'io-ts';

// io-ts type
export const UserCodec = t.interface({
  id: t.number,
  name: t.string,
  username: t.string,
  email: t.string,
});

export type User = t.TypeOf<typeof UserCodec>;
