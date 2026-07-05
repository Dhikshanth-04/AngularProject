# Angular Learning Notes

---

# Why was Angular Created?

* Angular was created to manage **large and dynamic web applications**.
* It introduced a **structured, component-based framework** with features such as:

  * Dependency Injection
  * Routing
  * Reusable Components
  * Testing Support

These features make applications easier to **develop, maintain, and scale**.

---

# Difference Between AngularJS and Angular

## AngularJS (Angular 1.x)

* The original framework based on **JavaScript**.
* Mainly relied on **Controllers** and **Digest Cycle** for change detection.

## Angular (Angular 2+)

* Built using **TypeScript**.
* Introduced **Component-Based Architecture**.
* Better performance.
* Improved tooling.
* Designed for large and scalable applications.

---

# Semantic Versioning

Semantic Versioning is the standard process of naming software versions with meaningful numbering.

Format:

```
Major.Minor.Patch
```

Example:

```
1.0.0
```

* **Major** → Breaking changes or completely redesigned version.
* **Minor** → New features added without breaking existing functionality.
* **Patch** → Bug fixes and small improvements.

Examples:

```
1.0.0 → Initial Release
1.1.0 → New Feature Added
1.1.1 → Bug Fix
2.0.0 → Major Changes / Redesign
```

---

# Evolution of Angular

## Angular 2

Features:

* Component-Based Architecture.
* Applications are divided into smaller reusable components instead of large code blocks.
* Switched to **TypeScript** because of:

  * Type Safety
  * Better Tooling
  * Easier Large-Team Development
* More efficient Change Detection than AngularJS.
* Designed for modern web and mobile applications.

---

## Angular 3

Angular 3 was intentionally skipped.

Reason:

Some Angular packages (such as the Router) had already reached version 3, so the Angular team synchronized all package versions by moving directly to Angular 4.

---

## Angular 4

* Better Performance
* Improved Animations
* Smaller Bundle Size
* Faster Rendering

---

## Angular 5

Focused on developer experience.

Features:

* Faster Builds
* Easier Deployment
* Better Compiler Support

---

## Angular 6

* Angular CLI became more powerful.
* Easier component generation using CLI commands.
* Introduced Angular Package Format, making libraries easier to share.

---

## Angular 7

Features:

* Performance Improvements
* Virtual Scrolling
* Drag and Drop support using the Component Dev Kit (CDK)

---

## Angular 8

* Improved Lazy Loading.
* Modules/pages are loaded only when the user needs them.

---

## Angular 9

