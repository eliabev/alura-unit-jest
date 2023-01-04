const somaHorasExtras = (salario, horasExtras) => salario + horasExtras;
const calculoDeDescontos = (salario, descontos) => salario - descontos;

const teste = (titulo, esperado, retornado) => {
  if (esperado === retornado) {
    console.log(`titulo ${titulo} passou!`);
  } else {
    console.error(`titulo ${titulo} não passou`);
  }
};

teste('somaHorasExtras', 2500, somaHorasExtras(2000, 500));
teste('calculoDeDescontos', 2200, calculoDeDescontos(2200, 300));
