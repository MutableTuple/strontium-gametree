import React from "react";
import InteractiveCard from "./InteractiveCard";
import {
  getOwnedGames,
  getPlayerAchievements,
  getPlayerStats,
  getAllPlayerData,
} from "../_lib/steam_info";
import Socials from "./Socials";
import CreateMyOwnPage from "./CreateMyOwnPage";
import Medals from "./Medals";

export default async function Sidebar() {
  const game_data = await getOwnedGames();
  // const achievemnents = game_data.map((data) => {
  //   return data.achievements.playerstats.achievements;
  // });
  // console.log("ACHIEMENTE", achievemnents);
  return (
    <div className="h-full w-full p-4 ">
      <div className="h-60 w-full aspect-square flex  flex-col  justify-center rounded-lg gap-3">
        <img
          src="https://i.scdn.co/image/ab67616d0000b273ff033ca6e05d4fa078dc22b9"
          alt="user-image"
          className="h-28 w-28 rounded-full object-cover"
        />
        <h1 className="text-xl font-semibold">Cicada 3301 🇺🇦</h1>
        <p className="text-sm">casual CS2 player & easy to beat</p>
      </div>
      <Medals />
      <Socials />
      <InteractiveCard game_data={game_data} />
      <CreateMyOwnPage />
    </div>
  );
}
