(function anagrams() {
    const firstString = 'GRAB'; //n
    const secondString = 'BRAG';

    const fString = firstString.split('');
    const sString = secondString.split('');

    const map = {
        'G':2,
        'R':2,
        'A':2,
        'B':2
    }
    fString.forEach(x => {
        if (Object.keys(map).includes(x)) {
            map[x] += 1
        } else {
            map [x] = 1
        }
    })
    sString.forEach(x => {
        if (Object.keys(map).includes(x)) {
            map[x] += 1
        } else {
            map [x] = 1
        }
    })
    return Object.values(map).every(x === 2)

})()
