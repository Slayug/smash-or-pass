export function getCurrentLang() {
  const navigatorLang = navigator.language;
  if (navigatorLang.startsWith("fr")) {
    return "french";
  }
  if (navigatorLang.startsWith("ja")) {
    return "japanese";
  }
  if (navigatorLang.startsWith("zh")) {
    return "chinese";
  }
  return "english";
}
