interface PlaylistGeneratorProps {
  user: SpotifyApi.UserProfileResponse | undefined;
}

const PlaylistGenerator = ({ user }: PlaylistGeneratorProps) => {
  console.log({ user });
  if (!user)
    return (
      <>
        <button onClick={() => {}}>Sign In</button>
      </>
    );
  return <div>Authenticated!</div>;
};

export default PlaylistGenerator;