Introduced the **Ivy Compiler** (Angular's modern compiler and rendering engine).

Benefits:

* Faster Compilation
* Smaller Bundle Size
* Better Debugging
* Improved Runtime Performance

---

## Angular 10 – 13

Main focus:

* Speed Improvements
* Stability
* Ivy Optimizations

---

## Angular 14

Introduced **Standalone Components**.

Before Angular 14:

* Every component had to belong to an `@NgModule`.
* Every component had to be registered inside:

```ts
@NgModule({})
```

Benefits:

* Simpler Architecture
* Easier Learning
* Better Code Organization
* Reduced Module Dependency
* Less Boilerplate Code
* Better Developer Experience

---

## Angular 15

* Improved Standalone Components.
* Better performance and developer experience.

---

## Angular 16

Introduced **Signals**.

Before Signals:

Angular mainly relied on its Change Detection mechanism to determine what should be updated.

Signals introduced a new **reactive primitive**, allowing Angular to react more efficiently to state changes.

---

## Angular 17

Introduced the new Control Flow syntax.

Templates became cleaner and looked more like traditional programming constructs.

Example:

```
@if
@for
@switch
```

instead of

```
*ngIf
*ngFor
```

---

## Angular 18 – Angular 20

Major improvements focused on:

* Server-Side Rendering (SSR)
* Signal Improvements
* Performance Optimizations
* Better Hydration
* Faster Builds

---

# Component

A Component is a small reusable block of code that represents a part of the User Interface (UI).

Examples:

* Navbar
* Search Bar
* Footer
* Login Form
* Product Card

Each component works independently and can be reused wherever required.

---

# Module

A Module is a logical container that groups related Angular building blocks together.

Example:

Authentication Module

* Login Component
* Register Component
* Forgot Password Component

---

# Bootstrapping

Bootstrapping is the process where Angular creates the **Root Component** and starts rendering the application's UI.

---

# Node.js

Node.js is a JavaScript Runtime Environment that allows JavaScript to run outside the browser.

---

# Why Angular Needs Node.js

Angular applications run inside the browser.

However, Angular's development tools (Angular CLI, compiler, package management, build process, etc.) run on Node.js.

Therefore, Node.js acts as the development environment for Angular.

---

# Dependency Tree

A Dependency Tree is the hierarchy of packages where one package depends on another package.

Because of these linked dependencies, installing one package may install many additional packages automatically.

---

# Angular CLI

CLI = Command Line Interface

Instead of interacting with software using buttons, we communicate using commands.

Angular CLI is the official command-line tool provided by the Angular Team.

It automates:

* Creating Projects
* Generating Components
* Running Applications
* Building Projects
* Testing
* Maintenance

> **Note:** Angular CLI does **not** execute the application inside the browser. It prepares, compiles, and serves the application during development.

---

# Angular CLI Commands

## Create a New Project

```bash
ng new project-name
```

Meaning:

* `ng` → Angular CLI
* `new` → Create a new Angular project
* `project-name` → Name of the project

Workflow:

```
Command
      ↓
Angular CLI Starts
      ↓
Creates Project Blueprint
      ↓
Installs Dependencies
      ↓
Project Ready
```

---

# Project Architecture

## 1. package.json

The configuration file that contains project information, dependencies, scripts, versions, and other metadata required to manage the project.

Important Fields:

### name

Project Name.

---

### version

Project Version.

Uses Semantic Versioning.

```
Major.Minor.Patch
```

---

### scripts

Shortcuts for frequently used commands.

Example:

```
npm start
npm run build
npm test
```

---

### private : true

Prevents accidental publishing of the project to npm.

---

### dependencies

Packages required for the application to run.

Examples:

* `@angular/core`
* `@angular/common`
* `@angular/router`
* `rxjs`
* `zone.js`

---

### devDependencies

Development tools required by developers.

Examples:

* TypeScript
* Angular CLI
* Build Tools
* Testing Libraries

---

## Important Angular Packages

### @angular/core

The heart of Angular.

Contains:

* Components
* Decorators
* Dependency Injection
* Change Detection

---

### @angular/common

Contains commonly used directives and utilities.

Examples:

* `*ngIf`
* `*ngFor`

---

### @angular/router

Used for navigation between pages/components.

---

### rxjs

A library for handling asynchronous data and streams of values.

---

### tslib

Contains helper functions generated during TypeScript compilation.

---

### zone.js

Helps Angular know when asynchronous operations have completed, allowing Angular to update the UI automatically.

---

## 2. node_modules

The folder where all installed packages are stored.

It is usually very large because every dependency may have its own dependencies.

---

## 3. package-lock.json

Stores:

* Exact package versions
* Dependency Tree

Purpose:

Ensures every developer installs the exact same versions across different environments.

---

## npm Installation Workflow

```
Developer
      ↓
npm install
      ↓
Reads package.json
      ↓
Reads package-lock.json (if present)
      ↓
Downloads packages from npm Registry
      ↓
Stores packages inside node_modules
      ↓
Application Ready
```

---

# Data Binding

Data Binding is the mechanism by which Angular synchronizes data between the Component and the View.

It allows data to flow:

* Component → View
* View → Component
* Both Directions

Types of Data Binding:

1. One-Way Data Binding
2. Two-Way Data Binding

---

# One-Way Data Binding

There are three methods.

## 1. Interpolation

Direction:

```
Component → View
```

Syntax:

```html
{{ value }}
```

---

## 2. Property Binding

Direction:

```
Component → View
```

Syntax:

```html
[property]="value"
```

---

## 3. Event Binding

Direction:

```
View → Component
```

Syntax:

```html
(event)="method()"
```

---

# Two-Way Data Binding

Method:

```
[(ngModel)]
```

Syntax:

```html
[(ngModel)]="name"
```

Direction:

```
Component ⇄ View
```

Changes made in either the Component or the View are automatically synchronized.

**Requirement:**

To use `ngModel`, import the `FormsModule`.

```ts
import { FormsModule } from '@angular/forms';
```
