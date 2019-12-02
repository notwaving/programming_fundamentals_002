1. In what data type have we chosen to represent a book?

Array.

2. Is this the best data type, do you think? Could we have chosen a more appropriate data type? Why?

No. There are two values (i.e. title and author) in the strings that comprise each item in the array. An object would hasve been much better in order to identify and isolate these two values.

3. Take a read of the Jest Documentation about [Matchers](https://jestjs.io/docs/en/using-matchers) such as `toBe` and `toEqual`. What other matchers might come in useful? Check the tests you have written and make a list of alternative matchers which you might have been able to use.

Numbers matchers, such as `.toBeGreaterThan(0)` when checking if a book is in stock; `.toBe()` for anything returning a boolean.



4. What data types are considered "complex" data types?

Array, object.

5. What data types are considered "primitive" data types?

String, number, boolean, undefined.

6. In JavaScript it is possible to use `==` ("double equals") or `===` ("triple equals") to compare two values. What is the difference and why do we prefer triple equals?

``` 
7 == '7' 

// returns true, as the string '7' has been converted to a number before the comparison is done.

7 === '7'

// returns false, as the the string has NOT been converted to a number before the comparison is done. 
```
Triple equals is strict equality, and is therefore preferred to the loose equality offered by double equals.

