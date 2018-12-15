// function tbSyn(request, response, next) {
//   let oneStr = "";

//   res.locals.tables.forEach(objEle => {
//     let tableName = objEle.tableName;
//     let tableArr = Object.values(objEle.table);
//     let head = `CREATE TABLE ${tableName} (`;
//     let body = "";
//     let tail = ");";
//     tableArr.forEach((val, i, arr) => {
//       i === arr.length - 1 ? (body += `${val}`) : (body += `${val},`);
//     });

//     oneStr += head + body + tail;
//   });

//   res.locals.query = oneStr;
//   next();
// }


const obj = {
  // tbSyn: (request, response, next) => {
  //   let oneStr = "";
  //  console.log('++++++++++++++',res.locals.tables)
  //   response.locals.tables.forEach(objEle => {
  //     let tableName = objEle.tableName;
  //     let tableArr = Object.values(objEle);
  //     let head = `CREATE TABLE ${tableName} (`;
  //     let body = "";
  //     let tail = ");";
  //     tableArr.forEach((val, i, arr) => {
  //       i === arr.length - 1 ? (body += `${val}`) : (body += `${val},`);
  //     });
  
  //     oneStr += head + body + tail;
  //   });
  
  //   response.locals.query = oneStr;
  //   next();
  // },

  tablToSyntx: (request,response,next) => {
    const table = response.locals.tables;
    console.log('reslocals', response.locals)
    const tableName = table[0].tableName;
    let strArr = [];
    for(let key in table[0]){
      if(key !== 'tableName'){
        strArr.push(table[0][key]);
      }
    }

    let head = `CREATE TABLE ${tableName}(`;
    let body = '';
    let tail = ');'
    for(let i = 0; i < strArr.length; i++){
      if(i === strArr.length-1) {
        body = body + `${strArr[i]}`  
      } else {
        body = body + `${strArr[i]},`
      }
    }
    const final = head + body + tail;
    response.locals.query = final;
    console.log('this is what it looks like', final);
    next();
  }
}

module.exports = obj
