import Logo from '../assets/ALogo.png';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import NotificationBell from './NotificationBell';
import LanguageSwitcher from './LanguageSwitcher';
import { useI18n } from '../i18n';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useI18n();

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.openRoles'), path: '/positions' },
    { name: t('nav.apply'), path: '/apply' },
    { name: t('nav.dashboard'), path: '/dashboard' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 shadow-lg py-2' : 'bg-white/90 py-3'} dark:bg-slate-900/95`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={Logo} alt="Logo" className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110" />
            <div className="flex flex-col"><span className="text-xl font-bold text-blue-700">Aparaitech</span><span className="text-xs text-gray-500">Innovation & Careers</span></div>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className={`px-4 py-2 rounded-full font-medium ${location.pathname === item.path ? 'text-blue-700 bg-blue-50' : 'text-gray-600 hover:text-blue-600'}`}>
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <NotificationBell />
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2.5 rounded-xl bg-gray-100" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 space-y-2">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className={`block px-4 py-3 rounded-xl ${location.pathname === item.path ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                {item.name}
              </Link>
            ))}
            <div className="pt-2 flex items-center justify-between"><LanguageSwitcher /><NotificationBell /></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
