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

# 5. Angular Project Structure

After creating a new Angular project using:

```bash
ng new project-name
```

Angular CLI automatically generates a complete project structure.

Every file and folder has a specific purpose.

Understanding these files is important because Angular reads many of them before starting the application.

---

# Angular Project Structure

```
project-name/

│

├── node_modules/

├── src/

│   ├── app/

│   ├── assets/

│   ├── environments/

│   ├── index.html

│   ├── main.ts

│   ├── styles.css

│

├── package.json

├── package-lock.json

├── angular.json

├── tsconfig.json

├── tsconfig.app.json

├── tsconfig.spec.json

└── README.md
```

---

> 💡 **Remember**
>
> Angular CLI creates all these files automatically.
>
> We don't have to create them manually.

---

# package.json

## Definition

`package.json` is the **heart of every Node.js and Angular project.**

It contains information about the project and tells npm which packages are required.

---

## What does package.json contain?

- Project Name
- Version
- Dependencies
- Development Dependencies
- Scripts
- Project Metadata

Example:

```json
{
  "name": "angular-app",
  "version": "0.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build"
  }
}
```

---

## Why is package.json Important?

Angular CLI reads this file to know:

- Which Angular version is installed
- Which packages should be installed
- Which commands are available
- Which dependencies are required

---

## Workflow

```
package.json

        │

Contains Dependencies

        │

npm install

        │

Downloads Packages

        │

node_modules Created
```

---

> 💡 **Remember**

Without **package.json**, npm doesn't know which packages should be installed.

---

> 🎯 **Interview Question**

### What is package.json?

**Answer**

package.json is the configuration file of a Node.js and Angular project. It stores project information, dependencies, scripts and package versions required for the application.

---

# node_modules

## Definition

`node_modules` is the folder where all installed packages are stored.

Whenever we execute:

```bash
npm install
```

or

```bash
npm i
```

npm downloads every required package into the node_modules folder.

---

## What does node_modules contain?

It contains:

- Angular Packages
- TypeScript
- RxJS
- Zone.js
- npm Packages
- Third-party Libraries

---

## Internal Workflow

```
package.json

      │

npm install

      │

Downloads Packages

      │

Stores Packages

      │

node_modules
```

---

## Why is node_modules Large?

Angular depends on many packages.

Each package depends on other packages.

These dependencies create a **Dependency Tree**.

That is why node_modules becomes very large.

---

> 💡 **Remember**

Never edit files inside node_modules manually.

If node_modules gets deleted, simply run:

```bash
npm install
```

Angular will download everything again.

---

> 🎯 **Interview Question**

### What is node_modules?

**Answer**

node_modules is the folder where npm stores all installed project dependencies required by Angular and other libraries.

---

# package-lock.json

## Definition

package-lock.json stores the **exact versions** of every installed package.

---

## Why do we need package-lock.json?

Suppose package.json contains:

```
Angular 16
```

There may be many compatible versions.

package-lock.json records the exact version installed.

Example:

```
16.2.8
```

Now every developer receives the same version.

---

## Advantages

- Consistent Installation
- Faster Installation
- Same Dependency Versions
- Prevents Unexpected Updates

---

## Workflow

```
package.json

        │

Install Packages

        │

Exact Versions Recorded

        │

package-lock.json
```

---

> 💡 **Remember**

package.json tells **what** packages are required.

package-lock.json tells **which exact version** was installed.

---

## Interview Difference

| package.json | package-lock.json |
|--------------|-------------------|
| Stores package names | Stores exact versions |
| Editable | Auto-generated |
| Required for installation | Ensures consistent installation |

---

> 🎯 **Interview Question**

### Difference between package.json and package-lock.json?

**Answer**

package.json stores project information and dependency names, while package-lock.json stores the exact installed versions of every dependency to ensure consistent installation across different systems.

---

# angular.json

## Definition

angular.json is the **Angular Workspace Configuration File**.

Angular CLI reads this file before building or serving the application.

---

## What does angular.json contain?

- Project Configuration
- Build Configuration
- Assets
- Styles
- Scripts
- Output Path
- Development Server Configuration

---

## Internal Workflow

```
ng serve

      │

Angular CLI

      │

Reads angular.json

      │

Knows

• Entry Point

• Assets

• Styles

• Scripts

• Build Configuration

      │

Starts Build Process
```

---

## Why is angular.json Important?

It tells Angular:

- Which styles to load
- Which assets to copy
- Which scripts to include
- Where to build the project
- How to start the development server

---

> 💡 **Remember**

Angular CLI cannot properly build the project without reading angular.json.

---

> 🎯 **Interview Question**

### What is angular.json?

**Answer**

angular.json is the Angular workspace configuration file. It contains build configurations, project settings, styles, assets and development server configuration used by Angular CLI.

---

# tsconfig.json

## Definition

tsconfig.json is the **TypeScript Configuration File**.

It tells the TypeScript Compiler how TypeScript should be compiled into JavaScript.

---

## It contains

- Compiler Options
- Target Version
- Module Type
- Strict Mode
- File Inclusion Rules

---

## Internal Workflow

```
TypeScript Files

        │

tsconfig.json

        │

Compiler Reads Configuration

        │

Compiles TypeScript

        │

JavaScript Generated
```

---

## Why do we need tsconfig.json?

Without this file,

the TypeScript Compiler doesn't know:

- Which JavaScript version to generate
- Which files should be compiled
- Which compiler rules should be followed

---

> 💡 **Remember**

Angular doesn't read tsconfig.json directly.

The **TypeScript Compiler** reads it.

Angular CLI invokes the TypeScript Compiler, which then uses tsconfig.json.

---

> 🎯 **Interview Question**

### What is tsconfig.json?

**Answer**

tsconfig.json is the TypeScript configuration file. It tells the TypeScript Compiler how TypeScript should be compiled into JavaScript.

---

# tsconfig.app.json

## Definition

tsconfig.app.json contains TypeScript configuration specifically for the Angular application.

It extends tsconfig.json and applies additional settings for application source files.

---

## Why is it Needed?

The application and tests often require different compiler configurations.

Angular separates them to keep configurations clean and maintainable.

---

# tsconfig.spec.json

## Definition

tsconfig.spec.json contains TypeScript configuration used for testing.

Angular uses this configuration while executing unit tests.

---

## Difference

| File | Purpose |
|------|----------|
| tsconfig.json | Base TypeScript Configuration |
| tsconfig.app.json | Application Compilation |
| tsconfig.spec.json | Test Compilation |

---

# Memory Trick

```
package.json

↓

What packages do I need?

------------------------

package-lock.json

↓

Which exact versions were installed?

------------------------

angular.json

↓

How should Angular build the project?

------------------------

tsconfig.json

↓

How should TypeScript compile the project?
```

---

# Quick Revision

✔ package.json

✔ node_modules

✔ package-lock.json

✔ angular.json

✔ tsconfig.json

✔ tsconfig.app.json

✔ tsconfig.spec.json

✔ Difference between package.json and package-lock.json

✔ Difference between tsconfig.json and tsconfig.app.json

---

# Chapter Summary

In this chapter, we understood the purpose of the important configuration files generated by Angular CLI.

We learned:

- How npm manages dependencies
- How Angular CLI uses configuration files
- How TypeScript compilation is configured
- Why project configuration is separated into different files

These files work together to prepare the Angular application before it is compiled and executed.

---

➡️ **Next Chapter:** **Volume 2D – Entry Point & Complete Angular Execution Flow**

Topics Covered:

- main.ts
- app.module.ts
- app.component.ts
- app.component.html
- app.component.css
- index.html
- Complete Angular Execution Flow
- Browser Rendering Process

# 6. Angular Entry Point & Complete Application Execution Flow

In the previous chapters, we learned:

- Angular CLI
- Project Structure
- Configuration Files

Now it's time to connect everything together.

This chapter explains **how Angular starts**, **which files are executed first**, and **how the application finally appears in the browser**.

---

# Complete Angular Execution Flow

When we execute:

```bash
ng serve
```

Angular follows this sequence:

```
Developer

↓

ng serve

↓

Angular CLI

↓

package.json

↓

angular.json

↓

tsconfig.json

↓

main.ts

↓

AppModule

↓

AppComponent

↓

index.html

↓

Browser

↓

Angular Application
```

This is the overall execution flow.

Now let's understand each file one by one.

---

# main.ts

## Definition

`main.ts` is the **entry point** of every Angular application.

Whenever the Angular application starts, Angular begins execution from this file.

Just like Java starts execution from:

```java
public static void main(String[] args)
```

Angular starts execution from:

```typescript
main.ts
```

---

## Typical main.ts

```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

---

## Understanding the Code

### platformBrowserDynamic()

Creates the Angular platform for running the application inside the browser.

Think of it as preparing the environment before Angular starts.

---

### bootstrapModule(AppModule)

Loads the root module of the application.

In most Angular projects, the root module is:

```
AppModule
```

Angular now moves to:

```
app.module.ts
```

---

### catch()

Handles errors that occur during bootstrapping.

---

## Internal Workflow

```
Application Starts

↓

main.ts

↓

Create Browser Platform

↓

Load AppModule

↓

Start Angular
```

---

> 💡 **Remember**

Angular execution **always starts from `main.ts`**.

---

> 🎯 **Interview Question**

### What is `main.ts`?

**Answer**

`main.ts` is the entry point of an Angular application. It creates the Angular platform and bootstraps the root module, allowing the application to start.

---

# app.module.ts

## Definition

`app.module.ts` is the **Root Module** of the Angular application.

It tells Angular:

- Which components belong to the application
- Which modules should be imported
- Which services should be available
- Which component should start first

---

## Typical Structure

```typescript
@NgModule({

  declarations: [

    AppComponent

  ],

  imports: [

    BrowserModule

  ],

  providers: [

  ],

  bootstrap: [

    AppComponent

  ]

})
```

---

## Understanding Each Section

### declarations

Registers Components, Directives and Pipes.

---

### imports

Imports Angular Modules.

Example:

```
BrowserModule

FormsModule

ReactiveFormsModule
```

---

### providers

Registers Services.

---

### bootstrap

Specifies the first component Angular should create.

Usually,

```
AppComponent
```

---

## Internal Workflow

```
main.ts

↓

AppModule

↓

Read @NgModule

↓

Find Bootstrap Component

↓

Create AppComponent
```

---

> 💡 **Remember**

`app.module.ts` is the **Root Module**.

It manages the application's structure.

---

> 🎯 **Interview Question**

### What is AppModule?

**Answer**

AppModule is the root module of an Angular application. It organizes components, modules and services, and specifies the root component that Angular should load first.

---

# app.component.ts

## Definition

This file contains the **business logic** of the root component.

Whenever the UI needs data,

it usually comes from this TypeScript file.

---

Example

```typescript
export class AppComponent {

    title = "Angular";

}
```

---

## Responsibilities

- Business Logic
- Variables
- Functions
- Event Handling
- Calling Services

---

## Internal Workflow

```
Angular Creates Component

↓

Reads app.component.ts

↓

Creates Variables

↓

Creates Functions

↓

Data Ready
```

---

> 💡 **Remember**

HTML should display data.

TypeScript should contain logic.

Keep business logic inside the component class.

---

# app.component.html

## Definition

This file contains the **User Interface (UI)** of the component.

Whatever the user sees on the screen is defined here.

---

Example

```html
<h1>{{title}}</h1>
```

Angular displays the value stored inside:

```
title
```

which comes from:

```
app.component.ts
```

---

## Internal Workflow

```
HTML

↓

Reads Variables

↓

Displays Data

↓

User Sees UI
```

---

> 💡 **Remember**

HTML never stores business logic.

It only displays data.

---

# app.component.css

## Definition

This file contains the styles for the component.

It controls:

- Colors
- Fonts
- Margins
- Layout
- Animations

---

Example

```css
h1{

color:blue;

}
```

---

## Responsibilities

- Component Styling
- Layout
- Responsive Design
- Animations

---

> 💡 **Remember**

CSS only controls appearance.

Business logic belongs in TypeScript.

---

# index.html

## Definition

`index.html` is the only HTML page that actually exists in an Angular application.

Everything else is dynamically inserted inside this page.

---

Example

```html
<body>

<app-root></app-root>

</body>
```

Notice:

```
<app-root>
```

This is **not HTML.**

It is the selector of the root Angular component.

---

## Internal Workflow

```
Browser

↓

Loads index.html

↓

Finds app-root

↓

Angular Creates AppComponent

↓

UI Appears
```

---

> 💡 **Remember**

The browser loads **index.html** first.

Angular then replaces:

```
<app-root>
```

with the rendered AppComponent.

---

# Complete Execution Flow (Detailed)

```
Developer

↓

ng serve

↓

Angular CLI Starts

↓

Reads package.json

↓

Reads angular.json

↓

Reads tsconfig.json

↓

Starts Angular Compiler

↓

Reads main.ts

↓

Creates Browser Platform

↓

Loads AppModule

↓

Reads @NgModule

↓

Finds Bootstrap Component

↓

Creates AppComponent

↓

Reads app.component.ts

↓

Reads app.component.html

↓

Reads app.component.css

↓

Bundles HTML + CSS + JavaScript

↓

Starts Development Server

↓

Browser Loads index.html

↓

Browser Finds <app-root>

↓

Angular Replaces app-root

↓

Application Appears
```

---

# How All Files Are Connected

```
main.ts

↓

AppModule

↓

AppComponent

├── app.component.ts

├── app.component.html

└── app.component.css

↓

index.html

↓

Browser

↓

Application
```

---

# Common Beginner Mistakes

### ❌ Thinking index.html contains the whole application

Only the root selector (`<app-root>`) exists in `index.html`.

Angular renders everything else dynamically.

---

### ❌ Thinking HTML executes first

Angular first executes:

```
main.ts
```

Only after bootstrapping does Angular render HTML.

---

### ❌ Confusing AppModule with AppComponent

- **AppModule** manages the application.
- **AppComponent** represents the application's first UI.

---

# Quick Revision

✔ What is `main.ts`?

✔ Why is it called the entry point?

✔ What is AppModule?

✔ Difference between AppModule and AppComponent

✔ Responsibilities of `app.component.ts`

✔ Responsibilities of `app.component.html`

✔ Responsibilities of `app.component.css`

✔ Why is `index.html` important?

✔ Complete Angular execution flow

---

# Chapter Summary

In this chapter, we connected all the important files involved in starting an Angular application.

We learned:

- How Angular starts from `main.ts`
- How `AppModule` organizes the application
- How `AppComponent` becomes the first UI
- How `index.html` hosts the Angular application
- The complete execution flow from `ng serve` to the browser

Understanding this flow is essential because it explains how Angular boots, compiles, and renders an application from start to finish.

---

➡️ **Next Chapter:** **7. Data Binding**

Topics Covered:

- What is Data Binding?
- Why Data Binding?
- Types of Data Binding
- Interpolation
- Property Binding
- Event Binding
- Two-Way Data Binding
- ngModel

# 7. Data Binding

Now that we understand how Angular starts an application, let's learn **how data moves between the Component (TypeScript) and the View (HTML).**

Imagine we have a variable inside `app.component.ts`.

```ts
title = "Angular"
```

How can HTML display this value?

Angular solves this problem using **Data Binding**.

Data Binding is one of Angular's most powerful features because it automatically synchronizes data between the component and the template.

---

# What is Data Binding?

## Definition

**Data Binding** is the process of establishing communication between the **Component (TypeScript)** and the **Template (HTML).**

It allows data to move between the application's logic and the user interface.

Instead of manually updating the DOM using JavaScript, Angular automatically keeps the UI synchronized with the component.

---

## Why do we need Data Binding?

Suppose we have:

```ts
username = "Dhikshanth";
```

inside the component.

Without Data Binding,

HTML has no idea that this variable exists.

Angular Data Binding allows HTML to access this variable and display it automatically.

---

## Internal Working

```
Component (TypeScript)

↓

Variable Created

↓

Angular Change Detection

↓

Template Reads Variable

↓

Browser Updates UI
```

---

## Real-world Example

Imagine a shopping application.

```
Product Name

↓

Component

↓

HTML

↓

User sees Product Name
```

If the product name changes,

Angular automatically updates the UI.

---

> 💡 **Remember**

Data Binding eliminates the need to manually update the DOM using JavaScript.

Angular automatically keeps the UI synchronized.

---

# Types of Data Binding

Angular provides four major types of Data Binding.

```
Data Binding

│

├── Interpolation

├── Property Binding

├── Event Binding

└── Two-Way Binding
```

---

## One-Way Data Binding

One-Way Data Binding allows data to move in only one direction.

```
Component

↓

HTML
```

or

```
HTML

↓

Component
```

depending on the binding type.

Angular provides three One-Way Data Binding techniques:

- Interpolation
- Property Binding
- Event Binding

---

## Two-Way Data Binding

Two-Way Data Binding allows data to move in both directions.

```
Component

⇅

HTML
```

If the component changes,

the UI changes.

If the UI changes,

the component also changes automatically.

---

# 7.1 Interpolation

## Definition

Interpolation is a One-Way Data Binding technique.

It displays data from the **Component** inside the **HTML Template**.

---

## Syntax

```html
{{ variable }}
```

Example

```ts
title = "Angular";
```

```html
<h1>{{title}}</h1>
```

Output

```
Angular
```

---

## Internal Working

```
Component

↓

title = "Angular"

↓

Interpolation

↓

HTML

↓

Browser Displays

Angular
```

---

## Why do we need Interpolation?

Instead of writing values directly inside HTML,

we display variables.

This keeps the UI dynamic.

---

## Real-world Examples

Display:

- Student Name
- Employee ID
- Product Price
- Logged-in Username
- Order Number

These values change frequently.

Interpolation automatically displays the latest value.

---

## Characteristics

✔ One-Way Data Binding

✔ Component → HTML

✔ Displays Text

✔ Simple Syntax

---

> 💡 **Remember**

Interpolation is used only to display data.

It cannot update HTML properties like `src`, `disabled`, or `href`.

---

> ⚠️ **Common Mistake**

Incorrect

```html
<img src="{{image}}">
```

Correct

```html
<img [src]="image">
```

Interpolation is for displaying text.

Property Binding is used for DOM properties.

---

> 🎯 **Interview Question**

### What is Interpolation?

**Answer**

Interpolation is a One-Way Data Binding technique that displays data from the Component inside the HTML Template using double curly braces.

---

# 7.2 Property Binding

## Definition

Property Binding is used to bind Component data to an HTML element's property.

Unlike Interpolation,

Property Binding works with DOM properties.

---

## Syntax

```html
[property]="value"
```

Example

```ts
image = "logo.png";
```

```html
<img [src]="image">
```

Angular assigns the value of the variable to the HTML property.

---

## Internal Working

```
Component

↓

Variable

↓

Property Binding

↓

HTML Property

↓

Browser Updates
```

---

## Common Examples

```html
<img [src]="image">

<button [disabled]="isDisabled">

<input [value]="username">

<a [href]="website">
```

---

## Why do we need Property Binding?

Many HTML properties cannot be updated using Interpolation.

Examples:

- src
- disabled
- checked
- href
- value

Angular provides Property Binding for these situations.

---

> 💡 **Remember**

Property Binding updates **properties**, not plain text.

---

> 🎯 **Interview Question**

### What is Property Binding?

**Answer**

Property Binding is a One-Way Data Binding technique that binds data from the Component to an HTML element's property using square brackets.

---

# Difference between Interpolation and Property Binding

| Interpolation | Property Binding |
|---------------|------------------|
| Displays text | Updates DOM property |
| Uses `{{ }}` | Uses `[ ]` |
| Component → HTML | Component → HTML |
| Cannot bind DOM properties | Can bind DOM properties |

---

# Quick Revision

✔ What is Data Binding?

✔ Why do we need Data Binding?

✔ One-Way Data Binding

✔ Two-Way Data Binding

✔ What is Interpolation?

✔ Syntax of Interpolation

✔ What is Property Binding?

✔ Syntax of Property Binding

✔ Difference between Interpolation and Property Binding

---

# Chapter Summary

In this chapter, we learned how Angular connects the Component and the Template using Data Binding.

We covered:

- What Data Binding is
- Why it is needed
- One-Way and Two-Way Data Binding
- Interpolation
- Property Binding

These concepts form the foundation for creating dynamic user interfaces in Angular.

---

➡️ **Continued in Chapter 7.2**

Topics Covered:

- Event Binding
- Two-Way Data Binding
- ngModel
- FormsModule
- Data Binding Comparison
- Complete Data Flow Diagram

# 7.2 Event Binding

Until now, we learned how to send data from the Component to the HTML.

But what happens when the **user interacts with the application?**

For example,

- Clicking a button
- Typing in a textbox
- Hovering over an element
- Pressing a keyboard key

Angular needs a way to notify the Component that an event has occurred.

This is where **Event Binding** comes into the picture.

---

# What is Event Binding?

## Definition

**Event Binding** is a One-Way Data Binding technique used to send data or trigger actions **from the HTML Template to the Component (TypeScript)** whenever an event occurs.

Unlike Interpolation and Property Binding, Event Binding sends information in the opposite direction.

```
HTML

↓

Component
```

---

## Why do we need Event Binding?

Suppose we have a button.

```html
<button>Click Me</button>
```

Clicking the button alone doesn't perform any action.

Angular needs to know:

- Which function should execute?
- What should happen after the click?

Event Binding connects HTML events with TypeScript methods.

---

## Syntax

```html
(event)="method()"
```

Example

```html
<button (click)="showMessage()">
    Click Me
</button>
```

```ts
showMessage() {
    alert("Welcome to Angular");
}
```

---

## Internal Working

```
User Clicks Button

↓

HTML Event Triggered

↓

Event Binding

↓

Component Function Executes

↓

UI Updates (if needed)
```

---

## Common Events

| Event | Description |
|--------|-------------|
| `(click)` | Button Click |
| `(dblclick)` | Double Click |
| `(keyup)` | Key Released |
| `(keydown)` | Key Pressed |
| `(mouseenter)` | Mouse Enters |
| `(mouseleave)` | Mouse Leaves |
| `(change)` | Value Changed |
| `(submit)` | Form Submitted |

---

## Real-world Examples

- Login Button
- Register Button
- Delete Button
- Search Button
- Submit Form
- Toggle Sidebar

All these actions are handled using Event Binding.

---

> 💡 **Remember**

Event Binding executes **functions**, not variables.

---

> ⚠️ **Common Mistake**

Incorrect

```html
<button (click)="username">
```

Correct

```html
<button (click)="showMessage()">
```

---

> 🎯 **Interview Question**

### What is Event Binding?

**Answer**

Event Binding is a One-Way Data Binding technique that allows HTML events to trigger methods inside the Component using parentheses.

---

# 7.3 Two-Way Data Binding

So far, we learned:

```
Component

↓

HTML
```

and

```
HTML

↓

Component
```

But many applications require **both directions** at the same time.

For example,

A user types their name into a textbox.

As the user types,

the Component should receive the latest value automatically.

This is called **Two-Way Data Binding**.

---

# What is Two-Way Data Binding?

## Definition

Two-Way Data Binding allows data to move between the **Component** and the **HTML Template** in both directions.

```
Component

⇅

HTML
```

Whenever one changes,

the other is automatically updated.

---

## Why do we need Two-Way Data Binding?

Imagine a Registration Form.

```
User Types Name

↓

Textbox Updates

↓

Component Variable Updates

↓

Component Changes Value

↓

Textbox Updates Again
```

Both remain synchronized automatically.

---

## Internal Working

```
Component

⇅

