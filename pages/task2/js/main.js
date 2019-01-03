/* Взаимодействия с элементами по атрибутам */

$('a[href]').css('border', '1px solid red'); // Простой атрибут
$('a[href="https://google.com"]').css('border', '2px solid blue'); // Полное соответсвие
$('img[src^="img/"]').css('border', '4px solid green'); // Начинается с ...
$('img[src$=".js"]').css('border', '8px solid red'); // Заканчивается на ... 
$('img[src][title]').css('background-color', 'orange'); // Имеет одновременно несколько атрибутов 