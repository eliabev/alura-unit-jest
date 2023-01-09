const somaHorasExtras = (salario, horasExtras) => salario + horasExtras;
const calculoDeDescontos = (salario, descontos) => salario - descontos;

const verifyIf = (value) => {
  const assertions = {
    isStrictlyEqualsTo(expected) {
      if (value !== expected) {
        throw new Error(`Not equals to ${expected}`);
      }
    },
  };

  return assertions;
};

const test = (title, testFunc) => {
  try {
    testFunc();
    console.log(`AEEEEEHOOOOOOOO\n${title} passou, disgraça!!!!`);
  } catch (e) {
    console.error(`${title} deu ruim, rapaz`);
  }
};

test('somaHorasExtras', () => {
  const expected = 2500;
  const returned = somaHorasExtras(2000, 500);

  verifyIf(returned).isStrictlyEqualsTo(expected);
});

test('calculoDeDescontos', () => {
  const expected = 3000;
  const returned = calculoDeDescontos(2500, 200);

  verifyIf(returned).isStrictlyEqualsTo(expected);
});
