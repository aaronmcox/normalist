
import toArray from "../lib/toArray";
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

test("toArray yields correct array when the idKey is not 'id'", () => {
    expect(toArray(data.normalistWithNameForId))
        .toEqual(data.arrayWithNameForId);
});

test("toArray pulls data from byId and allIds only when called on normalist with additional data", () => {
    const normalistWithExtras = Object.assign({}, data.normalistOfThree, data.someAdditionalData);
    expect(toArray(normalistWithExtras))
        .toEqual(data.arrayOfThree);
});

test("toArray yields proper array when called with additional data and when idKey !== 'id'", () => {
    const nlWithExtras = Object.assign({}, data.normalistWithNameForId, data.someAdditionalData);
    expect(toArray(nlWithExtras))
        .toEqual(data.arrayWithNameForId);
});
