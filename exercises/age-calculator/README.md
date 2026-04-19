# Age Calculator

The goal of this exercise is to learn how to use **Fakes** as a test double technique.

## The Task

Implement a function `getOldestName(...names: string[]): Promise<string>` that takes multiple names and returns the name corresponding to the highest estimated age.

Age estimation is provided by the [api.agify.io](https://api.agify.io) API.

### Example

```
getOldestName("Bob", "Alice", "Helmut") => "Helmut"
```

## The agify.io API

**Endpoint:** `GET https://api.agify.io?name=<name>`

**Response:**
```json
{
  "name": "bella",
  "age": 34,
  "count": 12345
}
```

## Solution Structure

### 1. Adapter Function

Access to the API is encapsulated behind a simple function:

```typescript
type GetAgeForName = (name: string) => Promise<number>
```

The real implementation calls the API:

```typescript
const getAgeForName: GetAgeForName = async (name) => {
  const response = await fetch(`https://api.agify.io?name=${name}`)
  const data = await response.json()
  return data.age
}
```

### 2. SUT: `getOldestName`

The function `getOldestName` receives the adapter function as the last parameter (dependency injection), with the real implementation as default:

```typescript
async function getOldestName(
  names: string[],
  getAge: GetAgeForName = getAgeForName
): Promise<string>
```

### 3. Core Test with Fake (Main Exercise)

Write tests for `getOldestName` **without** real HTTP requests. Create a **Fake** — a simple function that maps names to ages:

```typescript
const fakeGetAge: GetAgeForName = async (name) => {
  const ages: Record<string, number> = { Alice: 30, Bob: 52, Helmut: 67 }
  return ages[name] ?? 0
}

// In the test:
const result = await getOldestName(["Alice", "Bob", "Helmut"], fakeGetAge)
expect(result).toBe("Helmut")
```

### 4. Adapter Test with Lazy Assertion (IO Test)

Write a separate test that tests the real `getAgeForName` function against the live API. Use a **lazy assertion**: do not check for an exact value, only verify that a meaningful result is returned.

```typescript
it("returns a numeric age for a known name", async () => {
  const age = await getAgeForName("bella")
  expect(age).toBeGreaterThan(0)
})
```

> This is an IO test and will fail without a network connection. It should be run separately from unit tests.

## Why a Fake?

| Property            | Real HTTP call     | Fake           |
|---------------------|--------------------|----------------|
| Speed               | slow               | fast           |
| Network required    | yes                | no             |
| Deterministic       | no (API may change) | yes           |
| Test data control   | no                 | yes            |

A **Fake** is a simplified but working implementation. Unlike a stub, it contains real logic (here: looking up a dictionary). Unlike a mock, it does not verify calls — it just returns the right data.

## Setup

```bash
npm install
npm test
```

## Watch Mode

```bash
npm run test:watch
```
