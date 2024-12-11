```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Conditional logic outside the dependency array
    let mounted = true;
    if (count > 5 && mounted) {
      setCount(0); 
    }
    return () => mounted = false;
  }, []); // Empty dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```