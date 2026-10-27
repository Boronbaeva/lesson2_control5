console.log("===== ЗАДАНИЕ 1.1 =====");
const studentName = "Бермет";
const studentAge = 19;
const isStudent = true;
const hobbies = ["Чтение", "Аниме", "Программирование"];

console.log("Имя:", studentName);
console.log("Возраст:", studentAge);
console.log("Студент:", isStudent);
console.log("Хобби:", hobbies);

console.log("\n===== ЗАДАНИЕ 1.2 =====");
const num1 = 50;
const num2 = 10;
console.log("Сумма:", num1 + num2);
console.log("Разность:", num1 - num2);
console.log("Произведение:", num1 * num2);
console.log("Частное:", num1 / num2);

console.log("\n===== ЗАДАНИЕ 1.3 =====");
const name = "John";
const age = 20;
console.log(`${name} is ${age} years old`);

console.log("\n===== ЗАДАНИЕ 2.1 =====");
const ageForStatus = 20;
if (ageForStatus < 13) {
    console.log("Ребенок");
} else if (ageForStatus <= 17) {
    console.log("Подросток");
} else if (ageForStatus <= 65) {
    console.log("Взрослый");
} else {
    console.log("Пенсионер");
}

console.log("\n===== ЗАДАНИЕ 2.2 =====");
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("Четное");
    } else {
        console.log("Нечетное");
    }
}
checkEvenOdd(4);
checkEvenOdd(7);
checkEvenOdd(10);

console.log("\n===== ЗАДАНИЕ 2.3 =====");
const rideAge = 15;
const height = 170;
if (rideAge < 5) {
    console.log("Слишком мал");
} else if (rideAge >= 5 && rideAge <= 12) {
    console.log("Добро пожаловать");
} else if (rideAge >= 13 && rideAge <= 18 && height > 160) {
    console.log("Добро пожаловать");
} else {
    console.log("Не разрешено");
}

console.log("\n===== ЗАДАНИЕ 3.1 =====");
for (let i = 1; i <= 10; i++) {
    console.log(`7 × ${i} = ${7 * i}`);
}

console.log("\n===== ЗАДАНИЕ 3.2 =====");
function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log("sumNumbers(5):", sumNumbers(5));
console.log("sumNumbers(10):", sumNumbers(10));

console.log("\n===== ЗАДАНИЕ 3.3 =====");
let countdown = 20;
while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}

console.log("\n===== ЗАДАНИЕ 4.1 =====");
const grades = [5, 4, 3, 5, 2, 4, 5];
let gradeSum = 0;
let maxGrade = grades[0];
for (let i = 0; i < grades.length; i++) {
    console.log("Оценка:", grades[i]);
    gradeSum += grades[i];
    if (grades[i] > maxGrade) {
        maxGrade = grades[i];
    }
}
console.log("Сумма оценок:", gradeSum);
console.log("Средняя оценка:", gradeSum / grades.length);
console.log("Максимальная оценка:", maxGrade);

console.log("\n===== ЗАДАНИЕ 4.2 =====");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

console.log("\n===== ЗАДАНИЕ 4.3 =====");
const cities = ["Бишкек", "Ош", "Каракол", "Токмок"];
function findCity(arr, city) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === city) {
            return i;
        }
    }
    return -1;
}
console.log('Индекс "Бишкек":', findCity(cities, "Бишкек"));
console.log('Индекс "Каракол":', findCity(cities, "Каракол"));
console.log('Индекс "Москва":', findCity(cities, "Москва"));

console.log("\n===== ЗАДАНИЕ 5.1 =====");
const student = {
    name: "Бермет",
    age: 19,
    courses: ["JavaScript", "Python", "SQL"],
    isActive: true
};
console.log("Информация о студенте:", student);
student.age += 1;
console.log("Возраст после обновления:", student.age);
console.log("Курсы студента:");
for (let i = 0; i < student.courses.length; i++) {
    console.log(student.courses[i]);
}

console.log("\n===== ЗАДАНИЕ 5.2 =====");
const product = {
    name: "Ноутбук",
    price: 50000,
    quantity: 2
};
function getTotalCost(product) {
    const total = product.price * product.quantity;
    console.log("Товар:", product.name);
    console.log("Общая стоимость:", total);
}
getTotalCost(product);

console.log("\n===== ЗАДАНИЕ 5.3 =====");
const books = [
    { title: "Книга 1", author: "Автор 1", year: 2000 },
    { title: "Книга 2", author: "Автор 2", year: 1985 },
    { title: "Книга 3", author: "Автор 3", year: 2010 }
];
let oldestBook = books[0];
for (let i = 0; i < books.length; i++) {
    console.log(
        "Название:", books[i].title,
        "| Автор:", books[i].author,
        "| Год:", books[i].year
    );
    if (books[i].year < oldestBook.year) {
        oldestBook = books[i];
    }
}
console.log("Самая старая книга:", oldestBook.title);
console.log("Год издания:", oldestBook.year);

console.log("\n===== ЗАДАНИЕ 6.1 =====");
const calculateDiscount = (price, discount) => {
    return price - (price * discount / 100);
};
console.log(calculateDiscount(1000, 10));
console.log(calculateDiscount(2000, 25));
console.log(calculateDiscount(500, 50));

console.log("\n===== ЗАДАНИЕ 6.2 =====");
function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return "A";
    } else if (score >= 60 && score < 80) {
        return "B";
    } else if (score >= 40 && score < 60) {
        return "C";
    } else if (score >= 0 && score < 40) {
        return "F";
    } else {
        return "Некорректный балл";
    }
}
console.log(getGrade(95));
console.log(getGrade(75));
console.log(getGrade(50));
console.log(getGrade(20));

console.log("\n===== ЗАДАНИЕ 6.3 =====");
function getMaxNumber(arr) {
    if (arr.length === 0) {
        return null;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(getMaxNumber([3, 7, 2, 9, 4]));
console.log(getMaxNumber([-5, -2, -10]));
console.log(getMaxNumber([100, 50, 200, 150]));