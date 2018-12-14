
import data from "./data.js";
import get from "../src/get.js";

test("get returns undefined when an object doesn't exist", () => {
    expect(get(data.normalistOfThree,"doesn'tExist_nope")).toBeUndefined();
});

test("get returns the object sith the specified id", () => {
    let first = data.arrayOfThree[0];
    let second = data.arrayOfThree[1];
    let third = data.arrayOfThree[2];

    expect(get(data.normalistOfThree, first.id)).toEqual(first);
    expect(get(data.normalistOfThree, second.id)).toEqual(second);
    expect(get(data.normalistOfThree, third.id)).toEqual(third);
});