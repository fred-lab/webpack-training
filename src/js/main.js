import add from './partials/math';
// import '../scss/main.scss';

// eslint-disable-next-line no-console
const display = msg => console.log(msg);

display('App is ready for es6');

const a = {
  test: 'a',
};

const b = {
  ...a,
  name: 'toto',
};
// eslint-disable-next-line no-console
console.log(b);

// eslint-disable-next-line no-console
console.log(add(2, 2));
