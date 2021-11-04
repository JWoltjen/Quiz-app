# A Quiz App using React-Redux


![reccordit.gif](https://recordit.co/E6EHHAgimH.gif)


## Introduction

This is a simple quiz application that hits the opentdb api and fetches trivia questions based on the category of question, difficulty, question type, and number of questions asked. The application then uses Redux to keep track of the score and the question number. Once the user completes the number of questions selected, they are taken to the final screen, where they are given a total score and a link to begin the game again. 

## React-Redux

This application uses React-Redux to manage state. Acccording to the principles of react-redux, global state, the single source of truth, should only be found within the store file. State is also read-only, meaning the only way to change state is to "dispatch" an action to the store. 

### Actions

An "action" is itself an object that describes how the state changed. Finally, changes are made with pure functions, the simplest reusable building blocks of code. The application seperates actionTypes from actions for semantic clarity. The actions available are handleCateogyChange, handleDifficultyChange, handleAmountChange, and handleScoreChange. 

### Reducers

A "reducer" is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action. The reducers this application uses simply take one of the four actions described above, and change the initial state to the action.payload. When using reducers it is important to set the initialState. 

### Store

A store is an immutable object tree in Redux. A store is a state container which holds the application's state. Once the store is created, it is imported into Index.js, a Provider component is wrapped acround the App component, which takes the store as props. This completes the flow management of state within this quiz application. 


## Material-UI

This application uses Material-UI to handle styling. Material-UI is a library that allows us to import and use different components to create a user interface in our React applications. This saves a significant amount of time since the developers do not need to write everything from scratch. Material-UI was perfect for this application because I wanted to show learn more about React-Redux, and didn't want my focus or time to be spent tinkering with the UI. 

### Comparing Material-UI to TailwindCSS

Most of my projects over the last year have used TailwindCSS for styling. I like Tailwind because it favors inline styling that I find really powerful for small to medium sized projects. The main difference between Tailwind and Material-UI is that Material-UI is opinionated, and offers custom-made components that you can readily integrate into your application without much thought afterwards, whereas Tailwind is agnostic about component styling and gives you freedom to make the page look how you want. Ultimately the question of which technology to use depends on what you're building the project for, and how much customization the customer desires. 


![reccordit gif](https://recordit.co/JWKZ5yOtTG.gif)

