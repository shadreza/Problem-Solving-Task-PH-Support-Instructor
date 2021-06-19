# Problem-Solving-Task-PH-Support-Instructor

this can be done in various ways

## 1. for every iteration we can do a leftShifting

for(let i=0;i<d;i++) {
doLeftShift()
}

but this will max the time complexity to O(n^2)

## 2. This is the plan that I implemented in the initial commit. As we are leftshifting we can see that after d shifts the d%n th index is at the first following up to the n-1 th item and after that the items from 0 to d-1 will be added.

So took another array and pushed the elements with two simple for loops.

This could also be done with the help of other functions but I like the hardcoding one...

This approach should be done in O(n) times which is very efficient for the case.

---

Though there is nothing told if there should be a return or just printing in the function I have returned the desired array and printed it outside of the function
