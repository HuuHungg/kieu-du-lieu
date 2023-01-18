
let depthArray = [1,2,[3,4],5,6,7,8,[9,10]]
let  resultArray = depthArray.reduce(function(acc,curr)
{
    return acc.concat(curr)
},[])
console.log(resultArray)


let topics = [
    {
        topics: 'FrontEnd',
        courses: [
            {
                id: 1,
                title: 'NodeJs'
                
            },
            {
                id: 2,
                title: 'ReactJS'
            }
        ],
    },

    {
        topics: 'BackEnd', 
        courses: [
            {
                id:3,
                title: 'PHP,Ruby'
            },
            {
                id: 4,
                title:'NodeJS'
            }
        ]

    }
]

let resultTopics =  topics.reduce(function(acc,crr) {
        return acc.concat(crr.courses) 
},[])

console.log(resultTopics)
