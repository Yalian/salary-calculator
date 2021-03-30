type Days = "MO" | "TU" | "WE" | "TH" | "FR" | "SA" | "SU";

type DaysInput = {
  start: string;
  end: string;
  day: string;
};

type ExtractedInputArg = { name: string; days: DaysInput[] };

const validationPattern = /^input=(?<name>\w+)=(\w{2}\d{2}:\d{2}-\d{2}:\d{2},?)+$/;

const dataPattern = /(?<day>\w{2})(?<start>\d{2}:\d{2})-(?<end>\d{2}:\d{2})+/gm;

const extractData = (dataString: string = "") => {
  let data: DaysInput[] = [];
  let current;
  while ((current = dataPattern.exec(dataString)) != null) {
    const day = current.groups!.day as Days;

    data.push({
      start: current.groups!.start,
      end: current.groups!.end,
      day,
    });
  }

  return data;
};

export const extractInputArg = (rawArgs: string[]): ExtractedInputArg => {
  const inputArg = rawArgs.find((arg) => arg.includes("input"));

  const validation = validationPattern.exec(inputArg || "");

  if (!validation) {
    throw new Error(
      "Input argument have not correct format, ex: input=$name=$day:$startAt-$endAt[,]..."
    );
  }

  const result = extractData(inputArg);

  return {
    name: validation.groups!.name,
    days: result,
  };
};