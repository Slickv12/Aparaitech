import React from 'react';
import { Rocket, Users, Globe, Sparkles } from 'lucide-react';
import timelineData from '../data/companyTimeline.json';

const iconMap = { Rocket, Users, Globe, Sparkles };

const Timeline = () => (
  <section id="timeline" className="section-padding py-14">
    <h2 className="text-3xl font-bold mb-8">Company Roadmap</h2>
    <div className="relative border-l-2 border-blue-200 pl-6 space-y-8">
      {timelineData.map((item, index) => {
        const Icon = iconMap[item.icon] || Rocket;
        return (
          <div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative card p-5"
          >
            <span className="absolute -left-[2.2rem] top-6 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white">
              <Icon className="h-4 w-4" />
            </span>
            <p className="text-sm text-blue-600 font-semibold">{item.date}</p>
            <h3 className="text-xl font-bold mt-1">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export default Timeline;
