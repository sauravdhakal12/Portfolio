import Link from "next/link";
import getPostMetadata from "../../../utils/getPostMetadata";

interface PostMetadata {
  title: string
  date: string
  subtitle: string
  slug: string
  tags: string[]
}

export default function BlogPage() {
  const postMetadata = getPostMetadata();

  postMetadata.sort((postA, postB) => {
    const dateA = new Date(postA.date)
    const dateB = new Date(postB.date)
    return Number(dateB) - Number(dateA);
  });

  const postPreview = postMetadata.map((post: PostMetadata) => (
    <div key={post.slug} className="mb-12" >
      <div className="mb-1">
        <Link href={"blog/" + post.slug} className="font-bold text-xl hover:underline">{post.title}</Link>
        <p className="text-sm flex mt-1 mb-3">
          <span className="text-gray-500 mr-4">{post.date}</span>
          {post.tags ? post.tags.map((tag) => (
            <span key={tag} className="bg-[#5a6677] px-2 py-0 mr-2 rounded">#{tag}</span>
          ))
            :
            <span key="1" className="bg-[#5a6677] px-2 py-0 mr-2 rounded">#untagged</span>
          }
        </p>
      </div>
      <p className="text-gray-300 line-clamp-3">{post.subtitle}</p>
    </div >
  ))
  return (
    <div>
      <h1 className="text-4xl font-bold mb-14">Blogs</h1>
      <div>
        {postPreview}
      </div>
    </div>
  )
}
