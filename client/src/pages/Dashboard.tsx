import React from "react";
import {
  Bell,
  ChevronDown,
  Search,
  Home,
  BarChart3,
  Settings,
  BookOpen,
  Tag,
  Code,
  Wrench,
  Upload,
  Clock,
  TrendingUp,
  FileText,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";
import { DashboardContent } from "./dashboard/DashboardContent";
import { ClientUsageContent } from "./dashboard/ClientUsageContent";
import { APISetup } from "./APISetup";
import { APIReference } from "./APIReference";
import { LiveTools } from "./LiveTools";

export const Dashboard = (): JSX.Element => {
  const [location] = useLocation();

  // Sidebar navigation items
  const navItems = [
    {
      name: "Home",
      description: "Dashboard overview",
      icon: Home,
      href: "/dashboard",
    },
    {
      name: "Client Usage",
      description: "Usage statistics",
      icon: BarChart3,
      href: "/dashboard/client-usage",
    },
    {
      name: "API Setup",
      description: "Integration guides",
      icon: Settings,
      href: "/dashboard/api-setup",
    },
    {
      name: "API Reference",
      description: "Documentation",
      icon: BookOpen,
      href: "/dashboard/api-reference",
    },
    {
      name: "Live Tools",
      description: "PDF conversion tools",
      icon: Wrench,
      href: "/dashboard/live-tools",
    },
    {
      name: "View Plans",
      description: "Pricing and upgrades",
      icon: Tag,
      href: "/pricing",
    },
    {
      name: "API Documentation",
      description: "Complete API docs",
      icon: Code,
      external: true,
    },
  ];

  const renderContent = () => {
    switch (location) {
      case "/dashboard/client-usage":
        return <ClientUsageContent />;
      case "/dashboard/api-setup":
        return <APISetup />;
      case "/dashboard/api-reference":
        return <APIReference />;
      case "/dashboard/live-tools":
        return <LiveTools />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Search tools..."
              className="pl-10 border-gray-200"
            />
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;

              const isActive = location === item.href;

              if (item.href) {
                return (
                  <Link key={index} href={item.href}>
                    <button
                      className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                        isActive
                          ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                        isActive ? 'bg-white/20' : 'bg-gray-100'
                      }`}>
                        <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>
                          {item.name}
                        </div>
                        <div className={`text-xs ${isActive ? 'text-red-100' : 'text-gray-500'}`}>
                          {item.description}
                        </div>
                      </div>
                      {isActive && <div className="w-2 h-2 bg-white rounded-full ml-3" />}
                      {item.external && <ExternalLink className="w-3 h-3 text-gray-400 ml-2" />}
                    </button>
                  </Link>
                );
              }

              return (
                <button
                  key={index}
                  className="w-full flex items-center p-3 rounded-lg text-left transition-colors text-gray-600 hover:bg-gray-50"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-gray-100">
                    <IconComponent className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-700">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.description}
                    </div>
                  </div>
                  {item.external && <ExternalLink className="w-3 h-3 text-gray-400 ml-2" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t border-gray-200 mt-auto">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
            Quick Actions
          </h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-sm" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Upload PDF
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm" size="sm">
              <Clock className="w-4 h-4 mr-2" />
              View History
            </Button>
          </div>

          {/* Upgrade Plan Card */}
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-4 h-4 text-red-600 mr-2" />
              <h3 className="text-sm font-semibold text-red-900">Upgrade Plan</h3>
            </div>
            <p className="text-xs text-red-700 mb-3">
              Get unlimited conversions and advanced features
            </p>
            <Button variant="outline" size="sm" className="w-full text-sm">
              View Plans
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Plan Badge */}
              <div className="flex items-center bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg px-3 py-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-blue-700">Pro Plan</span>
              </div>

              {/* Manage Plan Button */}
              <Button variant="outline" size="sm" className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                Manage Plan
              </Button>

              {/* Notifications */}
              <div className="relative">
                <Button variant="outline" size="sm" className="p-2">
                  <Bell className="w-4 h-4" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">
                    2
                  </span>
                </Button>
              </div>

              {/* User Profile */}
              <Button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold">SJ</span>
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Sarah Johnson</div>
                  <div className="text-xs text-red-100">sarah@company.com</div>
                </div>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};
