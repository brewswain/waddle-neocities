import { PostMetaDataProp, getAllPostsMetaData } from "@/app/dev-blog/utils";

import Navbar from "@/components/Navigation/Navbar";

import PostsContainer from "@/components/DevBlog/PostsContainer";
import TagSelection from "@/components/Tags/TagSelection";

const DevBlog = async () => {
  const posts: PostMetaDataProp[] = await getAllPostsMetaData();

  return (
    <main className="min-h-dvh bg-slate-100">
      <Navbar />
      <TagSelection />
      <PostsContainer posts={posts} />
    </main>
  );
};

export default DevBlog;
