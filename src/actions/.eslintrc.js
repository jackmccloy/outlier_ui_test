module.exports = {
  rules: {
    /* To preserve consistancy of how actions are imported and exported we
    want to disallow default exports in this folder even when a file has a
    single export */
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
  },
};
