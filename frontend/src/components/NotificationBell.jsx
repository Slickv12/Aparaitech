import React, { useEffect, useMemo, useState } from 'react';
import { Bell } from 'lucide-react';
import { getNotifications, markNotificationAsRead, requestNotificationPermission } from '../services/notificationService';

const NotificationBell = () => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const refresh = () => setNotifications(getNotifications());

  useEffect(() => {
    refresh();
    requestNotificationPermission();
    window.addEventListener('aparaitech:notifications-updated', refresh);
    return () => window.removeEventListener('aparaitech:notifications-updated', refresh);
  }, []);

  const unread = useMemo(() => notifications.filter((n) => !n.read).length, [notifications]);

  return (
    <div className="relative">
      <button aria-label="Notifications" onClick={() => setOpen((v) => !v)} className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <Bell className="h-5 w-5 text-gray-700" />
        {unread > 0 && <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1.5">{unread}</span>}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 card p-3 z-50 max-h-80 overflow-auto">
          <h4 className="font-semibold mb-2">Notifications</h4>
          {notifications.length === 0 && <p className="text-sm text-gray-500">No notifications yet.</p>}
          <div className="space-y-2">
            {notifications.map((item) => (
              <button key={item.id} onClick={() => markNotificationAsRead(item.id)} className={`w-full text-left p-2 rounded-lg ${item.read ? 'bg-gray-50' : 'bg-blue-50'}`}>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-gray-600">{item.body}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
