"use client";

import React, { useRef, useState, useEffect } from "react";
import StatContainer from "./StatContainer";
import { formatNumber } from "../utils/utils";
import { getAllPlayerData, getPlayerStats } from "../_lib/steam_info";

export default function InteractiveGameCard({
  appid,
  game_name,
  game_playtime,
  game_last_played,
  children,
}) {
  const cardRef = useRef(null);
  const [gradientColors, setGradientColors] = useState([
    "#5C4CD4", // Start color
    "#7D65E5", // Second color
    "#846BEA", // Third color
    "#9377F3", // End color
  ]);
  const [stats, setStats] = useState(null);
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playerStats = await getPlayerStats(appid); // Fetch player stats
        const allPlayerData = await getAllPlayerData(appid); // Fetch all player data
        setStats(playerStats);
        setPlayerData(allPlayerData);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, [appid]); // Run the effect when the appid changes

  const generateDynamicGradient = (x, y) => {
    const hueShift = (x + y) % 360; // Create a dynamic hue shift
    const newColors = gradientColors.map((color, index) => {
      const colorHue = (hueShift + index * 90) % 360; // Change the shift for each color
      return `hsl(${colorHue}, 70%, 60%)`; // Return a new color with HSL
    });
    return newColors;
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;

    // Get card's size and position
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100; // X position in percentage
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Y position in percentage

    // Rotate the card based on cursor position
    const rotateX = (y / 100 - 0.5) * -15; // Adjusted for max rotation on X axis
    const rotateY = (x / 100 - 0.5) * 15; // Adjusted for max rotation on Y axis

    // Update gradient colors based on mouse position
    const dynamicColors = generateDynamicGradient(x, y);
    card.style.background = `linear-gradient(135deg, ${dynamicColors.join(
      ", "
    )})`;
    card.style.boxShadow = `0 0 20px rgba(255, 255, 255, 0.8)`; // Stronger glow effect

    // Apply 3D rotation immediately without transition delay
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    // Reset transformation and background when the mouse leaves
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    card.style.background = `linear-gradient(135deg, ${gradientColors.join(
      ", "
    )})`; // Reset to original gradient
    card.style.boxShadow = `none`; // Remove glow effect
  };

  return (
    <div
      ref={cardRef}
      className="h-52 w-full p-2 rounded-lg cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: `linear-gradient(135deg, ${gradientColors.join(", ")})`, // Default gradient
        transition: "background 2.5s ease, box-shadow 0.5s ease", // Transition for background and box-shadow
      }}
    >
      <div className="grid grid-cols-6 h-full ">
        <div className="flex flex-col col-span-2 justify-center items-center h-full text-center gap-2">
          <img
            src={`https://media.steampowered.com/steam/apps/${appid}/capsule_231x87.jpg`}
            alt={game_name}
            className="w-16 h-16 rounded-md object-cover border-2"
          />
          <h2 className="font-bold text-sm">{game_name}</h2>
          <p className="text-xs text-stone-50">
            Last Played:{" "}
            {new Date(game_last_played * 1000).toLocaleDateString()}
          </p>
          <p className="text-xs text-stone-50">
            total time played:{game_playtime}
          </p>
        </div>

        <div className="ml-4 col-span-4 h-full">
          <div className="ml-4 col-span-4 h-full">
            <div className="grid grid-cols-2 gap-2">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
