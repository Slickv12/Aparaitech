import React, { useState } from 'react';
import jobs from '../data/jobs.json';
import { matchRoles } from '../ai/roleMatcher';
import { recommendJobs } from '../ai/jobRecommendation';

const AIDemoPage = () => {
  const [skillsText, setSkillsText] = useState('react,node.js,mongodb');
  const userSkills = skillsText.split(',').map((s) => s.trim()).filter(Boolean);

  const roleMatches = matchRoles(userSkills, jobs).slice(0, 5);
  const jobRecommendations = recommendJobs({ userSkills, userInterests: ['engineering'], viewedJobs: [] }, jobs, 5);

  return (
    <div className="section-padding py-8 space-y-6">
      <h1 className="text-4xl font-bold">AI Role Matching Demo</h1>
      <p className="text-gray-600">Enter comma-separated skills to see ranked role matches and job recommendations.</p>

      <div className="card p-5">
        <label className="block text-sm font-semibold mb-2">Skills Input</label>
        <input
          value={skillsText}
          onChange={(e) => setSkillsText(e.target.value)}
          className="input-field"
          placeholder="react,node.js,python"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-5">
          <h2 className="text-xl font-bold mb-3">Matched Roles</h2>
          <div className="space-y-2">
            {roleMatches.map((item) => (
              <div key={item.role} className="flex justify-between bg-blue-50 rounded-lg px-3 py-2">
                <span>{item.role}</span>
                <span className="font-semibold text-blue-700">{item.matchScore}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <h2 className="text-xl font-bold mb-3">Recommended Jobs</h2>
          <div className="space-y-2">
            {jobRecommendations.map((item) => (
              <div key={item.job.id} className="flex justify-between bg-indigo-50 rounded-lg px-3 py-2">
                <span>{item.job.title}</span>
                <span className="font-semibold text-indigo-700">{item.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDemoPage;
