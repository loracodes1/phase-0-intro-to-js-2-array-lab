// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
  }

  function destructivelyPrependCat(name){
    cats.unshift(name)
  }

  function destructivelyRemoveLastCat(){
    cats.pop()
  }
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendcat(name){
    return [...cats,name]
}