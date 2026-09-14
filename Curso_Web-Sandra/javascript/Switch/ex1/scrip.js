

let chooseUser = parseInt(prompt("Please choose a menu (1-4): 1)Hamburger, 2)Pizza, 3)Salad, 4)Hot Dog" ));

switch (chooseUser){
    case 1:
        alert("Hamburger - (6.50)€");
        break;
    case 2:
        alert("Pizza - (8.90)€")
        break;
    case 3:
        alert("Salad - (5.20)€")
        break;
    case 4:
        alert("Hot Dog - (4.20)€")
        break;
    default:
        alert("Choose a number between 1-4")
         break;
}
