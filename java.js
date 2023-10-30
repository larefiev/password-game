let ruleCont = document.querySelector('.rule_container');
let input = document.querySelector('.input');
let count = document.querySelector('.count');
let rules = document.querySelectorAll('.rule');
let secret = document.querySelector('.secret')
let RULE1 = document.querySelector('.rule_1');
let RULE2 = document.querySelector('.rule_2');
let RULE3 = document.querySelector('.rule_3');
let RULE4 = document.querySelector('.rule_4');
let RULE5 = document.querySelector('.rule_5');
let RULE6 = document.querySelector('.rule_6');
let RULE7 = document.querySelector('.rule_7');
let RULE8 = document.querySelector('.rule_8');
let RULE9 = document.querySelector('.rule_9');
let special = [
    '!', '@', '#', '$', '%', '^',
    '&', '*', '(', ')', '_', '+',
    '-', '=', '[', ']', '{', '}',
    ';', "'", ':', '"', '|',
    ',', '.', '<', '>', '/', '?',
    ']', '+', '/'
];
let romans = [
    'I', 'V', 'X', 'L', 'C', 'D', 'M'
];
let months = [
    'january', 'february', 'march', 'april',
    'may', 'june', 'july', 'august', 'september',
    'october', 'november', 'december',
];
secret.addEventListener('click', function () {
    let blackpencil = prompt('введи пароль, бялдень')
    if (blackpencil === 'monday') location.replace('./secret.html')

})
input.addEventListener('input', function () {
    count.innerHTML = input.value.length;
    checkRule1();
    if (checkRule1()) {
        checkRule2();
        if (checkRule2()) {
            checkRule3();
            if (checkRule3()) {
                checkRule4();
                if (checkRule5()) {
                    checkRule6();
                    if (checkRule6()) {
                        checkRule7();
                        if (checkRule7()) {
                            checkRule8();
                            if (checkRule8()) {
                                checkRule9();
                            }
                        }
                    }
                }
            }
        }
    }
}
)
function checkRule8() {
    let flag = false
    let text = input.value
    for (let month of months) {
        if (text.includes(month)) {
            flag = true;
        }
        if (flag === true) {
            document.querySelector('.rule_number_8').style.backgroundColor = "#aef3ae";
            document.querySelector('.rule_8').style.backgroundColor = "#e3ffe3";
            document.querySelector('.galkr_8').innerHTML = '✓'
            document.querySelector('.galkr_8').style.color = 'green'
            if (!RULE9.classList.contains('open')) swipe();
            document.querySelector('.rule_9').classList.add('open');
            return true
        }
        else {
            document.querySelector('.rule_number_8').style.backgroundColor = "#ffc7c7"
            document.querySelector('.rule_8').style.backgroundColor = "#ffecec"
            document.querySelector('.galkr_8').innerHTML = '✕'
            document.querySelector('.galkr_8').style.color = 'red'
        }
    }
}
function checkRule9() {
    let flag = false
    let text = input.value
    for (let roman of romans) {
        if (text.includes(roman)) {
            flag = true;
        }
        if (flag === true) {
            document.querySelector('.rule_number_9').style.backgroundColor = "#aef3ae";
            document.querySelector('.rule_9').style.backgroundColor = "#e3ffe3";
            document.querySelector('.galkr_9').innerHTML = '✓'
            document.querySelector('.galkr_9').style.color = 'green'
            //if (!RULE10.classList.contains('open')) swipe();
            //document.querySelector('.rule_10').classList.add('open');
            return true
        }
        else {
            document.querySelector('.rule_number_9').style.backgroundColor = "#ffc7c7"
            document.querySelector('.rule_9').style.backgroundColor = "#ffecec"
            document.querySelector('.galkr_9').innerHTML = '✕'
            document.querySelector('.galkr_9').style.color = 'red'
        }
    }
}

