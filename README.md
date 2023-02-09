# Bitset

Utilities for arithmetic bitwise operations in JavaScript

```bash
npm i @hazae41/bitset
```

[**Node Package 📦**](https://www.npmjs.com/package/@hazae41/bitset)

### Current features
- 100% TypeScript and ESM
- Unit-tested
- Big-endian and little-endian
- Export to uint32
- Builder pattern

### Usage

```typescript
const bitset = new Bitset(0x00, 8)

const result = bitset
  .toggleLE(1) // 0000 0010
  .toggleBE(1) // 0100 0010
  .unsign() // >>> 0
  .value
```