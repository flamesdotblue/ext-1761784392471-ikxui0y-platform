import React from 'react';
import { Rocket, Search, Bell, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-slate-900">IdeaSphere</span>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search ideas, subjects, or classmates"
              className="w-full pl-9 pr-3 py-2 rounded-xl border bg-white/80 focus:bg-white outline-none focus:ring-2 ring-indigo-200 text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-xl border hover:bg-slate-50 text-sm">
            <User size={16} />
            Sign in
          </button>
          <button className="p-2 rounded-xl border hover:bg-slate-50" aria-label="Notifications">
            <Bell size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
