function stepOne(B, L, R, A, N) {
    for (let i = 0; i < R - L + 1; i++) {
        if (B.length <= N) {
            B.push(A[i]);
        } else {
            B[i] = A[i];
        }
    }
    return B;
}

function stepTwo(B, K, XR, P) {
    for (let p = 0; p < P; p++) {
        for (let j = 0; j < B.length; j++) {
            XR = XR ^ (B[j] + K)
            B[j] = parseInt(B[j] / 2, 0)
        }
    }
    return XR;
}

function isEven(XR) {
    if (XR % 2 === 0) {
        return 'EVEN'
    } else {
        return 'ODD'
    }
}

function solve(N, Q, A, queries) {
    const op = [];
    let B = [], XR = 0;

    queries.forEach(query => {
        const L = query[0],
            R = query[1],
            P = query[2],
            K = query[3]
        B = stepOne(B, L, R, A, N);
        XR = stepTwo(B, K, XR, P);
        op.push(isEven(XR));
    });
    return op;
}

const N,Q =
