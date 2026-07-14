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

# 3. Angular Core Architecture

Before learning Angular CLI, project structure, routing, or forms, it is important to understand the core building blocks of Angular.

Every Angular application is built using these fundamental concepts.

In this section, we will cover:

- Modules
- Components
- Decorators
- NgModule

These concepts form the foundation of every Angular application.

---

# Modules

## Definition

A **Module** is a logical container that groups or organizes related Angular building blocks together.

Instead of placing every component, directive, pipe and service inside one place, Angular groups related functionality into modules.

This makes the application easier to organize, maintain and scale.

---

## Example

Authentication Module

```
Authentication Module
│
├── Login Component
├── Register Component
└── Forgot Password Component
```

Instead of creating unrelated components together, Angular groups components based on their functionality.

---

## Why do we need Modules?

Modules help to:

- Organize related functionality
- Improve maintainability
- Improve scalability
- Keep the project structure clean
- Separate different features of the application

---

> 💡 **Remember**
>
> Think of a Module as a **folder that groups similar Angular building blocks together.**

---

> 🎯 **Interview Question**
>
> **What is a Module in Angular?**

**Answer**

A Module is a logical container that groups related Angular building blocks together. It helps organize the application into different features, making it easier to develop, maintain and scale.

---

# Components

## Definition

A **Component** is the reusable UI unit of an Angular application.

Every screen that the user sees is built using one or more components.

A component contains four parts:

- HTML Template (Structure)
- CSS Stylesheet (Appearance)
- TypeScript Class (Business Logic)
- `@Component` Decorator (Metadata)

---

## Component Structure

```
Component
│
├── HTML
│     Defines the UI
│
├── CSS
│     Defines the appearance
│
├── TypeScript
│     Contains business logic
│
└── @Component
      Connects everything together
```

---

## HTML

Defines the structure of the UI.

Example:

```html
<h1>Welcome</h1>
```

---

## CSS

Defines how the UI looks.

Example:

```css
h1{
    color: blue;
}
```

---

## TypeScript

Contains the business logic.

Example:

```ts
title = "Angular";
```

---

## @Component

Provides metadata that tells Angular how the component should behave.

Example

```ts
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
```

---

## Single Responsibility Principle (SRP)

Each component should have **only one responsibility**.

Example

Instead of one component handling:

- Login
- Registration
- Dashboard
- Profile

Create separate components:

```
Login Component

Register Component

Dashboard Component

Profile Component
```

Each component should do only one job.

This principle is called the **Single Responsibility Principle (SRP).**

---

## Why Components?

Components provide:

- Reusability
- Better Code Organization
- Easier Maintenance
- Scalability
- Separation of Concerns

---

> 💡 **Remember**
>
> Everything you see on an Angular page is made up of Components.

---

> 🎯 **Interview Question**

**What is a Component?**

**Answer**

A Component is the reusable UI unit of an Angular application. It contains an HTML template, CSS stylesheet, TypeScript class and an `@Component` decorator which provides metadata connecting all these parts together.

---

# Decorators

## Definition

Decorators provide **metadata**.

Metadata simply means:

> **Data about the data.**

Angular uses decorators to understand what a particular class represents.

Without decorators, Angular treats a class as a normal TypeScript class.

Decorators tell Angular whether the class is:

- Component
- Module
- Service
- Directive
- Pipe

---

## Common Angular Decorators

| Decorator | Purpose |
|------------|----------|
| `@Component` | Represents a Component |
| `@NgModule` | Represents a Module |
| `@Injectable` | Represents a Service |
| `@Directive` | Represents a Directive |
| `@Pipe` | Represents a Pipe |
| `@Input` | Receives data from Parent |
| `@Output` | Sends data to Parent |

---

## Example

```ts
@Component({
    selector: 'app-home'
})
```

Here,

`@Component` tells Angular:

> "This class is a Component."

Without it, Angular will not recognize the class as a component.

---

> 💡 **Remember**
>
> Decorators don't contain business logic.
>
> They only provide information (metadata) to Angular.

