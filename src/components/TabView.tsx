
"use client";
import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabViewProps {
  tabs: Tab[];
  initialTab?: number;
}

const TabView: React.FC<TabViewProps> = ({ tabs, initialTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div>
      <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`px-4 py-2 whitespace-nowrap font-medium transition-colors duration-150 focus:outline-none ${
              activeTab === idx
                ? 'border-b-2 border-blue-600 text-blue-600 bg-gray-50'
                : 'text-gray-500 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab(idx)}
            aria-selected={activeTab === idx}
            aria-controls={`tab-panel-${idx}`}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6" id={`tab-panel-${activeTab}`} role="tabpanel">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default TabView;
