let input = document.getElementById("inputBox");
let counter = document.getElementById("counter");
let maxVal = 20;


input.addEventListener("input", function(e) {
    input.value = input.value
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-/, '')
    counter.innerHTML = this.value;
    document.getElementById("co").innerHTML = maxVal - counter.innerHTML.length;
    if (counter.innerHTML.length > maxVal && e.keyCode != 8) {
        document.execCommand("undo")
    }
})