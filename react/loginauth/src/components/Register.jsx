import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase'
import { setDoc, doc } from 'firebase/firestore'

const Register = () => {
    const [uname, setUname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, "allusers", user.uid), {
                    email: user.email,
                    uname: uname,
                })
            }
            alert("Data added Successfully")
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <div>
                <div>
                    <input type="text" name="" placeholder='Fullname' value={uname} onChange={(e) => setUname(e.target.value)} />
                </div>
                <div>
                    <input type="text" name="" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <input type="password" name="" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <div>
                    <p>Already have account ?
                        <Link to="/">Login</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Register