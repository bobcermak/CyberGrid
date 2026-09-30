import { useState } from 'react';

export const useReveal = (loading: boolean) => {
  const [wasLoading, setWasLoading] = useState(loading);
  if (loading && !wasLoading) setWasLoading(true);
  return !loading && wasLoading;
};