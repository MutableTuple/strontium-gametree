import { supabase } from "./supabase";

const steamApiKey = "B3677783995276D53FF9FCECC4B13F55";
const steamId = "76561199156182852"; // Your SteamID64 (a 17-digit number)
const appId = 730;
export async function getPlayerStats(appId, steamApiKey, steamId) {
  const url = `https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?key=${steamApiKey}&steamid=${steamId}&appid=${appId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.playerstats && data.playerstats.stats) {
      const stats = data.playerstats.stats;
      await createColumnsAndInsertStats(stats); // Create columns and insert stats into Supabase
      return data; // Return the data for further use
    } else {
      console.error("No stats found for the player.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching player stats:", error);
    return null; // Return null on error
  }
}

// Function to create columns and insert stats dynamically in Supabase
async function createColumnsAndInsertStats(stats) {
  try {
    for (const stat of stats) {
      const columnName = stat.name; // Get stat name
      const columnValue = stat.value; // Get stat value

      // Check if the column exists before creating it
      const { data: columnExists } = await supabase
        .from("pg_catalog.pg_attribute")
        .select("*")
        .eq("attname", columnName)
        .eq("attrelid", "stats" + "::regclass"); // Replace with your table name

      if (!columnExists) {
        // If the column does not exist, create it dynamically
        await supabase.rpc("sql", {
          query: `
              ALTER TABLE your_table_name
              ADD COLUMN IF NOT EXISTS ${columnName} INTEGER;
            `,
        });
      }

      // Insert the stat value into the corresponding column
      await supabase.from("your_table_name").insert({
        [columnName]: columnValue,
      });
    }
    console.log("Columns created and stats inserted successfully.");
  } catch (error) {
    console.error("Error creating columns or inserting stats:", error);
  }
}

getPlayerStats();
