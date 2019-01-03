/* ====== События, связанные с мышью ===== */


$('button').click(function() {
	alert('Приветствую, пользователь!');
}); // Клик мышью


$('li').dblclick(function(event) {
	var elem = event.target;
	elem.classList.add('active');
}); // Двойной клик мышью


$('ul li .menu').mouseover(function(event) {
	$('.subMenu').css('display', 'inline');
}); // Наведение мыши на элемент
$('.subMenu').mouseover(function(event) {
	$('.subMenu').css('display', 'inline');
}); // Наведение мыши на элемент


$('ul li .menu').mouseout(function(event) {
	$('.subMenu').css('display', 'none');
}); // Мышь покидает площадь элемента
$('.subMenu').mouseout(function(event) {
	$('.subMenu').css('display', 'none');
}); // Мышь покидает площадь элемента