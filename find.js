const find = ({allIds, byId}, testingFn) => {
    allIds.forEach(id => {
        if( testingFn(byId[id]) ) {
            return byId[id];
        }
    });
    return undefined;
};

export default find;