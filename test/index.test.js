const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe('capitalizeWords(input)', () => {
    test('should capitalize the first letter of each word', () => {
        const input = 'hello world';
        const expected = 'Hello World';
        expect(capitalizeWords(input)).toBe(expected);
    });
});

describe('filterActiveUsers(users)', () => {        
    test('should return only active users', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
     ];
        const expected = [
            { name: 'Alice', isActive: true },
        ];
        expect(filterActiveUsers(users)).toEqual(expected);
    });
}); 
describe('logAction(action, username)', () => {
    test('should log the action with a timestamp', () => {
        const action = 'login';
        const username = 'Alice';
        const logMessage = logAction(action, username);
        expect(logMessage).toMatch(new RegExp(`^User ${username} performed ${action} at `));
    });
});
