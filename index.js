function iterativeLog(array){
    array.forEach((element, index) =>{
        console.log(`${index}: ${element}`);
    })
}

function iterate(callback){
    let name = ["subash", "Lata","sunil"];
    name.forEach(callback);
    return name;
}

function doToArray(array, callback){
    array.forEach(callback);
}
