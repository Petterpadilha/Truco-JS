let count = 0
let increment = 0

// Reset
$('.btn-reset').on('click', function () {
    count = 0
    increment = 0

    $('.display1,.display-incre1,.display2,.display-incre2').text(count, increment)
})

// Time A sum
$('.btn-sum1 ').on('click', function () {
    if (count < 12) {
        count = count + increment
    } else {
        alert('Time A ganhou parabéns !')
    }

    $('.display1').text(count)
})

$('.btn-sub1').on('click', function () {
    if (count > 0) {
        count = count - increment
    }
    $('.display1').text(count)
})

// Increment time A
$('.btn-increment1').on('click', function () {
    if (increment < 12) {
        increment += 3
    }


    $('.display-incre1').text(increment)
})

$('.btn-decrement1').on('click', function () {
    if (increment > 0) {
        increment -= 1
    }

    $('.display-incre1').text(increment)
})

// Time B 

//sum-A
let contador = 0;
let incremento = 0;
$('.btn-sum2').on('click', function () {
    if (contador < 12) {
        contador = contador + incremento
    } else {
        alert('Time B ganhou parabéns !')

    }
    $('.display2').text(contador)
})

// sub-B
$('.btn-sub2').on('click', function () {
    if (contador > 0) {
        contador = contador - incremento
    }
    $('.display2').text(contador)
})

// Increment B
// sum increment
$('.btn-incre2').on('click', function () {
    if (incremento < 12) {
        incremento += 1
    }
    $('.display-incre2').text(incremento)
})

// sub increment
$('.btn-decre2').on('click', function () {
    if (incremento > 0) {
        incremento -= 1
    }

    $('.display-incre2').text(incremento)
})