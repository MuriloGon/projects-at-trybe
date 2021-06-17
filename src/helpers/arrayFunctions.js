// Font: Stackoverflow
// url:
//  https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
//  https://github.com/coolaj86/knuth-shuffle
export default function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
