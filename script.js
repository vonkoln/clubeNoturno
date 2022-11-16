const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('mouseover', activeLink));


var url = "https://youtu.be/u3L0Qq5HxHU"
//var list[0] = document.querySelector('list[0]')

//var url = "https://www.google.com";
//var btn = document.querySelector("#btn");
function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
//btn.addEventListener('click', function() {
    
  //openInNewTab(url);
//});

 list[0].addEventListener('click', function() {
    openInNewTab('https://vonkoln.github.io/processoseletivo/')
 })

list[1].addEventListener('click', function(event) {
   window.open('https://www.instagram.com/tiagonoturno/')
})

list[2].addEventListener('click', function(event) {
    window.open('https://chat.whatsapp.com/CoSy4DQpMtCDWEgoGRHTR7')
})

list[3].addEventListener('click', function(event) {
    window.open('https://youtu.be/u3L0Qq5HxHU')
})

 list[4].addEventListener('click', function(event) {
     alert('Clube Noturno: Whatsapp 31989598126')
})