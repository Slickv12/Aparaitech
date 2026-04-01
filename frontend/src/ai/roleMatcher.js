/**
 * Normalize arbitrary skill text into lowercase comparable tokens.
 */
const normalizeSkills = (skills = []) =>
  skills
    .flatMap((s) => String(s).split(/[,+/|]/g))
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

/**
 * Build a sparse vector map where each skill token represents a vector dimension.
 */
const toVector = (skills = []) => {
  const vector = new Map();
  normalizeSkills(skills).forEach((token) => {
    vector.set(token, (vector.get(token) || 0) + 1);
  });
  return vector;
};

/**
 * Compute cosine similarity between two sparse vectors represented as maps.
 */
const cosineSimilarity = (aVector, bVector) => {
  const aKeys = [...aVector.keys()];

  const dot = aKeys.reduce((sum, key) => sum + (aVector.get(key) || 0) * (bVector.get(key) || 0), 0);
  const aMag = Math.sqrt([...aVector.values()].reduce((sum, value) => sum + value * value, 0));
  const bMag = Math.sqrt([...bVector.values()].reduce((sum, value) => sum + value * value, 0));

  if (!aMag || !bMag) return 0;
  return dot / (aMag * bMag);
};

/**
 * Rank jobs by candidate skill matching using cosine similarity + keyword boost.
 */
export const matchRoles = (userSkills = [], jobDatabase = []) => {
  const userVector = toVector(userSkills);
  const userTokens = new Set(normalizeSkills(userSkills));

  return jobDatabase
    .map((job) => {
      const combinedJobSkills = [
        ...(job.techStack || []),
        ...(job.requirements || []),
        job.department,
        job.title,
      ].filter(Boolean);

      const jobVector = toVector(combinedJobSkills);
      const cosineScore = cosineSimilarity(userVector, jobVector);
      const overlapCount = [...userTokens].filter((token) => jobVector.has(token)).length;
      const keywordBoost = Math.min(overlapCount * 0.03, 0.2);
      const score = Math.min((cosineScore + keywordBoost) * 100, 100);

      return {
        role: job.title,
        department: job.department,
        matchScore: Number(score.toFixed(2)),
        overlapCount,
        job,
      };
    })
    .sort((a, b) => b.matchScore - a.matchScore);
};

export default matchRoles;
