## Single Threaded Limitation

**Call Stack:** Where functions are pushed into and executed.

*What happens when the call stack has a function that takes up A LOT of time?*
 
ans: Browser is blocked and has to wait.

**Event Loop:** A built in mechanism in all JS environments that handles execution of multiple chunks of the program over time. 

The event loop has one job: monitor the call stack and the callback queue. 

**Job Queues:** a new ES6 feature which is a layer built on top of the event loop queue.


## Asynchronous Javascript

**Async/Await (ES8):** Async functions return promises and simply the behavior of using promises.  
Note**: if it returns a value, it is NOT a promise. 

Async -> Promise -> return value (rejected or resolved).

Async functions can use the **await** key word to pause the execution of a function and waits for the passed promise resolution, and then resumes the async function’s execution and returns the resolved value

```javascript
// Just a standard JavaScript function
function getNumber1() {
    return Promise.resolve('374');
}
// This function does the same as getNumber1
async function getNumber2() {
    return 374;
}
```