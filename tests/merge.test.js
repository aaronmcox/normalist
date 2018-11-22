
import data from "./data";
import { merge } from "..";

let nl0, nl1, nl2, nl3, nl4;
beforeEach(() => {
    nl0 = { allIds: [ 1, 2], byId: { 1: { id: 1 }, 2: { id: 2 }}};
    nl1 = { allIds: [ 3, 4], byId: { 3: { id: 3 }, 4: { id: 4 }}};
    nl2 = { allIds: [ 5, 6], byId: { 5: { id: 5 }, 6: { id: 6 }}, isFetching: true};
    nl3 = { allIds: [ 7, 8], byId: { 7: { id: 7 }, 8: { id: 8 }}, isFetching: false};
    nl4 = { allIds: [ 2, 3], byId: { 2: { id: 2, name: "beth" }, 3: { id: 3 }}};
});

// merge empty normalist into normalist
test("merge empty normalist into normalist should equal non-empty normalist", () => {
    expect(merge(data.normalistOfThree, data.emptyNormalist))
        .toEqual(data.normalistOfThree);
});

// merge normalist into empty normalist
test("merge normalist into empty normalist should equal non-empty normalist", () => {
    expect(merge(data.emptyNormalist, data.normalistOfThree))
        .toEqual(data.normalistOfThree);
});

// merge two normalists together
test("merging two normalists with unique elements should be a full union containing all elements", () => {
    const merged = merge(nl0, nl1);
    const expectedMerged = { allIds: [1,2,3,4], byId: {1: {id: 1}, 2: {id: 2}, 3: {id: 3}, 4: {id: 4}}};

    expect(merged).toEqual(expectedMerged);
});

// merge normalist w/out additional data into one with additional data
test("merge normalist w/out additional data into one with merges all properties successfully", () => {
    const merged = merge(nl2, nl1);
    const expectedMerged = { allIds: [5,6,3,4], byId: {3: {id:3}, 4: {id:4}, 5: {id: 5}, 6: {id:6}}, isFetching: true};

    expect(merged).toEqual(expectedMerged);
});

// merge normalist w/ additional data into one without additional data
test("merge normalist w/ additional data into one without merges all properties successfully", () => {
    const merged = merge(nl1, nl2);
    const expectedMerged = { allIds: [3,4,5,6], byId: {3: {id:3}, 4: {id:4}, 5: {id: 5}, 6: {id:6}}, isFetching: true};

    expect(merged).toEqual(expectedMerged);
});

test("merge two normalists, elements in source override destination when equal", () => {
    const merged = merge(nl4, nl0);
    const expectedMerged = { allIds: [ 2, 3, 1], byId: { 1: { id: 1 }, 2: { id: 2 }, 3: { id: 3}}};

    expect(merged).toEqual(expectedMerged);
});

test("merge two normalists, extra data in source override destination", () => {
    const merged = merge(nl2, nl3);
    const expectedMerged = { allIds: [ 5,6,7,8], byId: { 5: { id: 5 }, 6: { id: 6 }, 7: { id: 7}, 8: {id:8}}, isFetching: false};

    expect(merged).toEqual(expectedMerged);
});

