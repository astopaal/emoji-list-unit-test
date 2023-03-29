import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';
import App from './App'
import emojiList from './emojiList.json'
describe("emoji-list-render",()=>{
    beforeEach(()=>{
        render(<App/>)
    })
    test("Emoji list render",()=>{
        const emojis = emojiList.slice(0, 20);
        emojis.map((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument()
        })
    })
})