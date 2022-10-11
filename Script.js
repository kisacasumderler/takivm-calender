// tema 
function SecTema(deger) {
    let bodystil = document.getElementsByTagName("BODY")[0];
    var ozellik = document.createAttribute("class");
    if (deger == "bir") {
        ozellik.value = deger;
    }
    if (deger == "iki") {
        ozellik.value = deger;
    }
    if (deger == "uc") {
        ozellik.value = deger;
    }
    bodystil.setAttributeNode(ozellik);
}

// takvim dinamik
const currenDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");

// tarih ve yıl 
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const Months = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];

const renderCalendear = () => {
    let firstDayofMonth = new Date(currYear, currMonth + 1).getDay(), 
    LastDateMonth = new Date(currYear, currMonth + 1,0).getDate(), 
    LastDayofMonth = new Date(currYear, currMonth,LastDateMonth).getDay(),
    LastDateofLastMonth = new Date(currYear, currMonth,0).getDate(); 
    let liTag = "";

    for(let i=firstDayofMonth; i>0; i--) {
        liTag += `<li class="inactive">${LastDateofLastMonth - i + 1}</li>`;
    }
    
    for(let i=1; i<=LastDateMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for(let i=LastDayofMonth; i<6; i++) {
        liTag += `<li class="inactive">${i - LastDayofMonth + 1}</li>`;
    }
    currenDate.innerText = `${Months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendear();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click",()=>{ // click event 
        currMonth = icon.id === "prev" ? currMonth -1 : currMonth +1;

        if(currMonth<0 || currMonth>11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }else {
            date = new Date();

        }
        renderCalendear(); 
    })
})
