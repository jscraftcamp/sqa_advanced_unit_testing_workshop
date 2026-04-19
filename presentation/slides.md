---
title: Introduction to TDD (Part 2)
colorSchema: light
background: /images/cc_title_2.jpg
transition: none
---

<div style="position: absolute; top: 5%; left: 0; right: 0; padding: 0 2rem; text-align: center; z-index: 2; box-sizing: border-box;">
<h3 style="color: white !important; font-size: 4rem !important; line-height: 1.12 !important; margin: 0;">
  Introduction to <br/>Test Driven Development<br /> Part II
</h3>
</div>

<p style="position: absolute; bottom: 60px; right: 40px; z-index: 2; color: white; text-transform: none; text-align: right">Ferdinand Ade &<br> Marco Emrich</p>

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
- Fakes
- Stubs
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
background: /images/weights.jpg
class: bg-slide
---

# Exercise

## Tire Pressure

---
background: /images/weights.jpg
class: bg-slide
---

# GO !

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
background: /images/edna.jpg
class: bg-slide
---

## Possible Solution: Isolation

**=> using Stubs, Fakes**

<br><br><br><br><br><br><br><br>

---
background: /images/overspec.jpg
class: bg-slide
---

## Overspecification

- caused by Test Doubles
- caused by too strict Assertions

---
background: /images/relax.jpg
class: bg-slide
---

### Possible Solution

## Relax Assertions

---

## Relax Assertions

```javascript
  expect(foo).toEqual("$129,88");
```
=>

```javascript
  expect(foo).toMatch(/$/d{2,4}[,.]\d\d/);
```

---

## Relax Assertions

```javascript
  expect(foo).toEqual([1, 2, 3, 4]);
```
=>

```javascript
  expect(foo).toContain(3);
```

---
background: /images/mock.jpg
class: bg-slide
---

## Possible Solution

> Don't mock what you don't own

&mdash; Steve Freeman

---
background: /images/abstract.jpg
class: bg-slide
---

## Possible Solution

<br>

- Less specific tests
- What! Not How!
- Go Up

---
background: /images/queen.jpg
class: bg-slide
---

## Possible Solutions
### Delete Tests

> Off-With-Their-Heads

&mdash; Markus Gärtner, also Queen of Hearts
