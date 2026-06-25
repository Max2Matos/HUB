"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import AppCard from "@/components/AppCard";
import StatsBar from "@/components/StatsBar";
import { APPS, CATEGORIES } from "@/lib/apps";
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Toutes");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"name" | "date" | "category">("date");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Toutes: APPS.length };
    APPS.forEach((app) => {
      counts[app.category] = (counts[app.category] ?? 0) + 1;
    });
    return counts;
  }, []);

  const filtered = useMemo(() => {
    let result = APPS;

    if (selectedCategory !== "Toutes") {
      result = result.filter((app) => app.category === selectedCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (app) =>
          app.name.toLowerCase().includes(q) ||
          app.description.toLowerCase().includes(q) ||
          app.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return [...result].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name, "fr");
      if (sortBy === "date")
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      if (sortBy === "category") return a.category.localeCompare(b.category, "fr");
      return 0;
    });
  }, [search, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50/70">
      <Header search={search} onSearch={setSearch} totalApps={APPS.length} />

      <main className="max-w-screen-xl mx-auto px-6 py-8 flex gap-8">
        <Sidebar
          categories={CATEGORIES}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          counts={categoryCounts}
        />

        <div className="flex-1 min-w-0 flex flex-col gap-6">
          <StatsBar apps={APPS} />

          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {selectedCategory === "Toutes"
                  ? "Toutes les applications"
                  : selectedCategory}
              </h1>
              <p className="text-sm text-gray-500 mt-0.5">
                {filtered.length} application{filtered.length !== 1 ? "s" : ""}
                {search ? ` pour "${search}"` : ""}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-xl px-3 py-2">
                <SlidersHorizontal size={13} className="text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="text-xs font-medium text-gray-600 bg-transparent focus:outline-none cursor-pointer"
                >
                  <option value="date">Plus récent</option>
                  <option value="name">A → Z</option>
                  <option value="category">Catégorie</option>
                </select>
              </div>

              <div className="flex items-center bg-white border border-gray-200 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === "grid"
                      ? "bg-gray-900 text-white shadow-sm"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <LayoutGrid size={14} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === "list"
                      ? "bg-gray-900 text-white shadow-sm"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <List size={14} />
                </button>
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                <LayoutGrid size={28} className="text-gray-300" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-700">Aucune application trouvée</p>
                <p className="text-sm text-gray-400 mt-1">
                  Essayez de modifier votre recherche ou la catégorie sélectionnée.
                </p>
              </div>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                  : "flex flex-col gap-3"
              }
            >
              {filtered.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
