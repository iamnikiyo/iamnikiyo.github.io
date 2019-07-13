const data = require('../../data/data.json');

export const getData = (type) => {
     return data.items.find(obj => { return obj.type == type});
}
