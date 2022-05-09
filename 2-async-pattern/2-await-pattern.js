const {readFile, writeFile} = require('fs').promises
// const util = require('util')

// const readFirstPromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try{
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')

        console.log(`${first} ${second}`)

        await writeFile('./content/result-mind-grenade.txt', `This is Awesome: ${first} ${second} `)
    }catch(error){
        console.log(error)
    }
}

start()


// const getText = (path) => {
//     return new Promise((resolve, rejects) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err){
//                 return rejects(err)
//             }else{
//                 return resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))