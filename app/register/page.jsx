"use client";
import { useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react'

const RegisterPage = () => {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState('');
    const router = useRouter();

    // form submit
    const handleSubmit = async (e) => { };

    // Verify user email code
    const onPressVerify = async (e) => { };

    return (
        <div>RegisterPage</div>
    )
}

export default RegisterPage