ngModel

⇅

HTML

⇅

User
```

---

## Characteristics

✔ Component → HTML

✔ HTML → Component

✔ Automatic Synchronization

✔ Commonly used in Forms

---

> 💡 **Remember**

Two-Way Data Binding is a combination of:

- Property Binding
- Event Binding

---

> 🎯 **Interview Question**

### What is Two-Way Data Binding?

**Answer**

Two-Way Data Binding synchronizes data between the Component and the HTML Template. Whenever either side changes, the other side is automatically updated.

---

# ngModel

## Definition

`ngModel` is the Angular directive used to implement **Two-Way Data Binding**.

It automatically synchronizes the value between the Component and the HTML input element.

---

## Syntax

```html
[(ngModel)]="variable"
```

Notice the syntax carefully.

```
[( )]
```

This is commonly called the **Banana in a Box** syntax.

---

## Example

Component

```ts
name = "";
```

Template

```html
<input
type="text"
[(ngModel)]="name">

<h2>{{name}}</h2>
```

Output

```
User Types

↓

Component Updates

↓

Interpolation Updates

↓

Browser Displays Latest Value
```

---

## Internal Workflow

```
User Types

↓

Input Box

↓

ngModel

↓

Component Variable

↓

Interpolation

↓

Browser Updates
```

Everything happens automatically.

---

## Why do we need ngModel?

Without ngModel,

we would need:

- Event Binding
- Property Binding
- Manual Variable Updates

Angular combines everything into one directive.

---

## Real-world Examples

- Registration Forms
- Login Forms
- Profile Editing
- Search Boxes
- Feedback Forms
- Contact Forms

---

> 💡 **Remember**

`ngModel` belongs to **FormsModule**.

Without importing **FormsModule**, Angular cannot recognize `ngModel`.

---

## Importing FormsModule

Inside:

```
app.module.ts
```

```ts
import { FormsModule } from '@angular/forms';
```

```ts
imports: [

BrowserModule,

FormsModule

]
```

---

> ⚠️ **Common Mistake**

Error

```
Can't bind to 'ngModel'
since it isn't a known property.
```

Reason

```
FormsModule
```

has not been imported.

---

> 🎯 **Interview Question**

### What is ngModel?

**Answer**

`ngModel` is an Angular directive used for Two-Way Data Binding. It synchronizes data between the Component and the HTML input element automatically.

---

# Data Binding Comparison

| Feature | Direction | Syntax | Purpose |
|----------|-----------|--------|---------|
| Interpolation | Component → HTML | `{{ }}` | Display Text |
| Property Binding | Component → HTML | `[ ]` | Update HTML Properties |
| Event Binding | HTML → Component | `( )` | Trigger Component Methods |
| Two-Way Data Binding | Component ⇄ HTML | `[( )]` | Synchronize Data |

---

# Complete Data Flow

```
Interpolation

Component

↓

HTML

--------------------------------

Property Binding

Component

↓

HTML Property

--------------------------------

Event Binding

HTML Event

↓

Component

--------------------------------

Two-Way Binding

Component

⇅

ngModel

⇅

HTML
```

---

# Interview Trap

### Question

Is `ngModel` a Data Binding technique?

### Answer

No.

`ngModel` is a **directive**.

It is used to implement **Two-Way Data Binding**.

---

# Quick Revision

✔ What is Event Binding?

✔ Event Binding Syntax

✔ Common HTML Events

✔ What is Two-Way Data Binding?

✔ What is `ngModel`?

✔ Why is `FormsModule` required?

✔ Difference between all four Data Binding techniques

---

# Chapter Summary

In this chapter, we completed Angular's Data Binding concepts.

We learned:

- Event Binding
- Two-Way Data Binding
- `ngModel`
- FormsModule
- Complete Data Flow
- Comparison of all Data Binding techniques

Data Binding is one of Angular's core strengths because it simplifies communication between the Component and the Template, making applications dynamic and interactive.

---

➡️ **Next Chapter:** **8. Angular Directives**

Topics Covered:

- What are Directives?
- Why do we need Directives?
- Types of Directives
- Component Directives
- Structural Directives
- Attribute Directives
- `*ngIf`
- `*ngFor`
- `*ngSwitch`
- `ngClass`
- `ngStyle`

# 8. Angular Directives

Until now, we learned how to transfer data between the Component and the Template using Data Binding.

But displaying data alone is not enough.

Consider these situations:

- Show a button only if the user is logged in.
- Display a list of products dynamically.
- Change the color of text based on a condition.
- Apply different CSS classes dynamically.

Normal HTML cannot perform these tasks on its own.

Angular provides **Directives** to add behavior and make HTML dynamic.

---

# What are Directives?

## Definition

A **Directive** is a class that allows us to change the **behavior**, **appearance**, or **structure** of HTML elements.

Simply put,

> Directives tell Angular **how an HTML element should behave.**

---

## Why do we need Directives?

Suppose we want to:

- Hide an element
- Show an element
- Repeat an element
- Change styles dynamically
- Add or remove CSS classes

HTML cannot perform these operations by itself.

Angular Directives make these tasks possible.

---

## Internal Working

```
Component Data

↓

Directive Evaluates

↓

Angular Updates DOM

↓

Browser Displays Result
```

---

## Real-world Examples

- Display "Welcome Admin" only for administrators.
- Show products received from an API.
- Disable a button until the form is valid.
- Highlight important messages.
- Change the background color dynamically.

---

> 💡 **Remember**

Directives extend the behavior of HTML elements.

Without Directives, Angular templates behave like normal HTML.

---

# Types of Directives

Angular provides three types of Directives.

```
Directives

│

├── Component Directive

├── Structural Directive

└── Attribute Directive
```

---

# 8.1 Component Directive

## Definition

Every Angular Component is itself a Directive.

The only difference is that a Component also contains its own Template (HTML).

Example

```ts
@Component({

selector: 'app-home',

templateUrl: './home.component.html'

})
```

Since it controls an HTML template,

Angular considers every Component to be a special type of Directive.

---

## Responsibilities

- Controls a View
- Contains HTML
- Contains CSS
- Contains TypeScript Logic

---

> 💡 **Remember**

Every Component is a Directive.

But not every Directive is a Component.

---

# 8.2 Structural Directives

## Definition

Structural Directives change the **structure of the DOM**.

They can:

- Create Elements
- Remove Elements
- Repeat Elements

They are called **Structural** because they modify the HTML structure itself.

---

## Common Structural Directives

- `*ngIf`
- `*ngFor`
- `*ngSwitch`

Notice the `*` (asterisk).

This indicates a Structural Directive.

---

## Internal Working

```
Condition

↓

Structural Directive

↓

DOM Created / Removed

↓

Browser Updates
```

---

# *ngIf

## Definition

`*ngIf` is used to display or remove an HTML element based on a condition.

---

## Syntax

```html
<p *ngIf="isLoggedIn">

Welcome User

</p>
```

Component

```ts
isLoggedIn = true;
```

Output

```
Welcome User
```

If

```ts
isLoggedIn = false;
```

Angular removes the paragraph from the DOM.

---

## Internal Workflow

```
Condition

↓

true ?

↓

Create Element

↓

Display

---------------------

false ?

↓

Remove Element

↓

Nothing Displayed
```

---

## Real-world Examples

- Login Screen
- Loading Spinner
- Error Message
- Success Message
- Admin Panel

---

> 💡 **Remember**

`*ngIf` removes the element from the DOM.

It does **not** simply hide it.

---

> ⚠️ **Interview Trap**

Many beginners think:

```
display:none;
```

and

```
*ngIf
```

are the same.

They are different.

`display:none`

→ Element exists in DOM.

`*ngIf`

→ Element is removed from DOM.

---

> 🎯 **Interview Question**

### What is `*ngIf`?

**Answer**

`*ngIf` is a Structural Directive that adds or removes an HTML element from the DOM based on a Boolean condition.

---

# *ngFor

## Definition

`*ngFor` is a Structural Directive used to repeat an HTML element for every item in a collection.

---

## Syntax

Component

```ts
students = [

"Rahul",

"Anu",

"Kavin"

];
```

Template

```html
<li *ngFor="let student of students">

{{student}}

</li>
```

Output

```
Rahul

Anu

Kavin
```

---

## Internal Working

```
Array

↓

Loop

↓

Create HTML

↓

Repeat

↓

Browser Displays List
```

---

## Why do we need `*ngFor`?

Imagine displaying:

- Products
- Employees
- Students
- Orders

Instead of writing HTML repeatedly,

Angular generates it automatically.

---

## Common Variables

```html
index

first

last

odd

even
```

Example

```html
<li *ngFor="let student of students; let i = index">

{{i}} - {{student}}

</li>
```

---

> 💡 **Remember**

`*ngFor` creates multiple HTML elements from a single template.

---

> 🎯 **Interview Question**

### What is `*ngFor`?

**Answer**

`*ngFor` is a Structural Directive that repeats an HTML element for every item in a collection such as an array.

---

# *ngSwitch

## Definition

`*ngSwitch` is used when multiple conditions need to be checked.

Instead of writing multiple `*ngIf` statements,

Angular provides `ngSwitch`.

---

## Syntax

```html
<div [ngSwitch]="status">

<p *ngSwitchCase="'success'">

Success

</p>

<p *ngSwitchCase="'error'">

Error

</p>

<p *ngSwitchDefault>

Unknown

</p>

</div>
```

---

## Internal Working

```
Expression

↓

Match Case

↓

Display Matching Block

↓

Ignore Remaining Cases
```

---

## Real-world Examples

- Student Grades
- Order Status
- Traffic Signal
- Payment Status
- User Roles

---

> 💡 **Remember**

Use `ngSwitch` when multiple conditions depend on the same expression.

---

# Comparison of Structural Directives

| Directive | Purpose |
|-----------|---------|
| `*ngIf` | Show or Remove Elements |
| `*ngFor` | Repeat Elements |
| `*ngSwitch` | Display One of Many Cases |

---

# Quick Revision

✔ What is a Directive?

✔ Why do we need Directives?

✔ Types of Directives

✔ Component Directive

✔ Structural Directive

✔ `*ngIf`

✔ `*ngFor`

✔ `*ngSwitch`

✔ Difference between all Structural Directives

---

# Chapter Summary

In this chapter, we learned how Angular Directives make HTML dynamic.

We covered:

- What Directives are
- Why Directives are needed
- Types of Directives
- Component Directives
- Structural Directives
- `*ngIf`
- `*ngFor`
- `*ngSwitch`

Structural Directives are powerful because they directly modify the DOM by creating, removing, or repeating HTML elements.

---

➡️ **Continued in Chapter 8.2**

Topics Covered:

- Attribute Directives
- `ngClass`
- `ngStyle`
- Custom Directives
- Difference between Structural and Attribute Directives

# 8.2 Attribute Directives

In the previous chapter, we learned that **Structural Directives** change the structure of the DOM by adding, removing or repeating elements.

Now we'll learn another type of directive.

Instead of changing the structure,

**Attribute Directives** change the appearance or behavior of an existing HTML element.

The element remains in the DOM.

Only its properties, styles or classes are modified.

---

# What are Attribute Directives?

## Definition

An **Attribute Directive** is a directive that changes the appearance or behavior of an existing HTML element without creating or removing it.

Unlike Structural Directives,

Attribute Directives do **not** modify the DOM structure.

They only modify the existing element.

---

## Why do we need Attribute Directives?

Suppose we want to:

- Change the text color
- Change the background color
- Add a CSS class
- Remove a CSS class
- Disable an element
- Highlight important text

Instead of writing JavaScript,

Angular provides Attribute Directives.

---

## Internal Working

```
Component Data

↓

Attribute Directive

↓

Updates HTML Property

↓

Browser Updates Appearance
```

---

## Common Attribute Directives

Angular provides:

- ngClass
- ngStyle

We can also create our own Custom Attribute Directives.

---

# ngClass

## Definition

`ngClass` is an Attribute Directive used to add or remove CSS classes dynamically.

Instead of hardcoding a CSS class,

Angular decides which class should be applied based on a condition.

---

## Syntax

```html
<div [ngClass]="className">

Hello Angular

</div>
```

Example

Component

```ts
isActive = true;
```

Template

```html
<p [ngClass]="isActive ? 'active' : 'inactive'">

Angular

</p>
```

CSS

```css
.active{

color:green;

}

.inactive{

color:red;

}
```

---

## Internal Workflow

```
Condition

↓

ngClass

↓

Chooses CSS Class

↓

Browser Applies Style
```

---

## Real-world Examples

- Login Status
- Active Navigation Menu
- Product Availability
- Payment Status
- Employee Status

---

# Your Learning Example

Suppose a hospital application contains:

```
Danger

Not Well

Out of Danger
```

Instead of writing multiple inline styles,

use `ngClass`.

Component

```ts
status = "Danger";
```

Template

```html
<p [ngClass]="status">

{{status}}

</p>
```

CSS

```css
.Danger{

color:red;

}

.Not\ Well{

color:orange;

}

.Out\ of\ Danger{

color:green;

}
```

Angular automatically applies the matching class.

---

## Professional Approach (Recommended)

Instead of relying directly on text values,

create a method.

Component

```ts
getStatusClass(status:string){

if(status==="Danger")

return "danger";

if(status==="Not Well")

return "warning";

return "safe";

}
```

Template

```html
<p [ngClass]="getStatusClass(patient.status)">

{{patient.status}}

</p>
```

CSS

```css
.danger{

color:red;

}

.warning{

color:orange;

}

.safe{

color:green;

}
```

This approach keeps the HTML clean and is easier to maintain.

---

> 💡 **Remember**

`ngClass` changes **CSS classes**, not inline styles.

---

> 🎯 **Interview Question**

### What is ngClass?

**Answer**

`ngClass` is an Attribute Directive used to dynamically add or remove CSS classes from an HTML element based on conditions or expressions.

---

# ngStyle

## Definition

`ngStyle` is an Attribute Directive used to apply CSS styles dynamically.

Instead of assigning CSS classes,

we directly assign CSS properties.

---

## Syntax

```html
<p [ngStyle]="{'color':'red'}">

Angular

</p>
```

---

## Dynamic Example

Component

```ts
isValid = true;
```

Template

```html
<p

[ngStyle]="{

'color':isValid?'green':'red'

}">

Student

</p>
```

---

## Internal Workflow

```
Condition

↓

ngStyle

↓

Creates Inline Style

↓

Browser Updates
```

---

## Real-world Examples

- Progress Bar
- Dynamic Colors
- Background Color
- Font Size
- Responsive Layout

---

# Your Learning Example

Suppose we have:

```
Danger

Not Well

Out of Danger
```

Using `ngStyle`

```html
<p

[ngStyle]="{

'color':

status=='Danger'

?

'red'

:

status=='Not Well'

?

'orange'

:

'green'

}">

{{status}}

</p>
```

This works,

but the HTML becomes difficult to read.

---

## Professional Approach

Move the logic into the Component.

Component

```ts
getStatusColor(status:string){

if(status==="Danger")

return "red";

if(status==="Not Well")

return "orange";

return "green";

}
```

Template

```html
<p

[ngStyle]="{

'color':getStatusColor(patient.status)

}">

{{patient.status}}

</p>
```

This keeps the template clean.

---

> 💡 **Remember**

For complex logic,

keep it inside the Component instead of writing long expressions in HTML.

---

> 🎯 **Interview Question**

### What is ngStyle?

**Answer**

`ngStyle` is an Attribute Directive used to apply CSS styles dynamically by binding style properties to Component data.

---

# Custom Directives

Angular also allows developers to create their own Directives.

Example

```bash
ng generate directive highlight
```

or

```bash
ng g d highlight
```

Angular creates:

```
highlight.directive.ts
```

We can now define our own behavior.

Example

Whenever the mouse enters,

change the background color.

Whenever the mouse leaves,

restore the original color.

---

## Why Custom Directives?

Suppose many buttons require the same hover effect.

Instead of writing the same code repeatedly,

create one Custom Directive.

Reuse it everywhere.

---

## Real-world Examples

- Highlight on Hover
- Auto Focus
- Input Formatting
- Password Strength Indicator
- Role-based UI

---

# Structural vs Attribute Directives

| Structural Directive | Attribute Directive |
|----------------------|---------------------|
| Changes DOM Structure | Changes Appearance |
| Adds or Removes Elements | Modifies Existing Elements |
| Uses `*` | No `*` |
| Example: `*ngIf` | Example: `ngClass` |

---

# Complete Directive Hierarchy

```
Directives

│

├── Component Directive

│

├── Structural Directives

│      │

│      ├── *ngIf

│      ├── *ngFor

│      └── *ngSwitch

│

└── Attribute Directives

       │

       ├── ngClass

       ├── ngStyle

       └── Custom Directives
```

---

# Common Beginner Mistakes

### ❌ Using ngStyle for everything

If multiple elements share the same styling,

prefer `ngClass`.

---

### ❌ Writing complex logic in HTML

Incorrect

```html
[ngStyle]="{
'color':
status=='Danger'
?
'red'
:
status=='Not Well'
?
'orange'
:
'green'
}"
```

Correct

Move the logic into the Component.

---

### ❌ Confusing Structural and Attribute Directives

Structural Directives modify the DOM.

Attribute Directives modify existing elements.

---

# Interview Trap

### Question

Can `ngClass` remove an HTML element?

### Answer

No.

`ngClass` only adds or removes CSS classes.

Only Structural Directives such as `*ngIf` can add or remove elements from the DOM.

---

# Quick Revision

✔ What is an Attribute Directive?

✔ What is `ngClass`?

✔ What is `ngStyle`?

✔ Difference between `ngClass` and `ngStyle`

✔ Custom Directives

✔ Difference between Structural and Attribute Directives

---

# Chapter Summary

In this chapter, we completed Angular Directives by learning Attribute Directives.

We covered:

- `ngClass`
- `ngStyle`
- Custom Directives
- Structural vs Attribute Directives

Directives are one of Angular's core features because they allow developers to build dynamic, reusable and interactive user interfaces without directly manipulating the DOM.

---

➡️ **Next Chapter:** **9. Angular Pipes**

Topics Covered:

- What are Pipes?
- Why do we need Pipes?
- Built-in Pipes
- Uppercase Pipe
- Lowercase Pipe
- Currency Pipe
- Date Pipe
- Decimal Pipe
- Percent Pipe
- Slice Pipe
- JSON Pipe
- Async Pipe
- Custom Pipes

# 9. Angular Pipes

Until now, we have learned how to display data using **Data Binding** and control the UI using **Directives**.

Now imagine we have the following data:

```
dhikshanth
```

But we want to display it as:

```
DHIKSHANTH
```

Or suppose we have:

```
50000
```

But we want to display:

```
₹50,000.00
```

The data itself doesn't change.

Only the way it is displayed changes.

Angular provides **Pipes** for this purpose.

---

# What are Pipes?

## Definition

A **Pipe** is a feature in Angular used to **transform or format data** before displaying it in the HTML template.

A Pipe does **not** modify the original data.

It only changes how the data appears in the View.

---

## Why do we need Pipes?

Suppose we have:

```ts
name = "dhikshanth";
```

Without Pipes,

HTML displays:

```
dhikshanth
```

Using the Uppercase Pipe,

HTML displays:

```
DHIKSHANTH
```

Notice that the original variable remains unchanged.

---

## Internal Working

```
Component Data

↓

Pipe

↓

Transforms Display

↓

Browser Displays Formatted Data
```

---

## Real-world Examples

Display:

- Currency
- Date
- Percentage
- Decimal Numbers
- Uppercase Names
- Lowercase Text

All these formatting operations are handled using Pipes.

---

> 💡 **Remember**

Pipes only change the **displayed output**.

They do not modify the actual value stored in the Component.

---

# Pipe Syntax

General Syntax

```html
{{ value | pipeName }}
```

Example

```html
{{ name | uppercase }}
```

Angular sends the value to the Pipe.

The Pipe transforms it.

The transformed value is displayed in the browser.

---

# Built-in Pipes

Angular provides several built-in Pipes.

Some commonly used Pipes are:

- Uppercase Pipe
- Lowercase Pipe
- TitleCase Pipe
- Currency Pipe
- Date Pipe
- Decimal Pipe
- Percent Pipe
- Slice Pipe
- JSON Pipe
- Async Pipe

---

# Uppercase Pipe

## Definition

The Uppercase Pipe converts text into uppercase letters.

---

## Example

Component

```ts
name = "angular";
```

Template

```html
{{ name | uppercase }}
```

Output

```
ANGULAR
```

---

## Internal Working

```
Component

↓

"angular"

↓

uppercase Pipe

↓

"ANGULAR"

↓

Browser Displays
```

---

# Lowercase Pipe

## Definition

The Lowercase Pipe converts text into lowercase letters.

---

## Example

Component

```ts
name = "ANGULAR";
```

Template

```html
{{ name | lowercase }}
```

Output

```
angular
```

---

# TitleCase Pipe

## Definition

The TitleCase Pipe converts the first letter of every word into uppercase.

---

## Example

Component

```ts
course = "java with angular";
```

Template

```html
{{ course | titlecase }}
```

Output

```
Java With Angular
```

---

# Currency Pipe

## Definition

The Currency Pipe formats numbers as currency values.

---

## Example

Component

```ts
salary = 50000;
```

Template

```html
{{ salary | currency:'INR' }}
```

Output

```
₹50,000.00
```

---

## More Examples

```html
{{ salary | currency:'USD' }}

{{ salary | currency:'EUR' }}

{{ salary | currency:'GBP' }}
```

---

## Real-world Examples

- Employee Salary
- Product Price
- Shopping Cart Total
- Invoice Amount

---

> 💡 **Remember**

The Currency Pipe formats the number.

It does not change the actual numeric value.

---

# Date Pipe

## Definition

The Date Pipe formats Date objects into readable date formats.

---

## Example

Component

```ts
today = new Date();
```

Template

```html
{{ today | date }}
```

Output

```
14-Jul-2026
```

---

## Different Formats

```html
{{ today | date:'short' }}

{{ today | date:'medium' }}

{{ today | date:'fullDate' }}

{{ today | date:'dd/MM/yyyy' }}
```

---

## Real-world Examples

- Order Date
- Joining Date
- Invoice Date
- Birthday
- Event Date

---

# Decimal Pipe

## Definition

The Decimal Pipe formats numbers by controlling decimal places.

---

## Example

Component

```ts
price = 1234.56789;
```

Template

```html
{{ price | number:'1.2-2' }}
```

Output

```
1,234.57
```

---

# Percent Pipe

## Definition

The Percent Pipe converts decimal numbers into percentage format.

---

## Example

Component

```ts
score = 0.92;
```

Template

```html
{{ score | percent }}
```

Output

```
92%
```

---

# Slice Pipe

## Definition

The Slice Pipe extracts a portion of a string or array.

---

## String Example

```html
{{ "Angular" | slice:0:4 }}
```

Output

```
Angu
```

---

## Array Example

```ts
students = [

"Rahul",

"Anu",

"Kavin",

"Priya"

];
```

```html
{{ students | slice:1:3 }}
```

Output

```
Anu, Kavin
```

---

# JSON Pipe

## Definition

The JSON Pipe converts an object into JSON format.

It is mainly used for debugging.

---

## Example

Component

```ts
student = {

name:"Rahul",

age:20

};
```

Template

```html
<pre>

{{ student | json }}

