export function getInitials(name: string) {
  const names = name.split(' ');
  return names[0].charAt(0) + names[1].charAt(0);
}