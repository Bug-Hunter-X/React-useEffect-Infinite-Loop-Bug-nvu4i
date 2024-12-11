# React useEffect Infinite Loop

This repository demonstrates a common React bug involving an infinite loop within the `useEffect` hook. The bug arises from incorrectly updating state within the useEffect's dependency array, causing the effect to run continuously.

## Bug Description
The `MyComponent` attempts to reset the `count` state to 0 when it exceeds 5. However, the way it is implemented causes an infinite loop.  Each update of `count` triggers the `useEffect`, which then updates `count` again, starting the cycle anew.

## Solution
The solution involves separating the state update logic from the dependency array.  This prevents the infinite loop by ensuring the `useEffect` only runs when the count initially changes.