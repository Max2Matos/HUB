export type AppCategory =
  | "Automatisation"
  | "Analyse & Reporting"
  | "Communication"
  | "Productivité"
  | "Intégration"
  | "Gestion de données"
  | "Autre";

export type AppStatus = "active" | "beta" | "maintenance" | "new";

export interface AppItem {
  id: string;
  name: string;
  description: string;
  category: AppCategory;
  status: AppStatus;
  url: string;
  icon: string;
  color: string;
  tags: string[];
  createdAt: string;
  usesN8N?: boolean;
}
