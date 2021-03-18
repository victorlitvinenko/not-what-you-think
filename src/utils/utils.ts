const decimalAdjust = (value: number, exp: number) => {
  // Если степень не определена, либо равна нулю...
  let newValue: number = value;
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math.round(value);
  }
  // Если значение не является числом, либо степень не является целым числом...
  if (Number.isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Сдвиг разрядов
  let valueS = newValue.toString().split('e');
  newValue = Math.round(+`${valueS[0]}e${valueS[1] ? +valueS[1] - exp : -exp}`);
  // Обратный сдвиг
  valueS = newValue.toString().split('e');
  return +`${valueS[0]}e${valueS[1] ? +valueS[1] + exp : exp}`;
};

// eslint-disable-next-line import/prefer-default-export
export function MathRound10(value: number, exp: number): number {
  return decimalAdjust(value, exp);
}
