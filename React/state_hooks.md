### useState hook
* State is an object that represents a **part of an app that can change**, which the UI “reacts” to.  
* State can be anything; objects, booleans, arrays, strings or integers.  
* The useState object gives us a variable with the current value, and a function that lets us change that value.
* When we call useState we can define an initial value (for example, `false` or `0`).
* We use a **destructuring assignment** on the useState hook to get these values: the first variable accesses the **state value**, the second variable **changes the state**.
* This means `useState()` provides the function (*the second variable in the destructuring*) to update the state. This can be used for a button, for example: `onClick={() => variableFunction(!originalValue)}` which would change `false` (originalValue) into `true` with a click on the button.
* Whenever the component state changes, React will re-render the component with the new state.
* **State belongs to the individual component**: only that component will update if its button is clicked, even if the component is re-used (such as a list of to do's).

### useEffect hook
* The useEffect hook is a special hook that runs a function: `useEffect(() => { ... })`
* By default, the useEffect hook runs on **every re-render**.
* useEffect can be **configured to run under a specific condition**, for example when a **component mounts** or **if a variable changes**.
* A second argument can be added to the useEffect function, called the **dependency array**. If the useEffect function has to run only when the component loads for the first time, an empty dependency array is added: `useEffect(() => { .... }, [])`. This can be used to load data when the component loads, for example from an API.


#### Destructuring
A **destructuring assignment** is a special syntax that allows us to “unpack” arrays or objects into separate variables.   

Simple destructuring example: `let [a, b, c] = "abc";` will give ["a", "b", "c"]
**Map()** iterates as [key, value] pairs, very convenient for destructuring:  
```
let user = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user) {
  alert(`${key}:${value}`); // name:John, then age:30
}
```  
#### Props
* Props can hold different types of data, i.e. strings, numbers, booleans, objects, arrays, etc.
* Props must be defined using quoted text: `name = "Jane Doe"` or inside braces: `age = {25}`.
