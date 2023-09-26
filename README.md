# LVector - 2D Vector Library for TypeScript

`LVector` is a TypeScript library that simplifies 2D vector manipulation. It offers methods to perform common vector operations like addition, subtraction, multiplication, division, scaling, and more.

## Installation

You can install this library via npm:

```bash
npm install lvector
```

## Usage

Import the `Vector2` class into your TypeScript project:

```typescript
import { Vector2 } from 'lvector';
```

### Creating a Vector

To create a 2D vector, use the constructor:

```typescript
const vector = new Vector2(x, y);
```

### Common Operations

- **Addition:**

```typescript
const result = vector1.add(vector2);
```

- **Subtraction:**

```typescript
const result = vector1.subtract(vector2);
```

- **Multiplication:**

```typescript
const result = vector1.multiply(vector2);
```

- **Division:**

```typescript
const result = vector1.divide(vector2);
```

- **Scaling:**

```typescript
const scaledVector = vector.scale(factor);
```

- **Equality Check:**

```typescript
// Checks if two vectors are equal. Epsilon is optional, defaults to 0.001.
const isEqual = vector1.isEqual(vector2, epsilon);
```

- **Magnitude:**

```typescript
const magnitude = vector.mag();
```

- **Dot Product:**

```typescript
const dotProduct = v1.dot(v2);
```

- **Move To:**

```typescript
const origin = new Vector2(10, 10);
const destination = new Vector2(20, 20);

// Interpolation value from 0 to 1
let interp = 0.5;
const interpolatedPosition = origin.moveTo(destination, interp);
// Result: interpolatedPosition is (15, 15)
```

- **Angle:**

```typescript
const angleRadians = vector.angle();
```

- **Angle in Degrees:**

```typescript
const angleDegrees = vector.angleDeg();
```

- **Normalization:**

```typescript
const normalizedVector = vector.normalize();
```

- **Rotation by 90 Degrees:**

```typescript
const rotatedVector = vector.r90deg();
```

- **Rotation by 180 Degrees:**

```typescript
const rotatedVector = vector.r180deg();
```

- **Rotation by 270 Degrees:**

```typescript
const rotatedVector = vector.r270deg();
```

- **Create a Copy:**

```typescript
const copy = vector.copy();
```

## Testing

Unit tests are available to ensure the correctness of the library by running the command as shown below:
```shell
npm run test
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and contributions are highly appreciated.

## License

This library is licensed under the [GPL-v3 License](LICENSE).