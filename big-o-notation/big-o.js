/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = 0(1)
  const unique = [];                // 1 * 1 = 0(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = 0(n)
    i++                             // 2 * n = 0(n)
  ) {
    const word = words[i];          // 2 * n = 0(n)
    if (!seen[word]) {              // 2 * n = 0(n)
      seen[word] = true;
      unique[unique.length] = word; // 3 * n = 0(n)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = 0(1)
    i < words.length;               // 2 * n = 0(n)
    i++                             // 2 * n = 0(n)
  ) {
    const word = words[i];          // 2 * n = 0(n)
    let isUnique = true;            // 1 * n = 0(n)
    for (
      let c = 0;                    // 1 * n = 0(n)
      c < i;                        // n * n = O(n^2)
      c++                           // n * n = O(n^2)
    ) {
      const comparing = words[c];   // n * n = O(n^2)
      if (comparing === word) {     // n * n = O(n^2)
        isUnique = false;           // n * n = O(n^2)
      }
    }
    if (isUnique) {                 // n * n = O(n^2)
      unique[unique.length] = word; // n * n = O(n^2)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
