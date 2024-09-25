## Description

This package provides a set of components and utilities for building user interfaces with Next.js and styled-components.
It includes pre-defined components, event handling through an event bus, and type definitions to ensure proper
TypeScript integration. The primary goal is to streamline the development process, enabling developers to quickly build
and style React components while ensuring type safety and reusability.

## Installation

```sh
npm install aetherUi/core
```

## Usage with TypeScript

### Create a basic new component implementation

```js
// Component
export const Component = (props: TComponent) => <RootElement {...props} />;
```

### Component typing

```js
import { TComponent as TCoreComponent } from 'aetherUi/core/components';

export type TComponent = TCoreComponent;
```

### Component styling

```js
import styled from 'styled-components';
import { Component } from 'aetherUi/core/components';

export const RootElement = styled(Component)`
  /* Your styling */
`;
```

### Create a new event channel

```js
import { eventbus } from 'aetherUi/core';

export const xxxEventChannel = eventbus<{
  eventName: (payload: PayloadType) => void;
}>();
```

### Subscribe to an event channel

```js
useEffect(() => {
  const unsubscribe = xxxEventChannel.on('eventName', payload => {
    // Handle event
  });

  return () => unsubscribe();
}, []);
```

### Emit an event from an event channel

```js
xxxEventChannel.emit('eventName', {
  // Payload content
});
```

## Author

Geoffrey Schmitt

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Support

For support, please open an issue on this repository or contact the author directly.