</pre>
```

Output

```json
{
"name":"Rahul",
"age":20
}
```

---

> 💡 **Remember**

The JSON Pipe is mostly used during development.

It helps developers inspect objects.

---

# Async Pipe

## Definition

The Async Pipe automatically subscribes to an Observable or Promise and displays its latest value.

When the Component is destroyed,

the Async Pipe automatically unsubscribes.

---

## Why is Async Pipe Useful?

Without Async Pipe,

we need:

```ts
subscribe()
```

and later,

```ts
unsubscribe()
```

With Async Pipe,

Angular manages this automatically.

---

> 💡 **Remember**

The Async Pipe helps prevent memory leaks by automatically unsubscribing.

---

# Chaining Pipes

Angular allows multiple Pipes to be used together.

Example

```html
{{ name | uppercase | slice:0:4 }}
```

Output

```
ANGU
```

Angular executes the Pipes from left to right.

---

# Custom Pipes

Angular also allows developers to create their own Pipes.

Command

```bash
ng generate pipe discount
```

or

```bash
ng g p discount
```

Angular creates:

```
discount.pipe.ts
```

Now we can implement our own transformation logic.

---

## Real-world Examples

- Discount Calculator
- EMI Calculator
- Mask Mobile Number
- Hide Email Address
- Student Grade Formatter

---

# Built-in vs Custom Pipes

| Built-in Pipe | Custom Pipe |
|---------------|-------------|
| Provided by Angular | Created by Developer |
| Ready to Use | Must be Implemented |
| General Purpose | Project Specific |

---

# Common Beginner Mistakes

### ❌ Thinking Pipes change the original value

Incorrect.

Pipes only change the displayed output.

---

### ❌ Using Pipes for complex business logic

Business logic belongs in the Component or Service.

Pipes should only transform data for display.

---

### ❌ Forgetting that Async Pipe works only with Observables or Promises

Async Pipe cannot be used with ordinary variables.

---

# Interview Trap

### Question

Can Pipes modify the original Component data?

### Answer

No.

Pipes only transform the data before it is displayed in the template.

The original value remains unchanged.

---

# Quick Revision

✔ What is a Pipe?

✔ Why do we need Pipes?

✔ Pipe Syntax

✔ Uppercase Pipe

✔ Lowercase Pipe

✔ TitleCase Pipe

✔ Currency Pipe

✔ Date Pipe

✔ Decimal Pipe

✔ Percent Pipe

✔ Slice Pipe

✔ JSON Pipe

✔ Async Pipe

✔ Custom Pipes

✔ Difference between Built-in and Custom Pipes

---

# Chapter Summary

In this chapter, we learned how Angular Pipes transform data before displaying it in the View.

We covered:

- What Pipes are
- Why Pipes are needed
- Built-in Pipes
- Pipe Syntax
- Async Pipe
- Custom Pipes

Pipes improve the readability and presentation of data without modifying the original values stored in the Component.

---

## Chapter Connection

So far, we have learned:

```
Angular Fundamentals

│

├── Components

├── Data Binding

├── Directives

└── Pipes
```

Now our UI is becoming dynamic, interactive and well-formatted.

The next step is to make our application **modular and reusable** by learning **Services**.

---

➡️ **Next Chapter:** **10. Angular Services**

Topics Covered:

- What is a Service?
- Why do we need Services?
- Business Logic
- Reusability
- @Injectable()
- Creating Services
- Using Services
- Real-world Examples

# 10. Angular Services

Until now, we have learned how to build Components, display data using Data Binding, modify the View using Directives, and format data using Pipes.

But imagine a real-world application.

Suppose we have:

- Employee Component
- Student Component
- Product Component
- Login Component

All of them need to fetch data from an API.

Should we write the API calling code inside every Component?

No.

Angular provides **Services** to solve this problem.

Services help us write reusable and centralized business logic.

---

# What is a Service?

## Definition

A **Service** is a TypeScript class that contains **business logic**, **data processing**, **API calls**, or **shared functionality** that can be reused across multiple Components.

Services help keep Components clean and focused on the user interface.

---

## Why do we need Services?

Imagine three Components.

```
Employee Component

Student Component

Product Component
```

All three need the same API.

Without Services,

each Component would contain duplicate code.

With a Service,

all Components share the same logic.

---

## Internal Working

```
Component

↓

Requests Data

↓

Service

↓

Business Logic

↓

Returns Data

↓

Component Displays Data
```

---

## Real-world Examples

Services are commonly used for:

- API Calls
- Authentication
- Login
- Registration
- CRUD Operations
- Shared Data
- Utility Functions
- Calculations

---

> 💡 **Remember**

A Service is responsible for **business logic**, not the user interface.

---

# Responsibilities of a Service

A Service can contain:

✔ Business Logic

✔ API Calls

✔ Database Communication

✔ Shared Variables

✔ Reusable Functions

✔ Authentication Logic

✔ Validation Logic

✔ Utility Methods

---

## What should NOT be inside a Service?

A Service should **not** contain:

❌ HTML

❌ CSS

❌ UI Design

❌ Template Code

❌ User Interface Logic

These belong inside Components.

---

## Separation of Responsibilities

```
Component

↓

UI

↓

HTML

↓

CSS

---------------------

Service

↓

Business Logic

↓

API Calls

↓

Shared Data

↓

Calculations
```

---

# Why is this Separation Important?

Imagine writing API calls inside every Component.

```
Employee Component

↓

GET Employees

---------------------

Student Component

↓

GET Students

---------------------

Product Component

↓

GET Products
```

Now suppose the API URL changes.

You would need to update every Component.

Instead,

move the API logic into one Service.

Now only the Service needs to be updated.

---

## Benefits of Services

✔ Code Reusability

✔ Centralized Logic

✔ Easy Maintenance

✔ Better Readability

✔ Easier Testing

✔ Cleaner Components

---

# Creating a Service

Angular CLI provides a command to create Services.

Command

```bash
ng generate service employee
```

Shortcut

```bash
ng g s employee
```

Angular creates:

```
employee.service.ts
```

---

## Typical Service

```ts
import { Injectable } from '@angular/core';

@Injectable({

providedIn: 'root'

})

export class EmployeeService {

constructor() {

}

}
```

---

# Understanding the Code

## @Injectable()

Marks the class as a Service that Angular can inject into other classes.

Without `@Injectable()`,

Angular cannot treat the class as a Service.

---

## providedIn: 'root'

This tells Angular to create **one shared instance** of the Service for the entire application.

Every Component uses the same instance.

---

## Internal Working

```
Application Starts

↓

Angular Creates Service

↓

Stores in Root Injector

↓

Components Request Service

↓

Same Service Instance Returned
```

---

> 💡 **Remember**

`providedIn: 'root'` creates a singleton Service.

Only one instance exists throughout the application.

---

# Using a Service

A Service is used inside a Component through **Constructor Injection**.

Example

```ts
constructor(

private employeeService: EmployeeService

){

}
```

Angular automatically provides the required Service.

---

## Workflow

```
Component Created

↓

Constructor Executes

↓

Angular Finds Service

↓

Injects Service

↓

Component Uses Service
```

---

# Sharing Data Using Services

One of the biggest advantages of Services is sharing data.

Example

```
Employee Component

↓

Employee Service

↓

Student Component
```

Both Components can access the same shared data.

---

## Real-world Examples

- Logged-in User

- Shopping Cart

- Theme Settings

- Language Preference

- Authentication Status

---

# Service vs Component

| Component | Service |
|-----------|----------|
| Handles UI | Handles Business Logic |
| Contains HTML | No HTML |
| Contains CSS | No CSS |
| Handles User Interaction | Handles Reusable Logic |
| Displays Data | Provides Data |

---

# Common Beginner Mistakes

### ❌ Writing API Calls inside every Component

Instead,

move API logic into a Service.

---

### ❌ Writing HTML inside a Service

Services should never contain HTML.

HTML belongs inside Components.

---

### ❌ Creating duplicate methods

If multiple Components need the same logic,

write it once inside a Service.

Reuse it everywhere.

---

# Interview Trap

### Question

Can multiple Components use the same Service?

### Answer

Yes.

Multiple Components can use the same Service.

When `providedIn: 'root'` is used,

Angular creates one shared instance that is reused throughout the application.

---

### Question

Can a Service contain HTML or CSS?

### Answer

No.

A Service is a TypeScript class used for business logic.

HTML and CSS belong inside Components.

---

### Question

What kind of code should be written inside a Service?

### Answer

A Service should contain reusable business logic such as API calls, authentication, calculations, shared data, validation, and utility methods.

---

# Quick Revision

✔ What is a Service?

✔ Why do we need Services?

✔ Responsibilities of a Service

✔ What should NOT be inside a Service?

✔ Benefits of Services

✔ `@Injectable()`

✔ `providedIn: 'root'`

✔ Creating a Service

✔ Using a Service

✔ Service vs Component

---

# Chapter Summary

In this chapter, we learned why Angular Services are essential for building scalable applications.

We covered:

- What a Service is
- Why Services are needed
- Separation of Concerns
- Creating Services
- `@Injectable()`
- `providedIn: 'root'`
- Sharing data between Components
- Benefits of reusable business logic

Services make Angular applications cleaner, more maintainable, and easier to scale by moving business logic out of Components.

---

## Chapter Connection

Our Angular architecture is now taking shape.

```
Angular

│

├── Components → UI

├── Directives → Modify HTML

├── Pipes → Transform Display

└── Services → Business Logic
```

Notice how each building block has a specific responsibility.

This separation of concerns is one of the biggest strengths of Angular.

---

➡️ **Next Chapter:** **11. Dependency Injection (DI) & Constructor Injection**

Topics Covered:

- What is Dependency Injection?
- Why do we need Dependency Injection?
- Constructor Injection
- Dependency
- Injector
- Injection Hierarchy
- Singleton Services
- Root Injector
- Complete DI Flow

# 11. Dependency Injection (DI) & Constructor Injection

In the previous chapter, we learned what a Service is and why business logic should be placed inside a Service instead of a Component.

Now a new question arises.

Suppose we have created a Service.

How does a Component use that Service?

Does the Component create the object manually?

Like this?

```ts
let emp = new EmployeeService();
```

No.

Angular does this automatically.

This process is called **Dependency Injection (DI).**

---

# What is Dependency Injection?

## Definition

**Dependency Injection (DI)** is the process of providing the required dependency (such as a Service) to a class instead of allowing the class to create it manually.

Angular automatically creates and supplies the required dependency whenever it is needed.

---

## Breaking Down the Term

Dependency

↓

Something a class needs to perform its work.

Example

```
EmployeeService
```

Injection

↓

Providing that dependency automatically.

Therefore,

Dependency Injection means:

```
Providing the required dependency automatically.
```

---

# Why do we need Dependency Injection?

Imagine we have three Components.

```
EmployeeComponent

StudentComponent

ProductComponent
```

Each one requires

```
EmployeeService
```

Without Dependency Injection,

every Component creates its own object.

```ts
let service = new EmployeeService();
```

Problems

- Duplicate Objects

- More Memory Usage

- Tight Coupling

- Difficult Maintenance

Angular solves this using Dependency Injection.

---

## Internal Working

```
Component Needs Service

↓

Angular Checks Injector

↓

Service Available?

↓

Yes

↓

Provide Existing Instance

↓

Component Uses Service
```

---

> 💡 **Remember**

The Component never creates the Service.

Angular creates it.

Angular injects it.

---

# What is a Dependency?

A Dependency is simply something another class requires.

Example

```
EmployeeComponent

↓

EmployeeService
```

Here,

```
EmployeeService
```

is the dependency.

---

## Real-world Example

Imagine a Car.

A Car needs:

- Engine
- Battery
- Fuel Tank

The Car depends on these parts.

Similarly,

A Component depends on Services.

---

# What is an Injector?

## Definition

An **Injector** is responsible for creating, storing and supplying dependencies whenever they are required.

Think of the Injector as a manager.

Whenever a Component asks for a Service,

the Injector provides it.

---

## Internal Workflow

```
Component

↓

Requests Service

↓

Injector

↓

Creates Service (if needed)

↓

Returns Service

↓

Component Uses Service
```

---

## Real-world Example

Imagine a Library.

```
Student

↓

Requests Book

↓

Librarian

↓

Provides Book

↓

Student Reads
```

The Librarian behaves like the Injector.

The Student behaves like the Component.

The Book behaves like the Service.

---

# Constructor Injection

## Definition

Constructor Injection is the process of receiving the required dependency through the constructor of a class.

Angular automatically injects the required Service while creating the Component.

---

## Syntax

```ts
constructor(

private employeeService: EmployeeService

){

}
```

Notice something important.

We never write

```ts
new EmployeeService()
```

Angular performs this automatically.

---

## Internal Working

```
Component Created

↓

Constructor Executes

↓

Angular Finds Dependency

↓

Injector Supplies Service

↓

Component Starts Using Service
```

---

## Why Constructor Injection?

Suppose Angular creates a Component.

Before the Component starts working,

Angular checks its constructor.

If the constructor asks for a Service,

Angular immediately provides it.

This happens automatically.

---

## Real-world Example

Imagine joining a company.

On your first day,

the company provides:

- Laptop

- ID Card

- Email Account

You don't create them yourself.

They are already available when you begin work.

Constructor Injection works in the same way.

The required dependency is ready before the Component starts working.

---

# Example

Service

```ts
@Injectable({

providedIn:'root'

})

export class EmployeeService{

getMessage(){

return "Welcome";

}

}
```

Component

```ts
constructor(

private employeeService:EmployeeService

){

}

ngOnInit(){

console.log(

this.employeeService.getMessage()

);

}
```

Output

```
Welcome
```

Angular automatically injects the Service.

---

# Dependency Injection Flow

```
Application Starts

↓

Root Injector Created

↓

Service Registered

↓

Component Created

↓

Constructor Requests Service

↓

Injector Searches

↓

Returns Service Instance

↓

Component Uses Service
```

---

# Singleton Service

Earlier we learned:

```ts
providedIn:'root'
```

This creates a Singleton Service.

---

## What is a Singleton?

A Singleton means

only **one instance** of the Service exists throughout the application.

Example

```
Employee Component

↓

EmployeeService

↑

Student Component

↓

Product Component
```

All Components use the same Service instance.

---

## Benefits

✔ Less Memory Usage

✔ Shared Data

✔ Better Performance

✔ Easy Maintenance

---

# Root Injector

When Angular starts,

it creates a **Root Injector**.

The Root Injector stores all Services registered with

```ts
providedIn:'root'
```

Whenever any Component requests that Service,

the Root Injector supplies the same instance.

---

## Internal Workflow

```
Angular Starts

↓

Root Injector

↓

Creates Service

↓

Stores Service

↓

Component Requests

↓

Same Service Returned
```

---

# Why is DI Better than Manual Object Creation?

Without DI

```ts
let service = new EmployeeService();
```

Problems

❌ Tight Coupling

❌ Duplicate Objects

❌ Difficult Testing

❌ Difficult Maintenance

---

With DI

```ts
constructor(

private employeeService:EmployeeService

){}
```

Benefits

✔ Loose Coupling

✔ Reusability

✔ Better Testing

✔ Easy Maintenance

✔ Automatic Object Creation

---

# Service vs Dependency Injection

| Service | Dependency Injection |
|----------|----------------------|
| Contains Business Logic | Provides the Service |
| Created using CLI | Managed by Angular |
| Reusable Code | Automatic Dependency Supply |
| TypeScript Class | Angular Feature |

---

# Common Beginner Mistakes

### ❌ Creating Service Objects Manually

Incorrect

```ts
let service = new EmployeeService();
```

Correct

```ts
constructor(

private employeeService:EmployeeService

){}
```

Always allow Angular to create and inject the Service.

---

### ❌ Thinking Constructor Injection and Dependency Injection are the Same

They are related,

but different.

Dependency Injection is the concept.

Constructor Injection is one way Angular performs Dependency Injection.

---

### ❌ Thinking Every Component Gets a New Service

Not when

```ts
providedIn:'root'
```

is used.

All Components receive the same instance.

---

# Interview Trap

### Question

What is Dependency Injection?

**Answer**

Dependency Injection is the process of providing required dependencies to a class instead of allowing the class to create them manually.

Angular automatically creates and injects dependencies whenever they are needed.

---

### Question

What is Constructor Injection?

**Answer**

Constructor Injection is the process of receiving a dependency through the constructor of a class. Angular injects the required Services while creating the Component.

---

### Question

What is the difference between Dependency Injection and Constructor Injection?

**Answer**

Dependency Injection is the overall design pattern used to supply dependencies.

Constructor Injection is one implementation of Dependency Injection where the dependency is provided through the constructor.

---

### Question

Why is Dependency Injection better than creating objects manually?

**Answer**

Dependency Injection reduces tight coupling, improves code reusability, simplifies testing, reduces memory usage through singleton Services, and allows Angular to manage object creation automatically.

---

# 🧠 How the Interviewer Thinks

```
What is a Service?

↓

How does a Component use a Service?

↓

What is Dependency Injection?

↓

What is Constructor Injection?

↓

What is an Injector?

↓

What is a Dependency?

↓

What is a Singleton Service?

↓

What is Root Injector?

↓

Why shouldn't we create objects manually?

↓

What are the advantages of Dependency Injection?
```

---

# Quick Revision

✔ What is a Dependency?

✔ What is Dependency Injection?

✔ Why do we need DI?

✔ What is an Injector?

✔ What is Constructor Injection?

✔ What is Singleton Service?

✔ What is Root Injector?

✔ Difference between Service and DI

✔ Difference between DI and Constructor Injection

---

# Chapter Summary

In this chapter, we learned how Angular automatically provides Services to Components using Dependency Injection.

We covered:

- Dependency Injection
- Dependency
- Injector
- Constructor Injection
- Singleton Services
- Root Injector
- Complete DI Flow

Dependency Injection is one of Angular's most powerful architectural features because it keeps applications loosely coupled, reusable, maintainable and easy to test.

---

## Chapter Connection

Our Angular architecture has now become much stronger.

```
Angular Architecture

│

├── Components → UI

├── Directives → Modify HTML

├── Pipes → Transform Display

├── Services → Business Logic

└── Dependency Injection → Connect Components with Services
```

Notice how Services and Dependency Injection work together.

A Service contains the business logic.

Dependency Injection provides that Service wherever it is needed.

---

➡️ **Next Chapter:** **12. Angular Forms**

Topics Covered:

- What are Forms?
- Template-driven Forms
- Reactive Forms
- FormControl
- FormGroup
- FormBuilder
- Validators
- FormArray
- Dirty, Pristine, Touched, Untouched
- setValue()
- patchValue()
- markAllAsTouched()

# 12. Angular Forms - Introduction

Until now, we have learned how Angular builds user interfaces using Components, Data Binding, Directives, Pipes, Services, and Dependency Injection.

Now imagine building a real application.

Suppose we need:

- Login Page
- Registration Page
- Contact Form
- Student Admission Form
- Employee Details Form

All these pages require the user to enter information.

Angular provides **Forms** to collect, validate, and process user input efficiently.

Forms are one of the most important features in Angular because almost every real-world application interacts with users through forms.

---

# What is a Form?

## Definition

A **Form** is a collection of input fields used to collect data from the user.

The collected data can then be processed, validated, stored in a database, or sent to a server.

---

## Why do we need Forms?

Imagine a Login Page.

The application needs:

- Username
- Password

Without Forms,

there is no structured way to collect this information.

Angular Forms provide:

- Data Collection
- Validation
- Error Handling
- Form State Management
- Submission

---

## Internal Working

```
User

↓

Enters Data

↓

Angular Form

↓

Validation

↓

Valid Data?

↓

Yes

↓

Submit

↓

Server

------------------

No

↓

Display Errors
```

---

# Real-world Examples

Forms are used in almost every application.

Examples include:

- Login Form
- Registration Form
- Contact Form
- Feedback Form
- Employee Form
- Student Admission Form
- Product Entry Form
- Payment Form

---

# Types of Forms in Angular

Angular provides two approaches for handling forms.

```
Angular Forms

│

├── Template-driven Forms

└── Reactive Forms
```

Both approaches solve the same problem.

The difference lies in **where the form logic is managed.**

---

# Template-driven Forms

## Definition

Template-driven Forms are forms where most of the logic is handled inside the HTML template.

They rely on Angular directives such as:

```
ngModel
```

Template-driven Forms are simple and suitable for small applications.

---

## Characteristics

✔ Easy to Learn

✔ Less TypeScript Code

✔ Uses ngModel

✔ Suitable for Simple Forms

---

# Reactive Forms

## Definition

Reactive Forms are forms where the entire form structure and validation are managed inside the Component using TypeScript.

Reactive Forms provide greater control and scalability.

---

## Characteristics

✔ Better Control

✔ Better Validation

✔ Easy Testing

✔ Dynamic Forms

✔ Suitable for Large Applications

---

# Template-driven vs Reactive Forms

| Template-driven Forms | Reactive Forms |
|------------------------|----------------|
| HTML Driven | TypeScript Driven |
| Uses `ngModel` | Uses `FormGroup` & `FormControl` |
| Simpler | More Powerful |
| Suitable for Small Forms | Suitable for Large Applications |
| Less Code | More Structured |

---

# Why did Angular introduce Reactive Forms?

Imagine a Registration Form with:

- Name
- Email
- Password
- Confirm Password
- Mobile Number
- Address
- Skills
- Languages
- Experience

Now imagine adding:

- Validation
- Dynamic Fields
- Conditional Controls
- Nested Forms

Managing all this inside HTML becomes difficult.

Reactive Forms move all the logic into TypeScript, making the application easier to maintain.

---

# Which one should I learn?

If you are learning Angular,

understand Template-driven Forms first because they introduce the basic concepts.

However,

most enterprise Angular applications use **Reactive Forms** because they provide better scalability and maintainability.

---

# Our Learning Journey

This handbook follows the same learning path that I personally followed.

```
Started with

↓

ngModel

↓

Template-driven Forms

↓

Mentor Recommended

↓

Reactive Forms

↓

FormGroup

↓

FormControl

↓

Validators

↓

FormBuilder

↓

FormArray

↓

Custom Validators

↓

CRUD Forms
```

This is the order in which the remaining chapters are organized.

---

# Common Beginner Mistakes

### ❌ Thinking Reactive Forms replace Template-driven Forms

Both approaches are valid.

The choice depends on the complexity of the application.

---

### ❌ Jumping directly into Reactive Forms

Understanding `ngModel` first makes Reactive Forms much easier to learn.

---

### ❌ Thinking Forms only collect data

Forms also provide:

- Validation
- State Management
- Error Handling
- Submission
- User Feedback

---

# Interview Trap

### Question

How many types of Forms does Angular provide?

**Answer**

Angular provides two types of Forms:

- Template-driven Forms
- Reactive Forms

---

### Question

Which type of Form is mostly used in enterprise applications?

**Answer**

Reactive Forms are more commonly used in enterprise applications because they provide better control, scalability, validation, and maintainability.

---

# 🧠 How the Interviewer Thinks

```
What is a Form?

↓

Why do we need Forms?

↓

How many types of Forms are there?

↓

Difference between Template-driven and Reactive Forms?

↓

Why is Reactive Form preferred?

↓

Which one have you used?

↓

Explain your Reactive Form project.
```

---

# Quick Revision

✔ What is a Form?

✔ Why do we need Forms?

✔ Types of Forms

✔ Template-driven Forms

✔ Reactive Forms

✔ Difference between both

✔ Why enterprises prefer Reactive Forms

---

# Chapter Summary

In this chapter, we introduced Angular Forms and understood why they are essential for collecting and validating user input.

We learned:

- What Forms are
- Why Forms are needed
- Types of Forms
- Template-driven Forms
- Reactive Forms
- Difference between the two approaches

This chapter serves as the foundation for all the upcoming Form-related concepts.

---

## Chapter Connection

Our Angular knowledge has now reached a stage where we can build complete user interfaces.

```
Angular

