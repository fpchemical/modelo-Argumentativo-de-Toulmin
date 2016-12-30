const revinter = require('revinter');
 
let expression = "Qual o produto da reação entre Au e HCl? Eles não reagem, pois o Au não consegue deslocar o H a menos que o Au reaja com um ácido fumegante";
let pattern = "${P} entre ${D}? ${C} pois ${W} a menos que ${R}";
 
console.log( revinter(expression, pattern) );