---

> 🎯 **Interview Question**

**What is a Decorator?**

**Answer**

A Decorator is a special function that provides metadata to Angular. It tells Angular what a class represents and how Angular should process it.

---

# NgModule

## Definition

`@NgModule` is the decorator that provides metadata about an Angular Module.

It registers information such as:

- Components
- Directives
- Pipes
- Imports
- Providers
- Bootstrap Component

When the application starts, Angular uses this metadata to understand the application's structure.

---

## What does NgModule contain?

```
@NgModule({

    declarations: [],

    imports: [],

    providers: [],

    bootstrap: []

})
```

---

### declarations

Registers:

- Components
- Directives
- Pipes

Example

```ts
declarations: [
    AppComponent,
    HomeComponent
]
```

---

### imports

Imports other Angular Modules.

Example

```ts
imports: [
    BrowserModule,
    FormsModule
]
```

---

### providers

Registers Services.

Example

```ts
providers: [
    ProductService
]
```

---

### bootstrap

Specifies the first component that Angular should load when the application starts.

Example

```ts
bootstrap: [
    AppComponent
]
```

---

## Workflow

```
Application Starts
        │
        ▼
Angular Reads @NgModule
        │
        ▼
Finds Components
        │
        ▼
Finds Imports
        │
        ▼
Finds Services
        │
        ▼
Loads Bootstrap Component
        │
        ▼
Application Starts Successfully
```

---

> 💡 **Remember**
>
> `@NgModule` is **not** the module itself.
>
> It is the **decorator** that provides metadata about the module.

---

> ⚠️ Common Confusion

Many beginners say:

> "NgModule is the Module."

Correct understanding:

- Module → The TypeScript class
- `@NgModule` → The decorator that provides metadata about that class

---

> 🎯 **Interview Question**

**What is `@NgModule`?**

**Answer**

`@NgModule` is the Angular decorator that provides metadata about a module. It tells Angular which components, directives, pipes, services, imports and bootstrap component belong to that module.

---

# Quick Revision

✔ What is a Module?

✔ Why do we use Modules?

✔ What is a Component?

✔ Four parts of a Component

✔ What is Single Responsibility Principle?

✔ What is a Decorator?

✔ Why do we need Decorators?

✔ What is `@NgModule`?

✔ Difference between a Module and `@NgModule`

---

➡️ **Continued in Volume 2A.2**
- Bootstrapping
- Node.js
- Why Angular Needs Node.js
- Dependency Tree

# Bootstrapping

## Definition

**Bootstrapping** is the process of starting or initializing an Angular application.

When Angular starts, it creates the **Root Component** and begins rendering the User Interface (UI).

Simply put,

> Bootstrapping is the process where Angular loads the application for the first time.

---

## Why is Bootstrapping Needed?

Every application needs an entry point.

Just like every Java program starts with:

```java
public static void main(String[] args)
```

Every Angular application also needs a starting point.

Angular uses **Bootstrapping** to identify where the application should begin.

---

## Angular Bootstrapping Flow

```
Application Starts
        │
        ▼
main.ts
        │
        ▼
platformBrowserDynamic()
        │
        ▼
bootstrapModule(AppModule)
        │
        ▼
AppModule
        │
        ▼
AppComponent
        │
        ▼
index.html
        │
        ▼
Browser Displays UI
```

---

## What Happens During Bootstrapping?

Angular performs the following steps:

1. Reads **main.ts**
2. Creates the Angular Platform
3. Loads **AppModule**
4. Reads **@NgModule**
5. Finds the Bootstrap Component
6. Creates the Root Component
7. Renders the User Interface

---

> 💡 **Remember**
>
> Bootstrapping does **not** mean compiling the application.
>
> Bootstrapping simply means **starting** the Angular application.

---

> 🎯 **Interview Question**
>
> **What is Bootstrapping in Angular?**

**Answer**

Bootstrapping is the process of starting or initializing an Angular application. During this process, Angular creates the root component and begins rendering the application's user interface.

