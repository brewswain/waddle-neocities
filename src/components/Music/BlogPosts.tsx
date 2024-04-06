import Link from "next/link";
import Image from "next/image";

interface BlogPostsProps {
  blogData: SpotifyApi.SingleAlbumResponse[];
}

const BlogPosts = ({ blogData }: BlogPostsProps) => {
  return (
    <section className="flex w-full flex-wrap justify-center pt-10">
      {blogData.map((post) => {
        const artistName =
          post.artists.length > 1
            ? post.artists.map((artist) => artist.name).join(", ")
            : post.artists[0].name;

        return (
          <article
            className="flex max-w-[350px] flex-col rounded-sm"
            key={artistName + post.name}
          >
            <Link href={`/music/review/${post.id}`} className="flex flex-col">
              <Image
                src={post.images[0].url}
                alt={artistName + post.name}
                height={350}
                width={350}
              />
              <div className="px-4 pt-2">
                <div className="text-center">
                  <h1 className="text-2xl font-semibold">{post.name}</h1>
                  <p>{artistName}</p>
                </div>

                <div className="flex h-[40px] flex-wrap gap-1 py-2">
                  {post.genres.length
                    ? post.genres.map((genre) => (
                        <span key={genre} className="rounded bg-blue-500 p-1">
                          {genre}
                        </span>
                      ))
                    : null}
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default BlogPosts;
