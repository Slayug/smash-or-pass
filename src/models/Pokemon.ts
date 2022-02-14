export const LanguageList = [
  "english",
  "japanese",
  "chinese",
  "french",
] as const;
export type Language = typeof LanguageList[number];

export type Languages = { [key in Language]?: { translations: string } };

export interface Pokemon {
  id: number;
  name: { [key in Language]: string };
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    Speed: number;
  };
}
