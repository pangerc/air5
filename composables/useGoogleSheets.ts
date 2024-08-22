// composables/useGoogleSheets.ts

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export const useGoogleSheets = () => {
  const config = useRuntimeConfig();

  const fetchSheetData = async (sheetId: string) => {
    const serviceAccountAuth = new JWT({
      email: config.googleServiceAccountEmail,
      key: config.googlePrivateKey.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    return rows.map((row) => ({
      date: row.get("Date"),
      title: row.get("Title"),
      publication: row.get("Publication"),
      url: row.get("URL"),
    }));
  };

  return {
    fetchSheetData,
  };
};
