import * as nl from "../src";
import create from "../src/create";
import filter from "../src/filter";
import find from "../src/find";
import merge from "../src/merge";
import set from "../src/set";
import sort from "../src/sort";
import toArray from "../src/toArray";

test("create is a function", () => {
    expect(typeof nl.create).toBe("function");
    expect(typeof create).toBe("function");
});

test("filter is a function", () => {
    expect(typeof nl.filter).toBe("function");
    expect(typeof filter).toBe("function");
});

test("find is a function", () => {
    expect(typeof nl.find).toBe("function");
    expect(typeof find).toBe("function");
});

test("merge is a function", () => {
    expect(typeof nl.merge).toBe("function");
    expect(typeof merge).toBe("function");
});

test("set is a function", () => {
    expect(typeof nl.set).toBe("function");
    expect(typeof set).toBe("function");
});

test("sort is a function", () => {
    expect(typeof nl.sort).toBe("function");
    expect(typeof sort).toBe("function");
});

test("toArray is a function", () => {
    expect(typeof nl.toArray).toBe("function");
    expect(typeof toArray).toBe("function");
});


