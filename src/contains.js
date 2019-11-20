/***
 * 
 * @param {Object} normalist
 * @param {Object} normalist.byId
 * @param {string | number} id
 * @returns {boolean} true when a normalist contains the item
 */
const contains = ({byId}, id) =>  typeof byId[id] !== "undefined";
