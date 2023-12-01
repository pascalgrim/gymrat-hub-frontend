import React from 'react'
import SignInForm from './SignInForm'
import Container from '@/components/layout/Container'

function SignInPage() {
    return (
        <Container>
            <div className='h-screen flex items-center justify-center'>
                <SignInForm />
            </div>
        </Container>
    )
}

export default SignInPage