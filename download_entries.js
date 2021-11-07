function downloadEntries() {
    var cur_entries = getCookieElement("entries");
    var csvContent = "data:text/csv;charset=utf-8,"
        + cur_entries.map(r => Object.values(r).join(",")).join("\n")
    var encodedUri = encodeURI(csvContent);
    var hiddenElement = document.createElement("a");
    hiddenElement.href = encodedUri;
    hiddenElement.target = "_blank";
    hiddenElement.download = "entries.csv";
    hiddenElement.click();
    console.log(csvContent);
}