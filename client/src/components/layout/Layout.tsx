import React from "react";
import { useLocation } from "wouter";
import { NavigationSection } from "@/pages/sections/NavigationSection";
import { FooterSection } from "@/pages/sections/FooterSection";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [location] = useLocation();

  // Don't show header/footer for dashboard since it has its own layout
  const isDashboard = location === "/dashboard";

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <NavigationSection />

      {/* Main content area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};
