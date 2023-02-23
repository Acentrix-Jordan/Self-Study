# Node Runtime

Node Runtime is an enviroment that provides components to use and run a JS program outside of the browser.

At it's core it contains 3 key components:

1. Dependencies
2. C/C++ features
3. JS Library used to tap into the C/C++ features

# Asynchronous Javascript

At it's core JS is a synchronous, blocking, single-threaded language.

Node uses the dependancy libuv to offer Asychronous functionality.

# libuv

## What?
libus is a cross platform open source library written in the C Language.

## Why?

libuv handles asychronous non-blocking operations in Node.js

## How?

By utilising a Thread Pool and Event Loop

# Thread Pool

When we declare something as async, node passes off the task to libuv as it has a pool of threads, which it can use to run tasks asychrously. Once the task is complete, libuv will return either a success or error

## Thread Pool Size

libuv thread pool has 4 threads by default.

We can increase our thread pool size by setting a process enviroment variable

```
process.env.UV_THREADPOOL_SIZE = x
```

More threads increases stress on the CPU. If we increase our thread size pass the amount of our CPU cores, we will increase the time required for each thread as the OS has to juggle the functions across its cores.

# Network I/O

Network I/O requests don't run on the libuv thread pool.

We can demonstrate this by using the https.request method.

This is because libuv delegates the work to the OS Kernel and poll the kernel to see when the tasks are completed

# Event Loop

We use the libuv package to help with asychronous code

Our JS Engine (V8) contains a memory heap and call stack.

When we fire an async method Node passes the task off the libuv package which utilese the native asychrous methods of the OS

The event loop is a C Program that is apart of libuv.

It is a design pattern that orchestrates the execution of sychronous and asychronous code in NodeJS

The event loop is running all the time in our JS runtime.

In every iteration of the loop we have 6 different queues. Each queue has a unique CB function that needs to be executed on the call stack.

1. Timer Queue - contains callbacks that work with setTimeout/setInterval
2. I/O Queue - contains callbacks that relate to async methods that deal with I/O events (http, fs)
3. Check Queue - contains callbacks that work with setImmediate, this is specific to node
4. Close Queue, handles the close event of our async methods
5. Next Tick Queue (Microtask) - works with a function called process.nextTick
6. Promise Queue - contains callbacks associated with the native JS promise

Queues 1-4 are within libuv the package.

## Execution Order

All synchronous functions take priorty over async functions

1. Sync Functions
2. Microtask queues are executed( 1 - nextTick, 2 - Promises )
3. Timer Queue
4. Microtask if present after each callback in the timer queue
5. I/O Queue
6. Microtask if present after each callback in the I/O queue
7. Check Queue
8. Microtask if present after each callback in the Check queue
9. Close Queue
10. Microtask if present after each callback in the Check queue

# Microtask Queue

To call a function in our microtask queue, we use the native function

```
process.nextTick(() => {
    console.log("This is process.nextTick 1");
})
```

To call a function in our promise queue, we use the native function

```
Promise.resolve().then(() => {
    console.log('This is Promise.resolve 1');
})
```

# Timer Queue

# I/O Queue

# I/O Polling

# Check Queue

# Close Queue

```

```
