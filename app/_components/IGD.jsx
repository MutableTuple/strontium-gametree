// "use client";

// import React, { useEffect, useRef, useState } from "react";

// export default function InteractiveGameCard({
//   appid,
//   game_name,
//   game_playtime,
//   game_image,
//   game_last_played,
// }) {
//   const cardRef = useRef(null);
//   const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
//   const [gradientColors, setGradientColors] = useState([
//     "#2794D7",
//     "#EC1155",
//     "#E2D32F",
//   ]); // Initial gradient colors

//   const generateColors = (x, y) => {
//     // Generate colors based on mouse position
//     const hue1 = (x * 3.6) % 360; // Color 1 based on X position
//     const hue2 = (y * 3.6) % 360; // Color 2 based on Y position
//     const hue3 = (hue1 + hue2 + 120) % 360; // Color 3 based on X and Y

//     return [
//       `hsl(${hue1}, 100%, 50%)`,
//       `hsl(${hue2}, 100%, 50%)`,
//       `hsl(${hue3}, 100%, 50%)`,
//     ];
//   };

//   const handleMouseMove = (e) => {
//     const card = cardRef.current;

//     // Get card's size and position
//     const rect = card.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100; // X position in percentage
//     const y = ((e.clientY - rect.top) / rect.height) * 100; // Y position in percentage

//     // Set gradient position based on mouse position
//     setGradientPosition({ x, y });

//     // Update gradient colors based on mouse position
//     const colors = generateColors(x, y);
//     setGradientColors(colors);

//     // Rotate the card based on cursor position
//     const rotateX = (y / 100 - 0.5) * -15; // Adjusted for max rotation on X axis
//     const rotateY = (x / 100 - 0.5) * 15; // Adjusted for max rotation on Y axis

//     // Apply 3D rotation and a scale effect to the card
//     card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
//   };

//   const handleMouseLeave = () => {
//     const card = cardRef.current;

//     // Reset transformation when the mouse leaves
//     card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;

//     // Reset gradient position
//     setGradientPosition({ x: 50, y: 50 });
//   };

//   return (
//     <div
//       ref={cardRef}
//       className="h-52 w-96 border-2 p-2 rounded-lg  cursor-pointer"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         background: `linear-gradient(${gradientPosition.y}deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`,
//       }}
//     >
//       <div className="flex items-center">
//         <img
//           src={`https://media.steampowered.com/steam/apps/${appid}/capsule_231x87.jpg`}
//           alt={game_name}
//           className="w-16 h-16 rounded-md"
//         />
//         <div className="ml-4">
//           <h2 className="font-bold text-lg">{game_name}</h2>
//           <p className="text-sm">Playtime: {game_playtime} hours</p>
//           <p className="text-xs text-gray-500">
//             Last Played:{" "}
//             {new Date(game_last_played * 1000).toLocaleDateString()}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
