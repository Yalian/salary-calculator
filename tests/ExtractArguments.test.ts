import {extractArguments} from "../src/Utils/ExtractArguments";

describe('Test the arguments extractor', () => {
    it('should extract a command-line argument from the process', function () {
        const processArgumentsMock = {
            argv: [
                "input=value",
                "--anotherInput=value"
            ]
        };

        process.argv = processArgumentsMock.argv;

        expect(extractArguments())
            .toStrictEqual({
                input: 'value',
                anotherInput: 'value'
            })
    });
})