import React from "react";

function Suggestions() {
  const users = [
    { name: "Alex Johnson", img: "https://i.pravatar.cc/150?img=11" },
    { name: "Emily Davis", img: "https://i.pravatar.cc/150?img=12" },
    { name: "Michael Lee", img: "https://i.pravatar.cc/150?img=13" },
  ];

  return (
    <div className="w-full">
      <p className="font-semibold text-sm mb-3 opacity-90">Suggested for you</p>
      <div className="flex flex-col gap-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition rounded-xl p-2"
          >
            <div className="flex items-center gap-3">
              <img
                src={user.img}
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <p className="text-sm">{user.name}</p>
            </div>
            <button className="text-xs bg-white text-indigo-600 px-3 py-1 rounded-lg font-semibold hover:bg-indigo-100 transition">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