---

# Node.js

## Definition

**Node.js** is a JavaScript Runtime Environment.

It allows JavaScript code to run **outside the browser**.

Normally,

JavaScript executes inside browsers like:

- Chrome
- Edge
- Firefox

Node.js allows JavaScript to execute on the operating system itself.

---

## Why was Node.js Created?

Originally,

JavaScript could only run inside browsers.

Developers wanted JavaScript to also:

- Build Servers
- Execute Scripts
- Build Applications
- Run Development Tools

Node.js solved this problem.

---

## What can Node.js do?

Node.js can:

- Run JavaScript outside the browser
- Install packages using npm
- Execute build tools
- Run development servers
- Execute Angular CLI commands

---

## Simple Workflow

```
JavaScript

        │

Browser Only ❌

        │

Node.js Introduced

        │

JavaScript Can Run

✔ Browser

✔ Operating System
```

---

> 💡 **Remember**
>
> Node.js is **not a programming language.**
>
> It is **not a framework.**
>
> It is a **JavaScript Runtime Environment.**

---

> 🎯 **Interview Question**

**What is Node.js?**

**Answer**

Node.js is a JavaScript Runtime Environment that allows JavaScript to run outside the browser.

---

# Why Angular Needs Node.js

This is one of the most commonly asked Angular interview questions.

Many beginners think:

> Angular runs on Node.js.

This is **incorrect**.

---

## Correct Understanding

Angular applications always run inside the browser.

Node.js is required only for the **development environment**.

Angular uses Node.js because Angular CLI and its development tools are built on Node.js.

---

## Angular Development Flow

```
Developer

      │

Angular CLI

      │

Node.js

      │

Compile Angular

      │

Serve Application

      │

Browser Executes Application
```

---

## What Uses Node.js?

Angular CLI uses Node.js to:

- Create Projects
- Install Packages
- Compile TypeScript
- Start Development Server
- Build Applications

---

## What Runs Inside the Browser?

The browser executes:

- HTML
- CSS
- JavaScript

After Angular compiles TypeScript into JavaScript, the browser executes the generated JavaScript.

---

## Important Understanding

```
Angular Application

Runs Inside Browser ✅

Angular CLI

Runs on Node.js ✅
```

---

> ⚠️ **Common Confusion**

**Question**

Does Angular run on Node.js?

**Answer**

No.

Angular applications run inside the browser.

Only Angular's development tools such as Angular CLI run on Node.js.

---

> 💡 **Memory Trick**

Think of Node.js as the **construction workers**.

Think of the browser as the **house**.

The workers build the house.

People live inside the house.

Similarly,

Node.js builds the Angular application.

The browser runs the Angular application.

---

> 🎯 **Interview Question**

**Why does Angular need Node.js?**

**Answer**

Angular applications run inside the browser, but Angular CLI and development tools run on Node.js. Angular uses Node.js as the development environment to compile, build and serve Angular applications.

---

# Dependency Tree

## Definition

A **Dependency Tree** is the series of dependencies linked to one another.

When one package depends on another package, and that package depends on another package, Angular creates a dependency hierarchy.

This hierarchy is called the **Dependency Tree**.

---

## Example

Suppose your project requires:

```
Angular
```

Angular itself requires:

```
TypeScript

RxJS

Zone.js
```

TypeScript may require other packages.

RxJS may require other packages.

Those packages may require even more packages.

Together, they form a Dependency Tree.

---

## Visualization

```
Angular Project

        │

        ▼

@angular/core

        │

 ┌──────┼─────────┐

 │      │         │

 ▼      ▼         ▼

RxJS  Zone.js  TypeScript

 │

 ▼

Other Packages

 │

 ▼

More Packages
```

---

## Why is the Dependency Tree Important?

It helps Angular:

- Manage package relationships
- Install required libraries
- Maintain version compatibility
- Prevent missing dependencies

---

> 💡 **Remember**

The larger the project,

the larger the Dependency Tree.

