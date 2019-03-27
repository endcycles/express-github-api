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
    "username": "justindmo",
    "followers": 10
  }
}
```

### Start API server

```
yarn
yarn start
```

### Future Updates

- Loop through pages if more than 100 followers
