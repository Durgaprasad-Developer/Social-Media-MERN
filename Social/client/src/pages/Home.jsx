import React from "react";
import Navbar from "../components/NavBar";
import StoryList from "../components/StoryList";
import PostCard from "../components/PostCard";
import Suggestions from "../components/Suggestions";
import { Home, Search, PlusSquare, Bell, User } from "lucide-react";

function HomePage() {
  const posts = [
    {
      name: "John Doe",
      time: "2h ago",
      text: "Loving the new design of Vibbly 🚀✨",
      img: "https://i.pravatar.cc/150?img=30",
    },
    {
      name: "Jane Smith",
      time: "5h ago",
      text: "Just finished my first project with React & Tailwind 💻🔥",
      img: "https://i.pravatar.cc/150?img=31",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black flex flex-col text-white">
      <Navbar />

      {/* Main */}
      <div className="flex-1 w-full flex justify-center py-6 px-4">
        <div className="w-full lg:max-w-[70%] flex gap-6">
          {/* Feed */}
          <div className="w-full lg:w-[65%] flex flex-col gap-6">
            <StoryList />
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:flex w-[35%] bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex-col justify-start items-center text-white gap-6 p-6 rounded-2xl shadow-2xl">
            <Suggestions />
          </div>
        </div>
      </div>

      {/* Bottom Nav (Mobile) */}
      <div className="fixed bottom-0 w-full bg-black border-t border-gray-800 flex justify-around items-center py-3 lg:hidden">
        <Home className="w-6 h-6 text-white" />
        <Search className="w-6 h-6 text-white" />
        <PlusSquare className="w-6 h-6 text-white" />
        <Bell className="w-6 h-6 text-white" />
        <User className="w-6 h-6 text-white" />
      </div>
    </div>
  );
}

export default HomePage;