That is why the **node_modules** folder becomes very large.

---

> 🎯 **Interview Question**

**What is a Dependency Tree?**

**Answer**

A Dependency Tree is the hierarchy of packages where one dependency depends on another dependency. Angular uses this hierarchy to manage package installation and relationships.

---

# Quick Revision

## Core Architecture

✔ What is Bootstrapping?

✔ Why is Bootstrapping needed?

✔ Angular Bootstrapping Flow

---

## Node.js

✔ What is Node.js?

✔ Why was Node.js created?

✔ What can Node.js do?

✔ Why does Angular need Node.js?

✔ Does Angular run on Node.js?

---

## Dependency Tree

✔ What is a Dependency Tree?

✔ Why is it important?

✔ Why is the `node_modules` folder so large?

---

# Chapter Summary

In this chapter, we learned the remaining foundational concepts required before understanding Angular's project structure and execution.

We covered:

- Bootstrapping
- Node.js
- Why Angular Needs Node.js
- Dependency Tree

These concepts explain **how Angular starts**, **where Angular runs**, and **how Angular manages its dependencies**.

---

➡️ **Next Chapter:** **Volume 2B – Angular CLI & Compilation Process**

Topics Covered:

- Angular CLI
- Angular CLI Commands
- Compilation Process
- `ng new`
- `ng serve`
- How Angular Compiles an Application

# 4. Angular CLI (Command Line Interface)

Before understanding the Angular project structure, it is important to understand **Angular CLI**, because almost every Angular project begins with it.

Angular CLI is responsible for creating, serving, building and maintaining Angular applications.

---

# What is Angular CLI?

## Definition

**Angular CLI** stands for **Angular Command Line Interface**.

Instead of clicking buttons, we communicate with Angular through commands.

Angular CLI is the official command-line tool provided by the Angular Team.

It automates the creation, development, testing, building and maintenance of Angular applications through commands.

---

## Why do we need Angular CLI?

Without Angular CLI, developers would have to:

- Create hundreds of folders manually.
- Configure TypeScript.
- Configure Webpack.
- Configure Angular Compiler.
- Configure Project Structure.
- Configure Build Process.

Angular CLI does all these tasks automatically.

---

## Responsibilities of Angular CLI

Angular CLI helps us to:

- Create Angular Projects
- Generate Components
- Generate Services
- Generate Directives
- Generate Pipes
- Compile Angular Applications
- Build Applications
- Run Development Server
- Execute Tests

---

> 💡 **Remember**
>
> Angular CLI **does not execute the application inside the browser.**
>
> It prepares and serves the application during development.

---

## Angular CLI Workflow

```
Developer

    │

Runs Command

    │

Angular CLI

    │

Creates / Builds / Compiles Project

    │

Development Server Starts

    │

Browser Opens Application
```

---

> 🎯 **Interview Question**

**What is Angular CLI?**

**Answer**

Angular CLI is the official Command Line Interface provided by the Angular Team. It automates the creation, development, testing, building and maintenance of Angular applications using commands.

---

# Creating an Angular Project

The command used to create a new Angular project is:

```bash
ng new project-name
```

---

## Understanding the Command

```bash
ng new my-app
```

### ng

Represents Angular CLI.

---

### new

Creates a new Angular project.

---

### my-app

Represents the project name.

---

## What happens after running `ng new`?

```
Developer

      │

ng new project-name

      │

Angular CLI Starts

      │

Creates Project Blueprint

      │

Downloads Required Packages

      │

Creates Folder Structure

      │

Angular Project Ready
```

---

> 💡 **Remember**

Angular CLI automatically creates the complete project structure.

We don't have to create folders manually.

---

# Common Angular CLI Commands

| Command | Purpose |
|----------|----------|
| `ng new` | Create New Project |
| `ng serve` | Start Development Server |
| `ng generate component` | Create Component |
| `ng generate service` | Create Service |
| `ng generate directive` | Create Directive |
| `ng generate pipe` | Create Pipe |
| `ng build` | Build Application |
| `ng test` | Run Unit Tests |

