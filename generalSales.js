function lineBuilder(rawSales){
    rawSales = rawSales.split(/\r?\n/);

    // while (rawSales.length > 0){
        let currentLine = rawSales[0];

        let transactionID = currentLine.slice(0, currentLine.indexOf(""));

        currentLine = currentLine.replace(transactionID, "");

        let transactionType = currentLine.slice(0, currentLine.indexOf(""));

        currentLine = currentLine.replace(transactionType, "");

        let lineNumber = currentLine.slice(0, currentLine.indexOf(""));

        currentLine = currentLine.replace(lineNumber, "");

        let SKU = currentLine.slice(0, currentLine.indexOf(""));

        currentLine = currentLine.replace(SKU, "");

        let description = currentLine.slice(0, currentLine.indexOf("$"));

        console.log(transactionID);
        console.log(transactionType);
        console.log(lineNumber);
        console.log(SKU);
        console.log(description);
    // }
}