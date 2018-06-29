We have a magic function in JS that returns the distance in km between two points following the route of the streets and their directions:


**function distance (p1, p2, cb)**


As it takes a long time to run on the server, you pass a callback (cb) and it will be called (asynchronously) once the calculation has been made.


As you can imagine, it is a very useful function and it is called many times from different places of the code. In the development environment with 20 points on the map is very good, but when you put 1000 the browser is blocked. Your instinct tells you to look at the web requests of the page and see, that you are making thousands of requests simultaneously against the server (the server keeps up with it :D ) but your super Google Chrome can not manage them, swapping and even worse things.


Decide that you want to limit the number of parallel requests to X, e.g. (X = 5) but X can be hardcoded. You have to implement a method without using external libraries:


**function distanceHandler (p1, p2, cb)**


and everything necessary for this function to manage the parallelization of calls to the distance function that cannot be modified. In addition, the functions that called the distance function must be able to call it without changes except its name.


For example, the behavior should be the following: you make ten requests, but X = 3. As you start to execute the first 3, when one of these ends the fourth will begin immediately and so on until all have been resolved.

