import { render, screen } from "@testing-library/react"

import App from './App'


test('find  text', () => {
    render(<App />) 
    let myApp=screen.getByTestId("app")
        
    //Assertions(passing and failing tests)
    expect(myApp).toHaveTextContent("THIS IS THE MASTER BRANCH")
})
