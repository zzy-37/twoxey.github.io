function setLang() {
    let l = sessionStorage.getItem("lang")
    if (l) {
        // Restore the contents of the text field
        document.body.className = l;
    }
}
function changeLang(l) {
    document.body.className = l;
    sessionStorage.setItem("lang", l);
}