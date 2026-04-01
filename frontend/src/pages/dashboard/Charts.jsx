import React from 'react';

const BarChart = ({ title, data }) => {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="card p-5">
      <h4 className="font-semibold mb-4">{title}</h4>
      <div className="space-y-3">
        {data.map((point) => (
          <div key={point.month || point.category}>
            <div className="flex justify-between text-sm mb-1">
              <span>{point.month || point.category}</span>
              <span>{point.value}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500" style={{ width: `${(point.value / max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Charts = ({ applicationsByMonth, categoryDistribution }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <BarChart title="Applications Over Time" data={applicationsByMonth} />
    <BarChart title="Job Category Distribution" data={categoryDistribution} />
  </div>
);

export default Charts;
