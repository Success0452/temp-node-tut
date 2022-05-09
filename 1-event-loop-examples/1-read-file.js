const { readFile } = require('fs')
console.log('Start First Task')

readFile("./content/first.txt", 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return;
    }

    console.log(result)
    console.log('Task finish execution')
})

console.log('Starting next task')