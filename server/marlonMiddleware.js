var TesseractJS = require('tesseract.js')

const testText1 = 'account\nuser_id serial PRIMARY KEY\n username VARCHAR (50) UNIQUE NOT NULL\npassword VARCHAR (50) NOT NULL\n\n'
const testText2 = 'role\nrole_id serial PRIMARY KEY\nrole_name VARCHAR (255) UNIQUE NOT NULL\n'

const dataArr = [testText1,testText2];

function textToObj(textArr){
    // console.log(textArr)
    const table = {};
    table.tableName = textArr[0];

    for(let i = 1; i < textArr.length; i++){
        table[i-1] = textArr[i]
    }
    console.log('****table result', table)
    return table
}




function cleanText(text){
    console.log('======GOT TEXT=====')
    const lineSplit = text.split('\n')

    let spaceSplit = {}
    let finalArr = [];

    lineSplit.forEach((e) => {
        const a = e.replace(/[^A-Za-z\s]/g, '').trim();
        if(a !== '') finalArr.push(a)
    })
    console.log('=====CLEANED TEXT====')
    return textToObj(finalArr);
}




function runTheStuff(input){

    let obj = {
    };
    for(let i = 0 ; i < input.length; i++){
     obj[i] = cleanText(input[i])
    }
    return obj;
}

// console.log(runTheStuff(dataArr))

// cleanText(testText)

TesseractJS.recognize('../userTable2.png')
       .progress((p) => {
           console.log('progress',p)
       })
       .then((result) => {
           console.log('====GOT TEXT', result);
           cleanText(result.text)
       })



