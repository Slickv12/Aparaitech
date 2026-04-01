import React from 'react';

const ActivityFeed = ({ activity }) => (
  <div className="card p-5">
    <h4 className="font-semibold mb-4">Recent Activity</h4>
    <ul className="space-y-3">
      {activity.map((item, index) => (
        <li key={index} className="border-l-2 border-blue-200 pl-3">
          <p className="text-sm text-gray-800">{item.text}</p>
          <p className="text-xs text-gray-500 mt-1">{item.time}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default ActivityFeed;
