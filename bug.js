In React Router Dom v6, using the `useParams` hook inside a component that's *not* directly nested within a route's `Route` element can cause unexpected behavior.  The `params` object returned by `useParams()` will be empty or undefined, even if the route path matches correctly. This often leads to errors or empty displays because the component attempts to access parameters that don't exist. 

```javascript
// Incorrect usage
function MyComponent() {
  const params = useParams();
  console.log(params); // {} or undefined
  return <div>My Component</div>;
}

// Route Structure
<Routes>
  <Route path="/users/:userId" element={<UserPage/>}/>
</Routes>

//UserPage doesn't use the params
function UserPage(){
    return(
        <div>
            <MyComponent/>
        </div>
    );
}
```