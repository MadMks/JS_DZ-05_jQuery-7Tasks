/* ====== Фильтры ===== */

/* Фильтры форм в jQuery */		

$('.main-form .form-control').css('border', '2px solid green'); // Все элементы формы с классом form-control

$('input:button, input:submit, input:reset')
.css('border', '2px solid red')
.css('background-color', 'yellow'); // Все кнопки

$('input:radio[name="gender"]').css('margin-left', '100px'); // Радио-кнопки 