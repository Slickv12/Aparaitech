import React, { useState } from 'react';
import { createReferral, getReferralLink, listReferrals } from '../services/referralService';

const ReferralsPage = () => {
  const [link, setLink] = useState('');
  const referrals = listReferrals('demo-user-1');

  const handleCreate = () => {
    const entry = createReferral({ referrerUserId: 'demo-user-1', jobId: 'j1' });
    setLink(getReferralLink(entry.referralCode));
  };

  return (
    <div className="section-padding py-8">
      <h1 className="text-4xl font-bold mb-6">Referrals</h1>
      <div className="card p-6">
        <button className="btn-primary" onClick={handleCreate}>Generate Referral Link</button>
        {link && <p className="mt-4 text-blue-700 break-all">{link}</p>}
        <p className="mt-6 text-gray-700">Total referral records: {referrals.length}</p>
      </div>
    </div>
  );
};

export default ReferralsPage;
