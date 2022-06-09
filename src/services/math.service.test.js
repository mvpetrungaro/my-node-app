import service from './math.service.js'

describe('add', () => {

    test('Should add two numbers', async () => {

        //Given
        const a = 0
        const b = 1

        //When
        const result = await service.add(a, b)

        //Then
        expect(result).toBe(a + b)
    })
})

describe('div', () => {

    test('Should divide two numbers', async () => {

        //Given
        const a = 10
        const b = 2

        //When
        const result = await service.div(a, b)

        //Then
        expect(result).toBe(a / b)
    })

    test('Div a positive number by 0 should result in Positive Infinite', async () => {

        //Given
        const a = 10
        const b = 0

        //When
        const result = await service.div(a, b)

        //Then
        expect(result).toBe(Number.POSITIVE_INFINITY)
    })

    test('Div a negative number by 0 should result in Negative Infinite', async () => {

        //Given
        const a = -10
        const b = 0

        //When
        const result = await service.div(a, b)

        //Then
        expect(result).toBe(Number.NEGATIVE_INFINITY)
    })
})