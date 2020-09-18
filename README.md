# Angular Architecture Best Practices

This repository discusses best practices in Angular architecture. The current example includes concepts mentioned in the following blog posts:
- https://angular-academy.com/angular-architecture-best-practices/
- https://blog.strongbrew.io/A-scalable-angular2-architecture/
- https://netmedia.io/dev/angular-architecture-patterns-high-level-project-architecture_5589

## Table of contents
- [Introduction](#heading)
- [Layers of abstraction](#heading-1)
    - [Presentation layer](#sub-heading-1)
    - [Abstraction layer](#sub-heading-1)
    - [Core layer](#sub-heading-1)
- [Unidirectional data flow](#heading-2)
  - [Smart components](#sub-heading-1)
  - [Dumb components](#sub-heading-1)
- [Modular design](#heading-2)
  - [Feature Modules](#sub-heading-1)
  - [Core Module](#sub-heading-1)
  - [Shared Module](#sub-heading-1)
- [Monorepo and microfrontends](#heading-2)

## Introduction
While following architectural guidelines on Angular.io for small and medium sized applications works well, it seems like especially for large scale applications, tutorials and examples are missing. This repository tries to fill this gap by providing guidelines and examples of an **architecture that is highly scalable** and works well in the context of developing **bussiness applications**.

Do not consider those guidelines as strict rules, but rather as recommendations that can make life easier. I see this repository as a **starting point**, that is open to discussions and I would love to invite the community to **constantly improve current examples** and share their real life experiences.

The goal is to provide a **good source of architectural best practices** for everyone whether you are a beginner, intermediate or expert.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*"If you think good architecture is expensive, try bad architecture"* - Brian Foote and Joseph Yoder
