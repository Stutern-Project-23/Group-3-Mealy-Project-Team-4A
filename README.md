
# Getting Started with the mealy-app repo
![mealy](./src/images/mealy.jpeg)
- Clone the repo
- Create and switch your custom branch

- run **npm install** to install neccessary dependencies
- Make changes in your branch
- ***git add*** and ***git commit***
- ***git push*** your branch **git push --set-upstream origin YourBranch**
- Make a pull request to the dev branch

## Working on your next task

Dear develper,changes have been made to the dev branch because your team mates's code have been merged to it. You need to have the changes on your local machine to work with the latest changes,hence you have to **PULL** changes from the **dev branch** before starting your new task .

Pulling from the dev branch **before** starting your next task helps identify code conflicts and
you can resolve the conflicts before starting your new task

### pulling changes from the dev branch

- git checkout dev
- git pull origin dev
- git checkout YourBranch
- git merge dev
- resolve code conflicts if present




## Working with the styles folder

- In the **styles** folder,create your css file with the same name as your component

**The folder structure is below**

```
- styles
  
        - Header.css
        - Button.css


```

## Testing using React-Testing-Library and Jest

- By default, Jest comes installed with create-react-app
- For better testing we will be using **React testing Library** to find our **components and manipulate them** while **Jest** will determine **assertions(passing and failing tests and testing coverage)** because the keywords are designed to be intuitive and self explanatory.

- check here for examples of [matchers](https://jestjs.io/docs/using-matchers) (used for assertions) in jest 

```
import { render, screen } from "@testing-library/react"

import App from './App'


test('find  text', () => {
    render(<App />) 
    let myApp=screen.getByTestId("app")
        
    //Assertion (passing and failing tests) using jest matchers
    expect(myApp).toHaveTextContent("THIS IS THE MASTER BRANCH")
})

```
