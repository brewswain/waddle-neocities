import ConsoleCowBoy from "@/blog-templates/ConsoleCowBoy";

import { getAllPostsMetaData, getPostBySlug } from "../utils";
import ScrollableNavbar from "@/components/Navigation/ScrollableNavbar";

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const { content } = await getPageContent(params.slug);

  return (
    <main>
      <ScrollableNavbar />
      <section className="blog__container justify-center bg-blue-400 pt-12 sm:flex">
        <div className="content__wrapper prose sm:flex sm:justify-center">
          <ConsoleCowBoy>{content}</ConsoleCowBoy>
        </div>
      </section>
    </main>
  );
};

export async function generateStaticParams() {
  const posts = await getAllPostsMetaData();

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

export default BlogPostPage;
