# A Quiz App using React-Redux


![reccordit.gif](https://recordit.co/E6EHHAgimH.gif)


## Introduction

This is a simple quiz application that hits the opentdb api and fetches trivia questions based on the category of question, difficulty, question type, and number of questions asked. The application then uses Redux to keep track of the score and the question number. Once the user completes the number of questions selected, they are taken to the final screen, where they are given a total score and a link to begin the game again. 

## React-Redux

This application uses React-Redux to manage state. Acccording to the principles of react-redux, global state, the single source of truth, should only be found within the store file. State is also read-only, meaning the only way to change state is to "dispatch" an action to the store. 

### Actions

An "action" is itself an object that describes how the state changed. Finally, changes are made with pure functions, the simplest reusable building blocks of code. The application seperates actionTypes from actions for semantic clarity. The actions available are handleCateogyChange, handleDifficultyChange, handleAmountChange, and handleScoreChange. 

## Reducers

A "reducer" is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action. The reducers this application uses simply take one of the four actions described above, and change the initial state to the action.payload. When using reducers it is important to set the initialState. 



![reccordit gif](https://recordit.co/JWKZ5yOtTG.gif)

