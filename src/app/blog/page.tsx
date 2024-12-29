import fs from "fs";
import Link from "next/link";
import path from 'path';
import matter from "gray-matter";

interface PostMetadata {
  title: string,
  date: string,
  subtitle: string,
  slug: string
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

export default function BlogPage() {
  const postMetadata = getPostMetadata();
  postMetadata.sort((postA, postB) => {
    const dateA = new Date(postA.date)
    const dateB = new Date(postB.date)
    return Number(dateB) - Number(dateA);
  } );

  const postPreview = postMetadata.map((post: PostMetadata) => (
    <div key={post.slug} className="mb-12" >
      <div className="mb-1">
        <Link href={"blog/" + post.slug} className="font-bold text-xl hover:underline">{post.title}</Link>
        <p className="text-sm text-gray-500">
          {post.date}
        </p>
      </div>
      <p className="text-gray-300 line-clamp-3">{post.subtitle}</p>
    </div>
  ))
  return (
    <div>
      <div>
        {postPreview}
      </div>
    </div>
  )
}