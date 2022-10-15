const userAnswer = prompt("Как Вас зовут?");
let userName = userAnswer
userName = userName.trim()
userName = userName.toUpperCase()
let text1 = "Вас зовут:"
alert(text1 + userName)