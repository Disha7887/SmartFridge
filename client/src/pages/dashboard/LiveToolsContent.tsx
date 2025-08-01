import React, { useState } from "react";
import { Search, Star, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const LiveToolsContent = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Tools (12)", count: 12 },
    { id: "convert", label: "Convert (6)", count: 6 },
    { id: "manipulate", label: "Manipulate (4)", count: 4 },
    { id: "secure", label: "Secure (2)", count: 2 }
  ];

  const favoriteTools = [
    {
      name: "PDF to Word",
      icon: (
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.3248 6.66665V13.3333H12.6585L10.9923 11.6666L9.32602 13.3333H7.65977V6.66665H9.32602V10.8333L10.9923 9.16665L12.6585 10.8333V6.66665H13.4916V3.33331H5.16039V16.6666H16.8241V6.66665H14.3248ZM3.49414 2.49998C3.49414 2.26665 3.57468 2.06943 3.73575 1.90831C3.89682 1.7472 4.09399 1.66665 4.32727 1.66665H14.3248L18.4904 5.83331V17.5C18.4904 17.7222 18.4099 17.9166 18.2488 18.0833C18.0877 18.25 17.8905 18.3333 17.6573 18.3333H4.32727C4.09399 18.3333 3.89682 18.2528 3.73575 18.0916C3.57468 17.9305 3.49414 17.7333 3.49414 17.5V2.49998Z" fill="#2563EB"/>
        </svg>
      ),
      bgColor: "bg-blue-50"
    },
    {
      name: "Merge PDFs", 
      icon: (
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.82664 4.99998V2.49998C6.82664 2.26665 6.90718 2.06943 7.06825 1.90831C7.22932 1.7472 7.42649 1.66665 7.65977 1.66665H17.6573C17.8905 1.66665 18.0877 1.7472 18.2488 1.90831C18.4099 2.06943 18.4904 2.26665 18.4904 2.49998V14.1666C18.4904 14.4 18.4099 14.5972 18.2488 14.7583C18.0877 14.9194 17.8905 15 17.6573 15H15.1579V17.5C15.1579 17.7333 15.0774 17.9305 14.9163 18.0916C14.7552 18.2528 14.558 18.3333 14.3248 18.3333H4.32727C4.09399 18.3333 3.89682 18.2528 3.73575 18.0916C3.57468 17.9305 3.49414 17.7333 3.49414 17.5V5.83331C3.49414 5.59998 3.57745 5.40276 3.74408 5.24165C3.9107 5.08054 4.1051 4.99998 4.32727 4.99998H6.82664ZM5.16039 6.66665V16.6666H13.4916V6.66665H5.16039ZM8.49289 4.99998H15.1579V13.3333H16.8241V3.33331H8.49289V4.99998Z" fill="#9333EA"/>
        </svg>
      ),
      bgColor: "bg-purple-50"
    }
  ];

  const tools = [
    {
      name: "PDF to Word",
      description: "Convert PDF documents to editable Word files",
      icon: (
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.3248 6.66665V13.3333H12.6585L10.9923 11.6666L9.32602 13.3333H7.65977V6.66665H9.32602V10.8333L10.9923 9.16665L12.6585 10.8333V6.66665H13.4916V3.33331H5.16039V16.6666H16.8241V6.66665H14.3248ZM3.49414 2.49998C3.49414 2.26665 3.57468 2.06943 3.73575 1.90831C3.89682 1.7472 4.09399 1.66665 4.32727 1.66665H14.3248L18.4904 5.83331V17.5C18.4904 17.7222 18.4099 17.9166 18.2488 18.0833C18.0877 18.25 17.8905 18.3333 17.6573 18.3333H4.32727C4.09399 18.3333 3.89682 18.2528 3.73575 18.0916C3.57468 17.9305 3.49414 17.7333 3.49414 17.5V2.49998Z" fill="#2563EB"/>
        </svg>
      ),
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      popularity: 95,
      progressColor: "bg-blue-500",
      isFavorite: true,
      category: "convert"
    },
    {
      name: "PDF to Excel",
      description: "Extract tables and data to Excel spreadsheets", 
      icon: (
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.992 9.99998L14.3248 13.3333H12.3253L10.9923 11.4333L9.65927 13.3333H7.65977L9.99252 9.99998L7.65977 6.66665H9.65927L10.9923 8.56665L12.3253 6.66665H13.4916V3.33331H5.16039V16.6666H16.8241V6.66665H14.3248L11.992 9.99998ZM3.49414 2.49998C3.49414 2.26665 3.57468 2.06943 3.73575 1.90831C3.89682 1.7472 4.09399 1.66665 4.32727 1.66665H14.3248L18.4904 5.83331V17.5C18.4904 17.7222 18.4099 17.9166 18.2488 18.0833C18.0877 18.25 17.8905 18.3333 17.6573 18.3333H4.32727C4.09399 18.3333 3.89682 18.2528 3.73575 18.0916C3.57468 17.9305 3.49414 17.7333 3.49414 17.5V2.49998Z" fill="#16A34A"/>
        </svg>
      ),
      bgColor: "bg-green-50",
      iconColor: "text-green-600", 
      popularity: 88,
      progressColor: "bg-green-500",
      isFavorite: false,
      category: "convert"
    },
    // Add more tools here as needed...
  ];

  const filteredTools = activeFilter === "all" ? tools : tools.filter(tool => tool.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Live PDF Tools</h1>
          <p className="text-gray-600 mt-1">Professional PDF conversion and manipulation tools</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search tools..."
            className="pl-10 border-gray-300"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 flex-wrap">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            variant={activeFilter === filter.id ? "default" : "outline"}
            className={activeFilter === filter.id 
              ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg" 
              : "border-gray-200 text-gray-700 hover:bg-gray-50"
            }
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Favorite Tools Section */}
      <div className="bg-gradient-to-r from-red-50 to-red-50 border border-red-200 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <Star className="w-5 h-5 text-red-500 mr-2 fill-current" />
          <h2 className="text-lg font-semibold text-gray-900">Your Favorite Tools</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {favoriteTools.map((tool, index) => (
            <div key={index} className="bg-white border border-red-200 rounded-lg p-4 text-center">
              <div className={`w-10 h-10 rounded-lg ${tool.bgColor} flex items-center justify-center mx-auto mb-3`}>
                {tool.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-900">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTools.map((tool, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 relative">
            {/* Favorite Button */}
            <button className={`absolute top-4 right-4 w-11 h-11 rounded-lg flex items-center justify-center ${
              tool.isFavorite 
                ? "bg-gradient-to-r from-red-500 to-red-600 shadow-lg" 
                : "border border-gray-200"
            }`}>
              <Star className={`w-5 h-5 ${tool.isFavorite ? "text-white fill-current" : "text-gray-400"}`} />
            </button>

            {/* Tool Content */}
            <div className="pr-12">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${tool.bgColor} flex items-center justify-center mb-4`}>
                {tool.icon}
              </div>

              {/* Tool Info */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{tool.description}</p>

              {/* Popularity */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-500">Popularity</span>
                  <span className="text-xs text-gray-500">{tool.popularity}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${tool.progressColor} h-2 rounded-full`}
                    style={{ width: `${tool.popularity}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button variant="outline" className="w-full text-sm">
                  Use Tool
                </Button>
                <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                  <Info className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
