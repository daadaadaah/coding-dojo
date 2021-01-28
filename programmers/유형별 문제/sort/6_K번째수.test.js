// URL : https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  return commands.map(command => array.slice(command[0] - 1, command[1])
    .sort((a, b) => a - b)[command[2] - 1]);
}

test('k 번째 수', () => {
  const array = [1, 5, 2, 6, 3, 7, 4];
  const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

  expect(solution(array, commands)).toStrictEqual([5, 6, 3]);
});

// 다른 사람 풀이
// function solution(array, commands) {
//     return commands.map(command => {
//         const [sPosition, ePosition, position] = command
//         const newArray = array
//             .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
//             .sort((a,b) => a - b)

//         return newArray[position - 1]
//     })
// }
