/**
 * 
 * @param normalist
 * @param mappingFn
 * @returns {{allIds: ...*[], byId: Uint8Array | BigInt64Array | any[] | Float64Array | Int8Array | Float32Array | Int32Array | Uint32Array | Uint8ClampedArray | BigUint64Array | Int16Array | Uint16Array}}
 */
function map(normalist, mappingFn) {
    if( typeof mappingFn !== "function" ) {
      throw new TypeError("mappingFn eeds to be a function");
    }
    
    const newById = normalist.allIds.map(id => mappingFn(byId[id]));
    
    const newNormalist = {
      allIds: [...normalist.allIds],
      byId: newById
    };
    
    for(const propertyName of Object.getOwnPropertyNames(normalist)) {
      if( propertyName !== "byId" && propertyName !== "allIds") {
        newNormalist[propertyName] = normalist[propertyName];
      }
    }
    
    return newNormalist;
}

export default map;