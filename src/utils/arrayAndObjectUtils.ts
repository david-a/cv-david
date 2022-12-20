export const objArrayToObject = (arr: [], key: string) => {
  return arr.reduce((all, obj) => {
    all[obj[key]] = obj;
    return all;
  }, {});
};

export const chooseRandomElement = (arr: any[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
