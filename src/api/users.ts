import config from '../config';
import User from '../entities/User';

const URL = config.app.api.users || '';

/**
 * Get the list of users
 * 
 * @returns {Promise<User[]>}
 */
async function all (): Promise<User[]> {
  const response = await fetch(URL);
  const body = await response.json();
  
  if (body instanceof Array) {
    return body.map((user: User) => ({
      id: user.id,
      email: user.email,
      name: user.name
    }))
  }

  return [];
}

export { all };
