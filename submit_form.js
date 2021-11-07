const form = document.getElementById("input-form");

function createCookie(name, value)
{
    var today = new Date();
    var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    var elements = form.elements;
    var formMap = {"ts": Date.now()};
    for(var i=0, element; element = elements[i++];) {
        if (element.name != "") {
            // createCookie(element.name, element.value);
            formMap[element.name] = element.value;
            // console.log(element.name + ": " + element.value);
        }
    }

    var cur_entries = decodeURIComponent(document.cookie)
    if (cur_entries != "") {
        cur_entries = cur_entries
            .split("; ")
            .find(row => row.startsWith("entries="))
            .split("=")[1];
        cur_entries = JSON.parse(cur_entries);
        createCookie("entries", JSON.stringify(cur_entries.concat([formMap])));
    }
    else {
        createCookie("entries", JSON.stringify([formMap]));
    }

    alert("Entry Submitted");
});