const fs = require("fs");
const data = fs.readFileSync("./faturamento_distribuidora.json", "utf8");
const faturamento = JSON.parse(data);
const fatutamentoValidoJaneiro = faturamento.janeiro.filter(
  (res) => !res.feriado && res.diaSemana != "Sábado" && res.diaSemana != "Domingo"
);
const menorValorFaturamentoMes = (faturamento) =>
  Math.min(...faturamento.map((res) => Number(res.valor)));

const maiorValorFaturamentoMes = (faturamento) =>
  Math.max(...faturamento.map((res) => Number(res.valor)));

const mediaFaturamentoMes = (faturamento) => {
  const totalFaturamento = faturamento.reduce((acc, res) => acc + Number(res.valor), 0);
  return (totalFaturamento / faturamento.length).toFixed(2);
};

const diasMaiorQueMedia = (faturamento, media) => {
  return faturamento.filter((res) => Number(res.valor) > media).length;
};

const media = mediaFaturamentoMes(fatutamentoValidoJaneiro);

const quantidadeDiasMaiorQueMedia = diasMaiorQueMedia(fatutamentoValidoJaneiro, media);

console.log(menorValorFaturamentoMes(fatutamentoValidoJaneiro));
console.log(maiorValorFaturamentoMes(fatutamentoValidoJaneiro));
console.log(media);
console.log(quantidadeDiasMaiorQueMedia)
