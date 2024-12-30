import path from "path";
import fs from "fs";
import matter from "gray-matter";

interface PostMetadata {
  title: string
  date: string
  subtitle: string
  slug: string
  tags: string[]
}

const getPostMetadata = (): PostMetadata[] => {
  const postsDirectory = path.join(process.cwd(), 'posts/');
  const files = fs.readdirSync(postsDirectory);
  const markdownPosts = files.filter((file: string) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName: string) => {
    const fileContents = fs.readFileSync(`${postsDirectory}/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      tags: matterResult.data.tags,
    };
  });

  return posts;
}

export default getPostMetadata;
