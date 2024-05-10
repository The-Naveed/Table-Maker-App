// function executeone(){
//     var tableValue = document.getElementById("mytablenumber").value;
//     console.log("Table Value",tableValue)
// }


// function executetwo(){
//     var tableLength = document.getElementById("mytablelength").value;
//     console.log("Table Length", tableLength)


// }

// var tableValue = 3
// var tableLength = 3


// for(var table = 1 ; table <= tableLength ; table++){
// document.write(tableValue + "x" + table + "=" + (table*tableValue) + "<br>" );
// }

// Sample

function execute() {
    var tableValue = document.getElementById("mytablenumber").value;
    var tableLength = document.getElementById("mytablelength").value;
    for (var table = 1; table <= tableLength; table++) {
        document.write(tableValue + "x" + table + "=" + (table * tableValue) + "<br>");
    }
}


