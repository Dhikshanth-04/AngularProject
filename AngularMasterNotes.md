# Angular Learning Notes

------------------------------------------------------------------------

# Why was Angular Created?

-   Angular was created to manage **large and dynamic web
    applications**.
-   It introduced a **structured, component-based framework** with
    features such as:
    -   Dependency Injection
    -   Routing
    -   Reusable Components
    -   Testing Support

These features make applications easier to **develop, maintain, and
scale**.

------------------------------------------------------------------------

# Difference Between AngularJS and Angular

## AngularJS (Angular 1.x)

-   The original framework based on **JavaScript**.
-   Mainly relied on **Controllers** and the **Digest Cycle**.

## Angular (Angular 2+)

-   Built using **TypeScript**.
-   Introduced **Component-Based Architecture**.
-   Better performance.
-   Improved tooling.
-   Designed for large and scalable applications.

------------------------------------------------------------------------

# Semantic Versioning

Format:

``` text
Major.Minor.Patch
```

Examples:

``` text
1.0.0 → Initial Release
1.1.0 → New Feature
1.1.1 → Bug Fix
2.0.0 → Major Release
```

------------------------------------------------------------------------

# Evolution of Angular

## Angular 2

-   Component-Based Architecture.
-   TypeScript support.
-   Better Change Detection.
-   Designed for modern web and mobile applications.

## Angular 3

Skipped intentionally to synchronize package versions.

## Angular 4

-   Better Performance
-   Improved Animations
-   Smaller Bundle Size

## Angular 5

-   Faster Builds
-   Easier Deployment
-   Better Compiler Support

## Angular 6

-   Improved Angular CLI
-   Angular Package Format

## Angular 7

-   Virtual Scrolling
-   Drag and Drop (CDK)

## Angular 8

-   Improved Lazy Loading

## Angular 9

Introduced the **Ivy Compiler**.

Benefits: - Faster Compilation - Smaller Bundle Size - Better
Debugging - Better Runtime Performance

## Angular 10--13

-   Speed Improvements
-   Stability
-   Ivy Optimizations

## Angular 14

Introduced **Standalone Components**.

Benefits: - Simpler Architecture - Better Code Organization - Less
Boilerplate - Reduced Module Dependency

## Angular 15

-   Improved Standalone Components

## Angular 16

Introduced **Signals**.

## Angular 17

Introduced new control flow syntax:

``` ts
@if
@for
@switch
```

## Angular 18--20

-   Server-Side Rendering Improvements
-   Signal Improvements
-   Performance Optimizations

------------------------------------------------------------------------

# Component

A Component is a small reusable block of code representing a part of the
UI.

Examples: - Navbar - Footer - Search Bar

------------------------------------------------------------------------

# Module

A logical container that groups related Angular building blocks
together.

Example:

Authentication Module: - Login Component - Register Component - Forgot
Password Component

------------------------------------------------------------------------

# Bootstrapping

Angular creates the root component and starts rendering the UI.

------------------------------------------------------------------------

# Decorators

Decorators provide **metadata (data about data)**.

Examples: - `@Component` - `@Injectable` - `@NgModule` - `@Directive` -
`@Pipe`

------------------------------------------------------------------------

# Node.js

A JavaScript runtime environment that allows JavaScript to run outside
the browser.

## Why Angular Needs Node.js

Angular applications run in the browser, but Angular CLI and development
tools run on Node.js.

------------------------------------------------------------------------

# Dependency Tree

A hierarchy of packages where one dependency depends on another.

------------------------------------------------------------------------

# Angular CLI

Angular CLI (Command Line Interface) automates: - Project Creation -
Component Generation - Building - Testing - Serving

> It prepares and serves the application during development.

## Create a Project

``` bash
ng new project-name
```

------------------------------------------------------------------------

# Angular Compilation Process

``` text
ng serve
↓
Angular CLI
↓
Reads angular.json
↓
Reads tsconfig.json
↓
Reads main.ts
↓
Angular Compiler
↓
Processes Components & Templates
↓
Compiles TypeScript → JavaScript
↓
Bundles HTML, CSS & JS
↓
Starts Development Server
↓
Browser Executes JavaScript
↓
Application Appears
```

------------------------------------------------------------------------

# Project Architecture

## package.json

Contains: - Project information - Dependencies - Scripts - Metadata

Important packages: - `@angular/core` - `@angular/common` -
`@angular/router` - `rxjs` - `tslib` - `zone.js`

## node_modules

Stores all installed packages.

## package-lock.json

Stores exact package versions and dependency tree.

Workflow:

``` text
Developer
↓
npm install
↓
Reads package.json
↓
Reads package-lock.json
↓
Downloads packages
↓
Stores in node_modules
↓
Application Ready
```

## angular.json

Workspace configuration file.

Important properties: - `$schema` - `build` - `outputPath` - `main.ts`

Execution:

``` text
ng serve
↓
Angular CLI
↓
angular.json
↓
Build Configuration
↓
Angular Compiler
```

------------------------------------------------------------------------

# Complete Angular Execution Flow

``` text
ng serve
↓
Reads package.json
↓
Uses Installed Packages
↓
Reads angular.json
↓
Finds Builder
↓
Reads tsconfig.app.json
↓
Compiles main.ts
↓
Processes Components
↓
Compiles TypeScript → JavaScript
↓
Starts Development Server
↓
Browser Opens (localhost:4200)
↓
Downloads HTML, CSS & JS
↓
Application Appears
```

------------------------------------------------------------------------

# Data Binding

Data Binding synchronizes data between the Component and the View.

Types: 1. One-Way Binding 2. Two-Way Binding

## One-Way Binding

  Method             Direction          Syntax
  ------------------ ------------------ --------------
  Interpolation      Component → View   `{{ }}`
  Property Binding   Component → View   `[property]`
  Event Binding      View → Component   `(event)`

## Two-Way Binding

Syntax:

``` html
[(ngModel)]="name"
```

Direction:

``` text
Component ⇄ View
```

Requirement:

``` ts
import { FormsModule } from '@angular/forms';
```
