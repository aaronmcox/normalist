
import { length, set } from "../src";
import data from "./data.js";
import uuid from "uuid/v4.js";

test("length of empty normalist should be 0", () => {
    expect(length(data.emptyNormalist)).toBe(0);
});

test("length of normalist with three items should be 3", () => {
    expect(length(data.normalistOfThree)).toBe(3);
});

test("length of normalist increases by 1 when a new element is added", () => {
    const sizedThree = Object.assign({}, {
        byId: { ...data.normalistOfThree.byId },
        allIds: [ ...data.normalistOfThree.allIds ]
    });
    const lengthOfSizedThree = length(sizedThree);
    const sizedFour = set(sizedThree, {id: uuid()});

    expect(length(sizedFour)).toBe(lengthOfSizedThree + 1);
});