│

├── Components

├── Data Binding

├── Directives

├── Pipes

├── Services

├── Dependency Injection

└── Forms
```

The next chapters will focus on mastering Reactive Forms—the approach used in most real-world Angular applications.

---

➡️ **Next Chapter:** **12.2 Template-driven Forms**

Topics Covered:

- FormsModule
- ngModel
- ngForm
- Form Submission
- Template Reference Variables
- Validation
- Advantages
- Limitations

# 12.2 Template-driven Forms

In the previous chapter, we learned that Angular provides two approaches for creating forms:

- Template-driven Forms
- Reactive Forms

We also learned that Template-driven Forms are easier to understand because most of the form logic is written inside the HTML template.

Before learning Reactive Forms, it is important to understand how Template-driven Forms work because they introduce the basic concepts of Angular Forms.

---

# What are Template-driven Forms?

## Definition

A **Template-driven Form** is a type of Angular Form in which most of the form logic is managed inside the HTML template.

Angular uses directives such as:

- `ngModel`
- `ngForm`

to manage the form automatically.

---

## Why do we need Template-driven Forms?

Imagine creating a simple Login Form.

It contains only:

- Username
- Password

For such simple forms,

writing large amounts of TypeScript code is unnecessary.

Template-driven Forms allow Angular to handle most of the work automatically.

---

## Internal Working

```
User

↓

HTML Form

↓

ngModel

↓

Angular Updates Component

↓

Validation

↓

Submit
```

---

# FormsModule

## Definition

`FormsModule` is an Angular module that enables Template-driven Forms.

Without importing `FormsModule`,

Angular cannot recognize directives like:

```
ngModel
```

---

## Importing FormsModule

Inside

```
app.module.ts
```

```ts
import { FormsModule } from '@angular/forms';
```

```ts
imports: [

BrowserModule,

FormsModule

]
```

---

## Internal Workflow

```
Angular Starts

↓

Reads AppModule

↓

FormsModule Imported

↓

ngModel Available

↓

Template-driven Forms Work
```

---

> 💡 **Remember**

Whenever you use `ngModel`,

always import `FormsModule`.

---

# ngModel

We already learned `ngModel` in the Data Binding chapter.

Now let's understand its role inside Forms.

## Definition

`ngModel` is a directive that connects an input field with a Component variable.

Whenever the user types,

Angular automatically updates the Component variable.

Likewise,

if the Component variable changes,

Angular automatically updates the input field.

---

## Example

Component

```ts
username = "";
```

Template

```html
<input

type="text"

[(ngModel)]="username">

<h2>{{username}}</h2>
```

---

## Internal Working

```
User Types

↓

Input Field

↓

ngModel

↓

Component Variable

↓

Interpolation

↓

Browser Updates
```

---

## Why is ngModel Important?

Without `ngModel`,

we would need:

- Property Binding
- Event Binding
- Manual Updates

`ngModel` combines these into one directive.

---

# ngForm

## Definition

Whenever Angular detects a `<form>` element,

it automatically creates an `ngForm` object.

This object keeps track of the form's:

- Values
- Validation
- State

---

## Example

```html
<form #myForm="ngForm">

</form>
```

Here,

```
myForm
```

is a Template Reference Variable.

It refers to the automatically created `ngForm`.

---

## What does ngForm provide?

It provides useful properties such as:

```
valid

invalid

dirty

pristine

touched

untouched

submitted
```

We will study these properties in detail during the Reactive Forms chapters because the concepts are the same.

---

# Template Reference Variable

## Definition

A Template Reference Variable stores a reference to an HTML element or Angular directive.

Syntax

```html
#variableName
```

Example

```html
<form #loginForm="ngForm">
```

Angular now allows us to access:

```
loginForm.valid

loginForm.invalid

loginForm.value
```

---

# Form Submission

Angular uses the

```
ngSubmit
```

event to submit forms.

---

## Example

Template

```html
<form

(ngSubmit)="login()"

#loginForm="ngForm">

<button>

Login

</button>

</form>
```

Component

```ts
login(){

console.log("Submitted");

}
```

---

## Internal Workflow

```
User Clicks Submit

↓

ngSubmit

↓

Component Method Executes

↓

Data Processed
```

---

# Validation

Angular provides built-in validation directives.

Example

```html
<input

required

minlength="3"

maxlength="20"

email>
```

Angular automatically validates the input.

---

## Common Validators

- required

- minlength

- maxlength

- email

- pattern

---

# Advantages of Template-driven Forms

✔ Easy to Learn

✔ Less TypeScript Code

✔ Automatic Form Creation

✔ Suitable for Beginners

✔ Suitable for Small Forms

---

# Limitations

❌ Difficult to Test

❌ Difficult for Large Forms

❌ Validation Logic Scattered in HTML

❌ Hard to Maintain Complex Forms

Because of these limitations,

large Angular applications usually use Reactive Forms.

---

# Template-driven Form Workflow

```
User

↓

HTML Input

↓

ngModel

↓

Component Variable

↓

Validation

↓

ngSubmit

↓

Component Method

↓

Server
```

---

# Real-world Examples

Template-driven Forms are suitable for:

- Login Page

- Contact Form

- Feedback Form

- Newsletter Subscription

- Simple Registration Forms

---

# Common Beginner Mistakes

### ❌ Forgetting to import FormsModule

Error

```
Can't bind to 'ngModel'
since it isn't a known property.
```

Reason

```
FormsModule
```

is missing.

---

### ❌ Forgetting the name attribute

Example

```html
<input

[(ngModel)]="username">
```

Angular expects form controls using `ngModel` inside a form to have a unique `name` attribute.

Correct

```html
<input

name="username"

[(ngModel)]="username">
```

---

### ❌ Using Template-driven Forms for very large applications

Reactive Forms are a better choice for complex forms.

---

# Interview Trap

### Question

What is FormsModule?

**Answer**

FormsModule is an Angular module that enables Template-driven Forms and provides support for directives like `ngModel`.

---

### Question

What is ngForm?

**Answer**

`ngForm` is a directive automatically applied to HTML `<form>` elements. It tracks the form's values, validation state, and submission status.

---

### Question

Why is FormsModule required?

**Answer**

Without FormsModule, Angular cannot recognize directives such as `ngModel`, making Template-driven Forms unavailable.

---

# 🧠 How the Interviewer Thinks

```
What is a Template-driven Form?

↓

Which module is required?

↓

Why FormsModule?

↓

What is ngModel?

↓

What is ngForm?

↓

How do you submit a form?

↓

When would you choose Template-driven Forms?

↓

What are its limitations?

↓

Why do companies prefer Reactive Forms?
```

---

# ⚠️ Real Error I Faced While Learning

## Error

```
Can't bind to 'ngModel'
since it isn't a known property of 'input'.
```

## Reason

`FormsModule` was not imported inside `app.module.ts`.

## Solution

```ts
import { FormsModule } from '@angular/forms';

@NgModule({

imports: [

BrowserModule,

FormsModule

]

})
```

After importing `FormsModule`, Angular recognizes `ngModel` and the error is resolved.

---

# Quick Revision

✔ What is a Template-driven Form?

✔ What is FormsModule?

✔ Why is FormsModule required?

✔ What is `ngModel`?

✔ What is `ngForm`?

✔ What is a Template Reference Variable?

✔ What is `ngSubmit`?

✔ Advantages of Template-driven Forms

✔ Limitations of Template-driven Forms

---

# Chapter Summary

In this chapter, we learned how Angular handles Template-driven Forms using `FormsModule`, `ngModel`, and `ngForm`.

We covered:

- Template-driven Forms
- FormsModule
- ngModel
- ngForm
- Form Submission
- Validation
- Advantages
- Limitations

Template-driven Forms are an excellent starting point for learning Angular Forms. However, as applications become larger and more complex, Reactive Forms provide greater flexibility, maintainability, and control.

---

## Chapter Connection

Our Forms journey now looks like this:

```
Angular Forms

│

├── Introduction

└── Template-driven Forms

      │

      ├── FormsModule

      ├── ngModel

      ├── ngForm

      ├── ngSubmit

      └── Validation
```

The next chapter introduces **Reactive Forms**, where form structure, validation, and state management move from the HTML template into the Component using TypeScript.

---

➡️ **Next Chapter:** **12.3 Reactive Forms**

Topics Covered:

- What are Reactive Forms?
- Why Reactive Forms?
- ReactiveFormsModule
- FormGroup
- FormControl
- Initializing a Reactive Form
- Complete Reactive Form Workflow

# 12.3 Reactive Forms

In the previous chapter, we learned Template-driven Forms and understood how Angular manages forms using `ngModel`.

Template-driven Forms are suitable for simple applications.

However, as applications become larger, managing forms entirely in HTML becomes difficult.

To solve this problem, Angular provides **Reactive Forms**.

Reactive Forms move the entire form structure, validation, and state management into the Component using TypeScript.

This provides greater control, scalability, maintainability, and testability.

---

# What are Reactive Forms?

## Definition

A **Reactive Form** is a type of Angular Form in which the complete form model is created and managed inside the Component using TypeScript.

Instead of depending on HTML directives like `ngModel`, Reactive Forms use classes such as:

- FormGroup
- FormControl
- FormBuilder
- Validators
- FormArray

---

# Why do we need Reactive Forms?

Imagine a Registration Form containing:

- Name
- Email
- Password
- Confirm Password
- Mobile Number
- Address
- Skills
- Languages
- Experience

Now imagine adding:

- Required Validation
- Pattern Validation
- Custom Validation
- Dynamic Fields
- Conditional Controls

Managing all of this inside HTML becomes difficult.

Reactive Forms organize all the logic inside TypeScript, making the application easier to maintain.

---

# Internal Working

```
User

↓

Input Field

↓

FormControl

↓

FormGroup

↓

Validation

↓

Component

↓

Submit

↓

Server
```

Unlike Template-driven Forms,

the Component becomes the source of truth.

---

# Why are Reactive Forms preferred?

Reactive Forms provide:

✔ Better Control

✔ Better Validation

✔ Better Scalability

✔ Better Maintainability

✔ Easy Unit Testing

✔ Dynamic Forms

✔ Cleaner HTML

For these reasons, most enterprise Angular applications use Reactive Forms.

---

# ReactiveFormsModule

## Definition

`ReactiveFormsModule` is the Angular module that enables Reactive Forms.

Without importing this module,

Angular cannot recognize:

- formGroup
- formControlName
- formArrayName
- formControl

---

## Importing ReactiveFormsModule

Inside:

```
app.module.ts
```

```ts
import { ReactiveFormsModule } from '@angular/forms';
```

```ts
@NgModule({

imports:[

BrowserModule,

ReactiveFormsModule

]

})
```

---

## Internal Workflow

```
Application Starts

↓

Angular Reads AppModule

↓

ReactiveFormsModule Imported

↓

Reactive Form Directives Registered

↓

Reactive Forms Become Available
```

---

> 💡 **Remember**

Whenever you use:

- FormGroup
- FormControl
- FormBuilder

always import:

```
ReactiveFormsModule
```

---

# How Reactive Forms Work

Reactive Forms are built using a hierarchy.

```
FormGroup

│

├── FormControl

├── FormControl

├── FormControl

└── FormArray
```

Everything begins with a **FormGroup**.

Inside the FormGroup,

multiple FormControls are created.

Each FormControl manages one input field.

---

# Reactive Form Flow

```
Component

↓

Create FormGroup

↓

Create FormControls

↓

Connect HTML

↓

User Types

↓

Angular Updates FormControl

↓

Validation Runs

↓

Form State Updates

↓

Submit
```

Notice that the Component controls the form.

HTML simply displays it.

---

# Template-driven Forms vs Reactive Forms

| Template-driven Forms | Reactive Forms |
|------------------------|----------------|
| HTML Driven | TypeScript Driven |
| Uses ngModel | Uses FormGroup |
| Automatic Form Creation | Manual Form Creation |
| Suitable for Small Forms | Suitable for Large Forms |
| Less Control | Full Control |
| Harder to Test | Easier to Test |

---

# Real-world Applications

Reactive Forms are commonly used for:

- Login System
- Registration Form
- Banking Applications
- Hospital Management
- Student Management
- Employee Management
- E-commerce Checkout
- Admin Dashboard

---

# Our Learning Journey

This handbook follows the same path in which I learned Reactive Forms.

```
ReactiveFormsModule

↓

FormGroup

↓

FormControl

↓

Validators

↓

Validation Messages

↓

FormBuilder

↓

FormArray

↓

Custom Validators

↓

Registration Form

↓

CRUD Forms
```

Each topic will be covered in the upcoming chapters with practical examples.

---

# Common Beginner Mistakes

### ❌ Forgetting to import ReactiveFormsModule

Angular cannot recognize:

```
formGroup
```

or

```
formControlName
```

---

### ❌ Thinking Reactive Forms use ngModel

Reactive Forms do not depend on `ngModel`.

Instead, they use:

- formGroup
- formControlName

---

### ❌ Writing validation inside HTML

Reactive Forms encourage keeping validation logic inside the Component.

This keeps the HTML clean and easier to maintain.

---

# Interview Trap

### Question

What are Reactive Forms?

**Answer**

Reactive Forms are Angular Forms in which the form model is created and managed inside the Component using TypeScript. They provide better control, validation, scalability, and maintainability.

---

### Question

Which module is required for Reactive Forms?

**Answer**

ReactiveFormsModule.

Without importing ReactiveFormsModule, Angular cannot recognize directives such as `formGroup` and `formControlName`.

---

### Question

Why are Reactive Forms preferred over Template-driven Forms?

**Answer**

Reactive Forms provide better control, stronger validation, easier testing, improved maintainability, and are suitable for complex applications.

---

# 🧠 How the Interviewer Thinks

```
What is a Reactive Form?

↓

Why Reactive Forms?

↓

ReactiveFormsModule?

↓

Difference from Template-driven Forms?

↓

Why do enterprises use Reactive Forms?

↓

What classes are used?

↓

Explain the workflow.

↓

Which project have you implemented using Reactive Forms?
```

---

# ⚠️ Real Error I Faced While Learning

## Error

```
Can't bind to 'formGroup'
since it isn't a known property of 'form'
```

## Reason

`ReactiveFormsModule` was not imported inside `app.module.ts`.

---

## Solution

```ts
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

imports:[

BrowserModule,

ReactiveFormsModule

]

})
```

After importing `ReactiveFormsModule`, Angular recognizes `formGroup`, `formControlName`, and other Reactive Form directives.

---

# Quick Revision

✔ What are Reactive Forms?

✔ Why Reactive Forms?

✔ ReactiveFormsModule

✔ Internal Working

✔ Reactive Form Hierarchy

✔ Workflow

✔ Difference from Template-driven Forms

✔ Common Beginner Mistakes

---

# Chapter Summary

In this chapter, we introduced Reactive Forms and understood why they are the preferred approach for building complex Angular forms.

We covered:

- Reactive Forms
- ReactiveFormsModule
- Internal Workflow
- Reactive Form Hierarchy
- Advantages
- Comparison with Template-driven Forms
- Real debugging experience

This chapter serves as the foundation for the upcoming chapters, where we will build complete Reactive Forms step by step.

---

## Chapter Connection

Reactive Forms are built using several classes.

The first and most important class is:

```
FormGroup
```

A FormGroup acts as the container for the entire form.

Inside the FormGroup, multiple FormControls are created.

Understanding FormGroup is the first step toward mastering Reactive Forms.

---

➡️ **Next Chapter:** **12.4 FormGroup**

Topics Covered:

- What is FormGroup?
- Creating a FormGroup
- FormGroup Syntax
- Form Hierarchy
- Accessing Form Values
- FormGroup Properties
- Real-world Examples

# 12.4 FormGroup

In the previous chapter, we learned what Reactive Forms are and why they are preferred for building complex forms.

We also learned that Reactive Forms are built using several classes.

The first and most important class is **FormGroup**.

Every Reactive Form begins with a FormGroup.

Without a FormGroup, Angular cannot organize multiple form controls into a single form.

---

# What is FormGroup?

## Definition

A **FormGroup** is a collection of multiple FormControls.

It acts as the parent container that manages the entire form.

A FormGroup groups related FormControls together and tracks their values, validation status, and overall state.

---

# Why do we need FormGroup?

Imagine a Registration Form.

It contains:

- Name
- Email
- Password
- Confirm Password

Each field is different.

Instead of managing every field separately,

Angular groups them together inside one FormGroup.

This makes the entire form easier to manage.

---

## Internal Working

```
Registration Form

↓

FormGroup

↓

FormControl

↓

Name

↓

Email

↓

Password

↓

Confirm Password
```

---

# Real-world Example

Suppose we are creating an Employee Registration Form.

It contains:

- Employee Name
- Email
- Department
- Salary

Instead of handling every input individually,

FormGroup manages all of them together.

---

# Importing FormGroup

Before using FormGroup,

import it from Angular Forms.

```ts
import { FormGroup } from '@angular/forms';
```

---

# Creating a FormGroup

Example

```ts
registrationForm = new FormGroup({

});
```

This creates an empty FormGroup.

Currently,

it contains no FormControls.

---

# FormGroup with FormControls

Example

```ts
registrationForm = new FormGroup({

name:new FormControl(),

email:new FormControl(),

password:new FormControl(),

confirmPassword:new FormControl()

});
```

Now,

the FormGroup manages four FormControls.

---

## Internal Hierarchy

```
registrationForm

│

├── name

├── email

├── password

└── confirmPassword
```

Every FormControl belongs to the FormGroup.

---

# Connecting FormGroup with HTML

Template

```html
<form

[formGroup]="registrationForm">

</form>
```

Angular now connects the HTML form with the FormGroup created inside the Component.

---

# Internal Workflow

```
Component

↓

Creates FormGroup

↓

Creates FormControls

↓

HTML Uses formGroup

↓

User Types

↓

FormGroup Updates

↓

Validation Runs

↓

Form State Changes
```

---

# Accessing Form Values

Angular stores every input value inside the FormGroup.

Example

```ts
console.log(

this.registrationForm.value

);
```

Output

```json
{

"name":"Dhikshanth",

"email":"abc@gmail.com",

"password":"123",

"confirmPassword":"123"

}
```

---

# Accessing Individual Controls

Sometimes we need only one field.

Example

```ts
this.registrationForm.get('email')
```

or

```ts
this.registrationForm.controls['email']
```

Both access the Email FormControl.

---

# FormGroup Properties

Angular automatically provides useful properties.

Some commonly used properties are:

```
value

valid

invalid

dirty

pristine

touched

untouched

pending

disabled

enabled
```

These properties help us understand the current state of the form.

---

# What does FormGroup manage?

FormGroup manages:

✔ Form Values

✔ Validation

✔ Form Status

✔ Form Controls

✔ Form Submission State

---

# Real-world Applications

FormGroup is used in:

- Registration Forms
- Login Forms
- Banking Applications
- Hospital Management
- Student Management
- Employee Management
- Shopping Checkout
- Admin Dashboards

---

# Common Beginner Mistakes

### ❌ Creating FormControls without a FormGroup

Incorrect

```ts
name = new FormControl();

email = new FormControl();
```

This works,

but becomes difficult to manage as the form grows.

Instead,

group related FormControls inside one FormGroup.

---

### ❌ Forgetting to connect FormGroup in HTML

Component

```ts
registrationForm = new FormGroup({

});
```

HTML

```html
<form>

</form>
```

Angular cannot connect the Component and the Template.

Correct

```html
<form

[formGroup]="registrationForm">

</form>
```

---

### ❌ Thinking FormGroup stores only values

FormGroup stores much more than values.

It also manages:

- Validation
- Form State
- Status
- Child Controls

---

# Interview Trap

### Question

What is FormGroup?

**Answer**

FormGroup is a collection of multiple FormControls. It acts as the parent container that manages the entire form, including values, validation, and form state.

---

### Question

Can a FormGroup exist without FormControls?

**Answer**

Yes.

A FormGroup can be created without FormControls, but it will not manage any input fields until FormControls are added.

---

### Question

Can one FormGroup contain another FormGroup?

**Answer**

Yes.

Angular supports nested FormGroups for building complex forms.

Example:

```
Employee Form

↓

Personal Details

↓

Address Details

↓

Emergency Contact
```

Each section can have its own FormGroup.

---

# 🧠 How the Interviewer Thinks

```
What is FormGroup?

↓

Why do we need FormGroup?

↓

Can FormGroup exist alone?

↓

What does FormGroup store?

↓

How do you connect it to HTML?

↓

How do you access form values?

↓

Can FormGroups be nested?
```

---

# ⚠️ Real Error I Faced While Learning

## Error

```
Can't bind to 'formGroup'
since it isn't a known property of 'form'
```

### Reason

`ReactiveFormsModule` was not imported.

### Solution

```ts
imports:[

BrowserModule,

ReactiveFormsModule

]
```

---

# Quick Revision

✔ What is FormGroup?

✔ Why do we need FormGroup?

✔ Creating a FormGroup

✔ Connecting FormGroup to HTML

✔ Accessing Form Values

✔ FormGroup Properties

✔ Nested FormGroups

✔ Common Beginner Mistakes

---

# Chapter Summary

In this chapter, we learned that FormGroup is the parent container of every Reactive Form.

We covered:

- What FormGroup is
- Why FormGroup is needed
- Creating FormGroups
- Connecting FormGroup with HTML
- Accessing values
- FormGroup properties
- Nested FormGroups

Understanding FormGroup is essential because every Reactive Form is built around it.

---

## Chapter Connection

Now that we understand the parent container,

the next step is to understand what actually lives inside the FormGroup.

Those are called **FormControls**.

```
Reactive Form

↓

FormGroup

↓

FormControls

↓

Input Fields
```

Without FormControls,

a FormGroup has nothing to manage.

---

➡️ **Next Chapter:** **12.5 FormControl**

Topics Covered:

- What is FormControl?
- Creating FormControls
- Initial Values
- FormControl State
- FormControl Properties
- FormControl Methods
- Accessing FormControl Values
- Real-world Examples

# 12.4 FormGroup

In the previous chapter, we learned what Reactive Forms are and why they are preferred for building complex forms.

We also learned that Reactive Forms are built using several classes.

The first and most important class is **FormGroup**.

Every Reactive Form begins with a FormGroup.

Without a FormGroup, Angular cannot organize multiple form controls into a single form.

---

# What is FormGroup?

## Definition

A **FormGroup** is a collection of multiple FormControls.

It acts as the parent container that manages the entire form.

A FormGroup groups related FormControls together and tracks their values, validation status, and overall state.

---

# Why do we need FormGroup?

Imagine a Registration Form.

It contains:

- Name
- Email
- Password
- Confirm Password

Each field is different.

Instead of managing every field separately,

Angular groups them together inside one FormGroup.

This makes the entire form easier to manage.

---

## Internal Working

```
Registration Form

↓

FormGroup

↓

FormControl

↓

Name

↓

Email

↓

Password

↓

