


## FIX FOR WSL AND LOCALHOST / DOCKER

A. Restart LxssManager 
or
b. `netsh interface portproxy add v4tov4 listenport=80 listenaddress=127.0.0.1 connectport=80 connectaddress=<wsl_ip>`


Put this in package json instead of babelrc
```JavaScript

// "babel": { //put this in .babelrc
//   "presets": [
//     "@babel/preset-env"
//   ]
// },
```

## Sources
https://www.robinwieruch.de/minimal-react-webpack-babel-setup