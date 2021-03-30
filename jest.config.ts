import type {Config} from '@jest/types';
import {defaults} from 'jest-config';

const config: Config.InitialOptions = {
    verbose: true,
    moduleFileExtensions: [
        ...defaults.moduleFileExtensions,
        'ts',
        'tsx'
    ],
    testMatch:[
        "**/?(*.)test.ts"
    ]
};

export default config;