Confirm Password
```

---

# Real-world Example

Suppose we are creating an Employee Registration Form.

It contains:

- Employee Name
- Email
- Department
- Salary

Instead of handling every input individually,

FormGroup manages all of them together.

---

# Importing FormGroup

Before using FormGroup,

import it from Angular Forms.

```ts
import { FormGroup } from '@angular/forms';
```

---

# Creating a FormGroup

Example

```ts
registrationForm = new FormGroup({

});
```

This creates an empty FormGroup.

Currently,

it contains no FormControls.

---

# FormGroup with FormControls

Example

```ts
registrationForm = new FormGroup({

name:new FormControl(),

email:new FormControl(),

password:new FormControl(),

confirmPassword:new FormControl()

});
```

Now,

the FormGroup manages four FormControls.

---

## Internal Hierarchy

```
registrationForm

│

├── name

├── email

├── password

└── confirmPassword
```

Every FormControl belongs to the FormGroup.

---

# Connecting FormGroup with HTML

Template

```html
<form

[formGroup]="registrationForm">

</form>
```

Angular now connects the HTML form with the FormGroup created inside the Component.

---

# Internal Workflow

```
Component

↓

Creates FormGroup

↓

Creates FormControls

↓

HTML Uses formGroup

↓

User Types

↓

FormGroup Updates

↓

Validation Runs

↓

Form State Changes
```

---

# Accessing Form Values

Angular stores every input value inside the FormGroup.

Example

```ts
console.log(

this.registrationForm.value

);
```

Output

```json
{

"name":"Dhikshanth",

"email":"abc@gmail.com",

"password":"123",

"confirmPassword":"123"

}
```

---

# Accessing Individual Controls

Sometimes we need only one field.

Example

```ts
this.registrationForm.get('email')
```

or

```ts
this.registrationForm.controls['email']
```

Both access the Email FormControl.

---

# FormGroup Properties

Angular automatically provides useful properties.

Some commonly used properties are:

```
value

valid

invalid

dirty

pristine

touched

untouched

pending

disabled

enabled
```

These properties help us understand the current state of the form.

---

# What does FormGroup manage?

FormGroup manages:

✔ Form Values

✔ Validation

✔ Form Status

✔ Form Controls

✔ Form Submission State

---

# Real-world Applications

FormGroup is used in:

- Registration Forms
- Login Forms
- Banking Applications
- Hospital Management
- Student Management
- Employee Management
- Shopping Checkout
- Admin Dashboards

---

# Common Beginner Mistakes

### ❌ Creating FormControls without a FormGroup

Incorrect

```ts
name = new FormControl();

email = new FormControl();
```

This works,

but becomes difficult to manage as the form grows.

Instead,

group related FormControls inside one FormGroup.

---

### ❌ Forgetting to connect FormGroup in HTML

Component

```ts
registrationForm = new FormGroup({

});
```

HTML

```html
<form>

</form>
```

Angular cannot connect the Component and the Template.

Correct

```html
<form

[formGroup]="registrationForm">

</form>
```

---

### ❌ Thinking FormGroup stores only values

FormGroup stores much more than values.

It also manages:

- Validation
- Form State
- Status
- Child Controls

---

# Interview Trap

### Question

What is FormGroup?

**Answer**

FormGroup is a collection of multiple FormControls. It acts as the parent container that manages the entire form, including values, validation, and form state.

---

### Question

Can a FormGroup exist without FormControls?

**Answer**

Yes.

A FormGroup can be created without FormControls, but it will not manage any input fields until FormControls are added.

---

### Question

Can one FormGroup contain another FormGroup?

**Answer**

Yes.

Angular supports nested FormGroups for building complex forms.

Example:

```
Employee Form

↓

Personal Details

↓

Address Details

↓

Emergency Contact
```

Each section can have its own FormGroup.

---

# 🧠 How the Interviewer Thinks

```
What is FormGroup?

↓

Why do we need FormGroup?

↓

Can FormGroup exist alone?

↓

What does FormGroup store?

↓

How do you connect it to HTML?

↓

How do you access form values?

↓

Can FormGroups be nested?
```

---

# ⚠️ Real Error I Faced While Learning

## Error

```
Can't bind to 'formGroup'
since it isn't a known property of 'form'
```

### Reason

`ReactiveFormsModule` was not imported.

### Solution

```ts
imports:[

BrowserModule,

ReactiveFormsModule

]
```

---

# Quick Revision

✔ What is FormGroup?

✔ Why do we need FormGroup?

✔ Creating a FormGroup

✔ Connecting FormGroup to HTML

✔ Accessing Form Values

✔ FormGroup Properties

✔ Nested FormGroups

✔ Common Beginner Mistakes

---

# Chapter Summary

In this chapter, we learned that FormGroup is the parent container of every Reactive Form.

We covered:

- What FormGroup is
- Why FormGroup is needed
- Creating FormGroups
- Connecting FormGroup with HTML
- Accessing values
- FormGroup properties
- Nested FormGroups

Understanding FormGroup is essential because every Reactive Form is built around it.

---

## Chapter Connection

Now that we understand the parent container,

the next step is to understand what actually lives inside the FormGroup.

Those are called **FormControls**.

```
Reactive Form

↓

FormGroup

↓

FormControls

↓

Input Fields
```

Without FormControls,

a FormGroup has nothing to manage.

---

➡️ **Next Chapter:** **12.5 FormControl**

Topics Covered:

- What is FormControl?
- Creating FormControls
- Initial Values
- FormControl State
- FormControl Properties
- FormControl Methods
- Accessing FormControl Values
- Real-world Examples

# 12.5 FormControl

In the previous chapter, we learned that a FormGroup acts as the parent container of a Reactive Form.

However, a FormGroup alone cannot collect user input.

It needs child controls.

These child controls are called **FormControls**.

Every input field in a Reactive Form is represented by a FormControl.

Without FormControls, a FormGroup has no data to manage.

---

# What is FormControl?

## Definition

A **FormControl** is the smallest building block of a Reactive Form.

It represents a single input element and is responsible for managing:

- Value
- Validation
- State
- Status

Each input field has its own FormControl.

---

# Why do we need FormControl?

Imagine a Registration Form.

```
Name

Email

Password

Confirm Password
```

Each field stores different information.

Instead of manually tracking every input,

Angular creates one FormControl for each field.

---

## Internal Working

```
Input Field

↓

FormControl

↓

Stores Value

↓

Runs Validation

↓

Tracks State

↓

Updates FormGroup
```

Every FormControl reports its status back to the FormGroup.

---

# Importing FormControl

Before using FormControl,

import it.

```ts
import { FormControl } from '@angular/forms';
```

---

# Creating a FormControl

Example

```ts
name = new FormControl();
```

This creates an empty FormControl.

Initially,

its value is

```
null
```

until the user enters data or an initial value is provided.

---

# FormControl with Initial Value

Example

```ts
name = new FormControl("Dhikshanth");
```

Output

```
Dhikshanth
```

Angular automatically places this value inside the input field.

---

## Example inside FormGroup

```ts
registrationForm = new FormGroup({

name:new FormControl(""),

email:new FormControl(""),

password:new FormControl(""),

confirmPassword:new FormControl("")

});
```

Each FormControl manages one input field.

---

# Connecting FormControl to HTML

Template

```html
<form

[formGroup]="registrationForm">

<input

type="text"

formControlName="name">

<input

type="email"

formControlName="email">

</form>
```

Notice something important.

The HTML does **not** directly communicate with the Component.

Instead,

it communicates through the FormControl.

---

## Internal Workflow

```
User Types

↓

Input Field

↓

FormControl

↓

FormGroup

↓

Component

↓

Angular Updates UI
```

---

# Accessing FormControl Value

Method 1

```ts
this.registrationForm.get('name')?.value
```

Method 2

```ts
this.registrationForm.controls['name'].value
```

Output

```
Dhikshanth
```

---

# FormControl Properties

Angular automatically tracks many properties.

Some commonly used properties are:

```
value

valid

invalid

dirty

pristine

touched

untouched

pending

disabled

enabled

errors
```

These properties help us understand the current state of an input field.

---

# Understanding FormControl States

Suppose the user opens the Registration Form.

Initially,

```
Name

↓

Untouched

↓

Pristine
```

The user clicks inside the Name field.

```
Touched

↓

Still Pristine
```

The user types:

```
Dhikshanth
```

Now

```
Dirty

↓

Touched
```

The user deletes everything.

```
Dirty

↓

Touched
```

Notice something important.

Once a FormControl becomes **dirty**,

it remains dirty.

Even if the value returns to its original value,

Angular still remembers that the user modified it.

---

> 💡 **Remember**

`dirty`

means

"The value has been modified at least once."

It does **not** compare with the original value.

---

# Real Example

Suppose

```
Original Value

↓

Angular
```

User changes it to

```
React
```

Now

```
dirty = true
```

User changes it back to

```
Angular
```

Even now

```
dirty = true
```

because Angular remembers that the value was modified.

---

# FormControl Methods

Some commonly used methods are:

```
setValue()

patchValue()

reset()

disable()

enable()

markAsTouched()

markAsUntouched()

markAsDirty()

markAsPristine()

updateValueAndValidity()
```

Each of these methods will be covered in detail in the upcoming chapters.

---

# FormControl vs HTML Input

| HTML Input | FormControl |
|------------|-------------|
| Displays Input | Manages Input |
| Collects User Data | Stores User Data |
| No Validation Logic | Handles Validation |
| No State Tracking | Tracks Dirty, Touched, Valid, etc. |

---

# Real-world Applications

Every input field is managed using a FormControl.

Examples include:

- Username
- Email
- Password
- Mobile Number
- Address
- Salary
- Price
- Date
- Quantity

---

# Common Beginner Mistakes

### ❌ Thinking one FormControl manages the entire form

Incorrect.

One FormControl manages only one input field.

The complete form is managed by a FormGroup.

---

### ❌ Forgetting formControlName

Component

```ts
name:new FormControl()
```

HTML

```html
<input>
```

Angular cannot connect the input field.

Correct

```html
<input

formControlName="name">
```

---

### ❌ Confusing FormControl with FormGroup

FormControl

↓

Manages one input field.

FormGroup

↓

Manages the complete form.

---

# Interview Trap

### Question

What is FormControl?

**Answer**

A FormControl is the smallest building block of a Reactive Form. It manages the value, validation, and state of a single input field.

---

### Question

Can a FormControl exist without a FormGroup?

**Answer**

Yes.

A FormControl can exist independently.

However, in most applications, FormControls are grouped together inside a FormGroup to represent a complete form.

---

### Question

What is the difference between FormGroup and FormControl?

**Answer**

A FormControl manages a single input field.

A FormGroup manages a collection of FormControls and represents the complete form.

---

# 🧠 How the Interviewer Thinks

```
What is FormControl?

↓

Why do we need FormControl?

↓

Can FormControl exist independently?

↓

How do you connect it to HTML?

↓

How do you access its value?

↓

What properties does FormControl provide?

↓

Difference between FormControl and FormGroup?
```

---

# ⚠️ Real Concept I Learned While Practicing

While learning Reactive Forms, I observed an important behavior of FormControl states.

Suppose the initial value is:

```
Angular
```

The user changes it to:

```
React
```

Now:

```
dirty = true
```

The user changes it back to:

```
Angular
```

Even though the displayed value matches the original value,

```
dirty
```

remains

```
true
```

because Angular tracks whether the control has ever been modified.

Similarly,

```
pristine
```

becomes

```
false
```

once the control is modified and does not automatically become `true` again just because the value matches the original value.

---

# Quick Revision

✔ What is FormControl?

✔ Why do we need FormControl?

✔ Creating FormControls

✔ Initial Values

✔ Connecting FormControls to HTML

✔ Accessing Values

✔ FormControl Properties

✔ FormControl Methods

✔ Difference between FormGroup and FormControl

---

# Chapter Summary

In this chapter, we learned that FormControl is the fundamental building block of every Reactive Form.

We covered:

- What FormControl is
- Why FormControl is needed
- Creating FormControls
- Initial Values
- Connecting FormControls with HTML
- FormControl Properties
- FormControl Methods
- Common Mistakes

Every input field in a Reactive Form is represented by a FormControl, making it responsible for tracking user input, validation, and control state.

---

## Chapter Connection

Now that we understand:

```
FormGroup

↓

FormControl
```

the next step is learning how to create these objects more efficiently.

Instead of repeatedly writing:

```ts
new FormGroup({

name:new FormControl(),

email:new FormControl(),

password:new FormControl()

})
```

Angular provides a helper class called **FormBuilder**, which makes form creation cleaner and easier.

---

➡️ **Next Chapter:** **12.6 FormBuilder**

Topics Covered:

- What is FormBuilder?
- Why do we need FormBuilder?
- Creating Forms using FormBuilder
- FormBuilder Syntax
- Advantages over FormGroup
- Real-world Examples

# 12.6 FormBuilder

Until now, we created forms like this:

```ts
registrationForm = new FormGroup({

  name: new FormControl(''),

  email: new FormControl(''),

  password: new FormControl('')

});
```

As the number of fields increases, this approach becomes repetitive.

Angular provides **FormBuilder** to create Reactive Forms with less code.

---

# What is FormBuilder?

**FormBuilder** is an Angular service that simplifies the creation of `FormGroup`, `FormControl`, and `FormArray`.

Instead of manually creating every FormControl, FormBuilder generates them for us.

---

# Why do we need FormBuilder?

### Without FormBuilder

```ts
registrationForm = new FormGroup({

  name: new FormControl(''),

  email: new FormControl(''),

  password: new FormControl('')

});
```

---

### With FormBuilder

```ts
registrationForm = this.fb.group({

  name: [''],

  email: [''],

  password: ['']

});
```

Much cleaner and easier to maintain.

---

# Import

```ts
import { FormBuilder } from '@angular/forms';
```

---

# Inject FormBuilder

```ts
constructor(

  private fb: FormBuilder

) {}
```

Angular injects FormBuilder using **Dependency Injection**.

---

# Creating a Form

```ts
registrationForm = this.fb.group({

  name: [''],

  email: [''],

  password: [''],

  confirmPassword: ['']

});
```

---

# Workflow

```
FormBuilder

      │

      ▼

 Creates FormGroup

      │

      ▼

 Creates FormControls

      │

      ▼

 Connect to HTML
```

---

# HTML

```html
<form [formGroup]="registrationForm">

  <input
    type="text"
    formControlName="name">

  <input
    type="email"
    formControlName="email">

</form>
```

---

# FormBuilder vs FormGroup

| FormGroup | FormBuilder |
|-----------|-------------|
| More Code | Less Code |
| Manual FormControl Creation | Automatic FormControl Creation |
| Good for Small Forms | Best for Large Forms |
| More Verbose | Cleaner Syntax |

---

# Advantages

- Less Boilerplate Code
- Better Readability
- Easy to Maintain
- Easy to Add Validators
- Preferred in Enterprise Projects

---

# Real-world Example

Large forms like:

- Registration
- Employee Details
- Student Admission
- Banking Applications

are usually created using **FormBuilder**.

---

# Common Mistakes

### ❌ Forgetting Dependency Injection

Incorrect

```ts
registrationForm = this.fb.group({

});
```

without injecting FormBuilder.

Correct

```ts
constructor(

private fb: FormBuilder

){}
```

---

### ❌ Forgetting ReactiveFormsModule

Without importing:

```ts
ReactiveFormsModule
```

Reactive Forms will not work.

---

# Interview Questions

### What is FormBuilder?

FormBuilder is an Angular service used to create Reactive Forms with less code.

---

### Is FormBuilder mandatory?

No.

Reactive Forms can be created using FormGroup and FormControl directly.

FormBuilder simply reduces boilerplate code.

---

### Which approach is preferred?

Most enterprise Angular applications prefer **FormBuilder** because it makes forms cleaner and easier to maintain.

---

# 📌 Key Takeaways

✔ FormBuilder is a service.

✔ It simplifies Reactive Form creation.

✔ Uses Dependency Injection.

✔ Internally creates FormGroup and FormControls.

✔ Preferred for large applications.

---

## Next Chapter

**12.7 Validators**

# 12.7 Validators

A form that accepts any value is not useful.

Imagine a Registration Form where:

- Name is empty
- Email is invalid
- Password contains only `123`

The form still submits.

This leads to invalid data.

Angular provides **Validators** to ensure that user input follows specific rules before submission.

---

# What are Validators?

**Validators** are built-in Angular functions used to validate FormControl values.

They ensure that user input satisfies the required conditions.

---

# Why do we need Validators?

Without validation:

```
Name      →

Email     → abc

Password  → 123
```

The application may store incorrect data.

With Validators:

```
❌ Invalid Name

❌ Invalid Email

❌ Weak Password

✔ Correct Data
```

---

# Import

```ts
import { Validators } from '@angular/forms';
```

---

# Basic Syntax

```ts
registrationForm = this.fb.group({

  name: ['', Validators.required]

});
```

Multiple validators

```ts
name: [

'',

[

Validators.required,

Validators.minLength(3)

]

]
```

---

# Common Validators

| Validator | Purpose |
|-----------|----------|
| required | Field cannot be empty |
| minLength() | Minimum number of characters |
| maxLength() | Maximum number of characters |
| email | Valid email format |
| pattern() | Custom Regular Expression |
| min() | Minimum numeric value |
| max() | Maximum numeric value |
| requiredTrue | Checkbox must be checked |

---

# Validators.required

Ensures the field is not empty.

```ts
name:[

'',

Validators.required

]
```

---

# Validators.minLength()

Ensures minimum character length.

```ts
password:[

'',

Validators.minLength(8)

]
```

---

# Validators.maxLength()

Limits maximum character length.

```ts
username:[

'',

Validators.maxLength(20)

]
```

---

# Validators.email

Checks whether the entered value is a valid email.

```ts
email:[

'',

Validators.email

]
```

Examples

```
✔ abc@gmail.com

✔ user123@yahoo.com

❌ abc

❌ gmail.com

❌ @gmail.com
```

---

# Validators.pattern()

Used when built-in validators are not enough.

Example

```ts
name:[

'',

Validators.pattern(

'^[A-Z][a-z]+$'

)

]
```

Meaning

```
^

Start

[A-Z]

First letter uppercase

[a-z]+

Remaining letters lowercase

$

End
```

Examples

```
✔ Rahul

✔ Dhikshanth

❌ rahul

❌ RAHUL

❌ Rahul123
```

---

# Password Pattern

Example

```ts
password:[

'',

Validators.pattern(

'^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&]).{8,}$'

)

]
```

Rules

- Minimum 8 characters
- One uppercase letter
- One lowercase letter
- One number
- One special character

Examples

```
✔ Angular@123

✔ Welcome@2026

❌ angular

❌ 12345678

❌ Password
```

---

# Validation Messages

Instead of displaying errors immediately,

show them only after user interaction.

Example

```html
<input

formControlName="name">

<div

*ngIf="

registrationForm.get('name')?.touched &&

registrationForm.get('name')?.errors?.['required']

">

Name is required.

</div>
```

---

# Workflow

```
User Types

      │

      ▼

FormControl

      │

      ▼

Validators

      │

      ▼

Valid ?

   │        │

   ▼        ▼

Yes       No

 │          │

 ▼          ▼

Submit   Show Error
```

---

# Combining Validators

```ts
email:[

'',

[

Validators.required,

Validators.email

]

]
```

Angular checks every validator.

---

# Accessing Validation Errors

```ts
registrationForm

.get('email')

?.errors
```

Possible Output

```ts
{

required:true

}
```

or

```ts
{

email:true

}
```

---

# Common Mistakes

### ❌ Forgetting Validators array

Incorrect

```ts
name:[

'',

Validators.required,

Validators.minLength(3)

]
```

Correct

```ts
name:[

'',

[

Validators.required,

Validators.minLength(3)

]

]
```

---

### ❌ Showing validation errors immediately

Bad UX.

Instead,

display errors only after:

```
touched

or

dirty
```

---

### ❌ Using Regex without understanding it

Always understand what each part of the pattern does.

Otherwise debugging becomes difficult.

---

# ⚠️ Real Validation Patterns I Used

### Name

```regex
^[A-Z][a-z]+$
```

First letter uppercase.

Remaining letters lowercase.

---

### Email

```ts
Validators.email
```

---

### Password

```regex
^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$
```

At least:

- 1 Uppercase
- 1 Lowercase
- 1 Number
- 1 Special Character
- 8 Characters

---

# 🎯 Interview Nuggets

✔ Validators are built-in Angular functions.

✔ Multiple validators are passed as an array.

✔ `pattern()` is used for custom validation.

✔ Validation errors are available using `.errors`.

✔ Use `touched` or `dirty` before displaying error messages.

✔ Validators execute automatically whenever the control value changes.

---

# 📌 Key Takeaways

- Validators ensure correct user input.
- Angular provides many built-in validators.
- `pattern()` allows custom validation.
- Multiple validators can be combined.
- Display validation messages only after user interaction.
- Validation improves both data quality and user experience.

---

## Next Chapter

**12.8 FormArray**

# 12.8 FormArray

Until now, every field in our form had a fixed structure.

Example:

- Name
- Email
- Password

The number of fields never changed.

But what if the user can select multiple values?

Examples:

- Languages Known
- Skills
- Hobbies
- Certifications
- Family Members

The number of values is dynamic.

Angular provides **FormArray** for such scenarios.

---

# What is FormArray?

A **FormArray** is a collection of FormControls where the number of controls can change dynamically.

Unlike FormGroup, where control names are fixed, FormArray stores controls using indexes.

---

# Why do we need FormArray?

Suppose a Registration Form contains:

```
Languages Known

☐ Java

☐ Python

☐ JavaScript

☐ Angular
```

A user may select:

- One language
- Two languages
- All languages
- None

Since the number of selected values is dynamic, FormArray is the right choice.

---

# FormGroup vs FormArray

| FormGroup | FormArray |
|------------|-----------|
| Stores controls using names | Stores controls using indexes |
| Fixed structure | Dynamic structure |
| Best for known fields | Best for variable fields |

---

# Import

```ts
import {

FormArray,

FormControl

} from '@angular/forms';
```

---

# Creating a FormArray

```ts
registrationForm = this.fb.group({

languages: this.fb.array([])

});
```

Initially,

```
languages = [ ]
```

The array is empty.

---

# HTML Example

```html
<div formArrayName="languages">

<input

type="checkbox">

Java

<input

type="checkbox">

Python

<input

type="checkbox">

Angular

</div>
```

The checkboxes are connected to the FormArray.

---

# Adding Values

Example

```ts
languages.push(

new FormControl('Java')

);
```

Result

```
languages

↓

[

"Java"

]
```

---

# Removing Values

```ts
languages.removeAt(index);
```

Angular removes the selected item from the array.

---

# Accessing FormArray

```ts
get languages(){

return this.registrationForm.get(

'languages'

) as FormArray;

}
```

Now we can use

```ts
this.languages
```

instead of repeatedly writing

```ts
this.registrationForm.get('languages')
```

---

# Common Methods

| Method | Purpose |
|---------|----------|
| push() | Add a control |
| removeAt() | Remove a control |
| at() | Access control by index |
| clear() | Remove all controls |
| length | Number of controls |

---

# Workflow

```
Checkbox Selected

       │

       ▼

FormArray

       │

       ▼

Add FormControl

       │

       ▼

Store Value

       │

       ▼

