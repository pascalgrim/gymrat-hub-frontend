import React from 'react'
import SignUpForm from './SignUpForm'
import { useMutation } from '@tanstack/react-query'
import { api } from '../../util/axios'






function SignUpPage() {

    return (
        <div className='h-screen flex items-center justify-center'>
            <SignUpForm />
        </div>
    )
}

export default SignUpPage