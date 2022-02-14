export function formatIndexToThumbnailName(index: number) {
  if (index.toString().length === 1) {
    return `00${index}`;
  }
  if (index.toString().length === 2) {
    return `0${index}`;
  }

  return index.toString();
}
