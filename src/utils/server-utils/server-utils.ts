// "use server";

// import fs from "fs"; // Import Node.js filesystem module

// export const writeToFile = async (data: SpotifyApi.UsersTopTracksResponse) => {
//   await fs.writeFile("topTracks.json", JSON.stringify(data), (error) => {
//     if (error) {
//       console.error(error);
//     } else {
//       //   console.log("File written successfully\n");
//       //   console.log("The written has the following contents:");
//       //   console.log(fs.readFileSync("topTracks.json", "utf8"));
//     }
//   });

//   return;
// };

// export const readTopTracks = async () => {
//   return await fs.readFileSync("topTracks.json", "utf8");
// };