function checkRule7() {
    let text = input.value;
    let flag = false
    let sum = 0
    for (let simbol of text) {
        if (!isNaN(simbol) && simbol !== ' ') {
            sum += Number(simbol)
        }
    }
    if (sum === 9) flag = true
    if (flag === true) {
        document.querySelector('.rule_number_7').style.backgroundColor = "#aef3ae";
        document.querySelector('.rule_7').style.backgroundColor = "#e3ffe3";
        if (!RULE8.classList.contains('open')) swipe();
        document.querySelector('.rule_8').classList.add('open');
        document.querySelector('.galkr_7').innerHTML = '✓'
        document.querySelector('.galkr_7').style.color = 'green'
        return true
    }
    else {
        document.querySelector('.rule_number_7').style.backgroundColor = "#ffc7c7"
        document.querySelector('.rule_7').style.backgroundColor = "#ffecec"
        document.querySelector('.galkr_7').innerHTML = '✕'
        document.querySelector('.galkr_7').style.color = 'red'
    }
}
function checkRule6() {
    let text = input.value;
    let flag = false
    let sum = 0
    for (let simbol of text) {
        if (!isNaN(simbol) && simbol !== ' ') {
            sum += simbol
        }
    }
    if (sum % 3 === 0 && sum > 0) flag = true
    if (flag === true) {
        document.querySelector('.rule_number_6').style.backgroundColor = "#aef3ae";
        document.querySelector('.rule_6').style.backgroundColor = "#e3ffe3";
        if (!RULE7.classList.contains('open')) swipe();
        document.querySelector('.rule_7').classList.add('open');
        document.querySelector('.galkr_6').innerHTML = '✓'
        document.querySelector('.galkr_6').style.color = 'green'
        return true
    }
    else {
        document.querySelector('.rule_number_6').style.backgroundColor = "#ffc7c7"
        document.querySelector('.rule_6').style.backgroundColor = "#ffecec"
        document.querySelector('.galkr_6').innerHTML = '✕'
        document.querySelector('.galkr_6').style.color = 'red'
    }
}
function checkRule5() {
    let text = input.value
    if (text.includes('mondayleftmebroken') === true) {
        document.querySelector('.galkr_5').innerHTML = '✓'
        document.querySelector('.galkr_5').style.color = 'green'
        document.querySelector('.rule_number_5').style.backgroundColor = "#aef3ae";
        document.querySelector('.rule_5').style.backgroundColor = "#e3ffe3";
        if (!RULE6.classList.contains('open')) swipe();
        document.querySelector('.rule_6').classList.add('open');
        return true
    }
    else {
        document.querySelector('.rule_number_5').style.backgroundColor = "#ffc7c7"
        document.querySelector('.rule_5').style.backgroundColor = "#ffecec"
        document.querySelector('.galkr_5').innerHTML = '✕'
        document.querySelector('.galkr_5').style.color = 'red'
    }
}
function checkRule4() {
    let flag = false
    let text = input.value
    for (let simbol of special) {
        if (text.includes(simbol)) {
            flag = true;
            break;
        }

    }
    if (flag === true) {
        document.querySelector('.rule_number_4').style.backgroundColor = "#aef3ae";
        document.querySelector('.rule_4').style.backgroundColor = "#e3ffe3";
        document.querySelector('.galkr_4').innerHTML = '✓'
        document.querySelector('.galkr_4').style.color = 'green'
        if (!RULE5.classList.contains('open')) swipe();
        document.querySelector('.rule_5').classList.add('open');
        return true
    }
    else {
        document.querySelector('.rule_number_4').style.backgroundColor = "#ffc7c7"
        document.querySelector('.rule_4').style.backgroundColor = "#ffecec"
        document.querySelector('.galkr_4').innerHTML = '✕'
        document.querySelector('.galkr_4').style.color = 'red'
    }
}
function checkRule3() {
    let text = input.value;
    let flag = false

    for (let simbol of text) {
        if (isNaN(simbol) && simbol === simbol.toUpperCase() && !special.includes(simbol)) flag = true
    }
    if (flag === true) {
        document.querySelector('.rule_number_3').style.backgroundColor = "#aef3ae";
        document.querySelector('.rule_3').style.backgroundColor = "#e3ffe3";
        if (!RULE4.classList.contains('open')) swipe();
        document.querySelector('.rule_4').classList.add('open');
        document.querySelector('.galkr_3').innerHTML = '✓'
        document.querySelector('.galkr_3').style.color = 'green'
        return true;
    }
    else {
        document.querySelector('.rule_number_3').style.backgroundColor = "#ffc7c7"
        document.querySelector('.rule_3').style.backgroundColor = "#ffecec"
        document.querySelector('.galkr_3').innerHTML = '✕'
        document.querySelector('.galkr_3').style.color = 'red'
    }
}


