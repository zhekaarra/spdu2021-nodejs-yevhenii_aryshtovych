import express from 'express'
import fs from 'fs'
import readline from 'readline-sync'

const app = express()
const PORT = 3000

let pathToHtml = readline.question("Write a path to Html? ") //lr.html
let pathToJson =  readline.question("Write a path to JSON? ") //data.json

let fileContent = fs.readFileSync( pathToHtml, "utf8")
let obj = JSON.parse(fs.readFileSync( pathToJson, "utf8"))

function parse (str, obj) {
    const keys = Object.keys(obj)
    keys.forEach(key => {
        str = str.replace(`{${key}}`, obj[key])
    })
    return str
}
app.listen(PORT,()=>console.log("server was start on PORT" + PORT))
app.get('/',(req,res)=> {
    res.send(parse(fileContent, obj))
})




