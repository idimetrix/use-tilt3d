import { useEffect, useRef } from 'react';
import { Tilt3d, type Settings } from 'tilt-3d';

export const useTilt3d = (settings: Partial<Settings> = {}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const tilt3dRef = useRef<Tilt3d | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      tilt3dRef.current = new Tilt3d(elementRef.current, settings);
    }

    return () => {
      if (tilt3dRef.current) {
        tilt3dRef.current.destroy();
      }
    };
  }, [settings]);

  return elementRef;
};
