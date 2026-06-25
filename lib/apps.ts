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
