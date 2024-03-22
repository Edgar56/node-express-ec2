const authorizedUsers = ['edgar', 'tomas'];

export function isAuthorized(username) {
  return authorizedUsers.includes(username);
}
