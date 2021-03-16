(function driverFunction() {
    const arr = [1, 4, 7, 3, 9]
    const target = 13

    {

    }

    for (let i = 0; i <= arr.length; i++) { // for less than n times...
        for (let j = i + 1; j <= arr.length; j++) { // for n - i
            if (arr[i] + arr[j] === target) {
                console.log('The pairs are: ', arr[i], arr[j])
            }
        }
    }
})()
