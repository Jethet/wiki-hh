## Forms
The `<label for="">` should have exactly the same value as `<input name="">`:  
*label* and *name* have to be the same.

**Try run your app with npm start and get error:**  
ENOENT: no such file or directory, open /Users/<username>/package.json  
This can be due to the fact that you are not in the right folder, so npm cannot find the package.json file.

**Keeping a header or navbar component visible everywhere:**  
The componentit needs to be outside the Route or Switch to be always visible. If you want a header to be  
able to process Link components, it needs to be under a Router component but outside Switch:  
```
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
          <Switch>
            <Route path="/">
              <Home />
            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
      </Router>
    </div>            
  );
}

export default App;
```

**Exporting/importing a separate datafile**  
When using a separate file with data (for example, a list of contacts), this can be exported and imported as follows:  
```
export const contacts = [
  {
    name: "Jenny Han",
    email: "jenny.han@notreal.com",
  },
  {
    name: "Jason Long",
    email: "jason.long@notreal.com",
  },
  {
    name: "Peter Pan",
    email: "peter.pan@neverland.com",
  },
];
```  
To import the file in the component where it is used: `import {contacts as contacts} from "../contacts";`

**React fragments**  
In the return statement of a React component, you can use `<>` and `</>` to have one parent element,  
instead of using `<div>` and `</div>`.