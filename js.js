window.addEventListener("load", init);
var kepek = [
    {
        cim: "01-es kép",
        eleresiut:"./kepek/01.jpg",
        leírás:"Ez a első cicás kép",
    },
    {
        cim: "02-es kép",
        eleresiut:"./kepek/02.jpg",
        leírás:"Ez a második cicás kép",
    },
    {
        cim: "03-es kép",
        eleresiut:"./kepek/03.jpg",
        leírás:"Ez a harmadik cicás kép",
    },
    {
        cim: "04-es kép",
        eleresiut:"./kepek/04.jpg",
        leírás:"Ez a negyedik cicás kép",
    },
    {
        cim: "05-es kép",
        eleresiut:"./kepek/05.jpg",
        leírás:"Ez a ötödik cicás kép",
    },
    {
        cim: "06-es kép",
        eleresiut:"./kepek/06.jpg",
        leírás:"Ez a hatodik cicás kép",
    },
]
function ID(elem){
    return document.getElementById(elem);
}

function CLASS(elem){
    return document.getElementsByClassName(elem)
}

function $(elem){
    return document.querySelectorAll(elem)
}
var aktualiskepindex = 0;


function init(){
    kiirKepek()

    ID("galeria").style.backgroundColor="pink";

   /* document.getElementsByClassName("kepek")[0].style.border = "10px solid grey"*/

   for (let index = 0; index < kepek.length; index++) {
    /* document.getElementsByClassName("kepek")[index].style.border = "10px dashed grey"
    CLASS('kepek')[index].style.padding = "10px"
    $("#galeria div img")[index].style.backgroundColor="green" */
    $("#galeria div")[index].className="divekFormazasa"

    $('#galeria div')[index].addEventListener('click', kattintas)
   }
   $('#bal')[0].addEventListener('click', bal)
   $('#jobb')[0].addEventListener('click', jobb)
}

function kattintas(){
    
    aktualiskepindex = event.target.id
    console.log(kepek[aktualiskepindex])

/*     var txt = "<img src='"+ kepek[aktualiskepindex].eleresiut +"' alt=''>"
    ID('nagykep').innerHTML=txt; */
    kepMegjelenit();
    
}


function kepMegjelenit(){
    var txt = "<img src='"+ kepek[aktualiskepindex].eleresiut +"' alt=''>"
    ID('nagykep').innerHTML=txt;
}

function bal(elem){
aktualiskepindex--
if(aktualiskepindex < 0){
    aktualiskepindex = kepek.length-1
    }
kepMegjelenit();
}

function jobb(elem){
aktualiskepindex++
if(aktualiskepindex > kepek.length-1){
    aktualiskepindex = 0
    }
    kepMegjelenit();
}


function kiirKepek(){
    var txt = " ";
    for (let i = 0; i < kepek.length; i++) {
        txt = txt +
         "<div>" + 
         "<h3>"+ 
         kepek[i].cim +
         "</h3>" + 
         "<img id='"+i+"' src='"+ 
         kepek[i].eleresiut+ 
         "' class='kepek' alt='cicás képek'/>"+
        "<p>"+kepek[i].leírás+"</p> </div>"
    }
    ID("galeria").innerHTML = txt;
}