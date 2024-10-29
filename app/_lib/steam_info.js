const steamApiKey = "B3677783995276D53FF9FCECC4B13F55";
const steamId = "76561199156182852"; // Your SteamID64 (a 17-digit number)

export async function getOwnedGames() {
  const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${steamApiKey}&steamid=${steamId}&include_appinfo=true&include_played_free_games=false`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const games = data.response.games; // Get the games array

    // Fetch achievements and stats for each game
    const gamesWithStatsAndAchievements = await Promise.all(
      games.map(async (game) => {
        const achievements = await getPlayerAchievements(game.appid); // Fetch achievements for the game
        return {
          ...game,
          achievements,
          stats: achievements.length, // Assuming you want to count the number of achievements
        };
      })
    );

    return gamesWithStatsAndAchievements; // Return the combined data
  } catch (error) {
    console.error("Error fetching owned games:", error);
    return []; // Return an empty array on error
  }
}

export async function getPlayerStats(appId) {
  const url = `https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?key=${steamApiKey}&steamid=${steamId}&appid=${appId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Check if playerstats exist and return the stats array
    if (data && data.playerstats && data.playerstats.stats) {
      return data.playerstats.stats; // Return only the stats array
    } else {
      console.error("No stats found for the game.");
      return []; // Return an empty array if no stats are found
    }
  } catch (error) {
    console.error("Error fetching player stats:", error);
    return null; // Return null on error
  }
}
export async function getPlayerAchievements(appId) {
  const url = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?key=${steamApiKey}&steamid=${steamId}&appid=${appId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data; // Achievements for the game
  } catch (error) {
    console.error("Error fetching player achievements:", error);
    return null; // Return null on error
  }
}

export async function getAllPlayerData() {
  try {
    const ownedGamesResponse = await getOwnedGames();
    const ownedGames = ownedGamesResponse; // Access the games array

    // Use Promise.all to fetch stats and achievements for each game
    const playerData = await Promise.all(
      ownedGames.map(async (game) => {
        const appId = game.appid;
        const name = game.name;
        const achievements = await getPlayerAchievements(appId);
        return {
          appId,
          name, // Include the game name
          achievements,
        };
      })
    );

    return playerData; // Return an array of player data for each game
  } catch (error) {
    console.error("Error fetching all player data:", error);
    return null; // Return null on error
  }
}
