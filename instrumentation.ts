import * as Sentry from '@sentry/nextjs';

export function register() {
  Sentry.init({
    dsn: 'https://cb6d888b5a94afc68e415a5715dfc477@o4509892615340032.ingest.us.sentry.io/4509892617175040',
    // Additional Sentry configuration for the server-side goes here
  });
}