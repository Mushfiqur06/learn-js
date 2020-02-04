const prepareGreenTea = () => 'greenTea'
const prepareBlackTea = () => 'blackTea'

const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for(let cups = 1; cups <= numOfCups; cups += 1){
        const cup = prepareTea()
        teaCups.push(teaCups)
    }

    return teaCups
}

const tea4GreenTeamFCC = getTea(prepareGreenTea, 57)
const tea4BlackTeamFCC = getTea(prepareBlackTea, 23) 
