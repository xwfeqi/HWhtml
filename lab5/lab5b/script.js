function calculateHeron(){
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);

    const s = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(s *(s - side1) * (s - side2) * (s - side3));
    
    document.getElementById('result1').innerText = `Area: ${area.toFixed(2)}`;
    
}

function calculateTwoSidesAndAngle() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const angleC = parseFloat(document.getElementById('angleC').value);

    const area = (sideA * sideB * Math.sin((angleC * Math.PI) / 180)) / 2;

    document.getElementById('result2').innerText = `Area: ${area.toFixed(2)}`;
}

function calculateSideAndHeight() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    const area = (base * height) / 2;

    document.getElementById('result3').innerText = `Area: ${area.toFixed(2)}`;
}



function calculateThreeSidesAndRadius() {
    const sideA5 = parseFloat(document.getElementById('sideA5').value);
    const sideB5 = parseFloat(document.getElementById('sideB5').value);
    const sideC5 = parseFloat(document.getElementById('sideC5').value);
    const circumradius = parseFloat(document.getElementById('circumradius').value);

    const s = (sideA5 + sideB5 + sideC5) / 2;
    const area = (sideA5 * sideB5 * sideC5) / (4 * circumradius);

    document.getElementById('result5').innerText = `Area: ${area.toFixed(2)}`;
}

function checkPalindrome() {
    const input = document.getElementById('palindromeInput').value.toLowerCase();
    const reversed = input.split('').reverse().join('');

    const result = input === reversed ? 'Palindrome' : 'Not a Palindrome';

    document.getElementById('result6').innerText = result;
}

function checkAnagram() {
    const word1 = document.getElementById('word1').value.toLowerCase();
    const word2 = document.getElementById('word2').value.toLowerCase();

    const sorted1 = word1.split('').sort().join('');
    const sorted2 = word2.split('').sort().join('');

    const result = sorted1 === sorted2 ? 'Anagram' : 'Not an Anagram';

    document.getElementById('result7').innerText = result;
}

function calculateFibonacci() {
    const position = parseInt(document.getElementById('fibonacciInput').value);

    let a = 1;
    let b = 1;

    for (let i = 3; i <= position; i++) {
        const c = a + b;
        a = b;
        b = c;
    }

    document.getElementById('result8').innerText = `Fibonacci Number: ${b}`;
}

function checkFibonacci() {
    const numberToCheck = parseInt(document.getElementById('fibonacciCheck').value);

    let a = 1;
    let b = 1;

    while (b < numberToCheck) {
        const c = a + b;
        a = b;
        b = c;
    }

    const result = b === numberToCheck ? 'In Fibonacci Sequence' : 'Not in Fibonacci Sequence';

    document.getElementById('result9').innerText = result;
}