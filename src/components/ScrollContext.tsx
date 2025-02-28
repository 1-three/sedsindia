// src/context/ScrollContext.tsx
import { createContext } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export const ScrollContext = createContext<{
  current: LocomotiveScroll | null;
}>({ current: null });