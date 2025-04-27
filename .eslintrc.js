export default {
    env: {
      es2021: true,
      browser: true,
      node: true
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    extends: [
      'eslint:recommended',
      'plugin:import/recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime'
    ],
    plugins: ['import', 'react'],
    rules: {
      // Import-related rules
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/no-absolute-path': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/extensions': ['error', 'ignorePackages', {
        js: 'never',
        jsx: 'never'
      }],
      
      // React rules
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off',
      
      // Modern JS rules
      'arrow-body-style': ['error', 'as-needed'],
      'no-var': 'error',
      'prefer-const': 'error',
      'object-shorthand': ['error', 'always']
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.mjs'],
          moduleDirectory: ['node_modules', 'src/']
        }
      },
      react: {
        version: 'detect'
      },
      'import/parsers': {
        // eslint-disable-next-line no-undef
        [require.resolve('@babel/eslint-parser')]: ['.js', '.jsx', '.mjs']
      }
    }
  }