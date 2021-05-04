Feature: Filtrar Vagas de emprego
As um candidato 
I want to ordenar minha lista de vagas com base em quantidade de vagas ou salario
And possivelmente filtrar por um pre-requisito para a vaga
So that eu possa ver as vaga que melhor ajustam meu desejo

######################GUI######################

Scenario: Ordenar minha lista de vagas pelo maior salario disponivel por oferta, sem pre-requisitos.
Given um candidato está na pagina “candidate” 
And ele ve a tabela de “vagas disponiveis”
When o candidato seleciona o “checkbox” para a ordenação por “Salário Maior”
Then a tabela de vagas agora é ordenada pela coluna “Salário”
And o primeiro elemento da tabela será o maior “salario das vagas” e o ultimo será o menor “salario das vagas” por oferta de emprego
And as outras colunas não estarão ordenadas.

Scenario: Ordenar minha lista pela maior quantidade de vagas disponiveis por oferta, sem pre-requisitos.
Given um candidato está na pagina “candidate” 
And ele ve a tabela de “vagas disponiveis”
When o candidato seleciona o “checkbox” para a ordenação por “Mais vagas”
Then a tabela de vagas agora é ordenada pela coluna “Vagas”
And o primeiro elemento da tabela será o maior “numero de vagas” e o ultimo será o menor “numero de vagas” por oferta de emprego
And as outras colunas não estarão ordenadas.


Scenario: Ordenar minha lista pela maior quantidade de vagas disponiveis por oferta, e filtrar por pre-requisitos.
Given um candidato está na pagina “candidate” 
And ele ve a tabela de “vagas disponiveis”
When o candidato seleciona o “checkbox” para a ordenação por “Salário Maior”
Then a tabela de vagas agora é ordenada pela coluna “Salário”
And o primeiro elemento da tabela será o maior “salario das vagas” e o ultimo será o menor “salario das vagas” por oferta de emprego
And as outras colunas não estarão ordenadas.
And aparecerão as vagas com “java/angular” como pre-requisito

#####################Service#####################
Scenario: Sistema ordena a tabela e filtra a aplicação por pre-requisitos corretamente.
Given o candidato prefere ordenar por “salario”
And adcionar o filtro “java-angular”
When ele procura por tais informações
Then o sistema muda o metodo “get” para a url “http://localhost:3001/vacancy?order=quantity&filter=java-angular” 
And o sistema retorna uma lista ordenada pela coluna “salario” 
And que tenham pelo menos “java-angular” como pre-requisito
