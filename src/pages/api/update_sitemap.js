import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "public", "sitemap.xml");
  const xml = fs.readFileSync(filePath, "utf8");
  fs.writeFileSync(filePath, req?.body, 'utf8');
  res.send("success");
}