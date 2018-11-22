
import data from "./data";
import { filter } from "..";

// empty
test("filter on empty normalist yields empty list", () => {
    const filtered = filter(data.emptyNormalist, item => item.id === 4);

    expect(filtered.length).toBe(0);
    expect(filtered).toEqual(data.emptyArray);
});

// regular
test("filter matching single element returns array with the element", () => {
   const filtered = filter(data.normalistOfThree, item => item.id === 4);
   const correctArray = [{ id: 4, data1: 4, data2: 42 }];

   expect(filtered.length).toBe(1);
   expect(filtered).toEqual(correctArray);
});

// extra data
test("filter matching elements in normalist with extra data returns only an array with the elements", () => {
    const nlWithExtras = Object.assign({}, data.normalistOfThree, data.someAdditionalData);
    const filtered = filter(nlWithExtras, element => element.data1 > 0);
    const expectedResult = [ { id: 4, data1: 4, data2: 42 }, { id: "seven", data1: 7, data2: 77 }];

    expect(filtered.length).toBe(2);
    expect(filtered).toEqual(expectedResult);
});

test("not supplying filter function throws TypeError", () => {
    expect(() => filter(data.normalistOfThree))
        .toThrow();
});

test("supplying string value as function throws TypeError", () => {
    expect(() => filter(data.normalistOfThree, "a string"))
        .toThrow(TypeError);
});
