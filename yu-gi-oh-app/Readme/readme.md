# Yu-Gi-Oh! React App 🃏

A web application developed with React JS that displays a collection of cards
inspired by the Yu-Gi-Oh! game.

Users can explore the cards, view detailed information, and build
their own deck following the game's rules.

---

## Contents
- Project Description
- Homepage
- Technologies Used
- Third-Party Components
- Resources and Tutorials
- Design Inspiration
- Project Structure
- Responsive Design
- Installation and Use

---

## Project Description

This project was developed as a prototype using **React JS,
JavaScript, HTML, and CSS**. The application allows you to:

- Display cards from a JSON file
- View detailed information using a modal window
- Build a deck with a maximum of 3 copies per card
- Navigate between multiple pages, sharing the header and footer

The main objective is to apply best practices for reusable components, clean code, and user experience (UX/UI).

---

## Home Page

The home page displays a responsive grid of cards generated from an array of JSON objects.

Clicking on a card opens a modal window with complete information: image, name, type, effect, and ATK and DEF values.

The page is accessible from:
- `/`
- `/home`

---

## Technologies Used

- React JS
- Vite
- JavaScript (ES6)
- HTML5
- CSS3
- Flexbox and Media Queries

---

## Third-Party Components

- React: https://reactjs.org/
- React Router DOM: https://reactrouter.com/
- Vite: https://vitejs.dev/

---

## Resources and Tutorials

- Official React Documentation

https://reactjs.org/docs/getting-started.html
- Vite Documentation

https://vitejs.dev/guide/
- README Template

https://github.com/othneildrew/Best-README-Template
- Clean Code Principles

https://www.hostgator.mx/blog/clean-code-codigo-limpio/

---

## Design Inspiration

- Figma Templates and Examples

https://www.figma.com/templates/web-design-inspiration/
- UX/UI Concepts

https://woko.agency/blog/monitorizar-evaluar-experiencia-usuario/

---

## 📰 RSS News Page

The project includes a News page that connects to an RSS feed related to Yu-Gi-Oh news.

This fulfills the RSS requirement of the assignment.

## Project Structure

src/
├─ components/
│ ├─ Card/
│ ├─ CardModal/
│ ├─ Header/
│ └─ Footer/
├─ pages/
│ ├─ Home/
│ ├─ Deck/
│ ├─ About/
│ └─Privacy/
│ └─News/
│ └─Chat/
| 
├─ data/
│ └─ cards.json
│ └─ firabase.js
├─ App.jsx
└─ main.jsx