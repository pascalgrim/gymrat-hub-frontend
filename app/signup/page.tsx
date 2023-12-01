import React from 'react'
import SignUpForm from './SignUpForm'
import { useMutation } from '@tanstack/react-query'
import { api } from '../../util/axios'
import Container from '@/components/layout/Container'

function SignUpPage() {

    return (
        <Container >
            <div className='h-screen flex items-center justify-center'>
                <SignUpForm />
            </div>
        </Container>
    )
}

export default SignUpPage