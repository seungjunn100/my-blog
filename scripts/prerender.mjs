import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const clientDir = path.resolve(rootDir, "dist");
const serverEntryPath = path.resolve(rootDir, "dist-server/entry-server.js");
const templatePath = path.resolve(clientDir, "index.html");

const template = await fs.readFile(templatePath, "utf-8");
const { render, getPrerenderRoutes } = await import(pathToFileURL(serverEntryPath));

const routes = getPrerenderRoutes();

for (const url of routes) {
  const { appHtml, headTags } = await render(url);

  const finalHtml = template
    .replace("<!--app-head-->", headTags)
    .replace("<!--app-html-->", appHtml);

  const filePath =
    url === "/"
      ? path.join(clientDir, "index.html")
      : path.join(clientDir, url, "index.html");

  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, finalHtml, "utf-8");
}

console.log("prerender complete");