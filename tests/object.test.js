function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function get_serialized_object() {
  const formattedDateTime = new Date().toUTCString().replace(/T/, " ").replace(/\..+/, "");
  return {
    name: "Rafael",
    age: 24,
    work: "Flaky tests",
    creagted_at: formattedDateTime,
  };
}

test("Object serialize test", () => {
  const person = get_serialized_object();
  expect(person).toMatchObject(person);
});

test("Object serialize test with delay", async () => {
  const person = get_serialized_object();
  await delay(100);
  expect(person).toMatchObject(get_serialized_object());
});
