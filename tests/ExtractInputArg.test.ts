import { extractInputArg } from "../src/Utils/ExtractInputArg";

describe("Test the extraction of arguments from command-line", () => {
  it("should throw an error when the format is incorrect", () => {
    const processMock = {
      argv: [
        "input=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00",
      ],
    };

    expect(() => extractInputArg(processMock.argv)).toThrowError(
      "Input argument have not correct format"
    );
  });

  it("should extract the input argument from given raw arguments with correct format", () => {
    const processMock = {
      argv: [
        "input=RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00",
      ],
    };

    const expectedResult = {
      name: "RENE",
      days: [
        {
          start: "10:00",
          end: "12:00",
          day: "MO",
        },
        {
          start: "10:00",
          end: "12:00",
          day: "TU",
        },
        {
          start: "01:00",
          end: "03:00",
          day: "TH",
        },
        {
          start: "14:00",
          end: "18:00",
          day: "SA",
        },
        {
          start: "20:00",
          end: "21:00",
          day: "SU",
        },
      ],
    };

    expect(extractInputArg(processMock.argv)).toStrictEqual(expectedResult);
  });
});
