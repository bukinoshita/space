# Space

> A spacing util

## Install

```bash
$ yarn add @bukinoshita/space
```

## Usage

Example with [styled-jsx](https://github.com/zeit/styled-jsx)

```ts
// theme/space.ts
import { Space } from '@bukinoshita/space'

export const space = new Space()
```

```tsx
// components/my-component.tsx
import { spacing } from 'theme/spacing'

const MyComponent = () => (
  <div>
    <h1>Nice</h1>

    <style jsx={true}>
    {`
      h1 {
        margin-bottom: ${space.spacing(2)} // 8px;
        color: black;
      }
    `}
    </style>
  </div>
)
```

You can find more [example here](/examples)

## API

### Space(grid, unit)

#### grid

Type: `number`<br />
Default: `4`<br />
Optional

#### unit

Type: `string`<br />
Default: `px`<br />
Optional

### .spacing(value)

#### value

Type: `number`<br />
Required

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
