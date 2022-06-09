import http from 'http'

describe('Math Add Integration Test', () => {

    test('Given int parameters a and b, should result in HTTP 200', (done) => {

        //Given
        const a = 4
        const b = 5

        //When
        const req = http.request(`http://localhost:3000/math/add?a=${a}&b=${b}`, res => {

            //Then
            expect(res.statusCode).toBe(200)
            done()
        })

        req.on('error', error => {
            console.error(error)
        })

        req.end()
    })

    test('Given int parameters a and b, should return a + b', (done) => {

        //Given
        const a = 4
        const b = 5

        //When
        const req = http.request(`http://localhost:3000/math/add?a=${a}&b=${b}`, res => {

            let data = '';

            res.on('data', chunk => {
                //console.log('ondata')
                //console.log(chunk)

                data += chunk
            })

            res.on('end', () => {
                //console.log('onend')
                //console.log(res)

                //Then
                expect(data).toBe((a + b).toString())
                done()
            })
        })

        req.on('error', error => {
            console.error(error)
        })

        req.end()
    })
})

describe('Math Sub Integration Test', () => {

    test('Given int parameters a and b, should result in HTTP 200', (done) => {

        //Given
        const a = 4
        const b = 5

        //When
        const req = http.request(`http://localhost:3000/math/sub?a=${a}&b=${b}`, res => {

            //Then
            expect(res.statusCode).toBe(200)
            done()
        })

        req.on('error', error => {
            console.error(error)
        })

        req.end()
    })

    test('Given int parameters a and b, should return a - b', (done) => {

        //Given
        const a = 4
        const b = 5

        //When
        const req = http.request(`http://localhost:3000/math/sub?a=${a}&b=${b}`, res => {

            let data = '';

            res.on('data', chunk => {
                //console.log('ondata')
                //console.log(chunk)

                data += chunk
            })

            res.on('end', () => {
                //console.log('onend')
                //console.log(res)

                //Then
                expect(data).toBe((a - b).toString())
                done()
            })
        })

        req.on('error', error => {
            console.error(error)
        })

        req.end()
    })
})