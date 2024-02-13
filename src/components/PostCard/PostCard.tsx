interface PostCardProps {
  title: string;
  publishDate: string;
}

const PostCard = ({ title, publishDate }: PostCardProps) => {
  return (
    <article className="rounded m-3 shadow-md max-w-[300px] h-[100px] items-center flex flex-col justify-center bg-white transition hover:bg-cyan-100">
      <h1 className="text-xl font-medium">{title}</h1>
      <p className="text-sm">{publishDate}</p>
    </article>
  );
};
export default PostCard;
