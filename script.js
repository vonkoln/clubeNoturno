const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('mouseover', activeLink));



 list[0].addEventListener('click', function(event) {
    alert('Clube Noturno: Whats 3183191984')
 })

list[1].addEventListener('click', function(event) {
    alert('Clube Noturno: Whats 3183191984')
})

list[2].addEventListener('click', function(event) {
    alert('Clube Noturno: Whats 3183191984')
})

list[3].addEventListener('click', function(event) {
    alert('Clube Noturno: Whats 3183191984')
})

 list[4].addEventListener('click', function(event) {
     alert('Clube Noturno: Whats 3183191984')
})