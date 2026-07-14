# 🚀 Angular Notes

> A structured handbook built from my learning journey.
>
> These notes are organized based on how I understood Angular while learning it. The explanations preserve my understanding, with improved structure and terminology for easier revision.

---

# 📚 Table of Contents

- [1. Introduction](#1-introduction)
  - [Why Angular was Created](#why-angular-was-created)
  - [AngularJS vs Angular](#angularjs-vs-angular)
  - [Semantic Versioning](#semantic-versioning)
- [2. Evolution of Angular](#2-evolution-of-angular)
  - Angular 2
  - Angular 3
  - Angular 4
  - Angular 5
  - Angular 6
  - Angular 7
  - Angular 8
  - Angular 9
  - Angular 10–13
  - Angular 14
  - Angular 15
  - Angular 16
  - Angular 17
  - Angular 18–20
- [3. Angular Core Architecture](#3-angular-core-architecture)
  - Modules
  - Components
  - Decorators
  - NgModule
  - Bootstrapping
  - Node.js
  - Why Angular Needs Node.js
  - Dependency Tree

---

# 1. Introduction

Angular is a **component-based front-end framework** developed by Google for building dynamic, scalable, and maintainable Single Page Applications (SPAs).

It provides built-in features such as:

- Component-Based Architecture
- Dependency Injection
- Routing
- Forms
- HTTP Client
- Directives
- Pipes
- Testing Support

These features make Angular suitable for developing **large-scale enterprise applications**.

---

# Why Angular was Created

## Definition

Angular was created to manage **large dynamic web projects**.

It introduces a **structured, component-based framework** with features like:

- Dependency Injection
- Routing
- Reusable Components
- Testing Support

making applications easier to develop, maintain and scale.

---

> 💡 **Remember**
>
> Angular was created because managing large applications with plain JavaScript became difficult.
>
> Angular provides structure instead of writing everything manually.

---

> 🎯 **Interview Question**
>
> **Why was Angular created?**

**Answer**

Angular was created to manage large dynamic web applications. It provides a structured component-based architecture along with features such as Dependency Injection, Routing, Reusable Components and Testing Support, making applications easier to develop, maintain and scale.

---

# AngularJS vs Angular

## AngularJS

- Original Angular framework
- Based on JavaScript
- Mostly relied on Controllers
- Used Digest Cycle for Change Detection

---

## Angular

- Component-Based Architecture
- Written using TypeScript
- Better Performance
- Improved Tooling
- Designed for Large and Scalable Applications

---

## Comparison

| AngularJS | Angular |
|-----------|----------|
| JavaScript | TypeScript |
| Controller Based | Component Based |
| Digest Cycle | Improved Change Detection |
| Less Scalable | Highly Scalable |
| Older Framework | Modern Framework |

---

> 💡 **Remember**
>
> Angular is **not AngularJS 2**.
>
> Angular is a complete redesign of AngularJS.

---

> 🎯 **Interview Question**
>
> **What is the difference between AngularJS and Angular?**

**Answer**

AngularJS is the original framework written in JavaScript and based mainly on controllers and digest cycles.

Angular is a completely redesigned framework based on component architecture, written using TypeScript, offering better performance, improved tooling and better scalability.

---

# Semantic Versioning

## Definition

Semantic Versioning is the process of naming software versions with meaningful version numbers.

Format:

```
Major.Minor.Patch
```

Example:

```
1.0.0
```

### Major

Large changes or breaking changes.

Example

```
1.0.0 → 2.0.0
```

---

### Minor

New features are added without breaking existing functionality.

Example

```
1.0.0 → 1.1.0
```

---

### Patch

Bug fixes and small improvements.

Example

```
1.1.0 → 1.1.1
```

---

> 💡 **Remember**
>
> Major → Big Changes
>
> Minor → New Features
>
> Patch → Bug Fixes

---

> 🎯 **Interview Question**
>
> **What is Semantic Versioning?**

**Answer**

Semantic Versioning is the process of naming software versions using the format Major.Minor.Patch, where each number represents the scale of changes made to the application.

---

# 2. Evolution of Angular

Understanding Angular's evolution helps explain why certain modern features exist today.

---

# Angular 2

## Features

- Component-Based Architecture
- Smaller reusable modules instead of large blocks
- TypeScript support
- Better Performance
- More efficient Change Detection than AngularJS
- Built with modern web and mobile applications in mind

---

> 💡 Why TypeScript?
>
> Angular chose TypeScript because it provides:
>
> - Type Safety
> - Better Performance
> - Better support for large team development

---

# Angular 3

Angular 3 was **intentionally skipped**.

Some Angular packages like **Angular Router** had already reached Version 3.

To keep package versions synchronized, Angular skipped Version 3.

---

# Angular 4

Improvements

- Better Performance
- Improved Animations
- Smaller Bundle Size
- Faster Rendering

---

# Angular 5

Developer Focused

- Faster Development
- Easier Deployment
- Better Compiler Support

---

# Angular 6

Major Improvements

- Angular CLI became more powerful.
- Components could be generated easily using CLI commands.
- Angular Package Format made libraries easier to share.

---

# Angular 7

Features

- Performance Improvements
- Virtual Scrolling
- Drag and Drop Support using Component Dev Kit (CDK)

---

# Angular 8

Major Feature

Lazy Loading Improvements

Pages are loaded only when the user needs them.

---

# Angular 9

## IVY Compiler

Angular introduced **IVY**, the modern compiler and rendering engine.

Benefits

- Faster Compilation
- Smaller Bundle Size
- Better Debugging
- Improved Performance
- More Efficient Rendering

---

> 💡 **Remember**
>
> Angular 9 = Introduction of **IVY Compiler**

---

# Angular 10 – Angular 13

Main Focus

- Speed
- Stability
- Improvements to IVY
- Stronger Foundation

---

# Angular 14

## Standalone Components

Before Angular 14:

Every component had to belong to an NgModule.

It also had to be registered inside:

```typescript
@NgModule({})
```

Angular 14 introduced **Standalone Components**.

Benefits

- Simpler Architecture
- Easier Learning
- Better Code Organization
- Reduced Module Dependency
- Less Boilerplate Code
- Improved Developer Experience

---

# Angular 15

Main Improvement

- Better Performance for Standalone Components

---

# Angular 16

## Signals

Angular introduced **Signals**.

Signals mainly focus on tracking changes happening around the application.

Earlier Angular mainly relied on the Change Detection mechanism to determine what needed to be updated.

Signals introduced a new reactive primitive.

---

> 💡 **Remember**
>
> Angular 16 = Signals

---

# Angular 17

Main Improvement

Templates became much cleaner and look more like normal programming syntax.

---

# Angular 18 – Angular 20

Main Improvements

- Server-side Improvements
- Signal Improvements
- Performance Improvements

---

> 🎯 **Interview Question**
>
> **Which Angular version introduced Signals?**

**Answer**

Angular 16 introduced Signals as a new reactive primitive for managing application state and detecting changes more efficiently.

---

# Quick Revision

✔ Why was Angular created?

✔ Difference between AngularJS and Angular

✔ Semantic Versioning

✔ Angular 2 Features

✔ Why Angular 3 was skipped

✔ Angular 9 → IVY Compiler

✔ Angular 14 → Standalone Components

✔ Angular 16 → Signals

✔ Angular 17 → Cleaner Templates

✔ Angular 18–20 Improvements

---

# 3. Angular Core Architecture

Before creating an Angular application, it is important to understand the basic building blocks that make up the framework.

In the next section, we will learn about:

- Modules
- Components
- Decorators
- NgModule
- Bootstrapping
- Node.js
- Why Angular Needs Node.js
- Dependency Tree
