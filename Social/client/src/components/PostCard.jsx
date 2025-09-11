import React from "react";

function PostCard({ name, time, text, img }) {
  return (
    <div className="w-full bg-gray-900 border border-gray-800 rounded-2xl shadow-md p-4 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center gap-3">
        <img src={img} alt="user" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-gray-400">{time}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-sm text-gray-200">{text}</p>
      <div className="w-full h-64 rounded-lg bg-gray-700"></div>

      {/* Actions */}
      <div className="flex justify-between text-sm text-gray-400 mt-2">
        <span>❤️ 120</span>
        <span>💬 45</span>
        <span>🔗 Share</span>
      </div>
    </div>
  );
}

export default PostCard;
