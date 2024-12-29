import fs from "fs";
import path from 'path';
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const postsDirectory = path.join(process.cwd(), 'posts/');
  const postFile = `${postsDirectory}${slug}.md`;
  const postContent = fs.readFileSync(postFile, "utf8");
  const matterResult = matter(postContent);

  return {
    postContent: matterResult.content,
    matterData: matterResult.data
  };
}

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

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;
  const { postContent, matterData } = getPostContent(slug);

  return (
    <div className="text-white w-full">
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold mb-3 ">
          {matterData.title}
        </h1>
        <p className="text-[#aaaaaa] text-lg italic mb-6">
          {matterData.subtitle}
        </p>
        {/* <p>
          {matterData.tags.forEach((element: string)  => (
            <span>{element}</span>
          ))}
        </p> */}
        <p className="text-[#dddddd] text-sm mb-1">
          <span className="bg-[#5a6677] px-1.5 py-0 mr-2 rounded">#demo</span>
        </p>
        <p className="text-[#8c8c8c] text-sm">Posted On <span className="font-bold">{matterData.date.toUpperCase()}</span></p>
      </div>

      <Markdown className="
          leading-relaxed
          lg:leading-7
          lg:text-[16px]
          prose text-[#dddddd] 
          prose-headings:text-[#eeeeee]
          prose-strong:text-[#dddddd]
          mx-auto
        ">
        {postContent}
      </Markdown>
    </div>
  )
}
