function factorize(number) {
    let factors = [];
    let divisor = 2;
    
    while (number >= 2) {
        if (number % divisor === 0) {
            factors.push(divisor);
            number /= divisor;
        } else {
            divisor++;
        }
    }
    
    return factors;
}

function prime_number() {
    let num = document.getElementById('name').value;
    document.getElementById("result").innerText = factorize(num);
}

// 소수만 나오는 이유: 합성수들도 결국엔 소수의 곱이기 때문에 결국엔 소수가 나옴