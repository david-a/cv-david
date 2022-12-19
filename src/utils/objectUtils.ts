export const objArrayToObject = (arr: [], key: string) => {
  return arr.reduce((all, obj) => {
    all[obj[key]] = obj;
    return all;
  }, {});
};
