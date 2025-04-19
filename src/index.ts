import { listSheetsAndFetchData, Row } from "@dobuki/google-sheet-db";

interface Translation extends Row {
  TAG: string;
  TIME: string;
  VALUE: string;
}

export async function fetchTranslations(sheetId: string, {
  credentials,
  sheetName,
}: { credentials?: string, sheetName: string }) {
  const translations = await listSheetsAndFetchData<Translation>(sheetId, {
    credentials,
    sheet: sheetName,
  });
  return translations;
}

export interface TranslationConfig {
  sheetId: string;
  sheetName: string;
  credentials?: string;
}

export async function getTranslator({ sheetId, sheetName, credentials }: TranslationConfig) {
  const translations = await fetchTranslations(sheetId, { sheetName, credentials });
  const keyValue: Record<string, Translation> = {};
  translations?.[sheetName].forEach(translation => {
    keyValue[translation.TAG] = translation;
  });
  return {
    translate(tag: string, lang: string = "VALUE", defaultValue?: string): string {
      return keyValue[tag]?.[lang] ?? defaultValue;
    }
  };
}
