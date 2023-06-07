function calcularDivisaoConta(clientes, produtos) {
    var totalConta = 0;
    
    // Calcular o total da conta
    for (var i = 0; i < produtos.length; i++) {
      totalConta += produtos[i].preco * produtos[i].quantidade;
    }
    
    var totalDivisao = 0;
    var resultado = {};
    
    // Calcular a divisão para cada cliente
    for (var i = 0; i < clientes.length; i++) {
      var cliente = clientes[i];
      var totalCliente = 0;
      
      // Calcular o total gasto pelo cliente
      for (var j = 0; j < produtos.length; j++) {
        var produto = produtos[j];
        if (produto.consumidores.includes(cliente)) {
          totalCliente += produto.preco * produto.quantidade;
        }
      }
      
      // Calcular a taxa de serviço para o cliente
      var taxaServico = 0;
      if (totalCliente > 0) {
        taxaServico = totalCliente * 0.1;
        totalDivisao += totalCliente + taxaServico;
      }
      
      resultado[cliente] = totalCliente + taxaServico;
    }
    
    // Distribuir a taxa de serviço entre os clientes que não a pagaram
    var taxaServicoDistribuida = totalDivisao / Object.keys(resultado).length;
    for (var cliente in resultado) {
      if (resultado[cliente] === 0) {
        resultado[cliente] = taxaServicoDistribuida;
      }
    }
    
    return resultado;
}

  
  // Exemplo de utilização
  var clientes = ["João", "Maria", "Pedro"];
  var produtos = [
    { nome: "Pizza", preco: 42, consumidores: ["João", "Maria", "Pedro"], quantidade:1 },
    { nome: "Refrigerante", preco: 8, consumidores: ["João", "Pedro"], quantidade:1 },
    { nome: "Suco", preco: 7, consumidores: ["Maria"], quantidade:1 }
  ];
  
  var resultado = calcularDivisaoConta(clientes, produtos);
//   console.log(resultado);

  var clientes2 = ["Marcos", "Fernando","Júlia", "caio","patricia", "bianca"]
  let produtos2 = [
    {nome:"rodizio simples",preco:70, consumidores:["Marcos","Fernando","Júlia"], quantidade:1},
    {nome:"rodizio executivo", preco:85,consumidores:["caio"], quantidade:1},
    {nome:"temakis",preco:20,consumidores:["patricia"], quantidade:2},
    {nome:"refrigerante",preco:6,consumidores:["Marcos", "Fernando","Júlia", "caio","patricia", "bianca"], quantidade:1}
  ]

  let result = calcularDivisaoConta(clientes2, produtos2)
  console.log(result)