---
title: Introduction to Refactoring for Gilded Rose
colorSchema: light
background: /images/cc_title_2.jpg
transition: none
---

<div style="position: absolute; top: 10%; left: 0; right: 0; padding: 0 2rem; text-align: center; z-index: 2; box-sizing: border-box;">
<h3 style="color: white !important; font-size: 4rem !important; line-height: 1.12 !important; margin: 0;">
  Introduction to Refactoring <br/>for Gilded Rose
</h3>
</div>

<p style="position: absolute; bottom: 60px; right: 40px; z-index: 2; color: white; text-transform: none; text-align: right">Ferdinand Ade &<br> Marco Emrich</p>

---
layout: two-cols
---

<img src="/images/refactoring_book.jpg" class="borderless" style="max-height: 420px">

::right::

## What is Refactoring?

<v-click>

> Refactoring is a disciplined technique for restructuring an existing body of code, altering its internal structure **without changing its external behavior**.

&mdash; Martin Fowler

</v-click>

---

## Why Refactor?

<v-clicks>

- Improve **readability** and understanding
- Reduce **complexity**
- Make future changes **easier**
- Remove **duplication**
- Improve **testability**

</v-clicks>

---

<img src="/images/who-are-we-developers-refactoring.png" class="borderless" style="max-height: 500px; margin: 0 auto;" />

---
background: /images/blocks.jpg
class: bg-slide
---

## When to Refactor?

---

## here: Refactoring as Learning

<v-clicks>

- Reading code? **Refactor it** to understand it
- Encode what you learned **into the code** itself
- Better names, clearer structure &rarr; the next person won't have to re-learn (could be you!)

</v-clicks>

---

## Code Smells

<v-clicks>

- **Long Method** &mdash; too much in one function
- **Duplicated Code** &mdash; same logic in multiple places
- **Large Class** &mdash; class does too many things
- **Long Parameter List** &mdash; too many arguments
- **Feature Envy** &mdash; method uses another class more than its own
- **Primitive Obsession** &mdash; overuse of primitives instead of small objects

</v-clicks>

---

## Common Refactorings

<v-clicks>

- **Extract Method** &mdash; pull code into a new function
- **Inline** &mdash; remove unnecessary indirection
- **Rename** &mdash; give things better names
- **Move Method** &mdash; put behavior where it belongs
- **Extract Variable** &mdash; name a complex expression
- **Replace Conditional with Polymorphism**

</v-clicks>

---

## Learn IDE Shortcuts

<v-click>

## Some refactorings are **automated**!

</v-click>

---
background: /images/fragile.jpg
class: bg-slide
---

## Without Tests?

## Refactoring is Risky

---

## Characterization Tests

## Golden Master

---
background: /images/babysteps.jpg
class: bg-slide
---

# Baby Steps

## Small, safe changes

---
background: /images/weights.jpg
class: bg-slide
---

# Exercise

## Refactoring Practice

---
background: /images/weights.jpg
class: bg-slide
---

# GO !
