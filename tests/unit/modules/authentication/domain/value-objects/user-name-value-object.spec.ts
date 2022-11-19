import { UserName } from '@authentication/domain/value-objects';
import { InvalidUserNameError } from '@authentication/domain/errors';

describe('UserName Value Object', () => {
  test('should create a new user name', () => {
    const validUserName = 'Valid Test';
    const userName = UserName.create(validUserName);
    expect(userName).toBeDefined();
    const getValue = userName.getValue();
    expect(getValue).toBe(validUserName);
  });

  test('should throw if send a invalid user name', () => {
    const invalidUserName = 'invalid-user-name-123';
    expect(() => UserName.create(invalidUserName)).toThrow(InvalidUserNameError);
    expect(() => UserName.create(invalidUserName)).toThrow(`The user name "${invalidUserName}" is invalid`);
  });
});