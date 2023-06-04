import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()



export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item 1 is From Context',
            rating: 10
        },
        {
            id: 2,
            text: 'This item 2 is From Context',
            rating: 9
        },
        {
            id: 3,
            text: 'This item 3 is From Context',
            rating: 8
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id) => {
        if (window.confirm('Are you Sure')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }

    //Update Feedback

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) =>
            item.id === id ? { ...item, ...updItem } : item
        ))
        //console.log(id, updItem)

    }

    // Updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })

    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])

    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            updateFeedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit

        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext