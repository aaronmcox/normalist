
import toArray from "../toArray";
import data from "./data";

test("Calling toArray on normalist with 1 item yields correct list with 1 item", () => {
    expect(toArray(data.normalistOfOne))
    .toEqual(data.arrayOfOne);
});

test("calling toArray on normalist with mutliple items yields list with 3 items", () => {
    expect(toArray(data.normalistOfThree))
    .toEqual(data.arrayOfThree);
});

