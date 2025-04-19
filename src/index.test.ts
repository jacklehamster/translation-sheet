import { expect, it, describe } from 'bun:test';
import { fetchTranslations, getTranslator } from './index';

const SHEET_ID = "1EQCtA_oFWwwuQ9umGYaXa4BDBQh5XuQmITTVWdn7FKM";

describe('hello', () => {
    it('shows translation list', async () => {
        const translations = await fetchTranslations(SHEET_ID, {
            sheetName: "test",
        });
        expect(translations["test"]).toEqual([
            {
                sheet: "test",
                row: 2,
                TAG: "TEST_TAG",
                TIME: undefined,
                VALUE: "This is a test",
            }
        ]);
    });

    it('return one string for a tag', async () => {
        const translator = await getTranslator({ sheetId: SHEET_ID, sheetName: "test" });
        expect(translator.translate("TEST_TAG")).toBe("This is a test");
    });
});
