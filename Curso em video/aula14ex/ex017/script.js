function Tabuada() {
    var num = document.getElementById('num')
    var sel = document.getElementById('seltab');
    if (num.value.length == 0) {
        alert("Por favor, selecione um valor")
    } else {
        var n = Number(num.value);
        sel.innerHTML = ""
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            sel.appendChild(item)
        }
    }
}