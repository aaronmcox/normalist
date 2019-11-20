/**
 * 
 * @param {Object} normalist
 * @param {string[] | number[]} normalist.allIds
 * @param {Object} normalist.byId
 * @returns {Object[]} ordered elements as an array
 */
const toArray = ({allIds, byId}) => allIds.map(id => byId[id]);

export default toArray;
