const preparTea = () => 'greenTea'

const getTea = (numOfCups) => {
    const teaCups = []

    for(let cups = 1; cups <= numOfCups; cups += 1){
        const teaCup = preparTea()
        teaCups.push(teaCup)
    }

    return teaCups;
}

const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC)