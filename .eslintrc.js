module.exports = {
    env: {
        browser: true,
      },
    extends: {
        eslint: recommended,
      },
    rule: {
            indent: [
            error,
            spaces,
        ],
            'linebreak-style': [
            error,
            windows,
        ],
            quotes: [
            error,
            single,
        ],
            semi: [
            error,
            always,
        ],
          },
  };
