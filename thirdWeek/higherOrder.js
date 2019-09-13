const person = [
    {
        id: 01,
        name: "Priyanka",
        city: "nag",
        isMetro: true,
        rank: 20,
        score: 30
    },
    {
        id: 02,
        name: "Ram",
        city: "pune",
        isMetro: true,
        rank: 10,
        score: 50

    },
    {
        id: 03,
        name: "Sham",
        city: "ant",
        isMetro: false,
        rank: 29,
        score: 10

    },
    {
        id: 04,
        name: "puja",
        city: "mumbai",
        isMetro: false,
        rank: 30,
        score: 30

    }]


const totalScore = person
    .filter((isMetro) => isMetro.isMetro)
    .map((score) => score.rank + score.score)
    .reduce((acc, totalscore) => acc + totalscore, 0);
console.log("total Score is", totalScore)


