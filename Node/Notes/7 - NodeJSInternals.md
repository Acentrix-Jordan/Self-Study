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
