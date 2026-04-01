import React from 'react';
import { useI18n } from '../i18n';
import { Link } from 'react-router-dom';
import { Building2, Mail, MapPin, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';
import ALogo from "../assets/ALogo.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useI18n();

    return (
        <footer className="bg-gray-900 text-white mt-auto">
            <div className="section-padding py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="flex items-center space-x-1 mb-6">
                            <img
                                src={ALogo}
                                alt="Aparaitech Logo"
                                className="h-10 w-auto object-contain"
                            />
                            <div>
                                <span className="text-2xl font-bold">Aparaitech</span>
                                <span className="block text-sm text-gray-400">Innovating Tomorrow</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Building enterprise software solutions with cutting-edge technology and exceptional talent.
                        </p>
                    </div>

                    {/* {t('footer.quickLinks')} */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/positions" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Open Positions
                                </Link>
                            </li>
                            <li>
                                <Link to="/apply" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Apply Now
                                </Link>
                            </li>
                            <li>
                                <a href="/#timeline" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Company Timeline
                                </a>
                            </li>
                            <li>
                                <a href="#chatbot-assistant" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Contact Chatbot
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">{t('footer.contact')}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                                <span className="text-gray-400">Mukti Complex, Near Prashaskiya Bhawan, Baramati</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-gray-400" />
                                <a href="mailto:careers@aparaitech.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    info@aparaitech.org
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-gray-400" />
                                <span className="text-gray-400">+91 63643 26342</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">{t('footer.follow')}</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/company/aparaitech/posts/?feedView=all"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 p-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                <Linkedin className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://www.instagram.com/aparaitech_global/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gradient-to-br from-pink-600 via-purple-600 to-orange-500 hover:from-pink-500 hover:via-purple-500 hover:to-orange-400 p-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                <Instagram className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://www.youtube.com/@aparaitech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gradient-to-br from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 p-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                <Youtube className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {currentYear} Aparaitech Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;