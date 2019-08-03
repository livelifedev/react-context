Practice using the context system in react.

Notes:
- App loads up in browser
- The context object is created with a default value
- App component gets rendered, creates a Provider that wraps the necessary component
- The Provider updates the value of the context object using value of state
- Nested child components access the value in the context object
- Nested child components render to screen with appropriate values
* (steps 3-4 get repeated each time state changes)

Consumer vs this.context
- this.context seems more straightforward, but is used only when accessing a single context object inside of a component
- Consumer should be used when wanting to get information from multiple different context objects from inside a single component