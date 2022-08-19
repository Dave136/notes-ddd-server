export default async function () {
  if (process.env.NODE_ENV !== 'development') return;

  const dotenv = await import('dotenv');
  const config = dotenv.config();

  if (config.error) {
    throw new Error('Failed reading ".env" file.');
  }

  console.info('✨ Environment variables loaded');
}
