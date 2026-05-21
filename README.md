# Library App

A small browser-based library manager built with vanilla HTML, CSS, and JavaScript.

## Goal

Extend a `Book` constructor example into a fully interactive library app that reinforces the concept of separating data management from DOM rendering. Books are stored in an array and the display is derived from that array — not managed directly.

## Features

- **Book storage** — All books are stored as objects in a `myLibrary` array, each with a unique ID generated via `crypto.randomUUID()`
- **Add books** — A "New Book" form (via `<dialog>`) collects title, author, page count, and read status. Uses `event.preventDefault()` to handle submission without a server round-trip
- **Display books** — Books are rendered as cards or table rows derived from the array, not hardcoded in the DOM
- **Remove books** — Each book has a delete button that removes it from the array and re-renders the display
- **Toggle read status** — Each book has a button to flip its read/unread state via a `Book` prototype method

## Outcome

A working single-page app where the library state lives in JavaScript and the UI is always a reflection of that state — laying the groundwork for the data/display separation pattern used in larger frameworks.
