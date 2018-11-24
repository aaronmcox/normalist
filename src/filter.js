
function filter({allIds, byId}, filterFunc) {
    const filteredElements = [];
    allIds.forEach(id => {
        const element = byId[id];
        if( filterFunc(element)) {
            filteredElements.push(element);
        }
    });
    return filteredElements;
}

export default filter;
