const KEY = 'aparaitech_referrals';

const read = () => JSON.parse(localStorage.getItem(KEY) || '[]');
const write = (items) => localStorage.setItem(KEY, JSON.stringify(items));

export const createReferral = ({ referrerUserId, candidateId = null, jobId }) => {
  const referralCode = `APR-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  const referral = {
    referralCode,
    referrerUserId,
    candidateId,
    jobId,
    createdAt: new Date().toISOString(),
    status: 'shared',
  };
  const all = [referral, ...read()];
  write(all);
  return referral;
};

export const listReferrals = (referrerUserId) => read().filter((r) => r.referrerUserId === referrerUserId);

export const getReferralLink = (code) => `${window.location.origin}/apply?ref=${encodeURIComponent(code)}`;

export default { createReferral, listReferrals, getReferralLink };
