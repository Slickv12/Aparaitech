import React, { useMemo, useState } from 'react';
import dashboardMock from '../../data/dashboardMock.json';
import jobs from '../../data/jobs.json';
import skills from '../../data/skills.json';
import StatsCard from './StatsCard';
import Charts from './Charts';
import ActivityFeed from './ActivityFeed';
import { matchRoles } from '../../ai/roleMatcher';
import { recommendJobs } from '../../ai/jobRecommendation';
import { createReferral, getReferralLink, listReferrals } from '../../services/referralService';

const Dashboard = () => {
  const [skillInput, setSkillInput] = useState('react,node.js,mongodb');
  const [referralLink, setReferralLink] = useState('');

  const matchedRoles = useMemo(() => matchRoles(skillInput.split(',').map((s) => s.trim()), jobs).slice(0, 3), [skillInput]);
  const recommended = useMemo(
    () => recommendJobs({ userSkills: skillInput.split(',').map((s) => s.trim()), userInterests: ['engineering'], viewedJobs: ['j2'] }, jobs, 3),
    [skillInput]
  );

  const myReferrals = listReferrals('demo-user-1');

  const handleGenerateReferral = () => {
    const created = createReferral({ referrerUserId: 'demo-user-1', jobId: 'j1' });
    setReferralLink(getReferralLink(created.referralCode));
  };

  return (
    <div className="section-padding py-8 space-y-6">
      <h1 className="text-4xl font-bold">Recruiter Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {dashboardMock.stats.map((stat) => <StatsCard key={stat.label} {...stat} />)}
      </div>

      <Charts applicationsByMonth={dashboardMock.applicationsByMonth} categoryDistribution={dashboardMock.categoryDistribution} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-5">
          <h4 className="font-semibold mb-3">AI Role Matching</h4>
          <input className="input-field mb-3" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} placeholder="Enter comma separated skills" />
          <div className="space-y-2">
            {matchedRoles.map((role) => (
              <div key={role.role} className="flex justify-between text-sm bg-gray-50 rounded-lg p-2">
                <span>{role.role}</span><span className="font-semibold text-blue-700">{role.matchScore}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <h4 className="font-semibold mb-3">Recommended Jobs</h4>
          <div className="space-y-2">
            {recommended.map((item) => (
              <div key={item.job.id} className="flex justify-between text-sm bg-gray-50 rounded-lg p-2">
                <span>{item.job.title}</span><span className="font-semibold text-indigo-700">{item.score}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">Skill bank size: {skills.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityFeed activity={dashboardMock.activity} />

        <div className="card p-5">
          <h4 className="font-semibold mb-3">Referral System</h4>
          <button className="btn-primary" onClick={handleGenerateReferral}>Generate Referral Link</button>
          {referralLink && <p className="mt-3 text-sm break-all text-blue-700">{referralLink}</p>}
          <p className="text-sm text-gray-600 mt-4">Tracked referrals: {myReferrals.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
