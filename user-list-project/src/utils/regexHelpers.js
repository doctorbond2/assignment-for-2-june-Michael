const firstThirdRegex = /[A-Ia-i]/;

const middleThirdRegex = /[J-Sj-s]/;

const lastThirdRegex = /[T-Zt-z]/;

export const getInfoFromFirstChar = (char) => {
  let time = 0;
  let job = '';

  if (firstThirdRegex.test(char)) {
    time = 4;
    job = 'Frontend Developer';
  } else if (middleThirdRegex.test(char)) {
    time = 2;
    job = 'DevOps Engineer';
  } else {
    time = 5;
    job = 'Database Manager';
  }
  return {
    time,
    job,
  };
};
export const getThisYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};
