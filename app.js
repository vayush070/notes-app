const chalk = require('chalk')
const { demandOption, terminalWidth } = require('yargs')
const yargs=require('yargs')
const note = require('./note.js')
const notes = require('./note.js')


yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe:'adding new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },  
    handler(argv) {
        notes.addnote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'want to remove a note',
            demandOption:true,
            type:'string'
        }
    },  
    handler(argv) {
        notes.removenote(argv.title)
    }
})

yargs.command({
    command:'notelist',
    describe:'list of notes',
    handler(){
        notes.listnote()
    }
})

yargs.command({
    command:'read',
    describe:'reading a note with given title',
    builder:{
        title:{
            describe:'want to read a note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){  
        notes.readnote(argv.title)
    }
})
yargs.parse()
//console.log(yargs.argv)