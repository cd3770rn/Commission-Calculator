function lineBuilder(rawSales){
    rawSales = rawSales.split(/\r?\n/);

    // while (rawSales.length > 0){
        let currentLine = rawSales[0];
        console.log(currentLine);
        let transactionID = currentLine.slice(0, currentLine.indexOf(" "));
        console.log(transactionID);
        currentLine = currentLine.replace(transactionID, "");
        console.log(currentLine);

        let transactionType = currentLine.slice(0, currentLine.indexOf(" "));
        console.log(transactionType);
        currentLine = currentLine.replace(transactionType, "");
        console.log(currentLine);

        let lineNumber = currentLine.slice(0, currentLine.indexOf(" "));
        console.log(lineNumber);
        currentLine = currentLine.replace(lineNumber, "");
        console.log(currentLine);

        let SKU = currentLine.slice(0, currentLine.indexOf(" "));
        console.log(SKU);
        currentLine = currentLine.replace(SKU, "");
        console.log(currentLine);

        let description = currentLine.slice(0, currentLine.indexOf("$"));
        console.log(description);
        console.log(currentLine);




    // }
}

let salesInfo;
function printme(){
    salesInfo = document.getElementsByName("sales")[0].value
    lineBuilder(salesInfo);
}
