const toDoRepo = require('../repository/toDoRepo');

const post = async(req,res) => {
    const payload = req.body;
    
    try{
        await toDoRepo.post(payload);
        res.status(201).send('Inserted');  
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
};

const get = async(req,res) => {
    try{
        const data = await toDoRepo.get();
        res.status(200).json(data);    
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
};

const getById = async(req,res) => {
    const id = req.params.id;
    try{
        const data = await toDoRepo.getById(id);
        res.status(200).json(data);
    }catch(err){
        res.status(500).send('Internal Server Error');   
    }
};

const remove = async(req,res) => {
    const id = req.params.id;
    try{
        await toDoRepo.remove(id);
        res.status(204).send('Deleted');    
    }catch(err){
        res.status(500).send('Internal Server Error');   
    }
};

const put = async(req,res) => {
    const id = req.params.id;
    const payload = req.body;
    try{
        await toDoRepo.put(id,payload);
        res.status(204).send('Updated');   
    }catch(err){
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