import {jest} from '@jest/globals'

jest.unstable_mockModule('axios', () => {
    // returning an object that is a representation of axios request
    return {
        // we need default export for axios that is an object representing the fake axios object
        default: {
            // get method available
            get: jest.fn().mockResolvedValue(
                // returned data object
                {data:{
                    results: [{ name: 'pokemon1'}, {name: 'pokemon2'}]
                }}
            )
        }
    }
})

const mockRandom = jest.fn()
jest.unstable_mockModule('lodash', () => {
    return {
        default: {
            random: mockRandom
        }
    }
})

const {getNthPokemon,doSkillCheck} = await import('../mock-demo.js')

describe('Test of getNthPokemon', () => {
    test('returns pokemon2 when n = 2', async () => {
        const pokemon2 = await getNthPokemon(2)
        expect(pokemon2).toEqual({name: 'pokemon2'})
    })
})

describe('Testing of doSkilCheck',() => {
    test('returns false for rolls of 1-9', () => {
        for (let n = 1; n < 9; n++) {
            mockRandom.mockReturnValue(n)
            expect(doSkillCheck()).toBe(false)
        }
    })

    test('returns true for rolls of 10-20', () => {
        for (let n = 10; n < 20; n++) {
            mockRandom.mockReturnValue(n)
            expect(doSkillCheck()).toBe(true)
        }
    })
})

for (let i = 0; i < arr.length; i++){}