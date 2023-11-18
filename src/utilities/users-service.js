// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from 
import * as usersAPI from './users-api';

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData)

  return token
}

