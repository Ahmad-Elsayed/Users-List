export function getUserName({ title, first, last }) {
  if (!title || !first || !last) return;

  return `${title}: ${first} ${last}`;
}
