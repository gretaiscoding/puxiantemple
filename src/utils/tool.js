export function getImageUrl(name, filetype) {
  return new URL(`../images/${name}`, import.meta.url).href;
}
