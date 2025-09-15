import {getFieldNameById} from './getFieldNameById';

describe('getFieldNameById', () => {
    it('should return name for existing numeric id', () => {
        const field = [
            {id: 1, name: 'one'},
            {id: 2, name: 'two', completed: true}
        ];
        const result = getFieldNameById(1, field);
        expect(result).toBe('one');
    });
    it('should return name for existing string id', () => {
        const field = [
            {id: "1", name: 'one'},
            {id: "2", name: 'two', completed: true}
        ];
        const result = getFieldNameById("1", field);
        expect(result).toBe('one');
    });
    it('should return undefined if id does not exist', () => {
        const field = [
            {id: 1, name: 'one'},
            {id: 2, name: 'two', completed: true}
        ];
        const result = getFieldNameById(5, field);
        expect(result).toBeUndefined();
    });
    it('should return undefined if field array is empty', () => {
        const field = [];
        const result = getFieldNameById(5, field);
        expect(result).toBeUndefined();
    });
    it('should return undefined for wrong id type', () => {
        const field = [
            {id: 1, name: 'one'},
            {id: 2, name: 'two', completed: true}
        ];
        const result = getFieldNameById("2", field);
        expect(result).toBeUndefined();
    })
})