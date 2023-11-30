# Projeto de Classificação de Jogadores

Este projeto é uma aplicação web simples que classifica jogadores com base no número de vitórias e derrotas inseridas.

## Estrutura do Projeto

O projeto consiste em três partes principais:

1. **HTML**: A estrutura da página é definida no arquivo HTML. Ele contém um formulário onde os usuários podem inserir o número de vitórias e derrotas de um jogador. O resultado da classificação é exibido na mesma página.

2. **JavaScript**: A lógica por trás da classificação do jogador está contida em um arquivo JavaScript. Ele contém várias funções que validam as entradas do usuário, calculam o saldo de vitórias e classificam o jogador com base nesse saldo.

3. **CSS**: A aparência da página é definida em um arquivo CSS. Ele contém regras que definem o layout, cores, fontes e outros aspectos visuais da página.

## Como Funciona

Quando o usuário insere o número de vitórias e derrotas de um jogador e clica no botão "Enviar", a função `submitForm` é chamada. Esta função recupera os valores inseridos pelo usuário e os passa para a função `validarEntradas`.

A função `validarEntradas` verifica se ambos os campos foram preenchidos. Se algum campo estiver vazio, ela exibe uma mensagem pedindo ao usuário para preencher todos os campos. Se ambos os campos estiverem preenchidos, ela chama a função `calcularRank` para calcular o saldo de vitórias do jogador.

A função `calcularRank` simplesmente subtrai o número de derrotas do número de vitórias e retorna o resultado.

O saldo de vitórias é então passado para a função `classificarNivel`, que determina o nível do jogador com base no saldo de vitórias. Ela define o nível do jogador como "Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário" ou "Imortal", dependendo do saldo de vitórias.

Finalmente, a função `infoPlayerMensagem` exibe uma mensagem na página informando o saldo de vitórias do jogador e seu nível.
