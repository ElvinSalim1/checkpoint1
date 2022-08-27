function volumeOfSphere(r) {
  return (4 / 3) * Math.PI * Math.pow(r, 3)
}

// console.log(volumeOfSphere(4))

function countDown(fromN) {
  if (fromN < 0) {
    console.log('the parameter', fromN, 'must be above 0')
  }

  for (let i = fromN; i >= 0; i--) {
    console.log(i)
  }
}

// countDown(4)

function convertCandF(degrees, format = 'c') {
  if (!degrees) {
    return 'first parameter is missing'
  }

  if (format === 'c') {
    return Math.round(degrees * 1.8 + 32)
  }

  if (format === 'f') {
    return Math.round((degrees - 32) / 1.8)
  }
}

// console.log('10 Celsius is approximately', convertCandF(10, 'c'), 'Fahrenheit')
// console.log('98.6 is approximately', convertCandF(98.6, 'f'), 'Celsius')

function printSequence(n, m) {
  for (let i = n; i <= m; i++) {
    let logValue = i

    if (i % 3 === 0 && i % 5 === 0) {
      console.log('wubbalubba')
    }

    if (i % 3 == 0) {
      logValue = 'wubba'
    }

    if (i % 5 === 0) {
      logValue = 'lubba'
    }
    console.log(logValue)
  }
}
// eller denna
function printSequence1(n, m) {
  for (let i = n; i <= m; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('wubbalubba')
    } else if (i % 3 == 0) {
      console.log('wubba')
    } else if (i % 5 === 0) {
      console.log('lubba')
    } else {
      console.log(i)
    }
  }
}

printSequence(1, 20)

function removeOdds(list) {
  return list.filter((n) => n % 2 === 0)
}

// console.log(removeOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

function printRepeatedRange(n, m, x) {
  for (let j = 0; j < x; j++) {
    for (let i = n; i <= m; i++) {
      console.log(i)
    }
  }
}

// printRepeatedRange(0, 3, 1)
// console.log('::::')
// printRepeatedRange(3, 6, 2)
// console.log('::::')
// printRepeatedRange(1, 2, 3)

function dearSanta(forbidden) {
  const input = prompt('What do you want for Christmas?')

  if (forbidden.includes(input)) {
    console.log("You've been naughty")
    alert("You've been naughty")
    return
  }

  console.log("You've been nice, you will get", input, 'for Christmas')
  alert("You've been nice, you will get " + input + ' for Christmas')
}

dearSanta(['motorcycle', 'car'])
