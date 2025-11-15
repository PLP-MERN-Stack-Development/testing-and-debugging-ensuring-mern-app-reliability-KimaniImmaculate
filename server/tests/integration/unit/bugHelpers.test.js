const { isValidPriority } = require('../../../src/utils/bugHelpers'); 

describe('Bug Helper Functions', () => {
  it('should validate priority correctly', () => {
    expect(isValidPriority('low')).toBe(true);
    expect(isValidPriority('medium')).toBe(true);
    expect(isValidPriority('high')).toBe(true);
    expect(isValidPriority('urgent')).toBe(false);
  });
});
