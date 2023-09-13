
function writeCards(name,event){
 const cards = [];

 for (let i = 0; i < name.length; i++){

  const message = `Thank you, ${name[i]}, for the wonderful ${event} gift!`

  cards.push(message);
 }
  return cards;
}

function countDown(startingNumber){

  let i = startingNumber
  while (i >= 0)
  {console.log (i); i--}
}