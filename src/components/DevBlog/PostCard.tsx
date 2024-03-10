import TagsContainer from "../Tags/TagsContainer";

interface PostCardProps {
  title: string;
  publishDate: string;
  tags?: string[];
}

const PostCard = ({ title, publishDate, tags }: PostCardProps) => {
  return (
    <article className="relative m-3 flex min-h-[100px] w-[300px] flex-col flex-wrap items-center justify-center rounded bg-white shadow-md transition hover:bg-cyan-100 sm:h-[130px]">
      <h1 className="text-xl font-medium">{title}</h1>
      <p className="text-sm">{publishDate}</p>

      {tags ? <TagsContainer tags={tags} /> : null}
    </article>
  );
};
export default PostCard;
