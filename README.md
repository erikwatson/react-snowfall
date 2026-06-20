# React Snowfall

A React wrapper for [@erikwatson/snowfall](https://www.npmjs.com/package/@erikwatson/snowfall)

Consult the base project for more details on features and usage. 

## Installation 

`npm install @erikwatson/react-snowfall`

## Usage 

Generate a config using the [Visual Config Editor](https://erikwatson.github.io/snowfall-editor/) and pass it to Snowfall.

Optionally, you can also pass a schedule. 

```tsx
import { Snowfall } from "@erikwatson/react-snowfall";

export default function App() {
  const myConfig = {
    layers: [{ colour: 'red' }]
  }
  
  const mySchedule = {
    from: { month: 12, day: 1 },
    to: { month: 12, day: 31 }
  }
  
  return <Snowfall config={myConfig} schedule={mySchedule} />;
}
```

## Author

- [Erik Watson](http://erikwatson.me)
