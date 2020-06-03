function computerPlay() {
  arr = ['Rock', 'Paper', 'Scissors'];
  let play = arr[Math.floor(Math.random() * arr.length)];
  return play;
}