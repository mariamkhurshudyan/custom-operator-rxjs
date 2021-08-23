import { Observable } from 'rxjs';

const isFibonacci = (n: number): boolean => {
  const pi = 0.5 + 0.5 * Math.sqrt(5.0)
  const a = pi * n
  return n === 0 || Math.abs(Math.round(a) - a) < 1.0 / n
}

export const takeFibonacci = () => (source: Observable<number>) =>
  new Observable<number>(observer => {
    return source.subscribe({
      next(x) {
        if (isFibonacci(x)) {
          observer.next(x);
        }
      },
      error(err) { observer.error(err); },
      complete() { observer.complete(); }
    })
  });



