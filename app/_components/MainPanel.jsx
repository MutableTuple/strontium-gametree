import React from "react";
import {
  getAllGameIds,
  getAllPlayerData,
  getOwnedGames,
  getPlayerAchievements,
  getPlayerStats,
} from "../_lib/steam_info";
import InteractiveGameCard from "./InteractiveGameCard";
import StatContainer from "./StatContainer";

export default async function MainPanel() {
  const allPlayerData = await getAllPlayerData();
  const allGames = await getOwnedGames();
  const totalHoursForever = allGames.reduce(
    (total, game) => total + game.playtime_forever,
    0
  );
  const totalHours = totalHoursForever / 60;
  console.log("ALL GAMES 2", allGames);

  return (
    <div className="flex flex-col my-8 gap-8 mx-8">
      {/* <h1 className="text-5xl font-bold">Oleksandr Olehovych Kostyliev,</h1> */}
      <div className="grid grid-cols-2 gap-8 justify-end">
        {allGames
          .sort((a, b) => b.playtime_forever - a.playtime_forever) // Sort by playtime_forever in descending order
          .map((game) => (
            <InteractiveGameCard
              key={game.appid} // Add a unique key for each card
              appid={game.appid}
              game_name={game.name}
              game_last_played={game.rtime_last_played}
              game_playtime={`${(game.playtime_forever / 60).toFixed(2)} hrs`} // Display playtime_forever
              player_data={allPlayerData}
            >
              {/* Pass StatContainer as a child */}
              <StatContainer appId={game.appid} />
            </InteractiveGameCard>
          ))}
      </div>
    </div>
  );
}
