import getRandomNumber from "./get-random-number";

describe("get-random-number", () => {
  it("returns random number no greater than 6", () => {
    const max = 6;
    const randomNumber = getRandomNumber(max);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });
});
