import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    moduleFileExtensions: [
        'js',
        'ts',
        'tsx'
    ],
    testMatch:[
        "**/?(*.)test.ts"
    ]
};

export default config;