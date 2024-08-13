function get_random_integer_number(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get_random_number(a) {
    return get_random_integer_number(0, a);
}

test('Get random from 0 to 101', () => {
  const randomNumber = get_random_number(100);
  const greatherNumber = 50;
  const lowerNumber = 10;

  expect(randomNumber).toBeLessThan(greatherNumber);
  expect(randomNumber).toBeGreaterThan(lowerNumber);
});
