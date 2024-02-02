import Image from "next/image";

interface FriendBadgeProps {
  blogUrl: string;
  imagueUrl: string;
  blogName: string;
}
const FriendBadge = ({ blogUrl, imagueUrl, blogName }: FriendBadgeProps) => {
  return (
    <a href={blogUrl} target="_blank" rel="noreferrer">
      <Image
        src={imagueUrl}
        alt={`A button that links to ${blogName}'s neocities blog`}
        width={88}
        height={31}
      />
    </a>
  );
};

export default FriendBadge;
