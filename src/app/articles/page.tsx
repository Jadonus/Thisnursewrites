const articlearray = ["/Test Article.md", "/Test Article 2.md"];
import dynamic from "next/dynamic";

const DynamicNav = dynamic(() => import("@/components/ui/Nav"), { ssr: false });
import path from "path";
import fs from "fs/promises";
import Link from "next/link";
const article = `# Hello World!
 This is An article`;
let sh = require("showdown");
let converter = new sh.Converter();
let html = converter.makeHtml(article);
export default function Articlespage() {
  return (
    <>
      <DynamicNav />

      <div className="h-screen ">
        {articlearray.map(async (articlePath) => {
          const fullPath = path.join(process.cwd(), "public", articlePath);
          const articleContent = await fs.readFile(fullPath, "utf8");
          const html = converter.makeHtml(articleContent);

          return (
            <div
              key={articlePath}
              dangerouslySetInnerHTML={{ __html: html }}
              className="prose m-12 bg-gray-100"
            />
          );
        })}
      </div>
    </>
  );
}
