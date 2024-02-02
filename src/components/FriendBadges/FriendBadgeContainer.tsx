import FriendBadge from "./FriendBadge";

const FriendBadgeContainer = () => {
  const temporaryBadgeData = [
    // {
    //   blogUrl: "https://waddle.neocities.org",
    //   imageUrl: "https://i.imgur.com/BwkY6WR.png",
    //   blogName: "blee",
    // },
    {
      blogUrl: "https://seafare.neocities.org/",
      imageUrl: "https://i.imgur.com/WAFA65o.png",
      blogName: "jamie",
    },
    {
      blogUrl: "https://killdragons.neocities.org",
      imageUrl:
        "https://killdragons.neocities.org/images/killdragons_button2.png",
      blogName: "cody",
    },
  ];

  return (
    <div className="friend-badge__container m-4 flex gap-1">
      {temporaryBadgeData
        ? temporaryBadgeData.map((blogDetails) => (
            <FriendBadge
              key={crypto.randomUUID()}
              blogUrl={blogDetails.blogUrl}
              blogName={blogDetails.blogName}
              imagueUrl={blogDetails.imageUrl}
            />
          ))
        : null}
    </div>
  );
};
export default FriendBadgeContainer;
