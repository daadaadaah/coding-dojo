const isPalindrome = word => {
  const size = word.length;

  for (let i = 0; i < size / 2; i++) {
    if (word[i] !== word[size - (i + 1)]) {
      return false;
    }
  }

  return true;
};

test('isPalindrome', () => {
  expect(isPalindrome('a')).toBeTruthy();
  expect(isPalindrome('aa')).toBeTruthy();
  expect(isPalindrome('aba')).toBeTruthy();
  expect(isPalindrome('rotator')).toBeTruthy();

  expect(isPalindrome('ab')).toBeFalsy();
  expect(isPalindrome('ccd')).toBeFalsy();
  expect(isPalindrome('ashal')).toBeFalsy();
});
