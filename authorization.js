const authorizedUsers = ['edgar', 'tomas'];

export default function isAuthorized(username) {
  return authorizedUsers.includes(username);
}
