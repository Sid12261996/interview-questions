function driverFn() {
    const arr: number[][];
    const matrix: number[][] = []

    function changeAllTheRowsAndColumn(column: number, row: number) {
        for (let i = 0; i <= arr.length; i++) {
            for (let j = 0; j <= arr[i].length; j++) {

            }
        }
    }



    function saveTheRowAndColumn(column: number, row: number) {
        const innerMatrix = [];
        innerMatrix.push(column);
        innerMatrix.push(row);
        matrix.push(innerMatrix);
    }

    for (let i = 0; i <= arr.length; i++) {
        for (let j = 0; j <= arr[i].length; j++) {
            if (arr[i][j] == 0) {
                saveTheRowAndColumn(i, j)
            }
        }
    }
    function 
}
