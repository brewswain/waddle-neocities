import Link from "next/link";

import { PostMetaDataProp, getAllPostsMetaData } from "./utils";
import PostCard from "@/components/PostCard/PostCard";
import Navbar from "@/components/Navigation/Navbar";

const DevBlog = async () => {
  const posts: PostMetaDataProp[] = await getAllPostsMetaData();

  return (
    <main className="bg-slate-100 min-h-dvh">
      <Navbar />
      <section className="gap-4 p-4">
        {posts.map((post) => {
          return (
            <Link href={`dev-blog/${post.slug}.html`} key={post.slug}>
              <PostCard title={post.title} publishDate={post.publishDate} />
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default DevBlog;
