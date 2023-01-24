const PaymetStatus = () => {
  let result;
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      let num = Math.random();
      if (num < 0.5) resolve(1);
      reject("PaymentFailed");
    });
  }, 1000);
};

export default PaymetStatus;
