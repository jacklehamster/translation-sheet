# translation-sheet

[![npm version](https://badge.fury.io/js/@dobuki%2Ftranslation-sheet.svg)](https://www.npmjs.com/package/@dobuki/translation-sheet)

Use google sheet to store KEY->VALUE for translations.

![icon](icon.png)

## Setup Google Sheets API

Under the hood, this uses Google sheet API. So you'll need to set it up.

Follow these instructions: [Google Sheet API setup](https://github.com/jacklehamster/google-sheet-db?tab=readme-ov-file#setup)

## Google Sheet format

Your sheet must be formatted like this sample sheet:
<https://docs.google.com/spreadsheets/d/1VwYU7nTSlwhi2iBSFvYBnuhxPUJdIYwE9qbKuVwDk04>

Include the following columns:

- **TAG**: Tag representing a string.
- **VALUE**: Text in default language.

Other lang can be used.

Note: Don't share the spreadsheetID, keep in hidden and authorize your Google Cloud Api to access it.

## Usage

```javascript
  const translator = await getTranslator({ sheetId: SHEET_ID, sheetName: "test" });
  expect(translator.translate("TEST_TAG")).toBe("This is a test");
```
