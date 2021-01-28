// URL : https://programmers.co.kr/learn/courses/30/lessons/42746

const solution = numbers => {
  const answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');

  return answer[0] === '0' ? '0' : answer;
};


test('가장 큰 수', () => {
  const numbers = [3, 30, 34, 5, 9];

  expect(solution(numbers)).toBe('9534330');
});

test('가장 큰 수', () => {
  const numbers = [0, 0, 0, 1];

  expect(solution(numbers)).toBe('1000');
});

test('가장 큰 수', () => {
  const numbers = [200, 20, 2];

  expect(solution(numbers)).toBe('220200');
});

test('가장 큰 수', () => {
  const numbers = [0, 0, 0, 0, 0];

  expect(solution(numbers)).toBe('0');
});

// 다른 사람 풀이
// function solution(numbers) {
//     var answer = numbers.map(v=>v+'')
//                         .sort((a,b) => (b+a)*1 - (a+b)*1)
//                         .join('');
//     return answer[0]==='0'?'0':answer;
// }
