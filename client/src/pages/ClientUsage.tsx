import React from "react";
import { 
  Bell, 
  ChevronDown, 
  FileText, 
  Code, 
  HardDrive, 
  Check,
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const ClientUsage = (): JSX.Element => {
  // Usage statistics data
  const usageStats = [
    {
      title: "Files Converted",
      value: "2,847",
      change: "+12% from last month",
      icon: FileText,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      changeColor: "text-green-600",
    },
    {
      title: "API Calls",
      value: "8,654",
      change: "+8% from last month",
      icon: Code,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      changeColor: "text-green-600",
    },
    {
      title: "Storage Used",
      value: "45.2 GB",
      change: "of 100 GB limit",
      icon: HardDrive,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      changeColor: "text-gray-600",
    },
    {
      title: "Success Rate",
      value: "99.8%",
      change: "Excellent performance",
      icon: Check,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      changeColor: "text-green-600",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
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
              <ShoppingCart className="w-4 h-4 mr-2" />
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
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
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

      {/* Main Content */}
      <main className="flex-1 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Usage Statistics</h1>
              <Button variant="outline" className="flex items-center">
                Export Report
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {usageStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-600 mb-2">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-gray-900 mb-2">
                          {stat.value}
                        </p>
                        <p className={`text-sm ${stat.changeColor}`}>
                          {stat.change}
                        </p>
                      </div>
                      <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center ml-3`}>
                        <IconComponent className={`w-5 h-5 ${stat.iconColor}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
