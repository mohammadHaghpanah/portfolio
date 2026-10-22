/** Resolve public asset paths for both local and GitHub Pages (`base`). */
export function assetUrl(path: string): string {
  const normalized = path.replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${normalized}`
}
