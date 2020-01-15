let {PythonShell} = require('python-shell')

let controllers = {}

controllers.add = (req,res)=>{
    console.log(req.body);
    const {petal_length, petal_width, sepal_length, sepal_width} = req.body
    
    console.log(petal_length);
    
    let options = {
    mode: 'text',
    // pythonPath: 'path/to/python',
    pythonOptions: ['-u'], // get print results in real-time
    // scriptPath: '../',
    args: [petal_length,petal_width,sepal_length,sepal_width]
    // args: [2,3,4,5]
  };


PythonShell.run('2. K Nearest Neighbor Classification.py', options, function (err,result) {
    if (err) throw err;
    console.log('finished');
    result.map(item=>{
        console.log(item);
        if(item === '[0]'){
            return res.status(200).json({
                er : false,
                data : "Iris Setosa"
            })
        }else if(item === '[1]'){
            return res.status(200).json({
                er : false,
                data : "Iris Versicolour"
            })
        }else{
            return res.status(200).json({
                er : false,
                data : "Iris Virginica"
            })
        }
    }); 
  });
}

module.exports = controllers