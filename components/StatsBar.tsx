"use client";

import { Zap, CheckCircle, FlaskConical, Wrench } from "lucide-react";
import { AppItem } from "@/types";

interface StatsBarProps {
  apps: AppItem[];
}

export default function StatsBar({ apps }: StatsBarProps) {
  const active = apps.filter((a) => a.status === "active").length;
  const withN8N = apps.filter((a) => a.usesN8N).length;
  const beta = apps.filter((a) => a.status === "beta").length;
  const maintenance = apps.filter((a) => a.status === "maintenance").length;

  const stats = [
    { label: "Applications actives", value: active, icon: CheckCircle, color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "Propulsées par N8N", value: withN8N, icon: Zap, color: "text-violet-500", bg: "bg-violet-50" },
    { label: "En bêta", value: beta, icon: FlaskConical, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "En maintenance", value: maintenance, icon: Wrench, color: "text-red-400", bg: "bg-red-50" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.label} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3">
            <div className={`w-9 h-9 rounded-lg ${s.bg} flex items-center justify-center flex-shrink-0`}>
              <Icon size={17} className={s.color} strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900 leading-none">{s.value}</p>
              <p className="text-xs text-gray-500 mt-0.5 leading-snug">{s.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
