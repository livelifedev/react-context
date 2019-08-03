Practice using the context system in react.

Notes:
- App loads up in browser
- The context object is created with a default value
- App component gets rendered, creates a Provider that wraps the necessary component
- The Provider updates the value of the context object using value of state
- Nested child components access the value in the context object
- Nested child components render to screen with appropriate values
* (steps 3-4 get repeated each time state changes)