Submit Form
```

---

# Real-world Applications

FormArray is commonly used for:

- Languages
- Skills
- Hobbies
- Phone Numbers
- Addresses
- Dynamic Questions
- Certifications

---

# Common Mistakes

### ❌ Using FormGroup instead of FormArray

If the number of fields changes dynamically,

use FormArray.

---

### ❌ Forgetting to cast

Incorrect

```ts
this.registrationForm.get('languages')
```

Correct

```ts
this.registrationForm.get(

'languages'

) as FormArray
```

---

### ❌ Using push() on FormGroup

Only FormArray supports:

```ts
push()
```

---

# ⚠️ Real Errors I Faced

## Error

```
Property 'languages'
does not exist on TaskComponent
```

### Reason

The getter for the FormArray was not created.

### Solution

```ts
get languages(){

return this.registrationForm.get(

'languages'

) as FormArray;

}
```

---

## Challenge

I was able to create the checkboxes,

but I initially struggled to print only the selected language values.

Understanding how FormArray stores controls and how to access its values helped me solve the problem.

---

# 🧠 How I Remember It

```
FormGroup

↓

Cupboard

Each drawer has a fixed name.

Name

Email

Password

----------------------------

FormArray

↓

Shopping Basket

Items can be added.

Items can be removed.

The size changes dynamically.
```

Whenever the number of controls can change,

I think of **FormArray as a growing and shrinking basket**.

---

# 🎯 Interview Nuggets

✔ FormArray stores controls using indexes.

✔ Used when the number of controls is dynamic.

✔ Supports `push()` and `removeAt()`.

✔ Usually used for checkboxes and dynamic forms.

✔ FormArray is often placed inside a FormGroup.

---

# 📌 Key Takeaways

- FormArray manages dynamic controls.
- Best suited for checkboxes and repeating fields.
- Controls are accessed by index.
- Supports adding and removing controls at runtime.
- Commonly used in enterprise applications for dynamic forms.

---

## Next Chapter

**12.9 Form Methods**

Topics Covered:

- setValue()
- patchValue()
- reset()
- markAllAsTouched()
- markAsPristine()
- markAsDirty()
- disable()
- enable()

# 12.9 Form Methods

Reactive Forms provide several built-in methods to read, update, reset, and manage the state of a form.

These methods are frequently used while:

- Loading existing data
- Editing records
- Resetting forms
- Displaying validation messages
- Enabling/Disabling controls

---

# Common Form Methods

| Method | Purpose |
|---------|---------|
| setValue() | Updates all form controls |
| patchValue() | Updates selected form controls |
| reset() | Resets the form |
| markAllAsTouched() | Marks all controls as touched |
| markAsTouched() | Marks a single control as touched |
| markAsPristine() | Marks control as pristine |
| markAsDirty() | Marks control as dirty |
| disable() | Disables a control |
| enable() | Enables a control |
| updateValueAndValidity() | Re-runs validation |

---

# setValue()

## What is it?

Updates **every control** in the FormGroup.

Every field must be provided.

---

## Syntax

```ts
this.registrationForm.setValue({

name: 'Dhikshanth',

email: 'abc@gmail.com',

password: 'Angular@123',

confirmPassword: 'Angular@123'

});
```

---

## Rule

✔ Every FormControl must be included.

Missing even one control results in an error.

---

# patchValue()

## What is it?

Updates only the specified controls.

Other controls remain unchanged.

---

## Syntax

```ts
this.registrationForm.patchValue({

email: 'new@gmail.com'

});
```

Only the email field is updated.

---

# setValue() vs patchValue()

| setValue() | patchValue() |
|-------------|--------------|
| Updates all controls | Updates selected controls |
| Every control is required | Only required controls are updated |
| Throws error if a field is missing | No error for missing fields |
| Used when complete data is available | Used for partial updates |

---

# reset()

## What is it?

Resets the form to its initial state.

---

## Syntax

```ts
this.registrationForm.reset();
```

---

## After reset()

- Values are cleared
- Validation state is reset
- dirty → false
- pristine → true
- touched → false

---

# markAllAsTouched()

## What is it?

Marks every FormControl as touched.

Useful when the user clicks Submit without filling the form.

---

## Syntax

```ts
this.registrationForm.markAllAsTouched();
```

---

## Why do we use it?

Without this method,

validation messages appear only after clicking individual fields.

With `markAllAsTouched()`,

all validation messages appear immediately.

---

# markAsTouched()

Marks only a single FormControl as touched.

```ts
this.registrationForm

.get('email')

?.markAsTouched();
```

---

# markAsDirty()

Marks a control as dirty.

```ts
this.registrationForm

.get('name')

?.markAsDirty();
```

Usually Angular handles this automatically after user input.

---

# markAsPristine()

Marks a control as pristine.

```ts
this.registrationForm

.get('name')

?.markAsPristine();
```

Useful after saving or resetting a form.

---

# disable()

Disables a control.

```ts
this.registrationForm

.get('email')

?.disable();
```

The user cannot edit the field.

---

# enable()

Enables a disabled control.

```ts
this.registrationForm

.get('email')

?.enable();
```

---

# updateValueAndValidity()

Forces Angular to recalculate:

- Value
- Validation
- Status

```ts
this.registrationForm

.get('password')

?.updateValueAndValidity();
```

---

# Workflow

```
User Action

      │

      ▼

Form Method

      │

      ▼

Angular Updates

      │

      ▼

Form State

      │

      ▼

UI Refresh
```

---

# Real-world Examples

### Edit Employee

```ts
this.employeeForm.patchValue(employee);
```

---

### View Profile

```ts
this.profileForm

.get('email')

?.disable();
```

---

### Registration

```ts
if(this.registrationForm.invalid){

this.registrationForm.markAllAsTouched();

return;

}
```

---

### Clear Form

```ts
this.registrationForm.reset();
```

---

# ⚠️ Real Concepts I Learned

## markAllAsTouched()

While building the registration form,

I noticed that validation messages were not displayed until I clicked inside each input.

Using:

```ts
this.registrationForm.markAllAsTouched();
```

allowed Angular to display all validation messages immediately after clicking the Submit button.

---

## setValue() vs patchValue()

Initially,

I thought both methods worked the same way.

Later I understood:

```
setValue()

↓

Complete Update

---------------------

patchValue()

↓

Partial Update
```

This difference becomes important while editing records.

---

# 🧠 How I Remember It

```
setValue()

↓

School Attendance

Every student must be present.

Missing one?

Error.

------------------------

patchValue()

↓

Teacher correcting only one student's mark.

Only selected students are updated.
```

---

# 🎯 Interview Nuggets

✔ `setValue()` updates all controls.

✔ `patchValue()` updates selected controls.

✔ `markAllAsTouched()` is commonly used before form submission.

✔ `reset()` restores the initial form state.

✔ `disable()` removes user interaction.

✔ `enable()` restores user interaction.

---

# 📌 Key Takeaways

- Use `setValue()` for complete updates.
- Use `patchValue()` for partial updates.
- Use `markAllAsTouched()` before submitting invalid forms.
- Use `reset()` after successful submission.
- `disable()` and `enable()` control user interaction.

---

## Next Chapter

**12.10 Custom Validators**

Topics Covered:

- What are Custom Validators?
- Creating Custom Validators
- Password Match Validator
- Reusable Validators
- Cross-field Validation

# 12.10 Custom Validators

Angular provides many built-in validators such as:

- `required`
- `email`
- `minLength`
- `maxLength`
- `pattern`

These validators are suitable for most scenarios.

However, some validations depend on business requirements.

Examples:

- Password and Confirm Password must match.
- User must be at least 18 years old.
- Username must not contain spaces.
- Start Date must be before End Date.

For such cases, Angular allows us to create **Custom Validators**.

---

# What are Custom Validators?

A **Custom Validator** is a user-defined validation function that checks conditions which are not covered by Angular's built-in validators.

It returns:

- `null` → Validation Passed
- Validation Error Object → Validation Failed

---

# Why do we need Custom Validators?

Suppose the user enters:

```
Password

Angular@123

Confirm Password

Angular@12
```

Both fields satisfy:

- Required
- Minimum Length
- Pattern

But the passwords are different.

Built-in validators cannot compare two different controls.

A Custom Validator solves this problem.

---

# Workflow

```
User Input

      │

      ▼

FormGroup

      │

      ▼

Custom Validator

      │

      ▼

Passwords Match?

   │          │

   ▼          ▼

 Yes         No

 │            │

 ▼            ▼

Submit     Show Error
```

---

# Creating a Custom Validator

```ts
import {

AbstractControl,

ValidationErrors

} from '@angular/forms';

export function passwordMatchValidator(

control: AbstractControl

): ValidationErrors | null {

const password = control.get('password')?.value;

const confirmPassword = control.get('confirmPassword')?.value;

if(password === confirmPassword){

return null;

}

return {

passwordMismatch: true

};

}
```

---

# Using the Validator

```ts
registrationForm = this.fb.group({

name:[''],

email:[''],

password:[''],

confirmPassword:['']

},

{

validators: passwordMatchValidator

}

);
```

Angular automatically executes the validator whenever the form value changes.

---

# Displaying the Error

```html
<div

*ngIf="

registrationForm.errors?.['passwordMismatch']

">

Passwords do not match.

</div>
```

---

# Reusable Custom Validators

One advantage of Custom Validators is reusability.

The same validator can be used in:

- Registration Form
- Change Password
- Reset Password

without rewriting the logic.

---

# Common Use Cases

Custom Validators are commonly used for:

- Password Match
- Confirm Email
- Age Validation
- Date Comparison
- Username Rules
- Business Rules
- Duplicate Entry Validation

---

# Built-in vs Custom Validators

| Built-in Validators | Custom Validators |
|----------------------|-------------------|
| Provided by Angular | Created by Developer |
| General Purpose | Business-specific |
| Easy to Use | Requires Logic |
| Single Control Validation | Can Validate Multiple Controls |

---

# Common Mistakes

### ❌ Using FormControl instead of FormGroup

Password comparison requires access to two controls.

Always apply the validator to the **FormGroup**, not an individual FormControl.

---

### ❌ Returning `true` or `false`

Incorrect

```ts
return true;
```

Correct

```ts
return null;
```

or

```ts
return {

passwordMismatch:true

};
```

---

### ❌ Forgetting to display validation messages

Creating the validator alone is not enough.

Always show meaningful feedback to the user.

---

# ⚠️ Real Concept I Learned

While learning Reactive Forms,

I initially thought every validation could be handled using `Validators.pattern()`.

Later I understood:

- `pattern()` validates a single field.
- Custom Validators can compare multiple fields.

This makes them suitable for business-specific validation.

---

# 🧠 How I Remember It

```
Built-in Validator

↓

Security Guard

Checks one person at the gate.

----------------------------

Custom Validator

↓

Manager

Checks relationships between multiple people.

Example:

Password

↓

Confirm Password
```

Whenever validation depends on more than one field,

I immediately think of **Custom Validators**.

---

# 🎯 Interview Nuggets

✔ Custom Validators are user-defined validation functions.

✔ Return `null` for valid data.

✔ Return an error object for invalid data.

✔ Group-level validators are used for comparing multiple controls.

✔ Common example: Password & Confirm Password matching.

---

# 📌 Key Takeaways

- Built-in validators cannot solve every validation requirement.
- Custom Validators handle business-specific rules.
- They are reusable across multiple forms.
- They can validate multiple FormControls together.
- Password matching is the most common example.

---

## Mini Project Progress

Our Registration Form now supports:

```
Registration Form

├── Name ✔

├── Email ✔

├── Password ✔

├── Confirm Password ✔

├── Built-in Validators ✔

├── Custom Validator ✔

└── Password Match ✔
```

---

## Next Chapter

**12.11 Complete Registration Form**

Topics Covered:

- Building the complete Registration Form
- FormBuilder
- Validators
- Custom Validator
- FormArray (Languages)
- Validation Messages
- Submit Logic
- Reset Form

# 12.11 Complete Registration Form

In the previous chapters, we learned every building block required for creating a Reactive Form.

Now it's time to combine everything into a complete Registration Form.

This chapter serves as the practical implementation of everything learned so far.

---

# Project Overview

Our Registration Form contains the following fields:

```
Registration Form

├── Name

├── Email

├── Password

├── Confirm Password

├── Languages

└── Submit Button
```

---

# Concepts Used

This project combines multiple Reactive Form concepts.

| Concept | Purpose |
|---------|---------|
| FormBuilder | Creates the form |
| FormGroup | Parent container |
| FormControl | Manages each input |
| Validators | Validates user input |
| Custom Validator | Password matching |
| FormArray | Languages |
| markAllAsTouched() | Shows validation messages |
| reset() | Clears the form |
| patchValue() | Used while editing |

---

# Form Structure

```
Registration Form

        │

        ▼

    FormGroup

        │

 ┌──────┼───────────────┐

 ▼      ▼       ▼       ▼

Name   Email Password Confirm Password

        │

        ▼

    FormArray

        │

Languages
```

---

# Component

```ts
registrationForm = this.fb.group({

name: [

'',

[

Validators.required,

Validators.pattern('^[A-Z][a-z]+$')

]

],

email: [

'',

[

Validators.required,

Validators.email

]

],

password: [

'',

[

Validators.required,

Validators.pattern(

'^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&]).{8,}$'

)

]

],

confirmPassword: [

'',

Validators.required

],

languages: this.fb.array([])

},

{

validators: passwordMatchValidator

}

);
```

---

# HTML Structure

```html
<form

[formGroup]="registrationForm"

(ngSubmit)="submit()">

<input

type="text"

formControlName="name">

<input

type="email"

formControlName="email">

<input

type="password"

formControlName="password">

<input

type="password"

formControlName="confirmPassword">

<div

formArrayName="languages">

<!-- Languages -->

</div>

<button>

Register

</button>

</form>
```

---

# Submit Logic

```ts
submit(){

if(this.registrationForm.invalid){

this.registrationForm.markAllAsTouched();

return;

}

console.log(

this.registrationForm.value

);

this.registrationForm.reset();

}
```

---

# Validation Flow

```
User Clicks Submit

        │

        ▼

Form Valid?

   │         │

   ▼         ▼

 Yes        No

 │           │

 ▼           ▼

Save Data  markAllAsTouched()

 │           │

 ▼           ▼

Reset     Show Errors
```

---

# Validation Rules Used

| Field | Validation |
|--------|------------|
| Name | Required + Pattern |
| Email | Required + Email |
| Password | Required + Regex |
| Confirm Password | Required |
| Languages | FormArray |
| Entire Form | Password Match Validator |

---

# Features Implemented

✔ Reactive Form

✔ FormBuilder

✔ FormGroup

✔ FormControls

✔ Validators

✔ Password Regex

✔ Name Regex

✔ Email Validation

✔ Custom Validator

✔ FormArray

✔ Validation Messages

✔ markAllAsTouched()

✔ Form Reset

---

# Common Improvements

After completing this form,

it can be extended with:

- Edit User
- Delete User
- JSON Server Integration
- HTTP POST
- HTTP PUT
- HTTP DELETE
- Image Upload
- API Validation

This is how a simple Registration Form grows into a CRUD application.

---

# ⚠️ Real Challenges I Faced

## Challenge 1

Validation messages were not displayed after clicking Submit.

### Solution

```ts
this.registrationForm.markAllAsTouched();
```

---

## Challenge 2

I initially struggled to understand the difference between:

```
setValue()

↓

patchValue()
```

Later I understood:

- `setValue()` → Complete Update
- `patchValue()` → Partial Update

---

## Challenge 3

Creating the Languages section using FormArray and printing only the selected values required understanding how FormArray stores controls dynamically.

---

# 🧠 How I Remember This Project

```
Reactive Form

        │

        ▼

Create Form

        │

        ▼

Connect HTML

        │

        ▼

Apply Validators

        │

        ▼

Show Validation Messages

        │

        ▼

Submit

        │

        ▼

Reset Form
```

Whenever I build a new Reactive Form,

I follow this exact sequence.

---

# 🎯 Interview Nuggets

✔ FormBuilder reduces boilerplate code.

✔ FormGroup manages the complete form.

✔ FormControl manages individual fields.

✔ FormArray manages dynamic fields.

✔ Validators validate user input.

✔ Custom Validators handle business logic.

✔ `markAllAsTouched()` improves user experience.

✔ `reset()` restores the form to its initial state.

---

# 📌 Key Takeaways

- A complete Reactive Form combines multiple Angular concepts.
- FormBuilder keeps the code clean.
- Validators ensure valid user input.
- Custom Validators handle cross-field validation.
- FormArray supports dynamic data.
- Proper validation messages improve user experience.
- This project represents a real-world Registration Form.

---

# Forms Learning Journey

```
Angular Forms

│

├── Introduction

├── Template-driven Forms

│

└── Reactive Forms

      │

      ├── ReactiveFormsModule

      ├── FormGroup

      ├── FormControl

      ├── FormBuilder

      ├── Validators

      ├── FormArray

      ├── Form Methods

      ├── Custom Validators

      └── Complete Registration Form ✅
```

---

## What's Next?

# 13.5 CREATE Operation (POST)

The **CREATE** operation is used to add new data to the backend.

In Angular, the CREATE operation is performed using the **HTTP POST** method.

Whenever a user fills out a form and clicks the **Submit** button, Angular sends the entered data to the server, where a new record is created.

---

# Employee Management System Progress

```
✅ Reactive Forms Completed

✅ JSON Server Connected

🟢 Current Chapter → CREATE (POST)

⬜ READ (GET)

⬜ UPDATE (PUT)

⬜ DELETE (DELETE)
```

---

# What is POST?

POST is an HTTP method used to send new data from the client to the server.

Every successful POST request creates a new record.

Example:

```
Student Registration

↓

Enter Details

↓

Submit

↓

POST Request

↓

JSON Server

↓

New Student Created
```

---

# Why do we use POST?

Without POST,

the application can collect user input,

but it cannot save the data permanently.

POST allows Angular to send the form data to the backend and create a new record.

---

# Project Folder Structure

```
src

└── app

    ├── task

    │     ├── task.component.ts

    │     ├── task.component.html

    │     └── task.component.css

    │

    ├── service

    │     └── crud.service.ts

    │

    ├── app.module.ts

    │

    └── app-routing.module.ts
```

---

# Project Workflow

```
User

↓

Fills Registration Form

↓

Clicks Submit

↓

Component

↓

CRUD Service

↓

HttpClient

↓

HTTP POST

↓

JSON Server

↓

Student Added

↓

Observable

↓

subscribe()

↓

Success Response

↓

Refresh Data

↓

Reset Form
```

---

# Step 1 - Import HttpClientModule

## app.module.ts

```ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({

imports:[

BrowserModule,

ReactiveFormsModule,

HttpClientModule

]

})
```

---

## Why do we import HttpClientModule?

Angular cannot communicate with APIs by default.

Importing `HttpClientModule` enables Angular to send HTTP requests such as:

- GET
- POST
- PUT
- DELETE

Without this module,

CRUD operations will not work.

---

# Step 2 - Create the Service

## crud.service.ts

```ts
import { HttpClient } from '@angular/common/http';

@Injectable({

providedIn:'root'

})

export class CrudService{

url="http://localhost:3000/user";

constructor(

private http:HttpClient

){}

addStudent(data:any){

return this.http.post(

this.url,

data

);

}

}
```

---

# Understanding the Service

### URL

```ts
url="http://localhost:3000/user";
```

This is the API endpoint where JSON Server stores student records.

---

### Constructor Injection

```ts
constructor(

private http:HttpClient

){}
```

Angular injects the HttpClient service using Dependency Injection.

This service is responsible for making HTTP requests.

---

### addStudent()

```ts
addStudent(data:any)
```

This method receives the form data from the component.

---

### POST Request

```ts
return this.http.post(

this.url,

data

);
```

Angular sends the form data to JSON Server.

A new student record is created.

The method returns an **Observable**.

---

# Step 3 - Component

## task.component.ts

```ts
submit(){

if(this.taskform.valid){

this.crud.addStudent(

this.taskform.value

).subscribe((res)=>{

console.log(res);

this.getUser();

this.taskform.reset();

alert("Form Submitted Successfully");

});

}

else{

this.taskform.markAllAsTouched();

}

}
```

---

# Understanding the Component

### Form Validation

```ts
if(this.taskform.valid)
```

Checks whether all form validations are successful.

If validation fails,

Angular will not submit the data.

---

### Calling the Service

```ts
this.crud.addStudent(

this.taskform.value
)
```

The form values are sent to the Service.

The Service sends them to JSON Server using an HTTP POST request.

---

### subscribe()

```ts
.subscribe((res)=>{

...
});
```

The POST request returns an Observable.

Angular executes the request only after calling `subscribe()`.

Without `subscribe()`,

the request will never be sent.

---

### Refresh the Table

```ts
this.getUser();
```

After adding a new student,

the latest records are fetched again.

This updates the UI immediately.

---

### Reset the Form

```ts
this.taskform.reset();
```

Clears all input fields after successful submission.

The form is ready to accept another record.

---

# Step 4 - HTML

## task.component.html

```html
<form

[formGroup]="taskform"

(ngSubmit)="submit()">

<!-- Form Fields -->

<button type="submit">

Submit

</button>

</form>
```

---

# Complete Execution Flow

```
User Fills Form

↓

Angular Validates Form

↓

Submit Button

↓

submit()

↓

addStudent()

↓

HttpClient.post()

↓

JSON Server

↓

Student Created

↓

Observable

↓

subscribe()

↓

getUser()

↓

Updated Table

↓

Form Reset
```

---

# Sample Request

```json
{
"name":"Dhikshanth",
"email":"abc@gmail.com",
"password":"Angular@123"
}
```

---

# Sample Response

```json
{
"id":15,
"name":"Dhikshanth",
"email":"abc@gmail.com",
"password":"Angular@123"
}
```

Notice that JSON Server automatically generates the **id**.

---

# Common Mistakes

## ❌ Forgetting HttpClientModule

```
NullInjectorError:
No provider for HttpClient
```

### Solution

Import

```ts
HttpClientModule
```

inside `app.module.ts`.

---

## ❌ Forgetting subscribe()

```ts
this.crud.addStudent(data);
```

The request is created,

but it is **never executed**.

Always call:

```ts
.subscribe()
```

---

## ❌ Calling getUser() before the POST request finishes

Incorrect

```ts
this.crud.addStudent(data).subscribe();

this.getUser();
```

Correct

```ts
this.crud.addStudent(data).subscribe((res)=>{

this.getUser();

});
```

This ensures the table refreshes **after** the new record has been created.

---

# 🧠 How I Remember POST

```
POST

↓

New Record

↓

Creates Something

↓

Database Size Increases

↓

New ID Generated
```

Whenever I hear **POST**,

I immediately think:

**"Create a new record."**

---

# 🎯 Interview Nuggets

✔ POST is used to create new records.

✔ `HttpClient.post()` returns an Observable.

✔ The request executes only after calling `subscribe()`.

✔ JSON Server automatically generates an ID.

✔ Refresh the data after a successful POST request.

✔ Reset the form after successful submission.

---

# 📌 Key Takeaways

- POST creates new records.
- Angular uses `HttpClient.post()` to send data.
- Services separate business logic from components.
- `subscribe()` is required to execute the request.
- Refresh the UI after a successful POST operation.
- Reset the form to prepare for the next entry.

---

## Next Chapter

# 13.6 READ Operation (GET)

In the next chapter, we'll learn how to retrieve all student records from JSON Server and display them in an Angular table using **HTTP GET**.

# 13.6 READ Operation (GET)

After successfully creating records using the **POST** operation, the next step is to retrieve those records from the backend and display them in the application.

Angular uses the **HTTP GET** method to fetch data from a server.

---

# Employee Management System Progress

```
✅ Reactive Forms Completed

✅ JSON Server Connected

✅ CREATE (POST)

🟢 Current Chapter → READ (GET)

⬜ UPDATE (PUT)

