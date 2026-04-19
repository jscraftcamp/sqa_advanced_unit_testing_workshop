---
title: Software Quality Assurance - Advanced Unit Testing
colorSchema: light
background: /images/apples.png
transition: none
---

<div style="position: absolute; top: 5%; left: 0; right: 0; padding: 0 2rem; text-align: center; z-index: 2; box-sizing: border-box;">
<h1 style="color: white !important; font-size: 4rem !important; line-height: 1.12 !important; margin: 0;">
  Software Quality Assurance
</h1>
<h2 style="color: white !important; font-size: 2.5rem !important; margin-top: 1rem;">
  Advanced Unit Testing
</h2>
</div>

<p style="position: absolute; bottom: 60px; right: 40px; z-index: 2; color: white; text-transform: none; text-align: right">@MarcoEmrich</p>

---
background: /images/typing.jpg
class: bg-slide
---

## Topics

1. Assertions
2. Test Doubles
3. Fragile Tests

---
background: /images/relax.jpg
class: bg-slide
---

# Assertions

## Relaxed Assertions

---

## Relaxed Assertions

```javascript
  expect(foo).toEqual("$129,88");
```
=>

```javascript
  expect(foo).toMatch(/$/d{2,4}[,.]\d\d/);
```

---

## Relaxed Assertions

```javascript
  expect(foo).toEqual([1, 2, 3, 4]);
```
=>

```javascript
  expect(foo).toContain(3);
```

---
background: /images/fire.jpg
class: bg-slide
---

# Test Doubles

---
background: /images/fire_dim.jpg
class: bg-slide
---

## Test Doubles

- Dummies
- Stubs
- Fakes
- Mocks
- Spies

---

## Sociable vs Solitary\*

<img src="/images/isolate.png">

<sub>(*) from M. Fowler/ J. Fields</sub>

---
background: /images/backdoor_g.jpg
class: bg-slide
---

<h2 style="position: absolute; top: 300px; left: 40px;">Frontdoor<br />vs<br />Backdoor Testing</h2>

---

### Result verification (Frontdoor)

```javascript
expect(add(3, 4)).toEqual(7);
```

### State verification (Frontdoor)

```javascript
deck = new DeckOfCards(31);
deck.addCardOnTop("♥9");
expect(deck.numberOfCards).toEqual(32);
```

### Behavior verification (Backdoor)

```javascript
pushSpy = vi.spyOn(Array.prototype.push);
deck.addCardOnTop("♥9");
expect(pushSpy).toHaveBeenCalledWith("♥9");
```

---
background: /images/spy.png
class: bg-slide
---

## Vitest

### Everyone is a

# Spy

---
background: /images/spy_dim.png
class: bg-slide bg-slide-dim
---

## Vitest: Everyone is a Spy

- `vi.fn()` — create a spy
- `vi.spyOn()` — spy on existing method
- `mockReturnValue()` — stub return value
- `mockImplementation()` — fake implementation

<br>

> Every test double type in Vitest is a **Spy**

---

## But you can also go manual

| Double | Vitest | Manual |
|--------|--------|--------|
| Dummy  | Spy    | e.g. `{}` |
| Fake   | Spy    | custom implementation |
| Stub   | Spy    | custom implementation |
| Mock   | Spy    | — |
| Spy    | Spy    | — |

---

## Test Double Pattern 1: Interfaces

Replace a class implementation via an interface

```typescript
interface Sensor {
  nextValue(): number;
}

class StubSensor implements Sensor {
  nextValue() { return 16; }
}

const alarm = new Alarm(new StubSensor());
```

---
background: /images/weights.jpg
class: bg-slide
---

# Exercise

## Tire Pressure

---

## Test Double Pattern 2: Functional DI

Replace a function via dependency injection

```typescript
type GetAgeForName = (name: string) => Promise<number>;

const fakeGetAge: GetAgeForName = async (name) => {
  const ages: Record<string, number> = {
    Alice: 30, Bob: 52, Helmut: 67
  };
  return ages[name] ?? 0;
};

const result = await getOldestName(
  ["Alice", "Bob", "Helmut"], fakeGetAge
);
```

---
background: /images/weights.jpg
class: bg-slide
---

# Exercise

## Age Calculator

---
background: /images/fragile.jpg
class: bg-slide
---

# Fragile Tests

http://xunitpatterns.com/Fragile%20Test.html

---
background: /images/cat.jpg
class: bg-slide
---

> I tried harder but TDD still didn't work for me!

<br><br><br><br><br><br>

&mdash; Grumpy Developer

---
background: /images/ripple.jpg
class: bg-slide
---

## Missing Isolation

- Defect Localization
- Ripple Effect

---
background: /images/overspec.jpg
class: bg-slide
---

## Overspecification

- caused by Test Doubles
- caused by too strict Assertions

---
background: /images/fragile.jpg
class: bg-slide bg-slide-dim
---

## How to fix fragile tests?

- **Relaxed Assertions** → less overspecification
- **Test Doubles** → better isolation
- Don't mock what you don't own
- Less specific tests — What! Not How!
- Delete Tests ("Off with their heads")

---
background: /images/mock.jpg
class: bg-slide
---

## Guideline

> Don't mock what you don't own

&mdash; Steve Freeman

---
background: /images/fragile.jpg
class: bg-slide bg-slide-dim
---

## Possible Solution

=> Wrapper at the Seams

(aka Universal Architecture by JB Rainsberger)

---
background: /images/edna.jpg
class: bg-slide bg-slide-dim
---

## Possible Solution: Isolation

- Smaller Tests
- AAA-Pattern
- Test Doubles

---
background: /images/abstract.jpg
class: bg-slide bg-slide-dim
---

## Possible Solution

<br>

- Less specific tests
- More generic (Go Up)
- What! Not How!

---
background: /images/queen.jpg
class: bg-slide bg-slide-dim
---

## Possible Solutions
### Delete Tests

> Off-With-Their-Heads

&mdash; Markus Gärtner, also Queen of Hearts
