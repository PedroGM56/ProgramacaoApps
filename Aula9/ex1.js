const data = require('./data2.json')

const total = data.vehicles.reduce((acc, c) => {
    return acc + c.price_brl
}, 0)

// console.log('R$', total)

const carros = data.vehicles.reduce((acc, c) => {
        acc[c.brand] = (acc[c.brand] || 0) + c.price_brl
        return acc
    }, {})
    // console.log(carros)

const carros2 = data.vehicles.reduce((acc, c) => {
        acc[c.model] = (acc[c.model] || 0) + c.price_brl
        return acc
    }, {})
    // console.log(carros2)

const anos = data.vehicles.reduce((acc, c) => {
        acc[c.year] = (acc[c.year] || 0) + c.price_brl
        return acc
    }, {})
    // console.log(anos)

const comb = data.vehicles.map((c) => {
    return { model: c.model, comb: c.fuel }
})

// console.log(comb)

const comb2 = data.vehicles.reduce((acc, c) => {
    acc[c.fuel] = (acc[c.fuel] || 0) + c.price_brl
    return acc
}, {})

// console.log(comb2)

const category = data.vehicles.reduce((acc, c) => {
    acc[c.category] = (acc[c.category] || 0) + c.price_brl
    return acc
}, {})

// console.log(category)