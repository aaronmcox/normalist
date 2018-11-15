
import create from "../create";

test("Creating associalist from empty list yields empty associalist", () => {
    expect(create([]))
    .toEqual({ allIds: [], byId: {}});
});

test("Smallist list possible can be created", () => {
    expect(create([{ id: 1 }]))
    .toEqual({ allIds: [1], byId: { 1: { id: 1 }} });
});

test("Smallist list possible with alternate id field can be created", () => {
    expect(create([{ notId: 1 }], "notId"))
    .toEqual({ allIds: [1], byId: { 1 : { notId: 1 }}});
});

test("List with multiple values can be created correctly", () => {
    const biggerList = [
        {
            id: 4,
            data1: 4,
            data2: 42
        },
        {
            id: -4,
            data1: -4,
            data2: -42
        },
        {
            id: "seven",
            data1: 7,
            data2: 77 
        },
    ];
    const biggerAssocialist = {
        allIds: [ 4, -4, "seven" ],
        byId: { 4: { id: 4, data1: 4, data2: 42 }, "-4": { id: -4, data1: -4, data2: -42 }, "seven": { id: "seven", data1: 7, data2: 77 }}
    };
    expect(create(biggerList))
    .toEqual(biggerAssocialist);
});

test("Associalist can be created with additional data", () => {
    const smallList = [{ id: 2, data: 2}, { id: 4, data: 9 }];
    const additionalData = {
        "one" : true,
        "two" : true,
        "five" : false
    };
    const smallAssocialistWithAdditionalData =
        { allIds: [2,4], byId: { 2:{id: 2, data: 2}, 4:{id:4, data: 9}}, "one": true, "two": true, "five": false};

    expect(create(smallList, "id", additionalData))
    .toEqual(smallAssocialistWithAdditionalData);
});

