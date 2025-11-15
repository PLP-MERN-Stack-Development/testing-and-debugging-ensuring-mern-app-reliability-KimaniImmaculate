// src/utils/bugHelpers.js
function isValidPriority(priority) {
  const validPriorities = ['low', 'medium', 'high'];
  return validPriorities.includes(priority);
}

module.exports = { isValidPriority };
