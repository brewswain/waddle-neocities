"use client";

interface PostCardProps {
  title: string;
  publishDate: string;
  tags?: string[];
}

const PostCard = ({ title, publishDate, tags }: PostCardProps) => {
  const handleClick = (event: MouseEvent | KeyboardEvent) => {
    event.preventDefault();

    const clickedTarget = event.target.textContent;
    const formattedTag = clickedTarget.substring(1);

    console.log(formattedTag);
  };
  return (
    <article className="relative rounded m-3 shadow-md w-[300px] flex-wrap h-[100px] sm:h-[130px] items-center flex flex-col justify-center bg-white transition hover:bg-cyan-100">
      <h1 className="text-xl font-medium">{title}</h1>
      <p className="text-sm">{publishDate}</p>

      <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 px-1 pt-4">
        {tags && tags?.length > 0
          ? tags?.map((tag) => (
              <span
                className="text-sm text-slate-300 bg-slate-700 px-2
                 rounded-2xl hover:bg-slate-500 hover:text-slate-100 z-[2]"
                onClick={(event) => handleClick(event)}
                onKeyDown={(event) => handleClick(event)}
                key={crypto.randomUUID()}
              >
                #{tag}
              </span>
            ))
          : null}
      </div>
    </article>
  );
};
export default PostCard;
