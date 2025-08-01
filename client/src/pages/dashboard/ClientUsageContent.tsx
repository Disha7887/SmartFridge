import React from "react";
import { 
  FileText, 
  Code, 
  HardDrive, 
  Check
} from "lucide-react";

export const ClientUsageContent = (): JSX.Element => {
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
      title: "API Calls Made",
      value: "15,247",
      change: "+8% from last month",
      icon: Code,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      changeColor: "text-green-600",
    },
    {
      title: "Storage Used",
      value: "45.2 GB",
      change: "+5% from last month",
      icon: HardDrive,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      changeColor: "text-green-600",
    },
    {
      title: "Success Rate",
      value: "99.2%",
      change: "+0.3% from last month",
      icon: Check,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      changeColor: "text-green-600",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Client Usage</h1>
        <p className="text-gray-600 mt-1">Monitor your API usage and conversion statistics</p>
      </div>

      {/* Usage Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {usageStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                  <IconComponent className={`w-5 h-5 ${stat.iconColor}`} />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className={`text-sm ${stat.changeColor}`}>{stat.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Usage Chart Placeholder */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Usage Over Time</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Chart visualization would go here</p>
        </div>
      </div>

      {/* API Usage Details */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">API Endpoint Usage</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">PDF to Word</h3>
              <p className="text-sm text-gray-600">Convert PDF documents to Word format</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">1,247</p>
              <p className="text-sm text-gray-500">calls this month</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">PDF to Excel</h3>
              <p className="text-sm text-gray-600">Extract data to Excel spreadsheets</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">892</p>
              <p className="text-sm text-gray-500">calls this month</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">Merge PDFs</h3>
              <p className="text-sm text-gray-600">Combine multiple PDF files</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">654</p>
              <p className="text-sm text-gray-500">calls this month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
