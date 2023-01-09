import * as all from '..';

it('Should return correct sum', () => {
  const expected = 2500;
  const returned = all.somaHorasExtras(2000, 500);

  expect(returned).toBe(expected);
});

it('Should correctly discount value from salary', () => {
  const expected = 2300;
  const result = all.calculoDeDescontos(2500, 200);

  expect(result).toBe(expected);
});
