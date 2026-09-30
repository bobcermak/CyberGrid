import { useCallback, useState } from 'react';

export function useControllableState<T>(
  value: T | undefined,
  defaultValue: T,
): readonly [T, (next: T) => void] {
  const [internal, setInternal] = useState<T>(defaultValue);
  const isControlled = value !== undefined;
  const setValue = useCallback(
    (next: T) => {
      if (!isControlled) setInternal(next);
    },
    [isControlled],
  );
  return [isControlled ? value : internal, setValue] as const;
}