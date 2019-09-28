module.exports = (datas, paramsToCheck) => {
  return new Promise((resolve, reject) => {
    try {
      let paramsCheckResult = true;
      paramsToCheck.forEach((params) => {
        if (typeof datas[params] === 'undefined' || datas[params] === '') {
          paramsCheckResult = false;
        }
      });
      resolve(paramsCheckResult);
    } catch (err) {
      reject(err);
    }
  });
};
