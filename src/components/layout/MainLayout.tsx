// src/components/layout/MainLayout.tsx
import Header from "./Header";

const HEADER_HEIGHT = "64px"; // Ajuste se seu header for maior/menor (h-16 = 64px em Tailwind)

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {/* O conteúdo já começa depois do header fixo */}
      <div style={{ paddingTop: HEADER_HEIGHT }}>
        {children}
      </div>
    </>
  );
}
