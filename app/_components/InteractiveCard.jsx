"use client";

import React, { useRef } from "react";

export default function InteractiveCard({ game_data }) {
  // GAME DATA
  const TOTAL_GAMES_OWNED = game_data.length;
  const TOTAL_GAMES_HOURS = game_data.reduce((total, game) => {
    // Add playtime in hours
    return total + game.playtime_forever / 60;
  }, 0); // Initialize total to 0

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;

    // Get card's size and position
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100; // X position in percentage
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Y position in percentage

    // Rotate the card based on cursor position
    const rotateX = (y / 100 - 0.5) * -15; // Adjusted for max rotation on X axis
    const rotateY = (x / 100 - 0.5) * 15; // Adjusted for max rotation on Y axis

    // Apply 3D rotation and a scale effect to the card
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    // Uplift text elements to match the 3D feel
    const textElements = card.querySelectorAll(".text-uplift");
    textElements.forEach((text) => {
      text.style.transform = `translateZ(20px) perspective(1000px)`;
      text.style.transition = "transform 0.3s ease-out";
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;

    // Reset transformation when the mouse leaves
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;

    // Reset text uplift
    const textElements = card.querySelectorAll(".text-uplift");
    textElements.forEach((text) => {
      text.style.transform = `translateZ(0px)`;
      text.style.transition = "transform 0.3s ease-out";
    });
  };

  return (
    <div
      ref={cardRef}
      className="h-48 w-full custom-shadow-3 transition-transform duration-300 ease-out cursor-pointer "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-full w-full backdrop-blur-lg grid grid-cols-2 grid-rows-2 rounded-lg">
        <div className="flex  justify-center flex-col">
          <h1 className="font-bold text-4xl text-uplift">
            {TOTAL_GAMES_OWNED}+
          </h1>
          <p className="uppercase text-xs text-uplift">games played</p>
        </div>
        <div className="flex  justify-center flex-col">
          <h1 className="font-bold text-4xl text-uplift">
            {TOTAL_GAMES_HOURS.toFixed(2)}+
          </h1>
          <p className="uppercase text-xs text-uplift">hours played</p>
        </div>
        <div className="flex  justify-center flex-col">
          <h1 className="font-bold text-4xl text-uplift">2.8M+</h1>
          <p className="uppercase text-xs text-uplift">headshots</p>
        </div>
        <div className="flex  justify-center flex-col">
          <h1 className="font-bold text-4xl text-uplift">3B+</h1>
          <p className="uppercase text-xs text-uplift">Kills</p>
        </div>
      </div>
    </div>
  );
}
