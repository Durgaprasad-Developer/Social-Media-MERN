import React from "react";

function StoryList() {
  const stories = [
    "https://i.pravatar.cc/150?img=20",
    "https://i.pravatar.cc/150?img=21",
    "https://i.pravatar.cc/150?img=22",
    "https://i.pravatar.cc/150?img=23",
    "https://i.pravatar.cc/150?img=24",
  ];

  return (
    <div className="flex gap-4 p-4 bg-gradient-to-r from-gray-900 to-black rounded-2xl shadow-md overflow-x-auto scrollbar-hide">
      {stories.map((img, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
            <img
              src={img}
              alt="story"
              className="w-full h-full rounded-full border-2 border-black"
            />
          </div>
          <p className="text-xs mt-1 opacity-80">User {idx + 1}</p>
        </div>
      ))}
    </div>
  );
}

export default StoryList;
