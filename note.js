const chalk = require('chalk')
const fs=require('fs')
const { title } = require('process')

const addnote= (title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=>note.title==title)
    const duplicateNote=notes.find((note)=>note.title==title)
    // const duplicateNotes=notes.filter(function(note){
    //     return note.title==title
    // })

    if (!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.whiteBright.bgRgb(red="0",green="100",blue="0")('New Note Added'))
    }
    else{
        console.log(chalk.whiteBright.bgRed('Already taken Title'))
    }
    
       
}

const removenote=(title)=>{
    const notes=loadNotes()
    const notestokeep=notes.filter((note)=>note.title!==title)
    if(notestokeep.length===notes.length-1)
    {
        saveNotes(notestokeep)
        console.log(chalk.whiteBright.bgRgb(red="0",green="100",blue="0")('Notes Removed Successfully'))
    }
    else if(notestokeep.length===notes.length){
        console.log(chalk.whiteBright.bgRed('No such Notes Found'))
    }
}

const readnote=(title)=>{
    
    const notes=loadNotes()
    const finder=notes.find((note)=>note.title===title)   
    if(finder){
        console.log(chalk.green(title))
        console.log(finder.body) 
    }
    else{
        console.log(chalk.whiteBright.bgRed('Notes Not Found'))
    }
   
}

const listnote=()=>{
    console.log(chalk.blackBright.bgCyan.bold('Your Notes'))
    const listofnotes=loadNotes()
    listofnotes.forEach((note) => {
        console.log(chalk.green(note.title))  
    })

}
const saveNotes=(notesave)=>{
    const dataJSON=JSON.stringify(notesave)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
    
}



module.exports={
    addnote:addnote,
    removenote:removenote,
    listnote:listnote,
    readnote:readnote
}