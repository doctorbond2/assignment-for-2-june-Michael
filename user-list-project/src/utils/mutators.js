export const addDelay = (arr) => {
  return new Promise((resolve) => {
    let result = [];
    arr.forEach((item, index) => {
      setTimeout(() => {
        result.push(item);
        if (result.length === arr.length) {
          resolve(result);
        }
      }, 200 * index);
    });
  });
};
