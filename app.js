// add table 
var table = document.getElementById("table");
var thead = document.createElement("thead");
table.appendChild(thead)
var TRth = document.createElement("tr");
thead.appendChild(TRth);
//array for th
var thArray = ["column-1", "column-2", "column-3", "column-4", "column-5", "column-6", "column-7", "column-8", "column9", "column-10",]
//loop to create th 
for (var i = 0; i < thArray.length; i++) {
    var TH = document.createElement("th")
    TRth.appendChild(TH)
    TH.innerHTML = thArray[i];
}
var tbody = document.createElement("tbody")
table.appendChild(tbody)
//loop for td
for (var d = 0; d < 10; d++) {
    var TRtd = document.createElement("tr");
    tbody.appendChild(TRtd)
    for (var n = 0; n < 10; n++) {
        var TD = document.createElement("td");
        TRtd.appendChild(TD) * 10;
        var number = Math.floor(Math.random() * 100);
        TD.innerText = number
        if (number % 2 == 0) {
            TD.classList.add("tdeven")

        } else {
            TD.classList.add("tdodd")
        }
    }

}

// 