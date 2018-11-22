
import { sort } from "..";

const numbersAsc = (n1, n2) => n1.data <= n2.data ? -1 : 1;
let nl0, nl1, nl2;
beforeEach(() => {
    nl0 = { allIds: [1,2,3,4,5], byId: {1: {id:1, data:1}, 2: {id:2, data:2}, 3: {id:3, data:3}, 4: {id:4, data:4}, 5: {id:5, data:5}}};
    nl1 = { allIds: [1,2,3,4,5], byId: {1: {id:1, data:5}, 2: {id:2, data:4}, 3: {id:3, data:3}, 4: {id:4, data:2}, 5: {id:5, data:1}}};
    nl2 = { allIds: [1,2,3,4,5], byId: {1: {id:1, data:1}, 2: {id:2, data:5}, 3: {id:3, data:2}, 4: {id:4, data:4}, 5: {id:5, data:3}}};
});

// already in order
test("sort works when allIds are already in order", () => {
    expect(sort(nl0, numbersAsc))
        .toEqual(nl0);
});

// in reverse order
test("sort works when allIds are in reverse order", () => {
    const expectedResult = { allIds: [5,4,3,2,1], byId: {1: {id:1, data:5}, 2: {id:2, data:4}, 3: {id:3, data:3}, 4: {id:4, data:2}, 5: {id:5, data:1}}};

    expect(sort(nl1, numbersAsc))
        .toEqual(expectedResult);
});

// in "random" order
test("sort works when allIds are in 'random' order", () => {
    const expectedResult = { allIds: [1,3,5,4,2], byId: {1: {id:1, data:1}, 2: {id:2, data:5}, 3: {id:3, data:2}, 4: {id:4, data:4}, 5: {id:5, data:3}}};

    expect(sort(nl2, numbersAsc))
        .toEqual(expectedResult);
});

