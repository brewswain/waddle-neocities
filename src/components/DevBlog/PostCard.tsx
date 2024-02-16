import TagsContainer from "../Tags/TagsContainer";

interface PostCardProps {
  title: string;
  publishDate: string;
  tags?: string[];
}

const PostCard = ({ title, publishDate, tags }: PostCardProps) => {
  return (
    <article className="relative rounded m-3 shadow-md w-[300px] flex-wrap h-[100px] sm:h-[130px] items-center flex flex-col justify-center bg-white transition hover:bg-cyan-100">
      <h1 className="text-xl font-medium">{title}</h1>
      <p className="text-sm">{publishDate}</p>

      {tags ? <TagsContainer tags={tags} /> : null}
    </article>
  );
};
export default PostCard;
