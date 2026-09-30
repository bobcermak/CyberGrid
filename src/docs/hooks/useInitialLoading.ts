import { useEffect, useState } from 'react';

export const useInitialLoading = (duration = 1200) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), duration);
    return () => window.clearTimeout(timeout);
  }, [duration]);

  return loading;
};