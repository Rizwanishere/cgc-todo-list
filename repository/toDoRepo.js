const Product = require('../model/toDoModel');

const post = (payload) => {
    const product1 = new Product(payload);
    return product1.save();
};

const getFilterExp = (search) => {
    return{
        $or:[
            {title: new RegExp(search,'i')},
            {description: new RegExp(search,'i')}
        ]
    };
};

const getCount = (search) => {
    const filter = getFilterExp(search);
    return Product.countDocuments(filter);
};

const get = (options) => {
    const {page,size,search,sort,direction} = options;

    const rowsToSkip = (page - 1) * size;
    const filter = getFilterExp(search);

    let sortDir = 1;
    if(direction.toLowerCase() === 'desc'){
        sortDir = -1;
    }

    return Product
    .find(filter,{__v:0})
    .sort({[sort]: sortDir})
    .skip(rowsToSkip)
    .limit(size)
};

const getById = (id) => {
    return Product.findById(id,{__v:0});
};

const remove = (id) => {
    return Product.deleteOne({_id:id});
};

const put = (id,payload) => {
    return Product.updateOne({_id:id},payload);
};

const patch = (id,payload) => {
    return Product.updateOne({_id:id},{$set:payload});
};

module.exports = {
    post,
    getFilterExp,
    getCount,
    get,
    getById,
    remove,
    put,
    patch,
}
