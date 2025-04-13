const merge = (left: string, right: string): string => {
  let sortedStr = "";
  const leftArr = left.split("");
  const rightArr = right.split("");

  while (leftArr.length > 0 && rightArr.length > 0) {
    sortedStr +=
      leftArr[0].localeCompare(rightArr[0]) < 0
        ? leftArr.shift()
        : rightArr.shift();
  }
  return sortedStr + leftArr.join("") + rightArr.join("");
};

// sort using merge sort
function sortAlphabet(str: string): string {
  if (str.length <= 1) return str.toLowerCase();
  const pivot = Math.floor(str.length / 2);
  const left = sortAlphabet(str.slice(0, pivot));
  const right = sortAlphabet(str.slice(pivot));
  return merge(left, right);
}

function groupAnagrams(strs: string[]): string[][] {
  // create a hash map
  // loop through the array
  // sort the word
  // if sorted word is in the map push the word
  // else create a map and push the value

  const hashmap: Record<string, string[]> = {};

  for (let word of strs) {
    const sorted = sortAlphabet(word);
    if (sorted in hashmap) {
      hashmap[sorted].push(word);
    } else {
      hashmap[sorted] = [word];
    }
  }
  return Object.values(hashmap);
}

