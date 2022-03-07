function key(text) {
    document.getElementById("message").value += text;
}
function space() {
    document.getElementById("message").value += " ";
}
function backspace() {
    document.getElementById("message").value = document.getElementById("message").value.substring(0, document.getElementById("message").value.length - 1);
}
function symbol() {
    document.getElementById("message").value += "'";
}
function enter() {
    document.getElementById("message").value += "\n";
}
function cleartext() {
    document.getElementById("message").value = "";
}