---

## Frequently Used Shortcuts

Instead of writing:

```bash
ng generate component home
```

We usually write:

```bash
ng g c home
```

---

Similarly,

```bash
ng g s product
```

creates a Service.

```bash
ng g d highlight
```

creates a Directive.

```bash
ng g p currency
```

creates a Pipe.

---

> ⚠️ **Interview Trap**

**Question**

Does Angular CLI create components manually?

**Answer**

No.

Angular CLI automatically creates:

- HTML
- CSS
- TypeScript
- Spec File

along with updating the required Angular configuration files.

---

# Angular Compilation Process

One of the most important interview topics.

Many developers know how to run Angular.

Very few know **what actually happens after typing `ng serve`.**

---

## Compilation Flow

```
ng serve

      │

Angular CLI Starts

      │

Reads package.json

      │

Reads angular.json

      │

Reads tsconfig.json

      │

Reads main.ts

      │

Angular Compiler Starts

      │

Reads all TypeScript Files

      │

Understands Components

      │

Processes Angular Templates

      │

Compiles TypeScript → JavaScript

      │

Bundles HTML + CSS + JavaScript

      │

Creates Optimized Files

      │

Starts Development Server

      │

Browser Downloads

HTML

CSS

JavaScript

      │

Browser Executes JavaScript

      │

Angular Application Appears
```

---

## Step-by-Step Explanation

### Step 1

```
ng serve
```

Starts Angular CLI.

---

### Step 2

Angular CLI reads:

```
package.json
```

to identify installed Angular packages.

---

### Step 3

Angular CLI reads:

```
angular.json
```

to understand how the application should be built and served.

---

### Step 4

Angular CLI reads:

```
tsconfig.json
```

to understand how TypeScript should be compiled.

---

### Step 5

Angular CLI loads:

```
main.ts
```

which is the entry point of the application.

---

### Step 6

Angular Compiler begins compilation.

It:

- Reads TypeScript files.
- Understands Components.
- Processes Templates.
- Checks Decorators.
- Resolves Imports.

---

### Step 7

TypeScript is converted into JavaScript.

---

### Step 8

Angular bundles:

- HTML
- CSS
- JavaScript

into optimized files.

---

### Step 9

Development Server starts.

---

### Step 10

The browser downloads:

- HTML
- CSS
- JavaScript

---

### Step 11

The browser executes JavaScript.

Finally,

The Angular application appears.

---

> 💡 **Memory Trick**

Think of Angular CLI as a factory.

```
Raw Materials

(TypeScript)

↓

Compiler

↓

JavaScript

↓

Browser

↓

Application
```

---

> 🎯 **Interview Question**

**Explain the Angular Compilation Process.**

**Answer**

When we execute `ng serve`, Angular CLI starts and reads `package.json`, `angular.json`, `tsconfig.json` and `main.ts`. The Angular Compiler then processes all TypeScript files, understands components, compiles TypeScript into JavaScript, bundles HTML, CSS and JavaScript, starts the development server and finally the browser executes the generated JavaScript to display the Angular application.

---

# Quick Revision

✔ What is Angular CLI?

✔ Why do we need Angular CLI?

✔ Responsibilities of Angular CLI

✔ `ng new`

✔ `ng serve`

✔ Common Angular CLI Commands

✔ Angular Compilation Process

✔ Complete `ng serve` Execution Flow

---

# Chapter Summary

In this chapter, we learned:

- What Angular CLI is.
- Why Angular CLI is required.
- How Angular projects are created.
- Common Angular CLI commands.
- The complete Angular compilation process.
- What actually happens internally when `ng serve` is executed.

These concepts form the bridge between Angular architecture and the project structure that we will study next.

---

➡️ **Next Chapter:** **Volume 2C – Angular Project Structure**

Topics Covered:

- package.json
- node_modules
- package-lock.json
- angular.json
- tsconfig.json
- tsconfig.app.json
- tsconfig.spec.json