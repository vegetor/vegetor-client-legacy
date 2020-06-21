import React from 'react'
import { Footer, Header } from '../components'

const LoginPage: React.FC = () => (
    <section>
        <Header authorized={false} />
        <Footer />
    </section>
)

export default LoginPage
