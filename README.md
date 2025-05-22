# CodersLab Tenpo Challenge

Aplicación web desarrollada como parte del desafío técnico de [CodersLab](https://coderslab.io/) para [Tenpo](https://www.tenpo.cl/). Esta aplicación consume dos APIs principales:

- **[Pokémon TCG API](https://docs.pokemontcg.io/)**: utilizada para mostrar cartas coleccionables con scroll infinito, actualmente con más de **18,000** elementos disponibles.

- **[Platzi Fake Store API](https://fakeapi.platzi.com/en/rest/auth-jwt/)**: utilizada como backend de autenticación para simular login y manejo de tokens.

La aplicación implementa funcionalidades modernas como lazy loading, diseño responsivo, accesibilidad basada en WCAG, y pruebas de integración con Vitest.

La página está basada en página oficial de [Pokemon Trading Card Game](https://www.pokemon.com/el/jcc-pokemon/cartas-pokemon?cardName=&cardText=&evolvesFrom=&simpleSubmit=&format=unlimited&hitPointsMin=0&hitPointsMax=340&retreatCostMin=0&retreatCostMax=5&totalAttackCostMin=0&totalAttackCostMax=5&particularArtist=)

## 🧩 Tech Stack

- **Framework**: React 19 + Vite
- **Estilos**: Tailwind CSS 4 + Flowbite React
- **Estado y Datos**: React Query 5, React Hook Form, Yup
- **Autenticación**: JWT (con manejo de tokens)
- **Routing**: React Router DOM 6
- **Testing**: Vitest, React Testing Library, MSW
- **Project Standard**: ESLint, Prettier, TypeScript, Husky

## 🧪 Features

- Autenticación con JWT y manejo de tokens
- Visualización de cartas de Pokémon TCG con scroll infinito
- Diseño completamente responsivo para dispositivos móviles y de escritorio
- Accesibilidad mejorada cumpliendo con pautas WCAG 2.1
- Pruebas de integración con Vitest
- Optimización de rendimiento con lazy loading y memorización

## ⚙️ Pre-requisites

- Docker y docker compose instalados
- Terminal Linux/Mac (O emular linux en Windows)
- Puertos libres: 3000, 4173 para docker. 5173 para desarrollo

## 🚀 Instalación

### Levantar App con Docker

1. Ejecutar script para levantar la app

```bash
chmod 777 ./quickstart.sh
./quickstart.sh
```

2. Ir a [localhost:3000](http://localhost:3000/)
3. Presionar Control + C para detener la app

### Levantar App para desarrollo

1. Ejecutar script para levantar la app

```bash
npm i
npm run dev
```

2. Ir a [localhost:5173](http://localhost:5173/)
3. Presionar Control + C para detener la app

## 🔐 Autenticación

La aplicación utiliza la [Fake Store API de Platzi](https://fakeapi.platzi.com/en/rest/auth-jwt/) como backend de autenticación.

Puedes iniciar sesión con las siguientes credenciales de prueba:

```bash
email:    john@mail.com
password: changeme
```

## 📁 Estructura del proyecto

Este proyecto sigue una variación adaptada de la arquitectura modular propuesta por [bulletproof-react](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md), promoviendo la escalabilidad, mantenibilidad y separación clara de responsabilidades.

```
src
|-- app/
|   |-- routes/
|   |-- app.tsx
|   |-- App.css
|   |-- provider.tsx
|   |-- router.tsx
|-- components/
|-- features/
|-- hooks/
|-- layout/
|-- lib/
|-- test/
|-- utils/
|-- config.ts
|-- types.ts
```

### 💡 Notas:

- Cada `feature` puede contener sus propios componentes, páginas, servicios, tipos y pruebas.
- Se favorece el aislamiento de responsabilidades: `lib/` para infraestructura, `hooks/` para lógica compartida, `layout/` para estructura visual global.
- Se prioriza el rendimiento, accesibilidad y calidad del código como pilares fundamentales del diseño.

## 📌 Decisiones tomadas

- Se decidió seleccionar la API pública de **[Pokémon TCG](https://docs.pokemontcg.io/)** por su gran volumen de datos (más de 18,000 elementos disponibles), lo cuál permite simular escenarios reales de rendimientos y manejo de grandes listas, además de superar los **2000 elementos** solicitados en el detalle de la prueba técnica.
- Se decidió seleccionar la API pública de **[Platzi Fake Store](https://fakeapi.platzi.com/en/rest/auth-jwt/)** para desarrollar y probar un sistema de autenticación realista ya que su integración, en conjunto con la API de Pokémon TCG, permite simular una arquitectura basada en múltiples servicios backend, replicando el consumo de microservicios de forma escalable, sin requerir cambios estructurales significativos en el frontend.
- Se decidió estructurar el proyecto siguiendo la guía de [bulletproof-react](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) con el objetivo de facilitar la escalabilidad, mantener una separación clara de responsabilidades y mejorar la mantenibilidad del código a largo plazo.
- Se decidió utilizar scroll infinito para listar los elementos, priorizando fluidez, rendimiento y una mejor experiencia de usuario en grandes volúmenes de datos. Más detalle en la sección [Argumento sobre criterio para mostrar la lista en el home](#argumento-sobre-criterio-para-mostrar-la-lista-en-el-home)
- Se decidió incluir las URLs de las APIs en un archivo .env dentro del repositorio, dado que se trata de un reto técnico. Esto facilita la revisión inmediata del proyecto sin requerir configuración adicional por parte del equipo evaluador.
- Se decidió basar el diseño visual en la página de login de la web de [Pokémon](https://www.pokemon.com/us/pokemon-trainer-club/login) y en la visualización de cartas de la [Biblioteca de cartas de Hearthstone](https://hearthstone.blizzard.com/es-es/cards/).

## 📈 Mejoras a implementar

- Incorporar opciones de ordenamiento y filtrado en el listado de cartas (por nombre, tipo de energía, rareza, expansión, etc.).
- Agregar un switch que permita alternar la visualización de las cartas entre modo grid y tabla.
- Agregar detalle al presionar carta (actualmente solo se abre un modal y se muestra la imagen en grande)
- Implementar un prefetching con **React Query** para precargar las siguientes páginas antes que el usuario llegue al final del scroll (mejorando la percepción de velocidad)
- Implementar **@tanstack/react-virtual** para renderizar únicamente los elementos visibles en el viewport y reducir significativamente el número de nodos en el DOM y el rendimiento de la aplicación.
- Implementar **react-i18next** para que la aplicación tenga soporte a varios idiomas.
- Implementar sistema de colores para Tailwind/Flowbite que sea compatible con Light y Dark Mode.

## 📋 Argumento sobre criterio para mostrar la lista en el home

Se optó por utilizar un scroll infinito para mostrar los elementos provenientes de Pokemon TGC, ya que:

- Permite al usuario navegar sin interrupciones, incentivando la exploración continua y mejorando la experiencia.
- Dado que la API ofrece más de 18,000 cartas, este enfoque entrega contenido de forma progresiva, optimizando la percepción de rendimiento y evitando abrumar al usuario.
- Se adapta de forma natural a dispositivos móviles, donde el desplazamiento vertical es más intuitivo que la interacción con botones de paginación.

## 📡 Propuesta de mejora técnica sobre llamadas al backend

### 1. Aligerar la carga de datos

Actualmente, la API de Pokémon TCG entrega un volumen considerable de datos por cada solicitud ([ver ejemplo con 25 cartas](https://api.pokemontcg.io/v2/cards?pageSize=25)). Esto implica una mayor carga de red y un tiempo de renderizado más lento para el usuario final, especialmente en conexiones móviles o con múltiples llamadas paginadas.

Este problema puede abordarse desde tres enfoques distintos:

- Reducir el payload del endpoint de listado: dado que el propósito de este endpoint es simplemente listar elementos, no es necesario incluir el contenido completo de cada carta. Es preferible retornar únicamente los campos esenciales (por ejemplo, id, name, image) y dejar el resto de la información para un endpoint de detalle (/cards/:id).
- Uso de GraphQL: si se implementa un backend con GraphQL, se puede definir exactamente qué campos solicitar desde el cliente. Esto garantiza que solo se transfiera la información estrictamente necesaria, optimizando el tiempo de respuesta y reduciendo la carga de datos.
- Filtrado mediante una función intermedia (ej. AWS Lambda): en caso de no tener control sobre la API original (como en el caso de APIs públicas o de terceros), se puede implementar una función serverless (ej: AWS Lambda, Vercel Edge Function) que actúe como intermediario. Esta función se encargaría de consumir la API original, filtrar los datos innecesarios y exponer una versión optimizada para el frontend.

Cualquiera de estas estrategias permite disminuir el tamaño de los datos transferidos, reduciendo el Largest Contentful Paint (LCP) y mejorando sustancialmente la experiencia del usuario.

### 2. Obtar por implementar Cursor-based pagination

Actualmente, La API de Pokémon TCG implementa Offset-based pagination (page, pageSize, offset) la cuál es especialmente buena cuando:

- El usuario necesita ir directamente a una página.
- Obtener la cantidad de páginas que contiene la API.
- Se busca una implementación rápida y sencilla desde el backend.

Sin embargo, para los casos donde manejamos grandes volumenes de datos (como en nuestro caso, que manejamos más de **18,000** elementos obtenibles) utilizar una arquitectura Offset-based podría generar problemas de rendimiento y de experiencia de usuario. Las consultas se vuelven progresivamente más costosas a medida que aumentan las páginas solicitadas, y en muchos casos el page size no es ajustable dinámicamente.

En este contexto (suponiendo que tuviéramos control sobre el backend), sería más apropiado adoptar una estrategia de **Cursor-based pagination**.

Este enfoque permite realizar peticiones sobre grandes conjuntos de datos de manera fluida, sin comprometer el tiempo de respuesta del servidor ni la experiencia de usuario (tal como lo hacen Facebook, Instagram y Twitter con sus feeds). De implementar esta arquitectura podríamos:

- Cargar los elementos de grandes volumenes de datos de manera consistente y eficiente sin afectar el rendimiento .
- Ajustar dinámicamente la cantidad del page size (expecialmente util para vistas mobiles ya que no se necesita hacer request a la misma cantidad de elementos)

A pesar de ser una técnica algo más compleja de implementar en comparación con offset-based pagination, representa una opción significativamente más escalable y robusta para interfaces basadas en scroll infinito, optimizando tanto la carga en el servidor como la fluidez en el cliente.

## ⚠️ **IMPORTANTE:** Parámetro especial de testing: `?fetchUntil=number`

Este parámetro fue creado **exclusivamente** con fines de evaluación técnica y **no debería usarse en producción**.

Se agrega este parámetro debido a la **literalidad del requerimiento** presente en el enunciado de la prueba técnica:

> "Levantar una home, la cual se conecte con una API pública (a elección) y muestre una lista de 2000 elementos."

Para facilitar un caso de testing al equipo revisor, se ha habilitado el parámetro `fetchUntil` en la URL, que permite simular la carga inicial de un número específico de elementos.

✅ **Usos de ejemplo:**

```bash
http://localhost:3000/?fetchUntil=2000
BASE_URL/?fetchUntil=2000
```

Este parámetro ejecuta múltiples requests en segundo plano hasta completar la cantidad deseada de cartas (en este caso, 2000).

❌ NO es posible cargar 2000 elementos de golpe ya que la API limita `pageSize` a 250.

💡 Esta lógica se encuentra aislada y puede eliminarse sin afectar el comportamiento general de la app. Está pensada solo para facilitar la revisión del requerimiento.

🚫 NO DEBERÍA mantenerse en producción y debe ser eliminada tras su revisión.
