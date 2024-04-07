const toDoRepo = require('../repository/toDoRepo');

const post = async(req,res) => {
    const payload = req.body;
    
    try{ 
        if(!payload.status || !payload.title){
        res.status(400).send('Enter the mandatory fields');
        return;
        }
        await toDoRepo.post(payload);
        res.status(201).send('Inserted');
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const get = async(req,res) => {
    try{
        const options = {
        page : req.params.page || 1,
        size : req.params.size || 5,
        status : req.query.status,
        }

        const data = await toDoRepo.get(options);

        const totalRows = await toDoRepo.getCount(options.status);
        const totalPages = Math.ceil(totalRows / options.size);
        
        const response = {
            data,
            totalRows,
            totalPages,
        }

        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const getById = async(req,res) => {
    const id = req.params.id;
    try{
        const data = await toDoRepo.getById(id);
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');   
    }
};

const remove = async(req,res) => {
    const id = req.params.id;
    try{
        if(!id){
            res.status(404).send('Enter correct id');
            return;
        }
        await toDoRepo.remove(id);
        res.status(204).send('Deleted');   
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const put = async(req,res) => {
    const id = req.params.id;
    const payload = req.body;
    try{
        if(!payload.title || !payload.description || payload.status){
            res.status(400).send('Enter mandatory fields');
            return;
        }
        await toDoRepo.put(id,payload);
        res.status(204).send('Updated');
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const patch = async(req,res) => {
    const id = req.params.id;
    const payload = req.body;
    try{
        await toDoRepo.patch(id,payload);
        res.status(204).send('Updated');
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    post,
    get,
    getById,
    remove,
    put,
    patch,
}