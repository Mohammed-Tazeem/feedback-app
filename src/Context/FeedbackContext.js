import React, { createContext, useState, useEffect } from 'react'
import { json } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()



export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()

    }, [])

    //Fetch Feedback

    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you Sure')) {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            }
            )
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }

    //Update Feedback

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json()

        setFeedback(feedback.map((item) =>
            item.id === id ? { ...item, ...data } : item
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

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newFeedback),

            })
        const data = await response.json()

        setFeedback([data, ...feedback])

    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            isLoading,
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