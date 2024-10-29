// app/components/StatContainer.js (server component)

import { getPlayerStats } from "../_lib/steam_info";
import { formatNumber } from "../utils/utils";

export default async function StatContainer({ appId }) {
  const data = await getPlayerStats(appId); // Use appId passed as a prop
  if (!data || data.length === 0) {
    return <p>No stats for game.</p>; // Handle case where no data is available
  }

  return (
    <>
      {data.slice(0, 6).map((stat, index) => (
        <div
          key={index}
          className="text-center bg-stone-950/20 backdrop-blur-xl p-2 rounded-md w-full"
        >
          <h1 className="font-bold text-center text-lg">
            {formatNumber(stat.value)}
          </h1>
          <p className="text-xs text-center">
            {stat.name.length > 12 ? `${stat.name.slice(0, 20)}...` : stat.name}
          </p>
        </div>
      ))}
    </>
  );
}
