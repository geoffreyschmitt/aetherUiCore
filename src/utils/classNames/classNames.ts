type TClassNamesObject = {
  [className: string]: boolean | number | string | undefined | null;
};
type TClassNamesArg = TClassNamesObject | string | undefined | null;

export const classNames = (...args: TClassNamesArg[]): string => {
  return (
    args
      .map(arg => {
        // Exclude undefined or null args
        if (arg === undefined || arg === null) {
          return '';
        }
        if (typeof arg === 'string') {
          // Remove any leading or trailing whitespace.
          return arg.trim();
        }

        return Object.entries(arg)
          .filter(([, value]) => value)
          .map(([className]) => className)
          .join(' ');
      })
      //To remove any empty string caused by undefined/null
      .filter(Boolean)
      .join(' ')
  );
};
