import { ChangeBgc } from './ChangeBgc';

window.Features.ChangeBgc = function(...args) {
  new ChangeBgc(...args);
};

window.Features.SayHi = function() {
  if (process.env.NODE_ENV === 'development') {
    console.log(`hello, world`);
  }
};
