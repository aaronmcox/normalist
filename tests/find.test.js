
import { find } from "..";
import data from "./data";

// one result returns element
test("find that matches one element returns the element", () => {
    const expectedResult = data.arrayOfThree[1];
    const found = find(data.normalistOfThree, element => element.id === expectedResult.id);

    expect(found).toEqual(expectedResult);
});

// two results, returns first element
test("find predicate with more than one result returns only the first", () => {
    const expectedResult = data.arrayOfThree[0];
    const found = find(data.normalistOfThree, () => true);

    expect(found).toEqual(expectedResult);
});

// no results, returns undefined
test("find predicate with no results returns undefined", () => {
    const found = find(data.normalistOfThree, () => false);

    expect(found).toBeUndefined();
});

// empty normalist, returns undefined
test("find on empty normalist returns undefined", () => {
    const found = find(data.emptyNormalist, element => element.id < 2);

    expect(found).toBeUndefined();
});

// compareFn not function, TypeError thrown
test("find with compareFn forgotten throws TypeError", () => {
    const findCall = () => find(data.normalistOfThree);

    expect(findCall).toThrow(TypeError);
});

test("find with compareFn forgotton on empty list throws TypeError", () => {
    const findCall = () => find(data.emptyNormalist);

    expect(findCall).toThrow(TypeError);

});
