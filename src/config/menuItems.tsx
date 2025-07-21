import type React from "react";
import { frontendDetails, backendDetails, ssrDetails } from "../data/techDetails";

export interface MenuItem {
    id: string;
    title: React.ReactNode;
    href: string;
    icon?: React.ReactNode;
    children?: MenuItem[];
}

export const menuItems: MenuItem[] = [

    // Início
    {
        id: "home",
        title: "Início",
        href: "#top",
        icon: <span className="material-icons">home</span>
    },

    // Resumo
    {
        id: "summary",
        title: "Resumo",
        href: "#summary",
        icon: <span className="material-icons">dashboard</span>
    },

    // Frontend
    {
        id: "frontend",
        title: "Frontend",
        href: "#frontend-section",
        icon: <span className="material-icons">web</span>,
        children: [
            // Tabela Frontend
            {
                id: "frontend-table",
                title: "Tabela Frontend",
                href: "#frontend-section",
                icon: <span className="material-icons">table_chart</span>
            },
            // Detalhes Frontend
            {
                id: "frontend-details",
                title: "Detalhes Frontend",
                href: "#detail-frontend",
                icon: <span className="material-icons">info</span>,
                children: frontendDetails.map(detail => ({
                    id: detail.id,
                    title: detail.title,
                    href: `#${detail.id}`,
                    icon: detail.icon
                }))
            }
        ]
    },

    // Backend
    {
        id: "backend",
        title: "Backend",
        href: "#backend-section",
        icon: <span className="material-icons">server</span>,
        children: [
            // Tabela Backend
            {
                id: "backend-table",
                title: "Tabela Backend",
                href: "#backend-section",
                icon: <span className="material-icons">table_chart</span>
            },
            // Detalhes Backend
            {
                id: "backend-details",
                title: "Detalhes Backend",
                href: "#detail-backend",
                icon: <span className="material-icons">info</span>,
                children: backendDetails.map(detail => ({
                    id: detail.id,
                    title: detail.title,
                    href: `#${detail.id}`,
                    icon: detail.icon
                }))
            }
        ]
    },

    // SSR
    {
        id: "ssr",
        title: "SSR",
        href: "#ssr-section",
        icon: <span className="material-icons">code</span>,
        children: [
            // Tabela SSR
            {
                id: "ssr-table",
                title: "Tabela SSR",
                href: "#ssr-section",
                icon: <span className="material-icons">table_chart</span>
            },
            // Detalhes SSR
            {
                id: "ssr-details",
                title: "Detalhes SSR",
                href: "#detail-ssr",
                icon: <span className="material-icons">info</span>,
                children: ssrDetails.map(detail => ({
                    id: detail.id,
                    title: detail.title,
                    href: `#${detail.id}`,
                    icon: detail.icon
                }))
            }
        ]
    },
];