⬜ DELETE (DELETE)
```

---

# What is GET?

GET is an HTTP method used to retrieve data from a server.

Unlike POST,

GET does not create or modify data.

It simply requests the existing records.

---

# Why do we need GET?

Suppose five students are already stored in JSON Server.

When the application starts,

Angular must fetch those records and display them.

Without GET,

the data exists in the backend,

but users cannot see it.

---

# Project Workflow

```
Application Starts

↓

ngOnInit()

↓

getUser()

↓

CRUD Service

↓

HttpClient.get()

↓

JSON Server

↓

Returns Student List

↓

Observable

↓

subscribe()

↓

Store Data

↓

Display in HTML Table
```

---

# Step 1 - Service

## crud.service.ts

```ts
getStudent(){

return this.http.get(

this.url

);

}
```

---

# Understanding the Service

### getStudent()

```ts
getStudent()
```

This method sends an HTTP GET request to JSON Server.

---

### HttpClient.get()

```ts
return this.http.get(

this.url

);
```

Angular requests all student records available at the API endpoint.

The method returns an **Observable**.

---

# Step 2 - Component

## task.component.ts

```ts
studentData:any;

getUser(){

this.crud.getStudent().subscribe((res)=>{

this.studentData = res;

console.log(this.studentData);

});

}
```

---

# Understanding the Component

### studentData

```ts
studentData:any;
```

Stores the student records received from the backend.

---

### Calling the Service

```ts
this.crud.getStudent()
```

Requests all available student records.

---

### subscribe()

```ts
.subscribe((res)=>{

this.studentData = res;

});
```

The Observable returns the response from JSON Server.

Angular stores that response inside:

```ts
studentData
```

---

# Step 3 - Automatically Load Data

## ngOnInit()

```ts
ngOnInit(){

this.getUser();

}
```

---

# Why ngOnInit()?

When the component loads,

Angular automatically calls

```ts
ngOnInit()
```

This ensures that the table is populated immediately after opening the page.

---

# Step 4 - HTML

## task.component.html

```html
<table>

<tr>

<th>ID</th>

<th>Name</th>

<th>Email</th>

</tr>

<tr *ngFor="let student of studentData">

<td>{{student.id}}</td>

<td>{{student.name}}</td>

<td>{{student.email}}</td>

</tr>

</table>
```

---

# Understanding the HTML

### *ngFor

```html
*ngFor="let student of studentData"
```

Loops through every student object received from JSON Server.

Each iteration creates one table row.

---

### Interpolation

```html
{{student.name}}
```

Displays the value of each property.

---

# Sample Response

```json
[
{
"id":1,
"name":"Dhikshanth",
"email":"abc@gmail.com"
},
{
"id":2,
"name":"Rahul",
"email":"rahul@gmail.com"
}
]
```

Angular stores this array inside:

```ts
studentData
```

---

# Data Flow

```
JSON Server

↓

Array of Students

↓

HttpClient.get()

↓

Observable

↓

subscribe()

↓

studentData

↓

*ngFor

↓

HTML Table
```

---

# Complete Execution Flow

```
Application Starts

↓

ngOnInit()

↓

getUser()

↓

CrudService

↓

HttpClient.get()

↓

JSON Server

↓

Response Received

↓

subscribe()

↓

studentData

↓

Angular Change Detection

↓

HTML Updated
```

---

# Real Concept I Learned

Initially,

I thought calling:

```ts
this.crud.getStudent();
```

would automatically return the data.

Later I understood that Angular returns an **Observable**.

The actual response is received only after calling:

```ts
.subscribe()
```

Without `subscribe()`,

the GET request is never executed.

---

# Common Mistakes

## ❌ Forgetting subscribe()

Incorrect

```ts
this.studentData = this.crud.getStudent();
```

Here,

`studentData` stores the Observable,

not the actual data.

---

Correct

```ts
this.crud.getStudent().subscribe((res)=>{

this.studentData = res;

});
```

---

## ❌ Forgetting ngOnInit()

If `getUser()` is never called,

the table remains empty even though data exists in JSON Server.

---

## ❌ Using the wrong variable in HTML

Incorrect

```html
*ngFor="let student of users"
```

when the component stores data in:

```ts
studentData
```

Always use the correct variable name.

---

# 🧠 How I Remember GET

```
GET

↓

Retrieve

↓

Read Existing Data

↓

No New Record

↓

No Modification
```

Whenever I hear **GET**,

I immediately think:

**"Fetch existing records."**

---

# GET vs POST

| POST | GET |
|------|-----|
| Creates new data | Retrieves existing data |
| Uses `http.post()` | Uses `http.get()` |
| Sends data to server | Requests data from server |
| Database changes | Database remains unchanged |

---

# 🎯 Interview Nuggets

✔ GET is used to retrieve data.

✔ `HttpClient.get()` returns an Observable.

✔ `subscribe()` is required to receive the response.

✔ `ngOnInit()` is commonly used to load data automatically.

✔ `*ngFor` is used to display multiple records.

---

# 📌 Key Takeaways

- GET retrieves existing records.
- Angular uses `HttpClient.get()` for reading data.
- Responses are received through Observables.
- Store the response inside a component variable.
- Use `*ngFor` to display records in the UI.
- Call `getUser()` inside `ngOnInit()` to load data automatically.

---

## Next Chapter

# 13.7 UPDATE Operation (PUT)

In the next chapter, we'll learn how to load an existing student into the form, edit the details, and update the record using an **HTTP PUT** request.

# 13.7 UPDATE Operation (PUT)

The **UPDATE** operation is used to modify an existing record stored in the backend.

Angular performs this operation using the **HTTP PUT** method.

Unlike POST, which creates a new record, PUT updates an existing record using its unique ID.

---

# Employee Management System Progress

```
✅ Reactive Forms Completed

✅ JSON Server Connected

✅ CREATE (POST)

✅ READ (GET)

🟢 Current Chapter → UPDATE (PUT)

⬜ DELETE (DELETE)
```

---

# Files Used

```
📄 app.module.ts

📄 crud.service.ts

📄 task.component.ts

📄 task.component.html

📄 db.json
```

---

# What is PUT?

PUT is an HTTP method used to update an existing record.

Instead of creating a new record,

PUT replaces the existing record using its ID.

---

# Why do we need PUT?

Suppose a student's email was entered incorrectly.

```
Before

Name : Dhikshanth

Email : abc@gamil.com
```

The user clicks **Edit**, corrects the email and submits the form.

Angular sends a PUT request.

```
After

Name : Dhikshanth

Email : abc@gmail.com
```

The record is updated without creating a duplicate.

---

# Project Workflow

```
User

↓

Clicks Edit

↓

Load Selected Record

↓

patchValue()

↓

rowId Assigned

↓

User Updates Data

↓

Submit

↓

updateStudent()

↓

HTTP PUT

↓

JSON Server

↓

Updated Record

↓

Refresh Table

↓

Reset Form
```

---

# Step 1 - Service

## crud.service.ts

```ts
updateStudent(data:any,id:any){

return this.http.put(

`${this.url}/${id}`,

data

);

}
```

---

# Understanding the Service

### updateStudent()

```ts
updateStudent(data,id)
```

Receives:

- Updated Form Data
- Student ID

---

### PUT Request

```ts
return this.http.put(

`${this.url}/${id}`,

data

);
```

Angular sends the updated student object to JSON Server.

The record with the matching ID is replaced.

---

# Step 2 - Edit Button

## task.component.html

```html
<button

(click)="edit(student)">

Edit

</button>
```

When the user clicks **Edit**,

Angular sends the selected student object to the component.

---

# Step 3 - Edit Function

## task.component.ts

```ts
rowId:any;

edit(student:any){

this.rowId = student.id;

this.taskform.patchValue(student);

}
```

---

# Understanding the Edit Function

### Store the ID

```ts
this.rowId = student.id;
```

Stores the selected student's ID.

This tells Angular which record needs to be updated.

---

### patchValue()

```ts
this.taskform.patchValue(student);
```

Loads the selected student's details into the form.

The user can now edit the existing values.

---

# Step 4 - Submit Function

```ts
submit(){

if(this.taskform.valid){

if(this.rowId){

this.crud.updateStudent(

this.taskform.value,

this.rowId

).subscribe((res)=>{

alert("Data Updated");

this.getUser();

this.taskform.reset();

this.rowId = null;

});

}

}

}
```

---

# Understanding the Submit Logic

### Check Form Validation

```ts
if(this.taskform.valid)
```

Only valid data is allowed to update the record.

---

### Check rowId

```ts
if(this.rowId)
```

This condition decides whether Angular should perform:

```
POST

or

PUT
```

If `rowId` exists,

Angular performs **PUT**.

---

### Call Service

```ts
this.crud.updateStudent(

this.taskform.value,

this.rowId

)
```

The updated form values and the selected ID are sent to the service.

---

### subscribe()

```ts
.subscribe((res)=>{

...
});
```

The PUT request executes only after subscribing.

---

### Refresh Data

```ts
this.getUser();
```

Reloads the latest student list.

The updated record appears immediately.

---

### Reset Form

```ts
this.taskform.reset();
```

Clears the form after updating.

---

### Exit Edit Mode

```ts
this.rowId = null;
```

This is one of the most important lines.

Without resetting `rowId`,

future submissions will continue performing UPDATE instead of CREATE.

---

# Execution Flow

```
Click Edit

↓

edit(student)

↓

rowId = student.id

↓

patchValue(student)

↓

User Updates Form

↓

Submit

↓

rowId Exists?

↓

Yes

↓

updateStudent()

↓

HttpClient.put()

↓

JSON Server

↓

Updated Successfully

↓

subscribe()

↓

getUser()

↓

Reset Form

↓

rowId = null
```

---

# Before and After

### Before Update

```json
{
"id":3,
"name":"Dhikshanth",
"email":"abc@gamil.com"
}
```

---

### After Update

```json
{
"id":3,
"name":"Dhikshanth",
"email":"abc@gmail.com"
}
```

Notice that only the data changes.

The ID remains the same.

---

# Common Mistakes

## ❌ Forgetting rowId

Without storing the ID,

Angular does not know which record should be updated.

---

## ❌ Forgetting patchValue()

The form remains empty,

making editing impossible.

---

## ❌ Forgetting subscribe()

The PUT request is never executed.

---

## ❌ Forgetting getUser()

The backend updates successfully,

but the latest data is not displayed until the page is refreshed.

---

## ❌ Forgetting

```ts
this.rowId = null;
```

The application remains in Edit Mode.

Every future submission performs UPDATE instead of CREATE.

---

# ⚠️ Real Error I Faced

While learning CRUD,

I encountered:

```
404 Not Found
```

### Reason

The record ID was not correctly passed in the PUT URL.

Incorrect URL:

```
http://localhost:3000/user
```

Correct URL:

```
http://localhost:3000/user/3
```

Always append the record ID while performing a PUT request.

---

# 🧠 How I Remember PUT

```
User Clicks Edit

↓

Load Existing Data

↓

Modify

↓

Replace Existing Record

↓

Same ID

↓

Updated Data
```

Whenever I hear **PUT**,

I immediately think:

**"Replace an existing record."**

---

# POST vs PUT

| POST | PUT |
|------|-----|
| Creates new record | Updates existing record |
| Generates new ID | Uses existing ID |
| addStudent() | updateStudent() |
| No rowId | Requires rowId |

---

# 🎯 Interview Nuggets

✔ PUT updates existing records.

✔ Record ID is mandatory.

✔ `patchValue()` loads existing data into the form.

✔ `rowId` decides whether to perform POST or PUT.

✔ Reset `rowId` after updating.

✔ Always refresh the table after a successful update.

---

# 📌 Key Takeaways

- PUT modifies existing records.
- Store the selected record ID before updating.
- Use `patchValue()` to load existing values.
- Execute the request using `subscribe()`.
- Refresh the table after updating.
- Reset both the form and `rowId` after a successful update.

---

## Next Chapter

# 13.8 DELETE Operation (DELETE)

In the next chapter, we'll learn how to remove records from JSON Server using the **HTTP DELETE** method and refresh the table automatically.

# 13.8 DELETE Operation (DELETE)

The **DELETE** operation is used to remove an existing record from the backend.

Angular performs this operation using the **HTTP DELETE** method.

Unlike POST and PUT, DELETE permanently removes the selected record from the database.

---

# Employee Management System Progress

```
✅ Reactive Forms Completed

✅ JSON Server Connected

✅ CREATE (POST)

✅ READ (GET)

✅ UPDATE (PUT)

🟢 Current Chapter → DELETE (DELETE)
```

---

# Files Used

```
📄 app.module.ts

📄 crud.service.ts

📄 task.component.ts

📄 task.component.html

📄 db.json
```

---

# What is DELETE?

DELETE is an HTTP method used to remove an existing record from the backend.

The record is identified using its unique ID.

Once deleted,

that record will no longer exist in JSON Server.

---

# Why do we need DELETE?

Suppose an employee resigns from a company.

The employee details should no longer appear in the Employee Management System.

Instead of editing the record,

we remove it completely using the DELETE operation.

---

# Project Workflow

```
User

↓

Clicks Delete

↓

Record ID Sent

↓

deleteStudent()

↓

HTTP DELETE

↓

JSON Server

↓

Record Removed

↓

Observable

↓

subscribe()

↓

Refresh Table
```

---

# Step 1 - Service

## crud.service.ts

```ts
deleteStudent(id:any){

return this.http.delete(

`${this.url}/${id}`

);

}
```

---

# Understanding the Service

### deleteStudent()

```ts
deleteStudent(id)
```

Receives the ID of the record to be deleted.

---

### DELETE Request

```ts
return this.http.delete(

`${this.url}/${id}`

);
```

Angular sends a DELETE request to JSON Server.

The record matching the given ID is removed.

---

# Step 2 - HTML

## task.component.html

```html
<button

(click)="delete(student.id)">

Delete

</button>
```

When the user clicks the Delete button,

Angular sends the selected student's ID to the component.

---

# Step 3 - Component

## task.component.ts

```ts
delete(id:any){

this.crud.deleteStudent(id).subscribe((res)=>{

alert("Data Deleted Successfully");

this.getUser();

});

}
```

---

# Understanding the Component

### Receive the ID

```ts
delete(id:any)
```

Receives the selected record ID.

---

### Call Service

```ts
this.crud.deleteStudent(id)
```

Calls the Service method to delete the selected record.

---

### subscribe()

```ts
.subscribe((res)=>{

...
});
```

Executes the DELETE request.

Without `subscribe()`,

the record will never be deleted.

---

### Refresh the Table

```ts
this.getUser();
```

Loads the latest data after deletion.

The deleted record immediately disappears from the table.

---

# Complete Execution Flow

```
User Clicks Delete

↓

delete(id)

↓

CrudService

↓

HttpClient.delete()

↓

JSON Server

↓

Record Deleted

↓

Observable

↓

subscribe()

↓

getUser()

↓

Updated Table
```

---

# Before DELETE

| ID | Name | Email |
|----|------|-------|
| 1 | Rahul | rahul@gmail.com |
| 2 | Dhikshanth | abc@gmail.com |
| 3 | Arun | arun@gmail.com |

---

# After DELETE (ID = 2)

| ID | Name | Email |
|----|------|-------|
| 1 | Rahul | rahul@gmail.com |
| 3 | Arun | arun@gmail.com |

Notice that the record with ID **2** has been removed.

---

# Common Mistakes

## ❌ Forgetting the ID

Incorrect

```ts
this.http.delete(this.url);
```

Angular does not know which record should be deleted.

---

Correct

```ts
this.http.delete(

`${this.url}/${id}`

);
```

---

## ❌ Forgetting subscribe()

Incorrect

```ts
this.crud.deleteStudent(id);
```

The DELETE request is never executed.

---

## ❌ Forgetting getUser()

The record is deleted in JSON Server,

but the UI still displays the old data until the page is refreshed.

---

## ❌ Passing the Entire Object Instead of ID

Incorrect

```ts
delete(student)
```

If the Service expects only the ID,

pass:

```ts
delete(student.id)
```

This keeps the code simple and avoids unnecessary data transfer.

---

# ⚠️ Real Concept I Learned

Initially,

I thought removing a row from the HTML table was enough.

Later I understood that deleting a row from the UI only removes it visually.

The actual data still exists in JSON Server.

To permanently remove the record,

Angular must send an **HTTP DELETE** request to the backend.

---

# 🧠 How I Remember DELETE

```
Delete Button

↓

Record ID

↓

DELETE Request

↓

Remove Record

↓

Refresh Table
```

Whenever I hear **DELETE**,

I immediately think:

**"Remove an existing record permanently."**

---

# CRUD Summary

| Operation | HTTP Method | Purpose |
|-----------|-------------|---------|
| CREATE | POST | Add a new record |
| READ | GET | Retrieve existing records |
| UPDATE | PUT | Modify an existing record |
| DELETE | DELETE | Remove an existing record |

---

# Complete CRUD Workflow

```
Create Employee

↓

POST

↓

Read Employees

↓

GET

↓

Edit Employee

↓

PUT

↓

Delete Employee

↓

DELETE

↓

Complete Employee Management System
```

---

# 🎯 Interview Nuggets

✔ DELETE removes existing records.

✔ Every DELETE request requires the record ID.

✔ `HttpClient.delete()` returns an Observable.

✔ `subscribe()` executes the request.

✔ Refresh the UI after successful deletion.

✔ DELETE permanently removes data from the backend.

---

# 📌 Key Takeaways

- DELETE removes records from the backend.
- Always pass the record ID.
- Execute the request using `subscribe()`.
- Refresh the table after deletion.
- DELETE completes the CRUD cycle.

---

# 🎉 CRUD Operations Completed

```
Employee Management System

✅ Reactive Forms

✅ JSON Server

✅ Service

✅ HttpClient

✅ POST

✅ GET

✅ PUT

✅ DELETE

🎯 Complete CRUD Application Built Successfully
```

---

## Next Chapter

# 13.9 Complete CRUD Application Flow

In the next chapter, we'll connect all four operations together and understand how the complete Employee Management System works from user interaction to backend response.

# 13.9 Complete CRUD Application Flow

In the previous chapters, we learned each CRUD operation individually.

Now, let's understand how all these operations work together to build a complete Employee Management System.

This chapter connects every concept learned so far into one complete application.

---

# Employee Management System Progress

```
✅ Reactive Forms

✅ JSON Server

✅ Service

✅ HttpClient

✅ POST

✅ GET

✅ PUT

✅ DELETE

🟢 Current Chapter → Complete CRUD Flow
```

---

# Project Overview

Our Employee Management System allows users to:

- Add a new employee
- View all employees
- Edit employee details
- Delete employees

All these operations communicate with JSON Server through Angular's HttpClient.

---

# Project Folder Structure

```
src

└── app

    ├── task

    │     ├── task.component.ts

    │     ├── task.component.html

    │     └── task.component.css

    │

    ├── service

    │     └── crud.service.ts

    │

    ├── app.module.ts

    │

    └── app-routing.module.ts
```

---

# Complete Architecture

```
User

↓

Angular Component

↓

CRUD Service

↓

HttpClient

↓

HTTP Request

↓

JSON Server

↓

db.json

↓

HTTP Response

↓

Observable

↓

subscribe()

↓

Angular Component

↓

HTML

↓

User
```

---

# Complete CRUD Lifecycle

```
Application Starts

↓

ngOnInit()

↓

GET

↓

Display Employees

↓

User Adds Employee

↓

POST

↓

Refresh Table

↓

User Clicks Edit

↓

patchValue()

↓

PUT

↓

Refresh Table

↓

User Clicks Delete

↓

DELETE

↓

Refresh Table
```

---

# Flow 1 - Application Loading

```
Application Starts

↓

Angular Creates Component

↓

ngOnInit()

↓

getUser()

↓

GET Request

↓

JSON Server

↓

Response

↓

studentData

↓

*ngFor

↓

Table Displayed
```

Purpose:

Display all available records when the application loads.

---

# Flow 2 - Adding a New Employee

```
Fill Form

↓

Submit

↓

Validation

↓

POST

↓

JSON Server

↓

New Employee Created

↓

GET

↓

Updated Table

↓

Reset Form
```

Purpose:

Create a new employee record.

---

# Flow 3 - Editing an Employee

```
Click Edit

↓

Store rowId

↓

patchValue()

↓

User Updates Data

↓

Submit

↓

PUT

↓

JSON Server

↓

Employee Updated

↓

GET

↓

Updated Table

↓

Reset Form

↓

rowId = null
```

Purpose:

Modify an existing employee.

---

# Flow 4 - Deleting an Employee

```
Click Delete

↓

Pass ID

↓

DELETE

↓

JSON Server

↓

Record Removed

↓

GET

↓

Updated Table
```

Purpose:

Remove unwanted records permanently.

---

# Data Flow Inside Angular

```
HTML

↓

Component

↓

Service

↓

HttpClient

↓

Backend

↓

HttpClient

↓

Service

↓

Component

↓

HTML
```

Notice that every request follows the same path.

---

# Role of Each File

## app.module.ts

Responsible for importing:

- HttpClientModule
- ReactiveFormsModule

Without these modules,

HTTP communication and Reactive Forms will not work.

---

## crud.service.ts

Responsible for:

- POST
- GET
- PUT
- DELETE

Business logic is separated from the component.

---

## task.component.ts

Responsible for:

- Form Validation
- Calling Service Methods
- Receiving Responses
- Updating UI Data

Acts as the bridge between HTML and Service.

---

## task.component.html

Responsible for:

- Displaying the Form
- Displaying the Table
- Handling User Events

---

# CRUD Request Flow

## CREATE

```
Submit

↓

addStudent()

↓

POST

↓

Database

↓

Response
```

---

## READ

```
ngOnInit()

↓

getStudent()

↓

GET

↓

Display Table
```

---

## UPDATE

```
Edit

↓

patchValue()

↓

Submit

↓

PUT

↓

Database Updated
```

---

## DELETE

```
Delete Button

↓

DELETE

↓

Database

↓

Refresh Table
```

---

# Observable Flow

Every CRUD operation follows the same pattern.

```
Component

↓

Service

↓

HttpClient

↓

Observable

↓

subscribe()

↓

Response

↓

Update UI
```

This is one of the most important concepts in Angular.

---

# Real Concepts I Learned

While building this project,

I understood that the component never communicates directly with JSON Server.

Instead,

the request always follows this path:

```
Component

↓

Service

↓

HttpClient

↓

Backend
```

This separation makes the application easier to maintain and reuse.

---

Another important concept I learned was that every HTTP request returns an Observable.

Without calling:

```ts
.subscribe()
```

the request is never executed.

---

# Complete CRUD Summary

| Operation | Method | Purpose |
|-----------|---------|----------|
| CREATE | POST | Add New Employee |
| READ | GET | Display Employees |
| UPDATE | PUT | Edit Existing Employee |
| DELETE | DELETE | Remove Employee |

---

# Complete Learning Journey

```
Reactive Forms

↓

JSON Server

↓

HttpClient

↓

Service

↓

POST

↓

GET

↓

PUT

↓

DELETE

↓

Complete CRUD Application
```

---

# 🧠 How I Remember CRUD

```
User

↓

Create

↓

Read

↓

Update

↓

Delete

↓

Application Always Refreshes

↓

