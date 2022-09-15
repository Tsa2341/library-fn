export function capitalizeFirstLetter(word) {
  if (!word) {
    return word;
  }
  const splitWord = word.trim().toLowerCase().split('');

  return [splitWord.at(0).toUpperCase(), ...splitWord.slice(1)].join('');
}
