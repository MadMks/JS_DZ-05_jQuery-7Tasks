/* Взаимодействия с элементами */

// Перечислению (первый, второй, третий...)
$('h2, li').css('font-weight', 'bold'); // Первый, второй, третий и т.д.

// Найти все span внутри блока .container (элемент span - потомок)
$('.container span').css('border', '1px solid green'); // outer и inner 

// Найти только те span, которые находятся 
// НЕПОСРЕДСТВЕННО внутри .container (span - дочерний элемент)
$('.container > span').css('color', 'orange'); // parent > child 

// Найти только ближайший сестринский элемент для тега H2
$('h2 + p').css('background-color', '#ff0000'); // prev + next

// Найти все сестринские элементы для тега H2
$('h2 ~ p').css('border', '2px solid #000'); // prev ~ next 	
$('h2 ~ p').css('padding', '10px'); // prev ~ next 	