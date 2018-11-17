
import toArray from "../toArray";

test("Calling toArray on smallest associalist should yield smallest list", () => {
    expect(toArray({ allIds: [0], byId: { 0: { id: 0 }}}))
    .toEqual([{ id: 0 }]);
});
