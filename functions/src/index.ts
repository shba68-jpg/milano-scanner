import { onRequest } from "firebase-functions/v1/https";
import * as admin from "firebase-admin";
import cors from "cors";

admin.initializeApp();

const corsHandler = cors({ origin: true });

export const scannerUpload = onRequest(
  (req, res) => {
    corsHandler(req, res, async () => {
      // Only POST
      if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
      }

      // Verify auth token
      const authHeader = req.headers.authorization;
      if (!authHeader?.startsWith("Bearer ")) {
        res.status(401).json({ error: "Missing auth token" });
        return;
      }

      const token = authHeader.slice(7);
      try {
        await admin.auth().verifyIdToken(token);
      } catch {
        res.status(401).json({ error: "Invalid auth token" });
        return;
      }

      // Parse body
      const { filename, data } = req.body as {
        filename?: string;
        data?: string;
      };

      if (!filename || !data) {
        res.status(400).json({ error: "Missing filename or data" });
        return;
      }

      // Validate filename format
      if (!/^[A-Z_]+_\d{4}-\d{2}-\d{2}_\d{6}\.pdf$/.test(filename)) {
        res.status(400).json({ error: "Invalid filename format" });
        return;
      }

      // Decode base64 and upload to GCS
      const pdfBuffer = Buffer.from(data, "base64");
      const bucket = admin.storage().bucket("milano-invoices-v2");
      const file = bucket.file(filename);

      await file.save(pdfBuffer, {
        contentType: "application/pdf",
        metadata: {
          cacheControl: "no-cache",
        },
      });

      res.status(200).json({ ok: true, filename });
    });
  }
);
