export function generateSlug(): string {
  const currentTimeMillis = Date.now();
  const formattedTime = new Date(currentTimeMillis)
    .toISOString()
    .replace(/[-:.]/g, '')
    .substr(0, 14);
  const charPool =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const slugLength = 10;

  const slug = Array.from({ length: slugLength }, () =>
    charPool.charAt(Math.floor(Math.random() * charPool.length)),
  ).join('');

  return slug + formattedTime;
}
