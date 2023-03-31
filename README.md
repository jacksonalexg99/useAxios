# useAxios
# A custom hook for making HTTP requests with Axios.

Usage
To use the hook, import it into your React component and call it with the necessary parameters.

```jsx
import useAxios from 'use-axios-custom-hook';

const MyComponent = () => {
const [response, error, loading] = useAxios({
method: 'get',
url: '/my-api-endpoint'
});

if (loading) {
return <div>Loading...</div>;
}

if (error) {
return <div>Error!</div>;
}

return (
<div>
<h1>{response.title}</h1>
<p>{response.body}</p>
</div>
);
};
```


# Parameters
The useAxios hook takes a single parameter, which is an object with the following properties:

    method (required) - The HTTP method to use for the request.
    url (required) - The URL of the API endpoint to request.
    params (optional) - An object containing query parameters to include in the request.
    data (optional) - The data to send with the request.

# Return Values

The useAxios hook returns an array with three values:

    response - The response data from the API endpoint.
    error - A boolean indicating whether an error occurred during the request.
    loading - A boolean indicating whether the request is currently loading.

# License

This package is licensed under the MIT license. See the LICENSE file for more details.
