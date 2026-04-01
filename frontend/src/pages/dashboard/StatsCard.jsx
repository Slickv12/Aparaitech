import React from 'react';

const StatsCard = ({ label, value, trend }) => (
  <div className="card p-5">
    <p className="text-sm text-gray-600">{label}</p>
    <h3 className="text-3xl font-bold mt-1">{value}</h3>
    <p className="text-sm text-green-600 mt-2">{trend}</p>
  </div>
);

export default StatsCard;
