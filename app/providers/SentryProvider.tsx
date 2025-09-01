'use client';

import { useEffect } from 'react';

export function SentryProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // This ensures the Sentry client config is loaded
    import('@/sentry.client.config');
  }, []);

  return <>{children}</>;
}
