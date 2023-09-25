export const formatDate = (inputDate?: Date): string => {
  const dateToFormat = inputDate || new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
  };
  return dateToFormat.toLocaleDateString(undefined, options);
};
