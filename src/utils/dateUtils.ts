export const toBengaliDate = (dateString: string): string => {
  const date = new Date(dateString);
  const bengaliNumerals = '০১২৩৪৫৬৭৮৯';
  
  const day = date.getDate().toString().replace(/\d/g, d => bengaliNumerals[parseInt(d)]);
  const month = (date.getMonth() + 1).toString().replace(/\d/g, d => bengaliNumerals[parseInt(d)]);
  const year = date.getFullYear().toString().replace(/\d/g, d => bengaliNumerals[parseInt(d)]);
  
  return `${day}-${month}-${year}`;
};

export const toBengaliNumber = (num: string | number): string => {
  const bengaliNumerals = '০১২৩৪৫৬৭৮৯';
  return num.toString().replace(/\d/g, d => bengaliNumerals[parseInt(d)]);
};