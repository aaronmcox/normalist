
import toArray from "../toArray";
import data from "./data";

test("Calling toArray on empty normalist yields empty array", () => {
    expect(toArray(data.emptyNormalist))
        .toEqual(data.emptyArray);
});

test("Calling toArray on normalist with 1 item yields correct array with 1 item", () => {
    expect(toArray(data.normalistOfOne))
        .toEqual(data.arrayOfOne);
});

test("calling toArray on normalist with mutliple items yields array with 3 items", () => {
    expect(toArray(data.normalistOfThree))
        .toEqual(data.arrayOfThree);
});

test("toArray yeilds correct array when the idKey is not 'id'", () => {
    expect(toArray(data.normalistWithNameForId))
        .toEqual(data.arrayWithNameForId);
});