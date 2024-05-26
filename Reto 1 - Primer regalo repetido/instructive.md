# Primer regalo repetido

En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales. Además, en la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único, pero algunos números se han asignado a más de un juguete. Este repositorio contiene las soluciones para dos problemas relacionados con estos escenarios.

## Problema 1: Fabricación de Regalos

### Descripción

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo. Dada una lista de regalos y los materiales disponibles, necesitamos determinar qué regalos se pueden fabricar.

### Implementación

La función `manufacture(gifts, materials)` recibe una lista de nombres de regalos y una cadena de texto con los materiales disponibles. Devuelve una lista de los nombres de los regalos que se pueden fabricar.

```javascript
    const giftIds = [2, 1, 3, 5, 3, 2];
    const firstRepeatedId = findFirstRepeated(giftIds);
    console.log(firstRepeatedId); // 3
    // Aunque el 2 y el 3 se repiten
    // el 3 aparece primero por segunda vez

    const giftIds2 = [1, 2, 3, 4];
    const firstRepeatedId2 = findFirstRepeated(giftIds2);
    console.log(firstRepeatedId2); // -1
    // Es -1 ya que no se repite ningún número

    const giftIds3 = [5, 1, 5, 1];
    const firstRepeatedId3 = findFirstRepeated(giftIds3);
    console.log(firstRepeatedId3); // 5
```
