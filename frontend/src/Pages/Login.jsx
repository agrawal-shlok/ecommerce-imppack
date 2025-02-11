import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Shopcontext } from '../Context/Shopcontext';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentstate, setCurrentstate] = useState('login');
  const { token, setToken, navigate, backendurl } = useContext(Shopcontext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent page refresh on form submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      let response;
      if (currentstate === 'sign up') {
        // Sign up request
        response = await axios.post(`${backendurl}/api/user/register`, { name, email, password });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Registration successful!');
          navigate('/'); // Redirect to home page after registration
        } else {
          toast.error(response.data.message || 'Registration failed. Please try again.');
        }
      } else {
        // Login request
        response = await axios.post(`${backendurl}/api/user/login`, { email, password });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Login successful!');
          navigate('/'); // Redirect to home page after login
        } else {
          toast.error(response.data.message || 'Invalid credentials. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An unexpected error occurred. Please try again later.');
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentstate}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Conditionally render 'Name' input based on current state */}
      {currentstate === 'sign up' && (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          required
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
        />
      )}

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p onClick={() => navigate('/contact')} className="cursor-pointer">Forgot Your Password?</p>
        {currentstate === 'login' ? (
          <p onClick={() => setCurrentstate('sign up')} className="cursor-pointer">
            Create account
          </p>
        ) : (
          <p onClick={() => setCurrentstate('login')} className="cursor-pointer">
            Login here
          </p>
        )}
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentstate === 'login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
