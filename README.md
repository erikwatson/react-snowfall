# React Snowfall

A React wrapper for [@erikwatson/snowfall](https://www.npmjs.com/package/@erikwatson/snowfall)

Consult the base project for more details on features and usage. 

## Installation 

`npm install @erikwatson/react-snowfall`

## Usage 

Generate a config using the [Visual Config Editor](https://erikwatson.github.io/snowfall-editor/) and pass it to Snowfall.

Optionally, you can also pass a schedule. 

Snowfall will create and attach itself to an element with whatever name you pass as the "attachTo" property of the config. By default, it attaches to a div with an id of "snowfall". Apply your styling to this. 

```tsx
import { Snowfall, UserConfig, UserSchedule } from "@erikwatson/react-snowfall";

export default function App() {
  const myConfig: UserConfig = {
    layers: [{ colour: 'red' }]
  }
  
  const mySchedule: UserSchedule = {
    from: { month: 12, day: 1 },
    to: { month: 12, day: 31 }
  }

  return <Snowfall config={myConfig} schedule={mySchedule} />;
}
```

## Author

- [Erik Watson](http://erikwatson.me)
