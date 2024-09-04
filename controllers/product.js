exports.read = async(req,res) =>{
    res.send("con")
}

exports.list =async(req,res) =>{
    try{
        res.send('Hello list')
    }catch(err){
        console.log(err);
        res.status(500).send('Server Error')
    }
}

exports.create =async(req,res) =>{
    try{
        res.send('Hello create')
    }catch(err){
        console.log(err);
        res.status(500).send('Server Error')
    }
}

exports.update =async(req,res) =>{
    try{
        res.send('Hello update')
    }catch(err){
        console.log(err);
        res.status(500).send('Server Error')
    }
}

exports.remove =async(req,res) =>{
    try{
        res.send('Hello delete')
    }catch(err){
        console.log(err);
        res.status(500).send('Server Error')
    }
}