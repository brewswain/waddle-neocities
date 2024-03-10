import { PostMetaDataProp, getAllPostsMetaData } from "@/app/dev-blog/utils";

import Navbar from "@/components/Navigation/Navbar";

import PostsContainer from "@/components/DevBlog/PostsContainer";
import TagSelection from "@/components/Tags/TagSelection";
import ScrollableNavbar from "@/components/Navigation/ScrollableNavbar";

const DevBlog = async () => {
  const posts: PostMetaDataProp[] = await getAllPostsMetaData();

  return (
    <main className="min-h-dvh bg-slate-100">
      {/* <Navbar /> */}
      <ScrollableNavbar />
      <section className="pt-10">
        <TagSelection />
        <PostsContainer posts={posts} />
      </section>
    </main>
  );
};

export default DevBlog;
