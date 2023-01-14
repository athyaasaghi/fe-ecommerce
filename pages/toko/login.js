import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState} from 'react';

function login(){
    const [usersTambah, setusersTambah] = useState({
        username:'',
	    	password:''
    });

    const router = useRouter()

    const addTambah = (e)=>{
        setusersTambah((preValue) => ({...preValue, [e.target.name] : e.target.value}))
    }

    const handlerSubmit = (event)=> {
        event.preventDefault();
        console.log(usersTambah)

        const res = axios.post('http://localhost:3001/users/login', {
            username: usersTambah.username,
            password:usersTambah.password
        }).then((payload)=>{
            console.log(payload);
            router.push(`/toko/dashboard`)
        }).catch((payload)=>{
            console.log(payload);
            alert('Users tidak ada')
        });
        console.log(res);

		// console.log(res.data.data);
		// setPostTambah(res.data.data);

    }

    return(
        <div class="center">
        <h1>Login</h1>
        <form method="post" onSubmit={handlerSubmit}>
          <div class="txt_field">
            <input type="text" required
            onChange={addTambah} name="username"/>
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input type="password" required
            onChange={addTambah} name="password"></input>
            <span></span>
            <label>Password</label>
          </div>
          <div class="pass">Forgot Password?</div>

          <input type="submit" value="Login"></input>

          
          <div class="signup_link">
            Not a member? 
            <Link href={'/toko/register'}>
            <p>sig in</p></Link>
          </div>

        </form>
      </div>
    )
}

export default login;