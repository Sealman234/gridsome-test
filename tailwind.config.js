module.exports = {
  purge: {
    enabled: false,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        'Nunito Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    textColor: {
      default: 'var(--color-text-default)',
      soft: 'var(--color-text-soft)',
      strong: 'var(--color-text-strong)',
    },
    backgroundColor: {
      default: 'var(--color-bg-default)',
      soft: 'var(--color-bg-soft)',
      softer: 'var(--color-bg-softer)',
      strong: 'var(--color-bg-strong)',
      'inline-code': 'var(--color-bg-inline-code)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
