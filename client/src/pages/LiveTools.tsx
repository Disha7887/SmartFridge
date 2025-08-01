import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export const LiveTools = (): JSX.Element => {
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <svg width="21" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9923 13.3333H7.65977V6.66667H10.9923C11.5921 6.66667 12.1475 6.81667 12.6585 7.11667C13.1695 7.41667 13.575 7.82223 13.8749 8.33334C14.1748 8.84445 14.3248 9.4 14.3248 10C14.3248 10.6 14.1748 11.1556 13.8749 11.6667C13.575 12.1778 13.1695 12.5833 12.6585 12.8833C12.1475 13.1833 11.5921 13.3333 10.9923 13.3333ZM9.32602 8.33334V11.6667H10.9923C11.2922 11.6667 11.5699 11.5917 11.8254 11.4417C12.0809 11.2917 12.2836 11.0889 12.4336 10.8333C12.5835 10.5778 12.6585 10.3 12.6585 10C12.6585 9.7 12.5835 9.42223 12.4336 9.16667C12.2836 8.91111 12.0809 8.70834 11.8254 8.55834C11.5699 8.40834 11.2922 8.33334 10.9923 8.33334H9.32602ZM13.4916 3.33334H5.16039V16.6667H16.8241V6.66667H13.4916V3.33334ZM3.49414 2.5C3.49414 2.26667 3.57468 2.06945 3.73575 1.90834C3.89682 1.74723 4.09399 1.66667 4.32727 1.66667H14.3248L18.4904 5.83334V17.5C18.4904 17.7222 18.4099 17.9167 18.2488 18.0833C18.0877 18.25 17.8905 18.3333 17.6573 18.3333H4.32727C4.09399 18.3333 3.89682 18.2528 3.73575 18.0917C3.57468 17.9306 3.49414 17.7333 3.49414 17.5V2.5Z" fill="white"/>
              </svg>
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
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2">
                <path d="M2.60961 9.04167V2.04167H1.44336V0.875H3.19273C3.35601 0.875 3.49402 0.931389 3.60675 1.04417C3.71949 1.15694 3.77586 1.295 3.77586 1.45833V8.45833H11.0299L12.1962 3.79167H4.94211V2.625H12.9426C13.1059 2.625 13.2439 2.68139 13.3566 2.79417C13.4693 2.90694 13.5257 3.045 13.5257 3.20833C13.5257 3.255 13.5179 3.30167 13.5024 3.34833L12.0446 9.18167C12.0135 9.31389 11.9454 9.42083 11.8405 9.5025C11.7355 9.58417 11.6169 9.625 11.4848 9.625H3.19273C3.02946 9.625 2.89145 9.56861 2.77872 9.45583C2.66598 9.34306 2.60961 9.205 2.60961 9.04167ZM3.77586 13.125C3.56593 13.125 3.37156 13.0725 3.19273 12.9675C3.01391 12.8625 2.87202 12.7206 2.76705 12.5417C2.66209 12.3628 2.60961 12.1683 2.60961 11.9583C2.60961 11.7483 2.66209 11.5539 2.76705 11.375C2.87202 11.1961 3.01391 11.0542 3.19273 10.9492C3.37156 10.8442 3.56593 10.7917 3.77586 10.7917C3.98578 10.7917 4.18016 10.8442 4.35898 10.9492C4.53781 11.0542 4.6797 11.1961 4.78467 11.375C4.88963 11.5539 4.94211 11.7483 4.94211 11.9583C4.94211 12.1683 4.88963 12.3628 4.78467 12.5417C4.6797 12.7206 4.53781 12.8625 4.35898 12.9675C4.18016 13.0725 3.98578 13.125 3.77586 13.125ZM10.7734 13.125C10.5634 13.125 10.3691 13.0725 10.1902 12.9675C10.0114 12.8625 9.86952 12.7206 9.76455 12.5417C9.65959 12.3628 9.60711 12.1683 9.60711 11.9583C9.60711 11.7483 9.65959 11.5539 9.76455 11.375C9.86952 11.1961 10.0114 11.0542 10.1902 10.9492C10.3691 10.8442 10.5634 10.7917 10.7734 10.7917C10.9833 10.7917 11.1777 10.8442 11.3565 10.9492C11.5353 11.0542 11.6772 11.1961 11.7822 11.375C11.8871 11.5539 11.9396 11.7483 11.9396 11.9583C11.9396 12.1683 11.8871 12.3628 11.7822 12.5417C11.6772 12.7206 11.5353 12.8625 11.3565 12.9675C11.1777 13.0725 10.9833 13.125 10.7734 13.125Z" fill="#374151"/>
              </svg>
              Manage Plan
            </Button>

            {/* Notifications */}
            <div className="relative">
              <Button variant="outline" size="sm" className="p-2">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                  <path d="M4.6682 14.3667H16.332V8.56667C16.332 7.51111 16.0654 6.52778 15.5322 5.61667C15.0212 4.72778 14.3269 4.02222 13.4493 3.5C12.5385 2.97778 11.5554 2.71667 10.5001 2.71667C9.44479 2.71667 8.4617 2.97778 7.55082 3.5C6.67326 4.02222 5.97899 4.72778 5.468 5.61667C4.9348 6.52778 4.6682 7.51111 4.6682 8.56667V14.3667ZM10.5001 1.03333C11.8553 1.03333 13.1161 1.37778 14.2825 2.06667C15.4155 2.73333 16.3153 3.63333 16.9818 4.76667C17.6594 5.93333 17.9982 7.2 17.9982 8.56667V16.0333H3.00195V8.56667C3.00195 7.2 3.34076 5.93333 4.01837 4.76667C4.68487 3.63333 5.58464 2.73333 6.71769 2.06667C7.88407 1.38889 9.14486 1.05 10.5001 1.05V1.03333ZM8.41727 16.8667H12.5829C12.5829 17.2444 12.4885 17.5944 12.2996 17.9167C12.1108 18.2389 11.8581 18.4944 11.5415 18.6833C11.2249 18.8722 10.8778 18.9667 10.5001 18.9667C10.1224 18.9667 9.77526 18.8722 9.45867 18.6833C9.14208 18.4944 8.88937 18.2389 8.70053 17.9167C8.51169 17.5944 8.41727 17.25 8.41727 16.8833V16.8667Z" fill="#4B5563"/>
                </svg>
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
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                <path d="M8.66411 8.70667L11.9554 5.41333L12.9015 6.34667L8.66411 10.5867L4.42676 6.34667L5.37283 5.41333L8.66411 8.70667Z" fill="#FECACA"/>
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar Spacer */}
        <div className="w-64"></div>
        
        {/* Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl space-y-6">
            {/* Page Title */}
            <h1 className="text-2xl font-bold text-gray-900">API Reference</h1>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Quick Reference Card */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Reference</h2>
                
                <div className="space-y-3">
                  {/* Base URL */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-base font-medium text-gray-900 mb-1">Base URL</div>
                    <div className="text-sm text-gray-600 font-mono">https://api.pdfconverter.com/v1</div>
                  </div>

                  {/* Authentication */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-base font-medium text-gray-900 mb-1">Authentication</div>
                    <div className="text-sm text-gray-600">Bearer Token in Authorization header</div>
                  </div>

                  {/* Rate Limit */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-base font-medium text-gray-900 mb-1">Rate Limit</div>
                    <div className="text-sm text-gray-600">1000 requests per minute</div>
                  </div>
                </div>
              </div>

              {/* Available Endpoints Card */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Available Endpoints</h2>
                
                <div className="space-y-2">
                  {endpoints.map((endpoint, index) => (
                    <div key={index} className="p-2 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-mono text-gray-900">
                          {endpoint.method} {endpoint.path}
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          {endpoint.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
