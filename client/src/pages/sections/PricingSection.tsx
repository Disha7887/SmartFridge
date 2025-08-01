import React from "react";
import { ArrowLeft, Code, HardDrive, FileText, Check } from "lucide-react";

export const PricingSection = (): JSX.Element => {
  const usageStats = [
    {
      title: "API Calls",
      value: "8,654",
      total: "50,000",
      percentage: 17.3,
      icon: Code,
      color: "bg-blue-600",
      iconColor: "text-blue-600",
    },
    {
      title: "Storage",
      value: "45.2 GB",
      total: "100 GB",
      percentage: 45.2,
      icon: HardDrive,
      color: "bg-orange-600",
      iconColor: "text-orange-600",
    },
    {
      title: "Conversions",
      value: "2,847",
      total: "10,000",
      percentage: 28.5,
      icon: FileText,
      color: "bg-green-600",
      iconColor: "text-green-600",
    },
  ];

  const plans = [
    {
      name: "Basic",
      price: 9,
      yearlyPrice: 90,
      savings: 17,
      features: [
        "1,000 API calls/month",
        "10 GB storage",
        "100 conversions/month",
        "Basic support",
        "Standard processing speed",
      ],
      buttonText: "Downgrade",
      buttonVariant: "outline",
      highlighted: false,
    },
    {
      name: "Pro",
      price: 29,
      yearlyPrice: 290,
      savings: 17,
      features: [
        "50,000 API calls/month",
        "100 GB storage",
        "10,000 conversions/month",
        "Priority support",
        "Fast processing speed",
        "Advanced tools",
      ],
      buttonText: "Downgrade",
      buttonVariant: "outline",
      highlighted: true,
      current: true,
    },
    {
      name: "Enterprise",
      price: 99,
      yearlyPrice: 990,
      savings: 17,
      features: [
        "Unlimited API calls",
        "1 TB storage",
        "Unlimited conversions",
        "24/7 dedicated support",
        "Ultra-fast processing",
        "Custom integrations",
        "SLA guarantee",
      ],
      buttonText: "Upgrade",
      buttonVariant: "outline",
      highlighted: false,
    },
  ];

  const billingHistory = [
    {
      date: "1/14/2024",
      amount: "$29.00",
      status: "Paid",
      invoice: "INV-2024-001",
    },
    {
      date: "12/14/2023",
      amount: "$29.00",
      status: "Paid",
      invoice: "INV-2023-012",
    },
    {
      date: "11/14/2023",
      amount: "$29.00",
      status: "Paid",
      invoice: "INV-2023-011",
    },
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Manage Plans</h1>
                <p className="text-sm text-gray-600">Manage your subscription and billing</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">PDFConverter Pro</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Current Plan */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h2 className="text-xl font-bold text-gray-900">Current Plan</h2>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Active
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">Pro Plan</h3>
              <p className="text-gray-600">$29/monthly • Renews on 2/14/2024</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Change Plan
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-gray-50 hover:bg-gray-100">
                Cancel Subscription
              </button>
            </div>
          </div>
        </div>

        {/* Usage Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {usageStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-semibold text-gray-900">{stat.title}</h3>
                  <IconComponent className={`w-5 h-5 ${stat.iconColor}`} />
                </div>
                <div className="space-y-3">
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                    <span className="text-sm text-gray-600">of {stat.total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${stat.color}`}
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600">{stat.percentage}% used</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Available Plans */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Available Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl border p-6 ${
                  plan.highlighted
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-1">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    or ${plan.yearlyPrice}/year (save {plan.savings}%)
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Billing History */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Billing History</h2>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              Download All Invoices
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-1 text-sm font-semibold text-gray-900">Date</th>
                  <th className="text-left py-3 px-1 text-sm font-semibold text-gray-900">Amount</th>
                  <th className="text-left py-3 px-1 text-sm font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 px-1 text-sm font-semibold text-gray-900">Invoice</th>
                  <th className="text-right py-3 px-1 text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-1 text-sm text-gray-900">{item.date}</td>
                    <td className="py-4 px-1 text-sm text-gray-900">{item.amount}</td>
                    <td className="py-4 px-1">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-1 text-sm text-gray-600 font-mono">{item.invoice}</td>
                    <td className="py-4 px-1 text-right">
                      <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
