import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  plugins: [
    commonjs(),
    resolve(),
  ],
};
