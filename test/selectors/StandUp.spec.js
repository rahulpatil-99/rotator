import choose from './../../src/selectors/Choose'

describe('Stand up selector', () => {
    it('should select elements from the array', () =>{
        const array = ['lorem', 'ipsum', 'dolor', 'sit'];
        const chosen = choose(array);
        expect(array).toContain(...chosen);
    });

    it('should select two element from the array', () =>{
        const array = ['lorem', 'ipsum', 'dolor', 'sit'];
        const chosen = choose(array);
        expect(chosen).toHaveLength(2);
    });

    it('should return undefined for a single element list', () => {
        const singleElementList = ['an element'];
        expect(choose(singleElementList)).toEqual(undefined);
    });
});