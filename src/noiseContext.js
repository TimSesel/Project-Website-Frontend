import { createContext } from 'react';

export const NoiseContext = createContext({
    noiseData: [],
    setNoiseData: () => {}
});