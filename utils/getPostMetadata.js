import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basePath) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // get the file data
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      featured_image: matterResult.data.featured_image || "/images/default.jpg",
      date: matterResult.data.date,
      read_time: matterResult.data.read_time,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;
}
