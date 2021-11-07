function showEntries() {
    var cur_entries = getCookieElement("entries");
    showWindow(cur_entries);
    //console.log(cur_entries);
    //alert("Showing entries...\n" + cur_entries);
};

function showWindow(entries) {
    var showWindow = document.getElementById("show_window");
    if (showWindow.style.display === "none") {
        showEntry(entries);
        showWindow.style.display = "block";
    } else {
        let top = document.getElementById("show_window");
        while (top.firstChild) {
            top.removeChild(top.firstChild);
          }
        showWindow.style.display = "none";
    }
}

function showEntry(entries) {
    const showDiv = document.getElementById("show_window");
    for(var i=0, entry; entry = entries[i++];) {
        var row = document.createTextNode(JSON.stringify(entry))
        var para = document.createElement("p");
        para.appendChild(row);
        showDiv.appendChild(para);
    }
}

function getCookieElement(name) {
    var cur_entries = decodeURIComponent(document.cookie)
    if (cur_entries != "") {
        cur_entries = cur_entries
            .split("; ")
            .find(row => row.startsWith(name + "="))
            .split("=")[1];
        cur_entries = JSON.parse(cur_entries);
    }
    return cur_entries;
}