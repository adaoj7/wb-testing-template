function giveMeCat() {
    return 'cat'
}

test('giveMeCat returns cat', () => {
    expect(giveMeCat()).toBe('cat')
})
