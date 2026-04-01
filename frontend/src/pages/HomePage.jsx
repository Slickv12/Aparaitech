import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroAnimated from '../components/HeroAnimated';
import Timeline from '../components/Timeline';
import { 
  Users, 
  Rocket, 
  BookOpen, 
  Globe, 
  ChevronRight,
  Award,
  TrendingUp,
  Heart,
  Zap,
  CheckCircle,
  Clock,
  MessageSquare,
  UserCheck,
  FileCheck,
  Sparkles,
  Target,
  Shield,
  Star
} from 'lucide-react';

const HomePage = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const testimonials = [
  {
    id: 1,
    name: "Ananya Kulkarni",
    role: "Senior Frontend Engineer",
    quote:
      "The best part is the team collaboration and clean engineering culture. I’ve grown a lot in React and system thinking here.",
    avatar: "AK",
    color: "bg-gradient-to-br from-blue-500 to-cyan-400",
    rating: 5
  },
  {
    id: 3,
    name: "Sneha Iyer",
    role: "Product Manager",
    quote:
      "The culture is very supportive and fast-paced. The leadership encourages innovation, and learning happens naturally through real projects.",
    avatar: "SI",
    color: "bg-gradient-to-br from-violet-500 to-pink-500",
    rating: 5
  },
  {
    id: 4,
    name: "Karan Patil",
    role: "Backend Developer (Node.js)",
    quote:
      "I love the code quality standards and the guidance from seniors. Every sprint feels impactful and the work is meaningful.",
    avatar: "KP",
    color: "bg-gradient-to-br from-emerald-500 to-teal-400",
    rating: 5
  },
];

  const cultureItems = [
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: 'Collaborative Environment',
      description: 'Work with talented peers who support and challenge you',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: 'Continuous Learning',
      description: '$2,000 annual budget for courses, conferences, and books',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: 'Flexible Work',
      description: 'Remote-friendly with flexible hours and locations',
      gradient: 'from-violet-500 to-pink-500'
    },
    {
      icon: <Rocket className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: 'Fast-paced Innovation',
      description: 'Work on cutting-edge technologies and solve real problems',
      gradient: 'from-orange-500 to-rose-500'
    }
  ];

  const hiringProcess = [
    { step: 1, icon: <FileCheck />, title: 'Apply', description: 'Submit your application online', time: '5 mins' },
    { step: 2, icon: <MessageSquare />, title: 'HR Screening', description: 'Initial chat about your background', time: '30 mins' },
    { step: 3, icon: <Zap />, title: 'Technical Interview', description: 'Showcase your technical skills', time: '1-2 hours' },
    { step: 4, icon: <Users />, title: 'Team Interview', description: 'Meet your potential team members', time: '1 hour' },
    { step: 5, icon: <UserCheck />, title: 'Offer', description: 'Receive your formal offer letter', time: '48 hours' }
  ];

  const stats = [
    { icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />, value: '98%', label: 'Employee Satisfaction', change: '+5%' },
    { icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />, value: '40%', label: 'Annual Growth', change: '+12%' },
    { icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8" />, value: '4.8/5', label: 'Glassdoor Rating', change: 'Top 10%' },
    { icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />, value: '2+', label: 'City', change: 'Growing' }
  ];

  return (
    <div className="min-h-screen">
      {/* Phase 2: Animated Hero */}
      <div className="section-padding py-8">
        <HeroAnimated />
      </div>

      {/* Phase 3: Interactive Timeline */}
      <Timeline />

      {/* Why Join Us - Enhanced */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 mb-4 sm:mb-6"
            >
              <Target className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-semibold text-blue-700">Why Choose Us</span>
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Build Your Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">With Purpose</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 leading-relaxed">
              Join a culture where innovation meets impact, and your growth is our priority
            </p>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-10 blur transition-all duration-300"></div>
                <div className="relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md sm:hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <div className={`p-2 sm:p-3 bg-gradient-to-br ${index === 0 ? 'from-blue-500 to-cyan-400' : index === 1 ? 'from-indigo-500 to-purple-400' : index === 2 ? 'from-rose-500 to-pink-400' : 'from-violet-500 to-purple-400'} rounded-lg`}>
                      <div className="text-white">{stat.icon}</div>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full bg-green-50 text-green-600">
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-sm sm:text-base text-slate-600 font-medium">{stat.label}</div>
                  <div className="mt-2 sm:mt-4 h-0.5 sm:h-1 w-8 sm:w-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Culture Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {cultureItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-5 blur transition-all duration-300"></div>
                <div className="relative bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md sm:hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full">
                  <div className="flex flex-col h-full">
                    <div className={`p-3 sm:p-4 bg-gradient-to-br ${item.gradient} rounded-lg sm:rounded-xl w-fit mb-4 sm:mb-6 shadow-md sm:shadow-lg`}>
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 flex-grow">{item.description}</p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors text-sm sm:text-base">
                      <span>Learn more</span>
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process - Enhanced */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-500/5 to-indigo-500/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 mb-4 sm:mb-6"
            >
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-semibold text-blue-700">Fast & Efficient</span>
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Streamlined <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Hiring Journey</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 leading-relaxed">
              Experience a transparent and efficient process designed to respect your time
            </p>
          </div>

          <div className="relative">
            {/* Enhanced Timeline - Desktop Only */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 transform -translate-y-1/2 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20"></div>
            </div>
            
            {/* Timeline dots - Desktop Only */}
            {hiringProcess.map((_, index) => (
              <div key={index} className="hidden lg:block absolute top-1/2 left-0 transform -translate-y-1/2" 
                style={{ left: `${(index + 0.5) * (100 / hiringProcess.length)}%` }}>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {hiringProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="group relative bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md sm:hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full">
                    {/* Step number */}
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg shadow-lg">
                      {step.step}
                    </div>
                    
                    <div className="pt-4 sm:pt-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                        <div className="text-blue-600 group-hover:text-indigo-700 transition-colors h-5 w-5 sm:h-6 sm:w-6">{step.icon}</div>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3">{step.title}</h3>
                        <p className="text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed">{step.description}</p>
                        
                        <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                          <span className="text-xs sm:text-sm font-medium text-blue-700">{step.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 sm:mt-16 md:mt-20 text-center"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-500" />
              <span className="text-sm sm:text-base md:text-lg font-semibold text-green-600">All applications reviewed within 48 hours</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link 
                  to="/apply" 
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 text-sm sm:text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                >
                  Start Your Application
                  <Sparkles className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 mb-4 sm:mb-6"
            >
              <Star className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-semibold text-blue-700">Team Stories</span>
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Valued <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Voices</span> From Our Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 leading-relaxed">
              Discover what makes Aparaitech an exceptional place to grow and thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-5 blur transition-all duration-300"></div>
                <div className="relative bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md sm:hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full">
                  {/* Rating stars */}
                  <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-sm sm:text-base md:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed relative">
                    <span className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 text-4xl sm:text-5xl md:text-6xl text-blue-100 font-serif">"</span>
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`${testimonial.color} w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-base sm:text-lg md:text-xl text-white shadow-md sm:shadow-lg`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base sm:text-lg md:text-xl">{testimonial.name}</h4>
                      <p className="text-blue-600 font-medium text-sm sm:text-base">{testimonial.role}</p>
                      <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-2">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                        <span className="text-xs sm:text-sm text-slate-500">Current Team Member</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 sm:mt-16 md:mt-20 text-center"
          >
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 via-white to-indigo-50 rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 border border-blue-100 shadow-md sm:shadow-lg">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
                Ready to Build What's Next?
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 max-w-lg mx-auto">
                Join us in creating the future of enterprise technology
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link 
                    to="/apply" 
                    className="group inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 text-sm sm:text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                  >
                    <span>Start Your Journey</span>
                    <Rocket className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 text-sm sm:text-base md:text-lg font-semibold text-slate-900 bg-white border border-slate-300 rounded-lg sm:rounded-xl hover:border-blue-300 hover:shadow-md sm:hover:shadow-lg transition-all duration-300"
                  >
                    <span>Talk to Recruiter</span>
                    <MessageSquare className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;