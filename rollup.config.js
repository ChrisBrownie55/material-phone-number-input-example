import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import fs from 'fs';

function requireJSON(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

export default {
  input: 'src/PhoneInput.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    banner: `/* mui-phone-input version ${pkg.version} */`,
    footer: '/* follow me on twitter @ChrisHBrown55 */'
  },
  plugins: [
    babel(requireJSON('./.babelrc'))
  ]
};
