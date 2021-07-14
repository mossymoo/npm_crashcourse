const _ = require('lodash')

const numbers = [33,44,37,66,77,88,993]

// _.each(numbers, (number, i) => {
//     console.log(number)
// })

numbers.forEach(number => console.log(number))

// 4.17.4 => 4 is major, 17 is minor(new feature), 4 is patch

// ^4.17.4 => Only update for minor version

// ~4.17.4 => Only update patch

// * => Install the most update version

// Find npm global root folder => npm root -g

// List packages => npm list

// List packages dependency => npm list --depth n (number determine how deep you want to go)