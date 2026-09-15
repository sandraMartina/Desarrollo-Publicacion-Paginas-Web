let averageNotes = (prompt("Please introduce your grades in letters:  (A, B, C, D 'o' F )" )).toLowerCase();

switch (averageNotes){
    case "a":
        alert("Excellent :) ");
        break;
    case "b":
        alert("Prominent!")
        break;
    case "c":
        alert("Approved!")
        break;
    case "d":
        alert("You need to improve your grades!")
        break;
    case "f":
        alert("Sorry, you fail :( ")
        break;
    default:
        alert("Please write your grades correctly:  (A, B, C, D 'o' F )")
         break;
}
