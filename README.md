# Express Github API

- Node.js
- Express
- [Axios](https://github.com/axios/axios)
- [Github API](https://developer.github.com/v3/)

### Usage

Input username as a parameter via URL.

```
http://localhost:8000/api/v1/:username
```

### Return data

```
{
  "response":
  {
    "username": "username",
    "followers": number
  }
}
```

### Start API server

```
yarn start
```
