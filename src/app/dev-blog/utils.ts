import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

const contentDirectory = path.join(
  process.cwd(),
  "src",
  "blog-posts",
  "dev-diaries"
);

interface FrontMatter {
  title: string;
  publishDate: string;
  id?: number;
  tags?: string[];
}

export interface PostMetaDataProp extends FrontMatter {
  slug: string;
}

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(contentDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX<FrontMatter>({
    source: fileContent,

    options: { parseFrontmatter: true },
  });

  return {
    meta: {
      ...frontmatter,
      slug: realSlug,
      title: frontmatter.title,
      publishDate: frontmatter.publishDate,
      id: frontmatter.id,
      tags: frontmatter.tags,
    },
    content,
  };
};

export const getAllPostsMetaData = async () => {
  const files = fs.readdirSync(contentDirectory);

  const posts: PostMetaDataProp[] = [];
  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }
  return posts;
};
