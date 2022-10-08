const EventEmitter=require('events');
export const eventEmitter = new EventEmitter();
require('./subcribers/userSubcriber');
import express, { Express, Request, Response } from 'express';
import routes from './routes';

const app: Express = express();
const port = 4000;


/*app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);

  routes(app);
});*/

function equals(a: number, b: number): boolean {
  return a == b;
}
/*
let equalsPromise = new Promise((resolve, reject) => {
  if (equals(6,6)) {
    resolve(6+6);
    return 'EQ';
  } else {
    reject(-1);
  }
});

let res = equalsPromise.then( (value) => {
  console.log("Numbers are equals!!!");
  return 'equals';
}).catch( (error) => {
  console.log("Numbers are NOT equals");
});

setTimeout(function () {
  console.log(res);
}, 1000);*/

function factorial(n: number): number {
  let f = 1;
  for (let i= 1; i < n; i++) {
    f *= i;
  }
  return f;
}

const countFactorial = () => {
  const result1 = console.log(factorial(10));
  const result2 = console.log(factorial(5));

}

countFactorial();
