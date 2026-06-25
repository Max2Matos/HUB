"use client";

import {
  FileBarChart,
  TrendingUp,
  MessageSquare,
  RefreshCw,
  Filter,
  CheckSquare,
  Database,
  Bell,
  ExternalLink,
  Zap,
  LucideIcon,
} from "lucide-react";
import { AppItem, AppStatus } from "@/types";
import { STATUS_CONFIG } from "@/lib/apps";

const ICON_MAP: Record<string, LucideIcon> = {
  FileBarChart,
  TrendingUp,
  MessageSquare,
  RefreshCw,
  Filter,
  CheckSquare,
  Database,
  Bell,
};

interface AppCardProps {
  app: AppItem;
}

export default function AppCard({ app }: AppCardProps) {
  const Icon = ICON_MAP[app.icon] ?? Bell;
  const statusConfig = STATUS_CONFIG[app.status as AppStatus];

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${app.color}, ${app.color}88)` }}
      />

      <div className="flex items-start justify-between">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${app.color}15` }}
        >
          <Icon size={22} style={{ color: app.color }} strokeWidth={1.8} />
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          {app.usesN8N && (
            <span className="flex items-center gap-1 text-xs font-medium text-violet-600 bg-violet-50 border border-violet-200 px-2 py-0.5 rounded-full">
              <Zap size={10} />
              N8N
            </span>
          )}
          <span className={`text-xs font-medium border px-2 py-0.5 rounded-full ${statusConfig.color}`}>
            {statusConfig.label}
          </span>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 text-base leading-snug mb-1.5">{app.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{app.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {app.tags.map((tag) => (
          <span key={tag} className="text-xs text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md font-medium">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-gray-50">
        <span className="text-xs text-gray-400">
          {new Date(app.createdAt).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        <a
          href={app.url}
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 text-white"
          style={{ backgroundColor: app.color }}
          onClick={(e) => e.stopPropagation()}
        >
          Ouvrir
          <ExternalLink size={11} />
        </a>
      </div>
    </div>
  );
}
