import choose from './../../src/selectors/Choose'

describe('Stand up selector', () => {
    it('should select an element from the array', () =>{
        const array = ['lorem', 'ipsum', 'dolor', 'sit'];
        const chosen = choose(array);
        expect(array).toContain(chosen);
    });
});