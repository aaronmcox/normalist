
import toList from "../toList";

test("Calling toList on smallest associalist should yield smallest list", () => {
    expect(toList({ allIds: [0], byId: { 0: { id: 0 }}}))
    .toEqual([{ id: 0 }]);
});
