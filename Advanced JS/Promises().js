/**
 * Promises were introduced on ES6 and were a solution to try and limit 'callback hell'
 */

getUser("facebook/jordanwilson", (user, error) => {
	if (error) {
		throw error;
	}

	const userID = user.userID;

	getFriends(userID, (friends, error) => {
		if (error) {
			throw error;
		}

		const toby = friends.find(...someOtherFunction());

		getPosts(toby, (posts, error) => {
			if (error) {
				throw error;
			}
		});

		/**
		 * And this goes on and on until we get the data we need
		 */
	});
});

/**
 * Promises are instanstiated with a constructor,
 *
 * The promise has a function which we pass two values
 * a resolve and a reject
 *
 * A Promise is a promise to say this function will eventually have a value,
 * this value will either be a resolve or a reject value
 *
 * Resolve is successful
 *
 * Reject is unsuccessful
 *
 *
 *
 *
 */

const myPromise = new Promise((resolve, reject) => {
	if (false) {
		setTimeout(() => {
			resolve("I have succeeded");
		}, 1000);
	} else {
		reject("I have failed");
	}
});

/**
 * Once the timeout has completed the resolve value is held in the
 * resolve and in a pending state
 *
 * To access this value we use the .then method
 *
 * If we set our conditional to false our promise will reject.
 *
 * To access the reject we use the .catch method
 */

myPromise
	.then((value) => {
		console.log(value);
	})
	.catch((error) => {
		console.log(error);
	});

/**
 * We can chain our .then methods as when we return something in .then it is
 * wrapped in a promise.
 *
 * Example below
 */

myPromise
	.then((value) => {
		return value + "!!!!";
	})
	.then((value) => {
		console.log(value);
	});
