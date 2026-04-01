import React from 'react';

const PageHeader = ({ title, subtitle, children }) => {
  return (
    <div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-8 md:p-12 mb-12"
    >
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-600 max-w-3xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full translate-y-24 -translate-x-24"></div>
    </div>
  );
};

export default PageHeader;