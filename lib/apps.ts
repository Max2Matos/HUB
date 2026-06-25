import { AppItem } from "@/types";

export const APPS: AppItem[] = [
  {
    id: "app-001",
    name: "Leases Analysis",
    description:
      "AI-powered lease analysis tool. Upload any lease agreement and ask questions about its clauses in light of local legislation and relevant case law. Get instant, legally-grounded answers without wading through dense legal text.",
    category: "Analyse & Reporting",
    status: "active",
    url: "https://gspoc.app.n8n.cloud/webhook/interface",
    icon: "FileBarChart",
    color: "#3B82F6",
    tags: ["Legal", "AI", "Lease", "Case Law"],
    createdAt: "2026-06-25",
    usesN8N: true,
  },
  {
    id: "app-002",
    name: "Windows Analysis",
    description:
      "Store window compliance checker powered by AI. Analyze window display photos and instantly verify whether the execution meets the brand's Guidelines 2.0 standards — from layout and product placement to visual merchandising rules.",
    category: "Analyse & Reporting",
    status: "active",
    url: "https://gspoc.app.n8n.cloud/webhook/vitrine",
    icon: "CheckSquare",
    color: "#8B5CF6",
    tags: ["Compliance", "AI", "Retail", "Visual Merchandising"],
    createdAt: "2026-06-25",
    usesN8N: true,
  },
  {
    id: "app-003",
    name: "Store Process Assistant",
    description:
      "Copilot agent consolidating all retail processes in one place. Ask any question about in-store procedures and get instant, accurate answers grounded in the existing process documentation — no more digging through manuals.",
    category: "Productivité",
    status: "active",
    url: "https://m365.cloud.microsoft/chat/?titleId=T_f19c6eee-dcff-3b46-bdad-19418b1cf1d2&source=embedded-builder",
    icon: "MessageSquare",
    color: "#10B981",
    tags: ["Copilot", "Retail", "Process", "Q&A"],
    createdAt: "2026-06-25",
    usesN8N: false,
  },
];

export const CATEGORIES = [
  "Toutes",
  "Automatisation",
  "Analyse & Reporting",
  "Communication",
  "Productivité",
  "Intégration",
  "Gestion de données",
  "Autre",
] as const;

export const STATUS_CONFIG = {
  active: { label: "Actif", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  beta: { label: "Bêta", color: "text-amber-600 bg-amber-50 border-amber-200" },
  maintenance: { label: "Maintenance", color: "text-red-600 bg-red-50 border-red-200" },
  new: { label: "Nouveau", color: "text-blue-600 bg-blue-50 border-blue-200" },
} as const;
