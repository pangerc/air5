// server/api/mentions.ts

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const serviceAccountAuth = new JWT({
    email: config.googleServiceAccountEmail,
    key: config.googlePrivateKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const doc = new GoogleSpreadsheet(config.googleSheetId, serviceAccountAuth);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  const mentions = rows.map((row) => ({
    date: row.get("date"),
    title: row.get("title"),
    publication: row.get("publication"),
    url: row.get("url"),
  }));

  // Sort the mentions array in reverse chronological order
  mentions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return mentions;
});
