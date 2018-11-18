
const emptyArray = [];
const emptyNormalist = { allIds: [], byId: {}};

const arrayOfOne = [{ id: 0 }];
const normalistOfOne = {
    allIds: [0],
    byId: {
        0: {
            id: 0
        }
    }
};

const arrayOfThree = [
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
const normalistOfThree = {
    allIds: [ 4, -4, "seven" ],
    byId: { 4: { id: 4, data1: 4, data2: 42 }, "-4": { id: -4, data1: -4, data2: -42 }, "seven": { id: "seven", data1: 7, data2: 77 }}
};

const arrayWithNameForId = [
    { name: "Paul", age: 42 },
    { name: "Bob",  age: 29 },
    { name: "Dick", age: 19 }
];
const normalistWithNameForId = {
    allIds: [ "Paul", "Bob", "Dick"],
    byId: {
        "Paul": { name: "Paul", age: 42 },
        "Bob": { name: "Bob",  age: 29 },
        "Dick": { name: "Dick", age: 19 }
    }
};

const someAdditionalData = {
    "isLoading" : true,
    "isDirty" : false,
    "favoriteNumber" : 19
};


export default {
    emptyArray,
    emptyNormalist,
    arrayOfOne,
    normalistOfOne,
    arrayOfThree,
    normalistOfThree,
    arrayWithNameForId,
    normalistWithNameForId,
    someAdditionalData
};
