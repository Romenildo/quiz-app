

//embaralha o array, gera uma sequencia do array aleatoria a cada chamada
export function shuffle(itens: any[]):any[]{
    return itens
    .map(value => ({value, random: Math.random()}))//gera uma sequencia aleatoria toda vez
        .sort((obj1, obj2) => obj1.random - obj2.random)//ordena os itens de acordo com o numero aleatorio
        .map(obj => obj.value)//pega os itens novamente sem os random

}