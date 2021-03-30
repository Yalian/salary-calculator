const extractor = /^(--)?(?<argument>\w+)=(?<data>.+)/;

export const extractArguments = (): { [key: string]: any } => {
  return process.argv.reduce((prev, current) => {
    const extractedData = extractor.exec(current);
    const argument = extractedData?.groups?.argument;
    const value = extractedData?.groups?.data;

    if (argument) {
      return {
        ...prev,
        [argument]: value,
      };
    }
    return prev;
  }, {});
};
