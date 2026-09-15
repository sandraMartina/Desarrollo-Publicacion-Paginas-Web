let size = (prompt("Please choose your size: S, M, L 'o' XL " )).toLowerCase();

switch (size){
    case "s":
        alert("Size S: 12.99€");
        break;
    case "m":
        alert("Size M: 13.99€")
        break;
    case "l":
        alert("Size L: 14.99€")
        break;
    case "xl":
        alert("Size XL: 15.99€")
        break;
    default:
        alert("Choose a size between: 'S', 'M', 'L', 'XL'")
         break;
}
