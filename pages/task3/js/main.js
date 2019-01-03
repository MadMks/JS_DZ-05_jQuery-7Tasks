/* ====== Фильтры ===== */

/* Простые фильтры в jQuery */		

$('ul li:first').css('border', '3px solid red'); // Первый элемент
$('ul li:last').css('border', '3px solid green');// Последний элемент
$('ul li:odd').css('font-size', '25px');// Четные найденные элементы
$('li:gt(2)').css('background-color', 'red');// Элементы чей порядковый номер больше n
