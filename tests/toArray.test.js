
import toArray from "../toArray";
import data from "./data";

test("Calling toArray on smallest associalist should yield smallest list", () => {
    expect(toArray(data.normalistOfOne))
    .toEqual(data.arrayOfOne);
});

