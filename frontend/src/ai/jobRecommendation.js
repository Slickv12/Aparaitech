const normalize = (items = []) => items.map((i) => String(i).trim().toLowerCase()).filter(Boolean);

/**
 * Recommend jobs using weighted scoring over skills, interests, recency, and popularity.
 */
export const recommendJobs = ({ userSkills = [], userInterests = [], viewedJobs = [] }, jobs = [], topN = 5) => {
  const skills = new Set(normalize(userSkills));
  const interests = new Set(normalize(userInterests));
  const viewed = new Set(viewedJobs);

  return jobs
    .map((job) => {
      const jobSkills = new Set(normalize(job.techStack || []));
      const skillOverlap = [...skills].filter((s) => jobSkills.has(s)).length;
      const interestMatch = [...interests].some((interest) => `${job.title} ${job.department}`.toLowerCase().includes(interest)) ? 1 : 0;
      const popularity = Number(job.popularityScore || 0);
      const recencyBoost = Number(job.recencyScore || 0);
      const viewedPenalty = viewed.has(job.id || job._id) ? -10 : 0;

      const score = skillOverlap * 20 + interestMatch * 15 + popularity * 10 + recencyBoost * 10 + viewedPenalty;

      return {
        job,
        score,
        reasons: {
          skillOverlap,
          interestMatch,
          popularity,
          recencyBoost,
          viewedPenalty,
        },
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, topN);
};

export default recommendJobs;
