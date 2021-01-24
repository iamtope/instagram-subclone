import 'dotenv/config';

export default {
  DATABASE_URL: process.env.SOCIAL_DATABASE_URL || process.env.DATABASE_URL,
  REDIS_URL: process.env.REDIS_URL
};
