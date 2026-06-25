"use client";

import { Search, Command, Bell, User } from "lucide-react";

interface HeaderProps {
  search: string;
  onSearch: (v: string) => void;
  totalApps: number;
}

export default function Header({ search, onSearch, totalApps }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center gap-6">
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
            <Command size={14} className="text-white" strokeWidth={2.5} />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-bold text-gray-900 text-base tracking-tight">Hub</span>
            <span className="text-xs font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-md">
              {totalApps} apps
            </span>
          </div>
        </div>

        <div className="flex-1 max-w-lg">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" strokeWidth={2} />
            <input
              type="text"
              placeholder="Rechercher une application..."
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300 placeholder:text-gray-400 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
            <Bell size={16} strokeWidth={1.8} />
          </button>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center cursor-pointer">
            <User size={14} className="text-white" strokeWidth={2} />
          </div>
        </div>
      </div>
    </header>
  );
}
