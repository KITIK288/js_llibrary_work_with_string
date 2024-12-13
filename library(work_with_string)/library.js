// функция номер 1

// На вход функция принимает строку и символ, а затем выводит количество
// повторений этого символа в строке.

function repetitions_of_symbol(symbol, string) {
    let counter = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === symbol) {
            counter++;
        }
    }
    console.log(counter);
}

repetitions_of_symbol("r","rat rat rat");


// функция номер 2

// функция принимает на вход две параметра, строку и количество её повторений.

function turning_string(num, string) {
    let counter = 0;
    newstring = "";
    while (counter !== num) {
        newstring += string;
        counter++;
    }
    console.log(newstring);
}

turning_string(3, "rat")

// функция номер 3

// функция принимает на вход строку и возвращает количество слов в этой строке

function word_count(string) {
    const words = string.split(" ");
    counter = 0;
    for (i = 0; i < words.length; i++) {
        counter++;
    }
    console.log(counter);
}

word_count("Мяу мяу мяу мяу")

// функция номер 4

// функция принимает на вход массив и символ разделения слов и сращивает массив строк с указанными разделителями

function word_splicing(array, symbol) {
    new_array = [];
    for (i = 0; i < array.length; i++) {
        new_array = array.join(symbol);
    }
    console.log(new_array);
}

word_splicing(["Котик", "Собачка", "Аль-Каида"], "||");

// функция номер 5

// функция принимает на вход строку и подстроку, и проверяет, начинается ли строка с этой подстроки

function start_check(string, substring) {
    array = string.split(" ");
    if (array[0] === substring) {
        console.log("1")
    } else {
        console.log("0")
    }
}

start_check("Котик очень хороший, пойду взорвусь", "Котик");
