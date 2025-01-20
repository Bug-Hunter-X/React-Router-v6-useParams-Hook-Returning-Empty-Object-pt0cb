To fix this, ensure that the component using `useParams` is a child of a route component that uses the `Route` element. If you need access to the parameters in a component that's not directly nested within a `Route`, you can pass the parameters down as props from a parent component that *is* within a `Route`. 

```javascript
// Correct Usage
function UserPage() {
  const params = useParams();
  return (
    <div>
      <MyComponent userId={params.userId} />
    </div>
  );
}

function MyComponent({ userId }) {
  // Access params from props
  console.log(userId); // Correct userId
  return <div>My Component {userId}</div>;
}

<Routes>
  <Route path="/users/:userId" element={<UserPage/>}/>
</Routes>
```
Alternatively, lift the `useParams` call to the parent component and pass the necessary parameters to the child component as props.