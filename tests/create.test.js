
import create from "../create";

test("Creating associalist from empty list yields empty associalist", () => {
    expect(create([])).toEqual({ allIds: [], byId: {}});
});

test("Smallist list possible can be created", () => {
    expect(create([{ id: 1 }])).toEqual({ allIds: [1], byId: { 1 : { id: 1 }}})
});

test("Smallist list possible with alternate id field can be created", () => {
    expect(create([{ notId: 1 }], "notId")).toEqual({ allIds: [1], byId: { 1 : { notId: 1 }}})
});


