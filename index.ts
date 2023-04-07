import { Subject, Observable } from 'rxjs';

const myObservable = new Observable<number>((producer) => {
  producer.next(1);
  producer.next(2);
  // producer.error({ err: 'this is an error' });
  producer.complete();
});
// Error and Complete can happen only once during the execution and either one of them can happen
const mySubscription = myObservable.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(err),
  complete: () => console.log('complete'),
});
mySubscription.unsubscribe();
