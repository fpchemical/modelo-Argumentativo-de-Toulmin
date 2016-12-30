## O modelo de Toulmin e a análise da prática da argumentação em matemática

> **Mas!! Se pode ser utilizado na matematica também pode ser utilizado na Química!!**

Durante minhas "surf-pesquisas" encontrei um artigo sobre [argumentação em matemática](https://drive.google.com/file/d/0B9E62eWntClqc1dVODlpZFdMVms/view) e resolvi aplicar em um exemplo de Química com Java Script, só para argumentar rsrsrsrsrsrs

O modelo de Toulmin (2006) diz o seguinte:

> Para analisar se um argumento é válido ou não, Toulmin (2006) postula que devemos representá-lo em uma estrutura ou modelo. Neste, organizamos os elementos principais na forma de dados (D) – fatos os quais recorremos para fundamentar nossa conclusão; conclusão (C) – afirmações que buscamos estabelecer como válidas; justificativas (J) – justificam a passagem dos dados a conclusão, atribuindo força ao argumento. Essa força aparece algumas vezes expressa por meio de qualificadores modais (Q) – que, por sua vez, podem se apresentar na forma de possibilidades ou impossibilidades. Nesse segundo caso, haverá a necessidade de se estabelecer quais as situações em que as garantias não se aplicam, ou seja, as condições de refutação (R); podemos ainda fazer uso explícito ou implícito de apoios (B) na forma de afirmações categóricas que podem fundamentar nossas garantias. Vale ressaltar que os argumentos podem se apresentar na forma completa ou reduzida, sendo composto nesse último caso pelos dados, justificativas e conclusão.

Representação do modelo de Toulmin

![mapa mental](http://www.scielo.br/img/revistas/epec/v16n3//1983-2117-epec-16-03-00147-gf1.png)


Agora observem o exemplo que criei com a ajuda do @suissa que utilizou a programação para implementar o modelo 
```js
const revinter = require('revinter');
 
let expression = "Qual o produto da reação entre Au e HCl? Eles não reagem, pois o Au não consegue deslocar o H a menos que o Au reaja com um ácido fumegante";
let pattern = "${P} entre ${D}? ${C} pois ${W} a menos que ${R}";
 
console.log( revinter(expression, pattern) );
```


