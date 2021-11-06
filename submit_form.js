const form = document.getElementById("input-form");


function setCookie(name, value)
{
    var today = new Date();
    var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    var elements = form.elements;
    for(var i=0, element; element = elements[i++];) {
        if (element.name != "") {
            setCookie(element.name, element.value);
            console.log(element.name + ": " + element.value);
        }
    }
    alert("Entry Submitted");
});