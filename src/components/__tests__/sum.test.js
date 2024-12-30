import Sum from '../Sum';

test("test sum of two", () => {
    const res = Sum(2, 3);
    expect(res).toBe(5);
})