import Link from "next/link";

import ConsoleCowBoy from "@/blog-templates/ConsoleCowBoy";

import { getAllPostsMetaData, getPostBySlug } from "../utils";

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const { content } = await getPageContent(params.slug);

  return (
    <main>
      <section className="blog__container bg-blue-400 sm:flex justify-center">
        <div className="content__wrapper prose sm:flex sm:justify-center">
          <ConsoleCowBoy>{content}</ConsoleCowBoy>
        </div>
      </section>
      <Link href="/" className="fixed bottom-2 right-4">
        <button
          type="button"
          className="bg-white rounded p-4 border border-black"
        >
          Home
        </button>
      </Link>
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
