---
title: JavaScript Testing 2022
theme: sky
revealOptions:
  transition: "fade"
  controls: false
  progress: false
  autoPlayMedia: true
  transitionSpeed: slow
---

<!-- .slide: data-background-image="images/cc_title_2.jpg" data-background-color="black" -->

<!-- <img src="images/cc_title.png" style="position: absolute; right: -50px; top: -30px; width: 1980px; max-width: 5000px; max-height: 5000px" class="borderless" /> -->

<h2 style="color: white; font-size: 100px; text-transform: none;">
  JavaScript Testing 2022
</h2>

<p style="position: absolute; top: 435px; right: 280px; color: white; text-transform: none; text-align: right">@MarcoEmrich<br/></p>
<p style="position: absolute; top: 495px; right: 267px; color: white; text-transform: none; text-align: right">AndreasHouben<br/></p>

Notes:

- skill matrix
- tdd? anyone? -> skip tdd intro?

---

<!-- .slide: data-background="images/typing.jpg" -->

## Topics

1.  Basics / TDD
1.  Assertions
1.  Test Doubles

---

<!-- .slide: data-background="images/typing.jpg" -->

What is the most

**time consuming activity**

in programming?

---

- **A** - New features
- **B** - Refactoring
- **C** - Hunt for bugs

---

- **A** - New features
- **B** - Refactoring
- **C**<!-- .element style="color: red" --> - **Hunt for bugs** <!-- .element style="color: red" -->

---

<!-- .slide: data-background="images/bugfixing.png" data-background-size="contain" data-background-color="white "-->

---

<!-- .slide: data-background="images/chest.png" data-background-size="contain"-->

# Secret

# of

# TDD

## Test Driven Development

---

<!-- .slide: data-background="images/apples.png" -->

# Quality Assurance?

---

<!-- .slide: data-background="images/bees.jpg" -->

# Productivity!

---

<!-- .slide: data-background="images/lab.jpg" -->

# Research?

---

> The results […] indicate that [...] the resulting quality was higher than teams that adopted a non-TDD
> approach by an order of at least **two times**

&mdash; _Evaluating the Efficacy of Test-Driven Development_

Microsoft Research (2006)

---

> Test-first [...] did increase productivity probably because tests allow for better task understanding, better task focus, faster learning, and lower rework efforts

&mdash; _On the Effectiveness of Test-first Approach to Programming_

Carnegie Mellon University (2005)

---

# When?

# Who?

---

<h3 style="position: absolute; top: 300px; left: 20px">Invented</h3>

## 1957

<img src="images/von_neumann.gif" width="300px"/>

### John von Neuman

---

<!-- .slide: data-background="images/punch_card.jpg"  -->

---

<h3 style="position: absolute; top: 250px; left: 670px">Rediscovered</h3>

## 1989

<img src="images/kent_beck.png" width="300px"/>

### Kent Beck

---

# 30 Years of TDD

Note: Dieses Jahr feiern wir also 30 Jahre TDD

---

# ...or 60 ?

---

# First JS TDD-Framework?

---

# 2001 JS Unit

<img src="images/jsunit.png" style="height: 400px" />

---

<!-- .slide: data-background="images/yuno.jpg" data-background-size="contain" -->

---

<!-- .slide: data-background="images/hard1.jpg" -->

---

<!-- .slide: data-background="images/hard2.jpg" -->

---

<!-- .slide: data-background="images/hard3.jpg" -->

---

<!-- .slide: data-background="images/hard4.jpg"  -->

---

<!-- .slide: data-background="images/learn_tdd.png" data-background-size="contain" data-background-color="white"-->

---

<!-- .slide: data-background="images/fail.jpg"  -->

---

<!-- .slide: data-background="images/fail.jpg"  -->

# Slow

# Hard to Maintain

---

<!-- MEME: Y -->

# But Why?

---

> TDD is not about Testing

&mdash; everywhere on the Internet

---

<!-- .slide: data-background="images/design.jpg" -->

# TDD === Design

---

<!-- .slide: data-background="images/docs.jpg" -->

# Tests === Specs

---

<!-- .slide: data-background="images/docs.jpg" -->

# Living Documentation

---

# Example

## Leap Year

```javascript
isLeapYear(2000); // => true
```

---

### a bad Test

```javascript
test("testIsLeapYearIsCorrect", () => {
      expect(isLeapYear(2016)).toBeTruthy()
      expect(isLeapYear(2000)).toBeTruthy()
      expect(isLeapYear(3)).toBeFalsy();
      expect(isLeapYear(100)).toBeFalsy();
      ...
}
```

