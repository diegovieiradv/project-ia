let webhook = "https://dvdiego87.app.n8n.cloud/webhook-test/animacao-css";

// funcao assincrona
async function cliqueiNoBotao() {
  let textoInput = document.querySelector(".input-animacao").value;
  let codigo = document.querySelector(".codigo-css");
  let areaResultado = document.querySelector(".area-resultado");

  // fetch - 1) O endereco 2) configuracoes 3) os dados
  // JSON - O formato de dados que usamos na internet

  let resposta = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pergunta: textoInput }),
  });

  let resultado = await resposta.json();

  let info = JSON.parse(resultado.resposta);

  console.log(info);

  codigo.innerHTML = info.code;

  areaResultado.innerHTML = info.preview;

  document.head.insertAdjacentHTML(
    "beforeend",
    "<style>" + info.style + "</style>"
  );
}
