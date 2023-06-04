import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

import About from './pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './Context/FeedbackContext'

function App() {






    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                    <AboutIconLink />
                                </>
                            }>
                        </Route>
                        <Route path='/about' element={<About />} />

                    </Routes>


                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App