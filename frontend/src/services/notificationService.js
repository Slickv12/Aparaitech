const STORAGE_KEY = 'aparaitech_notifications';

const read = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
const write = (items) => localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) return 'unsupported';
  if (Notification.permission === 'granted') return 'granted';
  return Notification.requestPermission();
};

export const pushLocalNotification = (title, body, meta = {}) => {
  const items = read();
  const entry = { id: crypto.randomUUID(), title, body, createdAt: new Date().toISOString(), read: false, meta };
  write([entry, ...items].slice(0, 50));

  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, { body });
  }

  window.dispatchEvent(new CustomEvent('aparaitech:notifications-updated'));
  return entry;
};

export const markNotificationAsRead = (id) => {
  const items = read().map((item) => (item.id === id ? { ...item, read: true } : item));
  write(items);
  window.dispatchEvent(new CustomEvent('aparaitech:notifications-updated'));
};

export const getNotifications = () => read();

export default {
  requestNotificationPermission,
  pushLocalNotification,
  markNotificationAsRead,
  getNotifications,
};
