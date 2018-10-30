const greeting = require('./src/greeting');

test("Returns a greeting with a custom name", () =>
{
	expect(greeting("Totoro")).toBe("Hello Totoro!");
});
