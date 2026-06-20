# React Snowfall

A React wrapper for [@erikwatson/snowfall](https://www.npmjs.com/package/@erikwatson/snowfall)

## Installation 

`npm install @erikwatson/react-snowfall`

## Usage 

Generate a config using the [Visual Config Editor](https://erikwatson.github.io/snowfall-editor/) and pass it to Snowfall. 

```
import { Snowfall } from "@erikwatson/react-snowfall";

export default function App() {
  const myConfig = {
    layers: [{ colour: 'red' }]
  }
  return <Snowfall config={myConfig} />;
}
```

## Author

- [Erik Watson](http://erikwatson.me)
