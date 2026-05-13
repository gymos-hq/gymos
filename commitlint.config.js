/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // Allowed commit types
        'type-enum': [
            2,
            'always',
            [
        'feat',     // new feature
        'fix',      // bug fix
        'chore',    // infra, deps, config
        'docs',     // documentation only
        'test',     // adding or updating tests
        'refactor', // restructure without changing behaviour
        'perf',     // performance improvement
        'style',    // formatting only (no code change)
        'revert',   // reverting a previous commit
        'build',    // build system changes
        'ci',       // CI config changes
      ],
        ],
        // Subject must not be empty
        'subject-empty': [2, 'never'],
        // Subject must be lowercase
        'subject-case': [2, 'always', 'lower-case'],
        // Subject must not end with a period
        'subject-full-stop': [2, 'never', '.'],
        // Header max 100 chars
        'header-max-length': [2, 'always', 100],
        // Type must be lowercase
        'type-case': [2, 'always', 'lower-case'],
        // Type must not be empty
        'type-empty': [2, 'never'],
    },
};