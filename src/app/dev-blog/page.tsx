import { PostMetaDataProp, getAllPostsMetaData } from "@/app/dev-blog/utils";

import Navbar from "@/components/Navigation/Navbar";

import PostsContainer from "@/components/DevBlog/PostsContainer";

const DevBlog = async () => {
  const posts: PostMetaDataProp[] = await getAllPostsMetaData();

  return (
    <main className="bg-slate-100 min-h-dvh">
      <PostsContainer posts={posts} />
    </main>
  );
};

export default DevBlog;
