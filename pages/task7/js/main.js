/* ====== События клавиатуры ===== */

$('input').keyup(function(event) {
    console.log($(this).val().length);
}); // Клавиша больше не в нажатом состоянии
