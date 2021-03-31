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
    ],
    collectCoverage: true,
    coverageReporters:[
        "html",
        "lcov"
    ]
};

export default config;