# Next.js Notes

## Why Learn Next.js

1. **File-Based Routing**: Simplifies routing based on file structure.
2. **API Routes**: Allows backend endpoints directly in the project.
3. **SSR and CSR Rendering**: Supports Server-Side Rendering (SSR) and Client-Side Rendering (CSR) for flexible rendering.
4. **Data Fetching**: Provides easy methods for data fetching (SSG, SSR).
5. **Styling Options**: Flexibility with CSS, Tailwind CSS, and other options.
6. **Optimization**: Includes features like image optimization, lazy loading, and performance optimizations.
7. **Build System**: Efficient build processes for both development and production environments.

---

## Prerequisites

1. **HTML, CSS, and JavaScript Fundamentals**
2. **ES6 Knowledge**: Familiarity with `let`, `const`, arrow functions, etc.
3. **React Basics**: Components, props, state management.

---

## Setting Up a Next.js Project

1. **Download and Install Node.js**
2. **Create a New Next.js App**: Run 
   ```bash
   npx create-next-app@latest playground
   ```
3. **Project Setup Options**: Select features like TypeScript, ESLint, and Tailwind CSS as needed.
4. **Run the Project**:
   ```bash
   npm run dev
   ```

---

## Project Control Flow

After running a Next.js project, the flow typically follows this sequence:

1. **package.json** → `dev` command → **layout.tsx** → `rootLayout` (defines main layout) → **app/page.tsx** → Renders content for the root route.

---

## Key Topic to Learn

- **React Server Components (RSC)**

---

# SSR vs CSR in Next.js

## What is CSR (Client-Side Rendering)?

With **CSR**:

1. The user goes to a webpage.
2. The browser loads an empty page first, then requests data from the server to fill the content.
3. **Example**: Like a mobile app that displays a loading screen while data loads.

### When to use CSR:
- **Good for interactive sites** where users frequently interact with the page (e.g., social media).
- Provides smooth and responsive experiences after the page fully loads.

---

## What is SSR (Server-Side Rendering)?

With **SSR**:

1. The server sends the complete page, already filled with content, before it reaches the browser.
2. **Example**: Like ordering a pizza that’s ready to eat when it arrives.

### When to use SSR:
- **Great for static sites** like blogs or product pages where faster initial load times are beneficial.

---

## Key Differences Between SSR and CSR

| **Feature**                | **SSR (Server-Side Rendering)**                  | **CSR (Client-Side Rendering)**                     |
|----------------------------|--------------------------------------------------|-----------------------------------------------------|
| **Where page loads**       | Server sends a full, ready page                  | Browser loads an empty page, then fetches data      |
| **Initial load time**      | Faster for first page load                       | Slower for first page load                          |
| **Rendering location**     | Before reaching the browser (server)             | After page load in the browser                      |
| **Best for**               | Sites with static content (blogs, articles)      | Interactive apps (social media, dashboards)         |
| **Performance (initial)**  | Faster for initial page load                     | Slower for initial page load, faster on subsequent interactions |

---

## SSR and CSR in Next.js

- **SSR**: Use `getServerSideProps` to fetch data **before** sending to the browser.
- **CSR**: Use **React** features like `useEffect` to fetch data **after** the page loads.

---

## Quick Summary

- **SSR**: Server sends a **ready-to-view page**.
- **CSR**: Browser gets an empty page and **loads content after**.

---

# Routing in Next.js

Next.js uses a **file-based routing system** where the folder structure within the `app` directory defines the application URL paths.

### Dynamic Routing

Dynamic routing in Next.js enables routes with variable segments, such as product pages for different product IDs.

**Example Structure:**

```
app
  product
    [productid]
      page.tsx
```

Here, `[productid]` is a **dynamic route** folder, handling URLs like `/product/1`, `/product/2`, based on `productid`.

**Example Code:**

```typescript
const ProductId = ({ params }: { params: { productid: string } }) => (
    <h1>Detail of Product {params.productid}</h1>
);

export default ProductId;
```

This `ProductId` component uses `params.productid` to display a value from the URL.

---

### Nested Dynamic Routing

Nested dynamic routing creates multiple layers of dynamic routes, like a documentation section with features and specific concepts.

**Example Structure**:

```bash
app
  docs
    [feature]
      [concept]
        page.tsx
```

With both `[feature]` and `[concept]` as dynamic segments, this setup enables URLs like `/docs/feature1/concept1`.

**Example Code:**

```typescript
const Feature = ({ params }: { params: { feature: string; concept: string } }) => (
    <h1>Detail of {params.feature} - {params.concept}</h1>
);

export default Feature;
```

This `Feature` component displays content based on both `feature` and `concept` parameters.

---

## Colocation

**Colocation** is organizing project files so components, styles, and other code are close to where they’re used. In Next.js, it means keeping related files in the same folder as the pages or components that use them, making code more organized and easier to maintain.

**Example Structure:**

```bash
app
  about
    page.tsx         # Main code for the About page
    AboutStyles.css  # Styles specific to the About page
    AboutHelper.js   # Helper functions for the About page
```

**Benefits**:
- **Easier Maintenance**: Related code in one spot.
- **Better Organization**: Keeps project structure clean as it grows.

---

## Private Folders

Create private folders by prefixing them with an underscore (`_`), making them internal details not recognized by the routing system.

```bash
app
  _component
    page.tsx  # Ignored as a route
```

In this example, `_component` and its contents are ignored by the Next.js routing system, so `page.tsx` inside `_component` is not accessible as a route.

---

## Underscores in URLs

To include an underscore in a URL, use `%5f`.

**Example:** `/my%5fpage` translates to `/my_page`.

This setup keeps implementation details private while allowing flexibility in URL structure.


## Route groups