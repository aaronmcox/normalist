
import set from "../set";

let nl0, nl1, nl2;
beforeEach(() => {
    nl0 = { allIds: [ 1, 2], byId: { 1: { id: 1 }, 2: { id: 2 }}};
    nl1 = { allIds: [ 1, 2], byId: { 1: { id: 1 }, 2: { id: 2 }}, favoriteShow: { name: "Chuck"}};
    nl2 = { allIds: [ 1, 2], byId: { 1: { diffId: 1 }, 2: { diffId: 2 }}};
});

// set element that doesn't exist yet
test("set element that doesn't exist yet in normalist should add element to end of allIds", () => {
    const expected = { allIds: [ 1, 2, 3], byId: { 1: { id: 1 }, 2: { id: 2 }, 3: { id: 3}}};

    expect(set(nl0, {id:3})).toEqual(expected);
});

// set element that already exists
test("set element that already exists in normalist should keep allIds order, but overwrite byId element", () => {
    const expected = { allIds: [ 1, 2], byId: { 1: { id: 1 }, 2: { id: 2, theyCallMe: "Mister Pig" }}};

    expect(set(nl0, {id:2, theyCallMe: "Mister Pig"}))
        .toEqual(expected);
});

test("set element for normalist with extra data preserves extra data", () => {
    const expected = { allIds: [ 1, 2, 3], byId: { 1: { id: 1 }, 2: { id: 2 }, 3: { id: 3}}, favoriteShow: { name: "Chuck"}};

    expect(set(nl1, {id:3})).toEqual(expected);
});

test("set works for normalist with alternate idKey", () => {
    const expected = { allIds: [ 1, 2, 3], byId: { 1: { diffId: 1 }, 2: { diffId: 2 }, 3: { diffId: 3}}};

    expect(set(nl2, { diffId: 3}, "diffId"))
        .toEqual(expected);
});
