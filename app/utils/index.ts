/**
 * Access NuxtHub Blob served images.
 * @param path
 * @returns Blob path.
 */
export function hubImage(path: string) {
  if (path.startsWith('http')) {
    return path
  }

  if (path.startsWith('/')) {
    return path
  }

  return `/images/${path}`
}
