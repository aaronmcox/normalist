const sort = ({allIds, byId}, compareFn) => allIds.map(id => byId[id]).sort(compareFn);

export default sort;