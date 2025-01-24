const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const totalFaturamento = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);

const percentualFaturamento = (faturamento, total) => {
  return (faturamento / total) * 100;
};

for (const [estado, faturamento] of Object.entries(faturamentoEstados)) {
  const percentual = percentualFaturamento(faturamento, totalFaturamento);
	
  console.log(`${estado}: R$${faturamento.toFixed(2)} - ${percentual.toFixed(2)}%`);
}
