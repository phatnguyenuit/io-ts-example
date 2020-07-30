/* eslint-disable no-console */
import { ThrowReporter } from 'io-ts/lib/ThrowReporter';

import { UserCodec, User } from '../models/user';

export const proposeUser = (user?: unknown) => {
  try {
    const decodedResult = UserCodec.decode(user);
    ThrowReporter.report(decodedResult);

    // continue proposing user
    const u: User = user as User;
    console.log(`=> Proposed user ${u.name}`);
  } catch (error) {
    console.error(`Error: \n\t${error.message.split('\n').join('\n\t')}`);
  }
};
