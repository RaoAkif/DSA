function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    let compareScores = [aliceScore, bobScore]
    for(let i = 0; i < a.length; i += 1) {
        if(a[i] > b[i]) {
            aliceScore += 1;
        } else if(b[i] > a[i]) {
            bobScore += 1;
        }
    }
    return compareScores
}

function compareTriplets(a, b, aliceScore = 0, bobScore = 0) {
    for(let i = 0; i < a.length; i += 1) {
        if(a[i] > b[i]) {
            aliceScore += 1;
        } else if(b[i] > a[i]) {
            bobScore += 1;
        }
    }
    return [aliceScore, bobScore]
}

function compareTriplets(a, b, aliceScore = 0, bobScore = 0) {
    for(let i = 0; i < a.length; i += 1) {
        if(a[i] > b[i]) aliceScore += 1;
        if(b[i] > a[i]) bobScore += 1;
    }
    return [aliceScore, bobScore]
}

function compareTriplets(a, b, aliceScore = 0, bobScore = 0) {
    for(let i = 0; i < a.length; i += 1) {
        (a[i] > b[i])? aliceScore += 1
        : (b[i] > a[i])? bobScore += 1
        : ""
    }
        return [aliceScore, bobScore]
}

function compareTriplets(a, b) {
    let scoreCard = [0, 0];
    for(let i = 0; i < a.length; i += 1) {
        (a[i] > b[i])? scoreCard[0] += 1
        : (b[i] > a[i])? scoreCard[1] += 1
        : ""
    }
        return scoreCard
}

function compareTriplets(a, b) {
    for(let i = 0; i < a.length; i += 1) {
        (a[i] > b[i])? aliceScore += 1
        : (b[i] > a[i])? bobScore += 1
        : ""
    }
        return [aliceScore, bobScore]
}

function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    a.forEach(elem, index) => {
        if(a[i] > b[index]) {
            aliceScore += 1
        } else if (a[i] < b[index]) {
            bobScore += 1
        }
    }

    return [aliceScore, bobScore]
}

