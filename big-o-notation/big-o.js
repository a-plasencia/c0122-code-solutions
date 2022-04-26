/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= 0(n)
    i++                             // 2 * n = O(2n) ~= 0(n)
  ) {
    const word = words[i];          // 3 * n = O(3n) ~= 0(n)
    if (!seen[word]) {              // 4 * n = O(4n) ~= 0(n)
      seen[word] = true;
      unique[unique.length] = word; // 5 * n = O(5n) ~= 0(n)
    }
  }
  return unique;                    // 1 * 1 = 0(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= 0(n)
    i++                             // 2 * n = O(2n) ~= 0(n)
  ) {
    const word = words[i];          // 3 * n = O(3n) ~= 0(n)
    let isUnique = true;            // 4 * n = 0(4n) ~= 0(n)
    for (
      let c = 0;                    // 0 * 1 = O(1)
      c < i;                        // 2n * n = O(n^2) ~= 0(n^2)
      c++                           // 2n * n = O(n^2) ~= 0(n^2)
    ) {
      const comparing = words[c];   // 3n * n = O(3n^2) ~= 0(n^2)
      if (comparing === word) {     // 4n * n = O(4n^2) ~= 0(n^2)
        isUnique = false;           // 5n * n = O(5n^2) ~= 0(n^2)
      }
    }
    if (isUnique) {                 // 4n * n = O(4n^2) ~= 0(n^2)
      unique[unique.length] = word; // 5n * n = O(5n^2) ~= 0(n^2)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n2)