<br/>
<small>from [Structure and Interpretation of Test Cases](https://vimeo.com/289852238) by Kevlin Henney</small>
----
### a Spec Document
<ul class="small">
<li>A year is a leap year if it is divisible by 4 but not by 100</li>
<li>A year is a leap year if it is divisible by 400</li>
<li>A year is NOT a leap year if it is not divisible by 4</li>
<li>A year is NOT a leap year if it is divisible by 100 but not by 400</li>
</ul>
<br/><br/><br/>
<small>from [Structure and Interpretation of Test Cases](https://vimeo.com/289852238) by Kevlin Henney</small>
----

```javascript
test("A year is a leap year if it is divisible by 4 but not by 100", {
  ...
});

test("A year is a leap year if it is divisible by 400", {
  ...
});

test("A year is NOT a leap year if it is not divisible by 4", {
  ...
});

test("A year is NOT a leap year if it is divisible by 100 but not by 400", {
  ...
});

```

---

```javascript
describe("A year is a leap year if", () => {
  it("is divisible by 4 but not by 100", () => {
    expect(isLeapYear(2016)).toBeTruthy();
  });
  it("is divisible by 400", () => {
    expect(isLeapYear(2000)).toBeTruthy();
  });
});
describe("A year is *NOT* a leap year if", () => {
  it("is not divisible by 4", () => {
    expect(isLeapYear(3)).toBeFalsy();
  });
  it("is divisible by 100 but not by 400", () => {
    expect(isLeapYear(100)).toBeFalsy();
  });
});
```

---

# Flatten the TDD learning Curve?

---

<!-- .slide: data-background="images/dan.jpg" -->

<span style="font-size: 80px; position: absolute; top: 250px; left: 700px;">Dan North</span>

---

<!-- .slide: data-background="images/dan.jpg" -->

# BDD

## **B**ehaviour **D**riven **D**evelopment

2006 https://dannorth.net/introducing-bdd

---

# Vocabulary

Specs describing behavior

---

# Questions

- Where to start?
- What should I (not) test?
- How to name the test?
- How can tests help me to locate bugs?

---

Ideas from

# BDD

---

<img src="images/jb.jpg" width="200">

> BDD is TDD done right

## &mdash; J.B. Rainsberger

# BDD-style TDD

## TDD Done Right <!-- .element: class="fragment"  -->

---

> modern JavaScript-Unit-Test-Frameworks
> are BDD-Frameworks

---

<img src="images/history_of_js_testing.svg" class="borderless" style="position: relative; top: -140px; height: 900px; transform: rotate(90deg);">

---

<img src="images/history_of_js_testing.svg" class="borderless" style="position: relative; top: -60px; height: 710px">

Notes:

ich müsste eigentlich hier oben noch JEST 2017 einfügen - das Jahr seit man es sinnvoll benutzen kann

---

<!-- .slide: data-background="images/stateofjs2022.png" -->

## State of JS - Usage <!-- .element: style="position: relative; left: -270px; top: 350px"  -->

---

## JS Unit-Testing 2022

- Jest!
- Mocha for Special Cases
- Lookout for Vitest
- ~~Jasmine, Ava, Tape, ...~~

---

<!-- .slide: data-background="images/batteries.jpg" -->

## Mocha vs Jest

### Lightweight vs Batteries-included <!-- .element: class="fragment"  -->

---

![](images/jest.png)

# Jest

---

# watch mode

```
jest --watchAll

```

---

## String Calculator

## Kata

<img src="images/roy.png" width="200">

Roy Osherove

---

## String Calculator

## Kata

# "1,2,3" => 6

---

<!-- .slide: data-background="images/demo.jpg" -->

## String Calculator

# => Demo

Notes:

- Install Jest
- "test": "jest --watchAll"
- String Calc Kata: 3 First Steps
- Show Jest Docs

---

<!-- .slide: data-background="images/ampel.png" data-background-size="contain" data-background-color="white" -->

---

# <span style="color: red;">A</span>rrange

# <span style="color: red;">A</span>ct

# <span style="color: red;">A</span>ssert

---

# <span style="color: red;">S</span>etup

# <span style="color: red;">E</span>xecute

# <span style="color: red;">E</span>xpect

---

# <span style="color: red;">G</span>iven

# <span style="color: red;">W</span>hen

# <span style="color: red;">T</span>hen

---

<!-- .slide: data-background="images/docs.jpg" -->

# Living Documentation

---

<!-- .slide: data-background="images/universe.jpg" -->

# Explore the Spaces

Notes:

Wenn ein Test fehlschlägt, möchte

## Todo: Space-Bild, bessere Beispiele, Gegenbeispiele zeigen (siehe Kevlins Talk)

```JavaScript
"AYearIsALeapYearIfItIsDivisibleBy4ButNotBy100"

"A year is a leap year if it is divisible by 4 but not by 100"
```

---

<!-- .slide: data-background="images/focus.jpg" -->

# Focus

Notes:

Damit ich den Fehler verstehe, darf der Test nur eine Sache tun, Fokus auf SUT

---

<!-- .slide: data-background="images/mouse.jpg" -->

# SUT

### Subject under Test

---

<!-- .slide: data-background="images/isolation.jpg" -->

# Isolation

Notes:

Jest garantiert keine Reihenfolge, Tests dürfen sich nicht beeinflussen
=> Flaky Tests

---

<!-- .slide: data-background="images/babysteps.jpg" -->

# Baby Steps

---

# Q & A

---

<!-- .slide: data-background="images/weights.jpg" -->

# Exercise

## String Calculator

---

<!-- .slide: data-background="images/katas.jpg" -->

# Katas & Code Retreats

- https://kata-log.rocks/
- https://www.coderetreat.org/?seed=497
- https://www.softwerkskammer.org/

---

<!-- .slide: data-background="images/demo.jpg" -->

## Parameterized Tests

# => Demo

---

<!-- .slide: data-background="images/tobe.jpg" -->

# to Be

# or<!-- .element: class="fragment"  -->

# to Equal<!-- .element: class="fragment"  -->

# ?

---

<!-- .slide: data-background="images/tobe.jpg" -->

## Assertions / Expectations

---

## to be or to equal

```javascript
const person1 = {
  name: "Schmidt",
  vorname: ["Stefanie", "Adelheit"],
};
const person2 = {
  name: "Schmidt",
  vorname: ["Stefanie", "Adelheit"],
};

expect(person1).toEqual(person2); // => true
expect(person1).toBe(person2); // => false
```

---

<!-- .slide: data-background="images/demo.jpg" -->

## Assertions

# => Demo

---

<!-- .slide: data-background="images/fire.jpg" -->

# Test Doubles

---

<!-- .slide: data-background="images/fire_dim.jpg" -->

## Test Doubles

- Dummies <span class="fragment">&rarr; Jest:</span><span class="fragment"> SPY, nativ: z.B: {}</span>
- Fakes <span class="fragment">&rarr; Jest:</span><span class="fragment"> SPY, nativ: möglich</span>
- Stubs <span class="fragment">&rarr; Jest:</span><span class="fragment"> SPY, nativ: möglich</span>
- Mocks <span class="fragment">&rarr; Jest:</span><span class="fragment"> SPY, nativ: -</span>
- Spies <span class="fragment">&rarr; Jest:</span><span class="fragment"> SPY, nativ: -</span>

---

<!-- .slide: data-background="images/spy.png" -->

## Jest

### Everyone is a

# Spy

---

<!-- .slide: data-background="images/spy_dim.png" -->

# Jest

- `jest.fn`
- `jest.spyOn`
- `mockReturnValue`
- `mockImplementation`

---

<!-- .slide: data-background="images/demo.jpg" -->

## Mocks, Stubs & Spies

# => Demo

---

<!-- .slide: data-background="images/london.jpg" -->

# ... London School of TDD

---

<!-- .slide: data-background="images/ui_testing.jpg" -->

# UI Testing

- UI-Unit Testing
- End-to-End Testing

---

<!-- .slide: data-background="images/fight.jpg" -->

# UI-Unit Testing

## JSDOM

## vs

## Browser DOM

---

<!-- .slide: data-background="images/fight_dim.jpg" -->

## UI-Unit Testing Tools

- Testing-Library.com (JS DOM)
- ~~Enzyme (JS DOM)~~
- Cypress Unit-Tests (Browser)
- Karma (Browser / JS DOM) - special cases

---

<!-- .slide: data-background="images/end.jpg" -->

# End to End

<br /><br /><br /><br /><br /><br />

---

<!-- .slide: data-background="images/end_dim.jpg" -->

## E2E-Testing Tools

- Puppeteer
- Cypress
- Test-Caffee
- Selenium -> Hell NO!!!

---

<!-- .slide: data-background="images/end_dim.jpg" -->

# End to End

- Hard to Maintain
- Smoke-Tests <!-- .element: class="fragment"  -->
- 2nd Line Of Test Defence <!-- .element: class="fragment"  -->
- NO MORE Selenium <!-- .element: class="fragment"  -->

---

# Test-Pyramid

<img src="images/pyramid.png"/>

by Martin Fowler
https://martinfowler.com/bliki/TestPyramid.html

---

<!-- .slide: data-background="images/architecture.jpg" -->

# Architecture

---

<!-- .slide: data-background="images/architecture_dim.jpg" -->

# Architecture Patterns

- Hexagonal Architecture
- Onion Architecture
- Univeral Architecture

---

<!-- .slide: data-background="images/demo.jpg" -->

# => DEMO

---

<!-- .slide: data-background="images/weights.jpg" -->

# Exercise

## Cypress: todo MVC

<span style="background-color: white;">https://github.com/marcoemrich/todomvc-cypress-exercise</span>

---

## Image Credits

<ul class="very-small">
  <li>Typewritter by rawpixel on pixabay, Licence CC0</li>
  <li>Dan North http://dannorth.net/bio/</li>
  <li>Space Image by Gerd Altmann from Pixabay, Licence CC0</li>
  <li>Animal Mouse by Tiburi on Pixabay, CC0</li>
  <li>Punchcard WikiImages on Pixabay, CC0</li>
  <li>London Photo by Luca Micheli on Unsplash, CC0</li>
  <li>Fire Motorcycle Stunt by digihanger on Pixabay, CC0</li>
  <li>Fitness Training by Ichigo121212 from Pixabay, CC0</li>
  <li>Home Office Workstation by Free-Photos on Pixabay, CC0</li>
  <li>Woman Typing by Christina @ wocintechchat.com on Unsplash CC0</li>
  <li>Persson designing by Alvaro Reyes on Unsplash, CC0</li>
  <li>Pairprogramming by Atlassian</li>
  <li>Mob Programming by Sispirate on Wikipedia Commons CC BY-SA 4.0</li>
  <li>Drunken Kermit by Alexas Fotos on Pixabay, CC0</li>
  <li>Skyline Skyscraper by PIRO4D on Pixabay, CC0</li>
  <li>Detroit Photo by Sawyer Bengtson on Unsplash, CC0</li>
  <li>London Photo by Luca Micheli on Unsplash, CC0</li>
  <li>Ship by Lespinas Xavier on Unsplash</li>
  <li>Apples by Raquel Martínez on Unsplash</li>
  <li>Bees Kai Wenzel on Unsplash</li>
  <li>Boxing by Hermes Rivera on Unsplash</li>
  <li>The End by Gerd Altmann by Pixabay </li>
  <li>Architecture by Lance Anderson on Unsplash </li>
</ul>

---

## Image Credits 2

<ul class="very-small">
  <li>http://www.flickr.com/photos/janodecesare/9069301176/sizes/k/ CC BY-NC-ND 2.0</li>
  <li>http://www.flickr.com/photos/mike_nelson/4723888594/sizes/o/in/photostream/ CC BY 2.0</li>
  <li>http://www.flickr.com/photos/kaptainkobold/3800229848/sizes/o/in/photostream/ CC BY-NC-ND 2.0</li>
  <li>http://www.flickr.com/photos/a_ninjamonkey/3565672226/sizes/o/in/photostream/ CC BY-NC-SA 2.0</li>
  <li>http://www.flickr.com/photos/gisellenw/7683661450/sizes/l/in/photostream/ CC BY 2.0</li>
  <li>http://www.flickr.com/photos/rogersg/3814863064/sizes/l/in/photostream/ CC BY-SA 2.0</li>
  <li>https://www.flickr.com/photos/loufi/3500076/ CC BY 2.0</li>
  <li>http://www.flickr.com/photos/seandreilinger/133305683/sizes/o/in/photostream/ CC BY-NC-SA 2.0</li>
</ul>

---

## Other Links and Refs

<ul class="small">
  <li>TDD Origin: https://arialdomartini.wordpress.com/2012/07/20/you-wont-believe-how-old-tdd-is</li>
  <li>String Calculator by Roy Osherove: http://osherove.com/tdd-kata-1/</li>
  <li>Studies of TDD: http://biblio.gdinwiddie.com/biblio/StudiesOfTestDrivenDevelopment</li>
  <li>State of JS: https://2018.stateofjs.com/testing/overview/</li>
  <li>TJ. Holowaychuck: https://medium.com/@kelas/how-is-tj-holowaychuk-so-insanely-productive-604818b4e9eb</li>
</ul>
