
import create from "../create";
import data from "./data";

test("Empty normalist is created from empty list", () => {
    expect(create(data.emptyArray))
    .toEqual(data.emptyNormalist);
});

test("Smallist normalist possible can be created", () => {
    expect(create(data.arrayOfOne))
    .toEqual(data.normalistOfOne);
});

test("normalist with alternate id field can be created", () => {
    expect(create(data.arrayWithNameForId, "name"))
    .toEqual(data.normalistWithNameForId);
});

test("List with multiple values can be created correctly", () => {
    expect(create(data.arrayOfThree))
    .toEqual(data.normalistOfThree);
});

test("Associalist can be created with additional data", () => {
    const list = data.arrayOfThree;
    const normalist = Object.assign({}, data.normalistOfThree, data.someAdditionalData);

    expect(create(list, "id", data.someAdditionalData))
    .toEqual(normalist);
});

