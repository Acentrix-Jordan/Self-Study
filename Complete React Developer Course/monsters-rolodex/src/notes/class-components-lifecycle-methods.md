A diagram of the lifecycle methods can be found in the diagrams folder

# Mounting (Initial Render)

1. Constructor function is called
2. Render method called
3. React updates the DOM and refs
4. Lastly it will call the componentDidMount hook

# Updating (Rerender)

1. When we pass new props, setState() or forceUpdate(), the app will call the render method.
2. React updates the DOM and refs
3. Lastly it will call the componentDidUpdate hook

# Unmounting

1. When the component is removed, the app will call the componentWillUnmount hook.

Typically remove listeners and perform clean up with the componentWillUnmount hook

These methods are unique to class based components
