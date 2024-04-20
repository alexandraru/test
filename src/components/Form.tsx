import { useState } from 'react'
import InputField from './InputField'
import Button from "./ButtonPattern"

export default function Form() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
        alert(`Name: ${userName}, Email: ${email}`)
    }

  return (
    <form onSubmit={handleSubmit} id="form">
      <InputField
        id="userName"
        label="Name"
        type="text" 
        placeholder="Write your name"
        onChange={setUserName}
        minlength={5}
        value={userName}
      />
      <InputField
        id="email"
        label="Email"
        type="email" 
        placeholder="Write you email"
        onChange={setEmail}
        pattern="[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}"
        value={email}
      />
      <Button>Press me</Button>
    </form>
  )
}
