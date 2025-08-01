import React from "react";
import { 
  Bell, 
  ChevronDown, 
  FileText, 
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const APIReference = (): JSX.Element => {
  // API endpoints data
  const endpoints = [
    {
      method: "POST",
      path: "/convert/pdf-to-word",
      status: "Available"
    },
    {
      method: "POST", 
      path: "/convert/pdf-to-excel",
      status: "Available"
    },
    {
      method: "POST",
      path: "/merge", 
      status: "Available"
    },
    {
      method: "POST",
      path: "/split",
      status: "Available"
    }
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
          <div className="space-y-6">
            {/* Page Title */}
            <h1 className="text-2xl font-bold text-gray-900">API Reference</h1>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Quick Reference Section */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Reference</h2>
                
                <div className="space-y-3">
                  {/* Base URL */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h3 className="text-base font-medium text-gray-900 mb-1">Base URL</h3>
                    <p className="text-sm text-gray-600 font-mono">
                      https://api.pdfconverter.com/v1
                    </p>
                  </div>

                  {/* Authentication */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h3 className="text-base font-medium text-gray-900 mb-1">Authentication</h3>
                    <p className="text-sm text-gray-600">
                      Bearer Token in Authorization header
                    </p>
                  </div>

                  {/* Rate Limit */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h3 className="text-base font-medium text-gray-900 mb-1">Rate Limit</h3>
                    <p className="text-sm text-gray-600">
                      1000 requests per minute
                    </p>
                  </div>
                </div>
              </div>

              {/* Available Endpoints Section */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Available Endpoints</h2>
                
                <div className="space-y-2">
                  {endpoints.map((endpoint, index) => (
                    <div key={index} className="p-2 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900 font-mono">
                          {endpoint.method} {endpoint.path}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                          {endpoint.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