Latest Data Displayed
```

Whenever I build any CRUD application,

I always follow this sequence.

---

# 🎯 Interview Nuggets

✔ CRUD stands for Create, Read, Update and Delete.

✔ Angular communicates with APIs using HttpClient.

✔ Services separate business logic from components.

✔ Every HTTP request returns an Observable.

✔ subscribe() executes the HTTP request.

✔ GET is usually called inside ngOnInit().

✔ Refresh the table after every successful CRUD operation.

---

# 📌 Key Takeaways

- CRUD applications are built using four HTTP methods.
- Components communicate with Services, not directly with the backend.
- Services use HttpClient to perform HTTP operations.
- Every request returns an Observable.
- The UI should always be refreshed after successful operations.
- Combining Reactive Forms, HttpClient, Services and JSON Server results in a complete Angular CRUD application.

---

# 14. Routing

Angular Routing allows users to navigate between different components without refreshing the entire webpage.

Routing makes an Angular application behave like a Single Page Application (SPA).

Instead of loading a new HTML page every time,

Angular simply replaces the component inside the **router-outlet**.

---

# Why do we need Routing?

Suppose our application contains:

```
Home

Employee

About

Contact
```

Without Routing,

all components would have to be displayed on a single page.

With Routing,

each component gets its own URL.

Example:

```
localhost:4200/home

localhost:4200/employee

localhost:4200/about

localhost:4200/contact
```

---

# How Routing Works

```
User

↓

Clicks Navigation Link

↓

Angular Router

↓

Routes Array

↓

Find Matching Path

↓

Load Component

↓

router-outlet

↓

Component Displayed
```

---

# Project Structure

```
src

└── app

    ├── home

    │      ├── home.component.ts

    │      └── home.component.html

    │

    ├── employee

    │      ├── employee.component.ts

    │      └── employee.component.html

    │

    ├── about

    │      ├── about.component.ts

    │      └── about.component.html

    │

    ├── contact

    │      ├── contact.component.ts

    │      └── contact.component.html

    │

    ├── app-routing.module.ts

    ├── app.module.ts

    ├── app.component.ts

    └── app.component.html
```

---

# Step 1 - Create Components

```
ng g c home

ng g c employee

ng g c about

ng g c contact
```

Angular creates:

```
home.component.ts

home.component.html

home.component.css

home.component.spec.ts
```

for every component.

---

# Step 2 - Configure Routes

## app-routing.module.ts

```ts
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { EmployeeComponent } from './employee/employee.component';

import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

{

path:'',

redirectTo:'home',

pathMatch:'full'

},

{

path:'home',

component:HomeComponent

},

{

path:'employee',

component:EmployeeComponent

},

{

path:'about',

component:AboutComponent

},

{

path:'contact',

component:ContactComponent

}

];

@NgModule({

imports:[

RouterModule.forRoot(routes)

],

exports:[

RouterModule

]

})

export class AppRoutingModule{}
```

---

# Understanding app-routing.module.ts

## Routes

```ts
const routes: Routes=[]
```

Stores all application routes.

---

## path

```ts
path:'home'
```

Represents the URL.

Example

```
localhost:4200/home
```

---

## component

```ts
component:HomeComponent
```

Specifies which component should be displayed.

---

## redirectTo

```ts
redirectTo:'home'
```

When the application starts,

Angular redirects the user to:

```
localhost:4200/home
```

---

## pathMatch:'full'

Ensures Angular matches the complete URL before redirecting.

---

## RouterModule.forRoot()

```ts
RouterModule.forRoot(routes)
```

Registers all routes in the application.

---

## exports

```ts
exports:[RouterModule]
```

Makes routing available throughout the application.

---

# Step 3 - Import Routing Module

## app.module.ts

```ts
import { AppRoutingModule } from './app-routing.module';

@NgModule({

declarations:[

AppComponent,

HomeComponent,

EmployeeComponent,

AboutComponent,

ContactComponent

],

imports:[

BrowserModule,

AppRoutingModule

],

bootstrap:[

AppComponent

]

})

export class AppModule{}
```

---

# Why Import AppRoutingModule?

Without importing

```ts
AppRoutingModule
```

Angular will not recognize any routes.

Navigation will not work.

---

# Execution Flow

```
Application Starts

↓

AppModule

↓

AppRoutingModule

↓

Routes Registered

↓

User Opens URL

↓

Angular Searches Routes[]

↓

Matching Component Found

↓

Component Ready
```

---

## Next Chapter

We'll learn:

- routerLink
- router-outlet
- Navigation
- app.component.html
- Complete HTML implementation
- Internal Routing Flow

# 14.2 routerLink & router-outlet

After configuring the routes,

Angular needs a way to navigate between different components.

This is achieved using:

- `routerLink`
- `router-outlet`

These two directives work together to provide navigation.

---

# What is routerLink?

`routerLink` is an Angular directive used to navigate from one component to another.

Instead of refreshing the webpage,

Angular changes only the displayed component.

---

# Syntax

```html
<a routerLink="/home">Home</a>
```

When clicked,

Angular navigates to

```
localhost:4200/home
```

---

# Multiple routerLinks

## app.component.html

```html
<nav>

<a routerLink="/home">Home</a>

<a routerLink="/employee">Employee</a>

<a routerLink="/about">About</a>

<a routerLink="/contact">Contact</a>

</nav>

<hr>

<router-outlet></router-outlet>
```

---

# Understanding app.component.html

## Navigation Bar

```html
<nav>

...

</nav>
```

Contains all navigation links.

---

## routerLink

```html
routerLink="/home"
```

Navigates to

```
HomeComponent
```

---

```html
routerLink="/employee"
```

Navigates to

```
EmployeeComponent
```

---

```html
routerLink="/about"
```

Navigates to

```
AboutComponent
```

---

```html
routerLink="/contact"
```

Navigates to

```
ContactComponent
```

---

# What is router-outlet?

`router-outlet` is a placeholder provided by Angular.

It tells Angular where the routed component should be displayed.

---

# Syntax

```html
<router-outlet>

</router-outlet>
```

Whenever the URL changes,

Angular replaces the content inside the router-outlet.

---

# Internal Working

Suppose the URL is

```
localhost:4200/about
```

Angular checks

```
Routes[]

↓

path : "about"

↓

AboutComponent

↓

router-outlet

↓

Display AboutComponent
```

---

# Complete Navigation Flow

```
User Clicks

↓

routerLink

↓

Angular Router

↓

Routes[]

↓

Matching Path

↓

Component Found

↓

router-outlet

↓

Display Component
```

---

# Browser URLs

```
Home

↓

localhost:4200/home

--------------------------

Employee

↓

localhost:4200/employee

--------------------------

About

↓

localhost:4200/about

--------------------------

Contact

↓

localhost:4200/contact
```

---

# Difference Between HTML <a> and routerLink

| HTML Anchor | routerLink |
|-------------|------------|
| Reloads entire page | No page refresh |
| Browser navigation | Angular Router navigation |
| Requests new HTML page | Loads Component |
| Slower | Faster |

---

# Programmatic Navigation

Sometimes,

navigation happens after a button click or after submitting a form.

Angular provides the Router service.

---

## Step 1

Import Router

```ts
import { Router } from '@angular/router';
```

---

## Step 2

Constructor Injection

```ts
constructor(

private router:Router

){}
```

---

## Step 3

Navigate

```ts
this.router.navigate(

['/employee']

);
```

Angular immediately navigates to

```
EmployeeComponent
```

---

# When do we use navigate()?

Examples

- Login Successful

```
Login

↓

Dashboard
```

---

- Registration Completed

```
Register

↓

Login Page
```

---

- Save Employee

```
Save

↓

Employee List
```

---

# routerLink vs navigate()

| routerLink | navigate() |
|------------|------------|
| Used in HTML | Used in TypeScript |
| User clicks link | Navigation through code |
| Declarative | Programmatic |

---

# Execution Flow

```
Click Home

↓

routerLink="/home"

↓

Angular Router

↓

Routes[]

↓

HomeComponent

↓

router-outlet

↓

Display Home Page
```

---

# Real Concept I Learned

Initially,

I thought `routerLink` worked like a normal HTML anchor tag.

Later I understood that Angular does not reload the webpage.

It only replaces the component inside the `router-outlet`.

This is why Angular applications feel faster than traditional websites.

---

# Common Mistakes

## ❌ Forgetting router-outlet

```html
<a routerLink="/home">

Home

</a>
```

Navigation occurs,

but no component is displayed.

Reason:

```
router-outlet

is missing.
```

---

## ❌ Using href Instead of routerLink

Incorrect

```html
<a href="/home">

Home

</a>
```

This reloads the webpage.

---

Correct

```html
<a routerLink="/home">

Home

</a>
```

---

## ❌ Wrong Route Name

Incorrect

```html
routerLink="/employees"
```

If the route is

```ts
path:'employee'
```

Angular cannot find the route.

---

# 🧠 How I Remember It

```
routerLink

↓

Road

-----------------------

router-outlet

↓

Destination
```

or

```
routerLink

↓

GPS

↓

Find Address

↓

router-outlet

↓

Reach Destination
```

Whenever I hear Routing,

I immediately think:

```
routerLink

↓

router-outlet
```

---

# 🎯 Interview Nuggets

✔ `routerLink` is used for navigation.

✔ `router-outlet` displays the routed component.

✔ Angular Router does not refresh the webpage.

✔ `navigate()` is used for navigation inside TypeScript.

✔ `routerLink` is preferred over HTML `href`.

---

# 📌 Key Takeaways

- `routerLink` navigates between components.
- `router-outlet` displays the selected component.
- Angular Routing provides SPA navigation.
- `navigate()` performs programmatic navigation.
- Angular updates only the component, not the entire webpage.

---

## Next Chapter

# 14.3 Route Parameters & ActivatedRoute

Topics Covered

- Route Parameters
- Passing ID in URL
- ActivatedRoute
- snapshot
- params Observable
- Wildcard Route (404 Page)
- Complete Routing Flow

# 14.3 Route Parameters, ActivatedRoute & Wildcard Route

In real-world applications,

sometimes we need to pass data from one route to another.

Instead of creating multiple components,

Angular allows us to pass values through the URL using **Route Parameters**.

---

# What are Route Parameters?

Route Parameters are values passed inside the URL.

Example

```
localhost:4200/employee/1

localhost:4200/employee/2

localhost:4200/employee/3
```

Here,

```
1

2

3
```

are Route Parameters.

---

# Why do we need Route Parameters?

Suppose the Employee table contains

| ID | Name |
|----|------|
|1|Rahul|
|2|Dhikshanth|
|3|Arun|

When the user clicks

```
View
```

Angular should open

```
localhost:4200/employee/2
```

and display only Employee 2.

Instead of creating multiple pages,

Angular uses Route Parameters.

---

# Step 1 - Configure Route

## app-routing.module.ts

```ts
const routes: Routes = [

{

path:'employee/:id',

component:EmployeeComponent

}

];
```

---

# Understanding

```
employee

↓

Fixed Route

------------------------

:id

↓

Dynamic Route Parameter
```

Angular understands

```
employee/1

employee/2

employee/3
```

all belong to the same component.

---

# Step 2 - Navigate

## app.component.html

```html
<a

routerLink="/employee/1">

Employee 1

</a>
```

or

```html
<button

(click)="viewEmployee(5)">

View

</button>
```

---

## task.component.ts

```ts
constructor(

private router:Router

){}

viewEmployee(id:number){

this.router.navigate(

['/employee',id]

);

}
```

Angular creates

```
localhost:4200/employee/5
```

---

# Step 3 - Read Route Parameter

## employee.component.ts

```ts
import {

ActivatedRoute

} from '@angular/router';

constructor(

private route:ActivatedRoute

){}
```

---

# Using snapshot

```ts
ngOnInit(){

const id = this.route.snapshot.paramMap.get('id');

console.log(id);

}
```

Output

```
5
```

---

# Understanding snapshot

```
Browser URL

↓

employee/5

↓

ActivatedRoute

↓

snapshot

↓

id

↓

5
```

snapshot reads the parameter once when the component loads.

---

# Using params Observable

```ts
ngOnInit(){

this.route.params.subscribe((res)=>{

console.log(res['id']);

});

}
```

Unlike snapshot,

params updates automatically whenever the route changes.

---

# snapshot vs params

| snapshot | params |
|-----------|--------|
| Reads once | Listens continuously |
| Static | Dynamic |
| Simpler | Observable |

---

# What is ActivatedRoute?

ActivatedRoute is an Angular service that provides information about the currently active route.

It is commonly used to access:

- Route Parameters
- Query Parameters
- URL Data

---

# Wildcard Route (404 Page)

Sometimes,

users enter an invalid URL.

Example

```
localhost:4200/xyz

localhost:4200/test

localhost:4200/student
```

Angular cannot find these routes.

Instead of displaying a blank page,

we show a

```
404 Page Not Found
```

---

# Create Component

```
ng g c page-not-found
```

---

# Configure Route

## app-routing.module.ts

```ts
{

path:'**',

component:PageNotFoundComponent

}
```

---

# Why "**" ?

```
**

↓

Matches Every Unknown URL
```

This route should always be placed at the **end** of the Routes array.

Otherwise,

Angular will match every request with the wildcard route.

---

# Complete Routing Flow

```
Browser URL

↓

Angular Router

↓

Routes[]

↓

Matching Route?

│

├── Yes

│

▼

Component

↓

router-outlet

↓

Display Page

------------------------

No

↓

Wildcard Route

↓

PageNotFoundComponent
```

---

# Routing Lifecycle

```
Application Starts

↓

AppModule

↓

AppRoutingModule

↓

Routes Registered

↓

User Clicks Link

↓

Angular Router

↓

Match Path

↓

Component

↓

router-outlet

↓

Render Component
```

---

# Complete Routing Summary

| Concept | Purpose |
|----------|----------|
| RouterModule | Enables Routing |
| Routes | Stores Routes |
| routerLink | Navigate in HTML |
| Router | Navigate in TypeScript |
| router-outlet | Displays Component |
| ActivatedRoute | Reads Current Route |
| Route Parameter | Pass Data Through URL |
| Wildcard Route | Handles Invalid URLs |

---

# Common Mistakes

## ❌ Forgetting to Import AppRoutingModule

Routing will not work.

---

## ❌ Missing router-outlet

Navigation occurs,

but nothing is displayed.

---

## ❌ Using href instead of routerLink

The entire webpage reloads.

---

## ❌ Wildcard Route at the Top

Incorrect

```ts
{

path:'**',

component:PageNotFoundComponent

}
```

If placed first,

every URL opens the 404 page.

Always keep it at the **end**.

---

## ❌ Wrong Route Parameter

Configured

```ts
employee/:id
```

Navigated

```ts
employee
```

Angular receives

```
id = null
```

---

# Real Concepts I Learned

Initially,

I thought every page required a separate component.

Later I understood that one component can display multiple records by receiving different IDs through Route Parameters.

I also learned that `snapshot` reads the parameter once, while `params` continues listening for route changes.

---

# 🧠 How I Remember Routing

```
routerLink

↓

Angular Router

↓

Routes[]

↓

Component

↓

router-outlet

↓

Display

------------------------

Need Data?

↓

:id

↓

ActivatedRoute

↓

Component

------------------------

Wrong URL?

↓

**

↓

404 Page
```

---

# 🎯 Interview Nuggets

✔ Routing converts an Angular application into a Single Page Application.

✔ `routerLink` is used in HTML.

✔ `navigate()` is used in TypeScript.

✔ `router-outlet` displays the routed component.

✔ `ActivatedRoute` reads route parameters.

✔ `snapshot` reads parameters once.

✔ `params` is an Observable.

✔ Wildcard Route (`**`) handles invalid URLs.

✔ Wildcard Route should always be the last route.

---

# 📌 Key Takeaways

- Routing enables navigation without refreshing the webpage.
- Every route maps a URL to a component.
- Route Parameters allow passing values through the URL.
- ActivatedRoute retrieves route information.
- Wildcard Routes improve user experience by handling invalid URLs.
- Routing is one of the core features of Angular applications.

# 15. Component Communication (@Input & @Output)

In Angular, components often need to communicate with each other.

Communication happens in two ways:

```
Parent → Child

using

@Input()

----------------------

Child → Parent

using

@Output()
```

---

# Component Communication

```
Parent Component

↓

@Input()

↓

Child Component

--------------------------

Child Component

↓

@Output()

↓

Parent Component
```

---

# @Input() Decorator

## What is @Input()?

`@Input()` is a decorator used to send data from the **Parent Component** to the **Child Component**.

Direction:

```
Parent

↓

Child
```

---

# Why do we use @Input()?

Suppose the Parent Component has employee details.

Instead of writing the same data again inside the Child Component,

the Parent passes the data using `@Input()`.

---

# Example

## Parent Component (parent.component.ts)

```ts
employeeName="Dhikshanth";
```

---

## Parent Component HTML

```html
<app-child

[name]="employeeName">

</app-child>
```

---

## Child Component (child.component.ts)

```ts
import { Input } from '@angular/core';

export class ChildComponent{

@Input()

name:any;

}
```

---

## Child Component HTML

```html
<h2>

{{name}}

</h2>
```

---

# Execution Flow

```
Parent Component

↓

employeeName

↓

@Input()

↓

Child Component

↓

Display Data
```

---

# How I Remember @Input()

```
Input

↓

Receive

↓

Parent Sends

↓

Child Receives
```

Whenever I hear **@Input()**,

I immediately think:

> **Parent sends data to Child.**

---

# @Output() Decorator

## What is @Output()?

`@Output()` is a decorator used to send data or events from the **Child Component** to the **Parent Component**.

Direction:

```
Child

↓

Parent
```

Unlike `@Input()`,

`@Output()` uses an **EventEmitter**.

---

# Why do we use @Output()?

Suppose the Child Component has a button.

When the user clicks the button,

the Parent Component should know about it.

The Child sends an event using `@Output()`.

---

# Example

## Child Component (child.component.ts)

```ts
import {

Output,

EventEmitter

} from '@angular/core';

export class ChildComponent{

@Output()

sendData = new EventEmitter<string>();

send(){

this.sendData.emit(

"Hello Parent"

);

}

}
```

---

## Child Component HTML

```html
<button

(click)="send()">

Send

</button>
```

---

## Parent Component HTML

```html
<app-child

(sendData)="receive($event)">

</app-child>
```

---

## Parent Component TS

```ts
receive(data:any){

console.log(data);

}
```

Output

```
Hello Parent
```

---

# Understanding EventEmitter

`EventEmitter` is used to send events or data from the Child Component to the Parent Component.

```
Child

↓

EventEmitter

↓

Parent
```

Without `EventEmitter`,

`@Output()` cannot send data.

---

# Execution Flow

```
Button Click

↓

send()

↓

EventEmitter

↓

@Output()

↓

Parent Component

↓

receive()

↓

Display Data
```

---

# @Input() vs @Output()

| @Input() | @Output() |
|-----------|-----------|
| Parent → Child | Child → Parent |
| Receives Data | Sends Data |
| Uses @Input | Uses @Output + EventEmitter |
| One-way Input | One-way Output |

---

# Complete Component Communication

```
Parent Component

↓

@Input()

↓

Child Component

↓

Button Click

↓

EventEmitter

↓

@Output()

↓

Parent Component
```

---

# Real Concept I Learned

Initially,

I thought components could directly access each other's variables.

Later I understood that Angular keeps components independent.

To communicate,

Angular provides:

- `@Input()` for Parent → Child communication.
- `@Output()` with `EventEmitter` for Child → Parent communication.

This makes components reusable and loosely coupled.

---

# Common Mistakes

## ❌ Forgetting @Input()

The Child Component cannot receive data.

---

## ❌ Forgetting @Output()

The Parent Component never receives the event.

---

## ❌ Forgetting EventEmitter

```ts
@Output()

sendData;
```

This cannot emit any data.

Always use:

```ts
new EventEmitter()
```

---

## ❌ Forgetting emit()

```ts
sendData.emit(data);
```

Without `emit()`,

the Parent Component will never receive the value.

---

# 🧠 Quick Revision

```
Parent

↓

@Input()

↓

Child

-------------------------

Child

↓

@Output()

↓

EventEmitter

↓

Parent
```

---

# 🎯 Interview Nuggets

✔ `@Input()` sends data from Parent to Child.

✔ `@Output()` sends events from Child to Parent.

✔ `EventEmitter` is used with `@Output()`.

✔ Components communicate without directly accessing each other's variables.

✔ Component communication keeps Angular applications modular and reusable.

---

# 📌 Key Takeaways

- `@Input()` receives data from the Parent Component.
- `@Output()` sends events or data to the Parent Component.
- `EventEmitter` is required for `@Output()`.
- Parent and Child Components communicate in a structured and reusable way.

# 16. RxJS (Reactive Extensions for JavaScript)

RxJS is a library used to handle **asynchronous data** in Angular.

Angular uses RxJS for:

- HTTP Requests
- API Calls
- User Events
- Timers
- Form Changes

---

# Why do we need RxJS?

Some operations take time to complete.

Examples:

- API Request
- Database Fetch
- User Click
- Timer
- Search Suggestions

Instead of waiting,

Angular continues executing other code and processes the response when it arrives.

---

# Observable

## What is an Observable?

An Observable is a stream of data that produces values over time.

Angular's `HttpClient` returns an Observable.

Example

```ts
this.http.get(url)
```

returns

```ts
Observable
```

---

# Observer

The Observer receives data emitted by an Observable.

Example

```ts
.subscribe((res)=>{

console.log(res);

});
```

Here,

```ts
(res)=>{

console.log(res);

}
```

acts as the Observer.

---

# subscribe()

`subscribe()` starts the Observable.

Without `subscribe()`,

the HTTP request is never executed.

Example

```ts
this.http.get(url)

.subscribe((res)=>{

console.log(res);

});
```

---

# Observable Flow

```
API

↓

Observable

↓

subscribe()

↓

Response

↓

Component

↓

UI Updated
```

---

# Common Operators

## map()

Transforms data.

```ts
data

↓

map()

↓

Modified Data
```

---

## filter()

Filters required data.

```ts
Array

↓

filter()

↓

Required Records
```

---

## tap()

Performs side effects like logging.

```ts
tap((res)=>{

console.log(res);

});
```

---

# Real Concept I Learned

Initially,

I thought

```ts
this.http.get()
```

returned data directly.

Later I understood that it returns an **Observable**.

Only after calling

```ts
.subscribe()
```

does Angular execute the request and receive the response.

---

# Observable vs Promise

| Observable | Promise |
|------------|---------|
| Multiple values | Single value |
| Lazy Execution | Executes immediately |
| Can be Cancelled | Cannot be Cancelled |
| Used by Angular HttpClient | Native JavaScript |

---

# 🧠 How I Remember RxJS

```
Observable

↓

subscribe()

↓

Response

↓

UI
```

Whenever I hear RxJS,

I immediately think:

> **Observable + subscribe()**

---

# 🎯 Interview Nuggets

✔ RxJS stands for Reactive Extensions for JavaScript.

✔ Angular HttpClient returns an Observable.

✔ `subscribe()` executes the Observable.

✔ Operators like `map()`, `filter()`, and `tap()` help process data.

---

# 📌 Key Takeaways

- RxJS handles asynchronous operations.
- Angular uses Observables for HTTP communication.
- `subscribe()` is mandatory to receive data.
- Operators transform and filter data.

# Zone.js in Angular

## What is Zone.js?

Zone.js is a JavaScript library used by Angular to **track asynchronous operations** happening inside an application.

Angular uses Zone.js to know **when something has changed** and when it should run **change detection** to update the UI.

In simple words:

> Zone.js acts as a bridge between asynchronous operations and Angular's change detection system.

---

# Why does Angular need Zone.js?

JavaScript executes code synchronously by default.

Example:

```ts
console.log("Start");

let value = 10;

console.log(value);

console.log("End");```