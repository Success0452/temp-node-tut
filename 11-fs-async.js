const {readFile, writeFile} = require('fs');
console.log('start')
readFile("./content/first.txt", 'utf8', ((err, result) => {
    if(err){
        console.log(err)
        return;
    }

    console.log(result)
    var first = result;

    readFile("./content/second.txt", 'utf8', ((err, result) => {
        if(err){
            console.lof(err)
            return;
        }

        console.log(result)
        var second = result;

        writeFile(
            "./content/result-async.txt",
            `Here is the result of: ${first} ${second}`,
        ((err, result) => {
            if(err){
                console.log(err)
                return;
            }
            console.log('done with this task');
        }))
    }))
}))
console.log('starting with next task');