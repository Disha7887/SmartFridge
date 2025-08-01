import React from "react";
import {
  FileText,
  Code,
  HardDrive,
  Calendar,
  TrendingUp,
  Check,
  Upload,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardContent = (): JSX.Element => {
  // Dashboard stats data
  const stats = [
    {
      title: "Files Converted",
      value: "2,847",
      change: "+12%",
      icon: FileText,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "API Calls Remaining", 
      value: "47,153",
      subtitle: "3,847 used",
      icon: Code,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Storage Used",
      value: "45.2 GB",
      subtitle: "of 100 GB",
      icon: HardDrive,
      bgColor: "bg-orange-50", 
      iconColor: "text-orange-600",
    },
    {
      title: "Active Integrations",
      value: "8",
      change: "+2 this month",
      icon: Calendar,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
  ];

  // Most used tools data
  const tools = [
    {
      name: "PDF to Word",
      uses: "1,247 uses",
      icon: FileText,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      name: "PDF to Excel", 
      uses: "892 uses",
      icon: FileText,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      name: "Merge PDFs",
      uses: "654 uses", 
      icon: FileText,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      name: "Compress PDF",
      uses: "543 uses",
      icon: FileText,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      name: "Split PDF",
      uses: "432 uses",
      icon: FileText,
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      name: "PDF Signature",
      uses: "321 uses",
      icon: FileText,
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600",
    },
  ];

  // Recent activity data
  const activities = [
    {
      action: "PDF to Word conversion",
      file: "quarterly-report.pdf",
      time: "2 minutes ago",
      status: "completed",
    },
    {
      action: "API key regenerated",
      file: "Production environment", 
      time: "1 hour ago",
      status: "completed",
    },
    {
      action: "Bulk PDF merge",
      file: "12 files processed",
      time: "3 hours ago", 
      status: "completed",
    },
    {
      action: "OCR processing",
      file: "scanned-document.pdf",
      time: "5 hours ago",
      status: "completed", 
    },
    {
      action: "PDF compression",
      file: "large-presentation.pdf",
      time: "1 day ago",
      status: "completed",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah Johnson!</h1>
            <p className="text-blue-100 text-lg mb-1">Ready to convert your PDFs? You're on the Pro Plan.</p>
            <p className="text-blue-200 text-sm">Thursday, July 31, 2025 • 08:33 AM</p>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-white/20 border border-white/30 text-white hover:bg-white/30">
              Upload New PDF
            </Button>
            <Button className="bg-white/20 border border-white/30 text-white hover:bg-white/30">
              View All Tools
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  {stat.change && (
                    <p className="text-sm text-green-600 mt-2">{stat.change}</p>
                  )}
                  {stat.subtitle && (
                    <p className="text-sm text-gray-500 mt-2">{stat.subtitle}</p>
                  )}
                </div>
                <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                  <IconComponent className={`w-5 h-5 ${stat.iconColor}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Most Used Tools */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Most Used Tools</h2>
          <Button variant="outline" size="sm">View All Tools</Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <button
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <div className={`w-12 h-12 rounded-lg ${tool.bgColor} flex items-center justify-center mx-auto mb-3`}>
                  <IconComponent className={`w-5 h-5 ${tool.iconColor}`} />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">{tool.name}</h3>
                <p className="text-xs text-gray-500">{tool.uses}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
          <Button variant="outline" size="sm">View Full History</Button>
        </div>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center p-3 rounded-lg">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mr-4">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-900">{activity.action}</h3>
                <p className="text-sm text-gray-600">{activity.file}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">{activity.time}</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {activity.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
