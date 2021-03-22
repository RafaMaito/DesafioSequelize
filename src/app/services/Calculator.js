/* eslint-disable radix */
export default class Calculator {
  sum(value1, value2) {
    const v1 =
      value1 % 1 === 0 ? Number.parseInt(value1) : Number.parseFloat(value1);
    const v2 =
      value2 % 1 === 0 ? Number.parseInt(value2) : Number.parseFloat(value2);
    return v1 + v2;
  }
}
