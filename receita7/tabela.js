export const criarTabelaGenerica = (dados, idAlvo, cabecalhos, propriedades) => {
   const div = document.getElementById(idAlvo);

   if (!dados || dados.length === 0) {
      div.innerHTML = "<p>Nenhum dado encontrado.</p>";
      return;
   }

   const linhaCabecalho = `<tr>${cabecalhos.map(cab => `<th>${cab}</th>`).join("")}</tr>`;

   const itensHtml = dados.map(item => {
      const colunas = propriedades.map(prop => `<td>${item[prop]}</td>`).join("");
      return `<tr>${colunas}</tr>`;
   }); 

   div.innerHTML = `<table>${linhaCabecalho}${itensHtml.join("\n")}</table>`;
}