import React from "react";
import { 
  Bell, 
  ChevronDown, 
  FileText, 
  ShoppingCart,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const APISetup = (): JSX.Element => {
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
            <h1 className="text-2xl font-bold text-gray-900">API Setup</h1>

            {/* Getting Started Section */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Getting Started</h2>
              
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-blue-600">1</span>
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="text-base font-medium text-gray-900 mb-1">Generate API Key</h3>
                    <p className="text-sm text-gray-600">
                      Create your API key from the dashboard to authenticate your requests.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-blue-600">2</span>
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="text-base font-medium text-gray-900 mb-1">Configure Endpoints</h3>
                    <p className="text-sm text-gray-600">
                      Set up your base URL and configure the endpoints for your application.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-blue-600">3</span>
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="text-base font-medium text-gray-900 mb-1">Test Integration</h3>
                    <p className="text-sm text-gray-600">
                      Make your first API call to ensure everything is working correctly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* API Key Management Section */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">API Key Management</h2>
              
              <div className="space-y-4">
                {/* Production Key */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-gray-900 mb-2">Production Key</h3>
                      <div className="flex items-center">
                        <p className="text-sm text-gray-600 font-mono">
                          sk_live_••••••••••••••••••••••••••••
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Regenerate
                    </Button>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Reveal Key
                    </Button>
                  </div>
                </div>

                {/* Generate New Key Button */}
                <Button variant="outline" className="w-full">
                  Generate New Key
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
