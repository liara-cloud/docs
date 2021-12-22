export const synonymsParser = (synonymsList) => {
  const result = {};
  for (const [key, values] of Object.entries(synonymsList)) {
    for (const value of values) {
      result[value] = [key];
    }
  }
  return result;
};
