"use client";

import {
  LayoutGrid,
  Zap,
  BarChart2,
  MessageSquare,
  Cpu,
  GitMerge,
  Database,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Toutes: LayoutGrid,
  Automatisation: Zap,
  "Analyse & Reporting": BarChart2,
  Communication: MessageSquare,
  "Productivité": Cpu,
  "Intégration": GitMerge,
  "Gestion de données": Database,
  Autre: MoreHorizontal,
};

interface SidebarProps {
  categories: readonly string[];
  selected: string;
  onSelect: (cat: string) => void;
  counts: Record<string, number>;
}

export default function Sidebar({ categories, selected, onSelect, counts }: SidebarProps) {
  return (
    <aside className="w-60 flex-shrink-0 flex flex-col gap-1 pr-2">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-3 mb-2">
        Catégories
      </p>
      {categories.map((cat) => {
        const Icon = CATEGORY_ICONS[cat] ?? MoreHorizontal;
        const isActive = selected === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
              isActive
                ? "bg-gray-900 text-white shadow-md shadow-gray-900/20"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <Icon
              size={16}
              className={isActive ? "text-white" : "text-gray-400 group-hover:text-gray-600"}
              strokeWidth={isActive ? 2.2 : 1.8}
            />
            <span className="flex-1 text-left">{cat}</span>
            <span
              className={`text-xs font-semibold px-1.5 py-0.5 rounded-md min-w-[20px] text-center ${
                isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"
              }`}
            >
              {counts[cat] ?? 0}
            </span>
            {isActive && <ChevronRight size={12} className="text-white/60" />}
          </button>
        );
      })}
    </aside>
  );
}
