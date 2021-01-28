// URL : https://programmers.co.kr/learn/courses/30/lessons/42747

// H Index 란 : https://www.ibric.org/myboard/read.php?Board=news&id=270333

function solution(citations) {
  if (citations.length === 1 && citations[0] === 0) {
    return 0;
  }

  citations.sort((a, b) => b - a); // 오름차순 정렬

  let cnt = 0;

  citations.map((citation, index) => {
    if (index + 1 <= citation) {
      cnt = index;
    }
  });

  return cnt + 1;
}


test('H Index', () => {
  const citations = [3, 0, 6, 1, 5];

  expect(solution(citations)).toBe(3);
});

test('H Index', () => {
  const citations = [2, 2, 2, 2, 2];

  expect(solution(citations)).toBe(2);
});

test('H Index', () => {
  const citations = [0, 1, 1];

  expect(solution(citations)).toBe(1);
});


test('H Index', () => {
  const citations = [0];

  // console.log(citations.filter(citation => citation >= 3).length);
  expect(solution(citations)).toBe(0);
});


test('H Index', () => {
  const citations = [7];

  // console.log(citations.filter(citation => citation >= 3).length);
  expect(solution(citations)).toBe(1);
});

test('H Index', () => {
  const citations = [0, 0, 1, 1];

  // console.log(citations.filter(citation => citation >= 3).length);
  expect(solution(citations)).toBe(1);
});

test('H Index', () => {
  const citations = [20, 21, 22, 23];

  // console.log(citations.filter(citation => citation >= 3).length);
  expect(solution(citations)).toBe(4);
});

test('H Index', () => {
  const citations = [6, 6, 6, 6, 6, 1];

  // console.log(citations.filter(citation => citation >= 3).length);
  expect(solution(citations)).toBe(5);
});


test('H Index', () => {
  const citations = [12, 11, 10, 9, 8, 1];

  // console.log(citations.filter(citation => citation >= 3).length);
  expect(solution(citations)).toBe(5);
});

test('H Index', () => {
  const citations = [6, 6, 6, 6, 6, 1];

  // console.log(citations.filter(citation => citation >= 3).length);
  expect(solution(citations)).toBe(5);
});

test('H Index', () => {
  const citations = [4, 4, 4];

  // console.log(citations.filter(citation => citation >= 3).length);
  expect(solution(citations)).toBe(3);
});

test('H Index', () => {
  const citations = [4, 4, 4, 5, 0, 1, 2, 3];

  // console.log(citations.filter(citation => citation >= 3).length);
  expect(solution(citations)).toBe(4);
});

test('H Index', () => {
  const citations = [10, 11, 12, 13];

  // console.log(citations.filter(citation => citation >= 3).length);
  expect(solution(citations)).toBe(4);
});

test('H Index', () => {
  const citations = [3, 0, 6, 1, 5];

  // console.log(citations.filter(citation => citation >= 3).length);
  expect(solution(citations)).toBe(3);
});

test('H Index', () => {
  const citations = [0, 0, 1, 1];

  // console.log(citations.filter(citation => citation >= 3).length);
  expect(solution(citations)).toBe(1);
});

test('H Index', () => {
  const citations = [0, 1];

  // console.log(citations.filter(citation => citation >= 3).length);
  expect(solution(citations)).toBe(1);
});

test('H Index', () => {
  const citations = [10, 9, 4, 1, 1];

  // console.log(citations.filter(citation => citation >= 3).length);
  expect(solution(citations)).toBe(3);
});


// 다른 사람 코드
// function solution(citations) {
//   return citations
//     .sort((a, b) => b - a)
//     .reduce((pre, cur, idx) => {
//       const result = cur >= ++idx ? idx : pre;
//       return result;
//     }, 0);
// }