function checkRule1() {
    if (input.value.length < 5) {
        if (!RULE1.classList.contains('open')) swipe();
        document.querySelector('.rule_1').classList.add('open');
        document.querySelector('.rule_number_1').style.backgroundColor = "#ffc7c7";
        document.querySelector('.rule_1').style.backgroundColor = "#ffecec";
        document.querySelector('.galkr_1').innerHTML = '✕'
        document.querySelector('.galkr_1').style.color = 'red'
    }
    else {
        document.querySelector('.rule_number_1').style.backgroundColor = "#aef3ae";
        document.querySelector('.rule_1').style.backgroundColor = "#e3ffe3";
        document.querySelector('.galkr_1').innerHTML = '✓'
        document.querySelector('.galkr_1').style.color = 'green'
        if (!RULE2.classList.contains('open')) swipe();
        document.querySelector('.rule_2').classList.add('open');
        return true
    }
}

function checkRule2() {
    if (input.value.length >= 5) {
        let text = input.value;
        let flag = false

        for (let simbol of text) {
            if (!isNaN(simbol) && simbol !== ' ') flag = true
        }
        if (flag === true) {
            document.querySelector('.rule_number_2').style.backgroundColor = "#aef3ae";
            document.querySelector('.rule_2').style.backgroundColor = "#e3ffe3";
            if (!RULE3.classList.contains('open')) swipe();
            document.querySelector('.rule_3').classList.add('open');
            document.querySelector('.galkr_2').innerHTML = '✓'
            document.querySelector('.galkr_2').style.color = 'green'
            return true
        }
        else {
            document.querySelector('.rule_number_2').style.backgroundColor = "#ffc7c7"
            document.querySelector('.rule_2').style.backgroundColor = "#ffecec"
            document.querySelector('.galkr_2').innerHTML = '✕'
            document.querySelector('.galkr_2').style.color = 'red'
        }
    }
}

function swipe() {
    rules.forEach(rule => {
        if (rule.classList.contains('swipe9')) {
            rule.classList.remove('swipe9')
            rule.classList.add('swipe8')
        };
        if (rule.classList.contains('swipe8')) {
            rule.classList.remove('swipe8')
            rule.classList.add('swipe7')
        };
        if (rule.classList.contains('swipe7')) {
            rule.classList.remove('swipe7')
            rule.classList.add('swipe8')
        };
        if (rule.classList.contains('swipe6')) {
            rule.classList.remove('swipe6')
            rule.classList.add('swipe7')
        };
        if (rule.classList.contains('swipe5')) {
            rule.classList.remove('swipe5')
            rule.classList.add('swipe6')
        };
        if (rule.classList.contains('swipe4')) {
            rule.classList.remove('swipe4')
            rule.classList.add('swipe5')
        };
        if (rule.classList.contains('swipe3')) {
            rule.classList.remove('swipe3')
            rule.classList.add('swipe4')
        };
        if (rule.classList.contains('swipe2')) {
            rule.classList.remove('swipe2')
            rule.classList.add('swipe3')
        };
        if (rule.classList.contains('swipe1')) {
            rule.classList.remove('swipe1')
            rule.classList.add('swipe2')
        };
        if (rule.classList.contains('swipe0')) {
            rule.classList.remove('swipe0')
            rule.classList.add('swipe1')
        };
        if (rule.classList.contains('swipe-1')) {
            rule.classList.remove('swipe-1')
            rule.classList.add('swipe0')
        };
        if (rule.classList.contains('swipe-2')) {
            rule.classList.remove('swipe-2')
            rule.classList.add('swipe-1')
        };
        if (rule.classList.contains('swipe-3')) {
            rule.classList.remove('swipe-3')
            rule.classList.add('swipe-2')
        };
        if (rule.classList.contains('swipe-4')) {
            rule.classList.remove('swipe-4')
            rule.classList.add('swipe-3')
        };
        if (rule.classList.contains('swipe-5')) {
            rule.classList.remove('swipe-5')
            rule.classList.add('swipe-4')
        };
        if (rule.classList.contains('swipe-6')) {
            rule.classList.remove('swipe-6')
            rule.classList.add('swipe-5')
        };
        if (rule.classList.contains('swipe-7')) {
            rule.classList.remove('swipe-7')
            rule.classList.add('swipe-6')
        };
        if (rule.classList.contains('swipe-8')) {
            rule.classList.remove('swipe-8')
            rule.classList.add('swipe-7')
        };
        if (rule.classList.contains('swipe-9')) {
            rule.classList.remove('swipe-9')
            rule.classList.add('swipe-8')
        };
    })
}