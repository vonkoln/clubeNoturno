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
     alert('Para mais informações, nos ligue: (31)98959-8126')
})

function escreverLinks(){
  var links = new Array(3); // três linhas
  links[0] = "https://raw.githubusercontent.com/vonkoln/clubenoturno/clubenoturno/pr.jpeg";
  links[1] = "https://raw.githubusercontent.com/vonkoln/clubenoturno/clubenoturno/pr0.jpeg";
  links[2] = "https://raw.githubusercontent.com/vonkoln/clubenoturno/clubenoturno/pr1.jpeg";
 

  var numero = Math.round(Math.random() * 2)
 
  document.head.append(
    '<meta property="og:image" content='+ links[numero] +'/>')
}

document.onload(function() {
  escreverLinks()
})


 // document.write (
  //   "<a href='" + links[numero] + "'>Visite o site do dia</a>"
  // )