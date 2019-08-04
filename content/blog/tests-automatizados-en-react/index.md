---
slug: tests-automatizados-en-react
date: 2019-08-01
title: 'Tests automatizados en React'
description: 'Tipos de tests para aplicaciones frontend con React'
published: true
banner: './banner.jpg'
---

Hemos iniciado un nuevo reto con mi equipo de desarrollo, reconstruir gran parte del frontend para [alau.org](https://alau.org/). Actualmente el frontend está implementado con React, Redux y styled-components. Para esta nueva etapa hemos definido algunos objetivos y mejoras a realizar:

- Usar enfoque de desarrollo guiado por pruebas ([TDD](https://en.wikipedia.org/wiki/Test-driven_development))
- [Typescript](https://www.typescriptlang.org/).
- Pruebas unitarias e integración ([react-testing-library](https://testing-library.com/docs/react-testing-library/intro))
- Pruebas end-to-end ([cypress.io](https://www.cypress.io/))
- Eliminar al gigante Redux.
- Hooks & Context.
- Crear una primera versión del design system con [Storybook](https://storybook.js.org/).

Esto ha generado algunos retos interesantes de los cuales empezaré a escribir en una serie de posts. Y me gustaría iniciar con uno de los primeros temas que tuvimos que organizar para arrancar con este nuevo proyecto: **PRUEBAS**.

Y cuando hablo de pruebas no me refiero a probar manualmente que nuestra aplicación esté funcionando correctamente, si no me refiero a entender y estandarizar un **proceso continuo de implementación de pruebas automatizadas** que nos brinden la confianza necesaria que como equipo de desarrollo buscamos en nuestros proyectos.

Por lo tanto, para entrar en materia, existen 4 tipos de tests que considero importantes al momento de planificar una ruta de pruebas a implementar en una aplicación frontend: **estáticas, unitarias, integración y end-to-end**.

# Pruebas estáticas

Las pruebas estáticas consisten en detectar errores de escritura y tipado al momento de codificar nuestra aplicación. Y pues, solo con implementar este paso, aumentamos en gran cantidad la confianza que podemos tener sobre nuestro código, ya que la mayoría de bugs en Javascript están relacionados a **errores de tipografía y tipos**.

Pero, ¿cómo automatizamos este tipo de pruebas o verificaciones? Y como ya saben que en Javascript existe un paquete para todo, pues para esta etapa nos podemos ayudar de herramientas como:

- [ESLint](https://eslint.org/): es una herramienta configurable de análisis estático que nos permite identificar y reportar sobre determinados patrones problemáticos de nuestro código. Debido a que Javascript es un lenguaje dinámico que no tiene tipos, es necesario ejecutarlo para encontrar dichos problemas. Sin embargo, ESLint nos ayuda para realizar este análisis de forma automática sin necesidad de ejecutar nuestro código.
- [Prettier](https://prettier.io/): Es un formateador de código, que directamente no nos ayuda a encontrar errores, pero nos ahorra un montón de tiempo formateando nuestro código. Y en ciertos casos nos puede ayudar a identificar errores pequeños al proporcionarnos la capacidad de observar nuestro código ordenado. Y pues ¿a quién no le gusta un código ordenado y estandarizado?
- [Typescript](https://www.typescriptlang.org/) o [Flow](https://flow.org/): debido a la naturaleza de Javascript es muy difícil controlar el tipo de variables que viajan a través de nuestras funciones en nuestra aplicación. Para esto necesitamos una herramienta que nos ayude con la verificación de los tipos de nuestras variables en nuestro código. Por un lado tenemos Typescript (la opción más popular al momento de escribir este blog) que podríamos decir que es un lenguaje con tipado estricto que compila a Javascript, y por otro lado Flow que es una herramienta de verificación de tipado.

# Pruebas unitarias

En los tests unitarios verificamos las porciones o unidades de código de forma aislada, en React yo las considero los componentes base (nuestros átomos) que forman parte de nuestro design system, que de hecho los construimos de forma aislada y con un enfoque guiado en pruebas.

Podríamos decir que las pruebas unitarias son sencillas de construir y mantener por nuestro equipo de desarrollo. Y como normalmente testean porciones pequeñas de código, que no poseen demasiadas dependencias, **son rápidas al momento de ejecutarlas**.

Para esta etapa dentro de alau.org nos ayudamos de las siguientes herramientas:

- [Jest](https://jestjs.io/): es un framework de pruebas open source y liberado por Facebook (por lo tanto tiene todo el sentido usarlo para testear aplicaciones React). Se caracteriza por su sencillez pero también por su flexibilidad a la hora de solventar configuraciones o necesidades específicas. Normalmente lo podemos instalar y usar sin tener que realizar ningún tipo de configuración extra por lo que es relativamente sencillo iniciar con este framework.
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro): es una librería construida sobre [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro) que agrega utilidades para testear componentes React. La librería mantiene una filosofía bastante interesante, razón por la cual se diferencia de otras soluciones como [Enzyme](https://airbnb.io/enzyme/). Propone que debemos **evitar probar detalles de implementación** de nuestros componentes y centrarnos en probar funcionalidad. Es decir, si refactorizamos nuestros componentes a nivel de detalles de implementación, pero a nivel funcional siguen ofreciendo lo mismo, nuestros tests no se deberían romper. En palabras más sencillas, **nuestros tests deberían probar nuestros componentes de la forma más cercana a la que lo hacen nuestros usuarios**.

# Pruebas de integración

Los tests de integración nos permiten verificar que un conjunto de componentes funcionen correctamente y de forma orquestada, por ejemplo la página de login de nuestra aplicación. Estas pruebas pueden resultar un poco más complejas de implementar, ya que el objetivo es probar varios componentes interactuando con diferentes partes de nuestro sistema.

Es una buena idea dedicar esfuerzo y tiempo a escribir pruebas de integración ya que **en una aplicación frontend probablemente son las pruebas que mayor valor agregan a nuestro producto**. Se encuentran en el punto intermedio entre lo costoso/complejo que puede ser escribirlas y la confianza que nos entregan.

Las herramientas con las que nos apoyamos para esta etapa son las mismas que usamos para escribir nuestras pruebas unitarias ([Jest](https://jestjs.io/) y [react-testing-library](https://testing-library.com/docs/react-testing-library/intro)).

# Pruebas end-to-end

Y finalmente los tests end-to-end. Estos nos permiten **simular escenarios completos de nuestra aplicación**, normalmente corren en un browser y por lo general son realizados por personal de calidad (QA).

Para esta etapa existen algunas herramientas o soluciones, sin embargo, recomiendo darle una mirada a:

- [Cypress.io](https://www.cypress.io/): es una herramienta muy poderosa que nos ofrece una solución completa para nuestros tests end-to-end. Es sencilla de instalar y configurar, relativamente fácil escribir los tests, y ofrece varias ventajas como debugs, generación de capturas, videos, entre otros. Nos permite testear cualquier tipo de aplicación front-end, no es necesario que sea React.

# Conclusión

Cada tipo de prueba nos ofrece cierto nivel de confianza en nuestra aplicación, pero a la vez involucra cierto reto o complejidad (costos, mantenibilidad, tiempo de ejecución de tests, etc.). **Los tests entregan confianza a los desarrolladores**, confianza de que nuestros cambios (nuevos features o mantenimientos) no van a romper nuestra aplicación. Es sencillo pensar que los tests son una pérdida de tiempo, sin embargo, cuando aprendemos a identificar y priorizar las porciones de código a probar, podemos alcanzar la calidad y experiencia que deseamos para los usuarios de nuestros productos.
