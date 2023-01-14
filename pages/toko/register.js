import axios from 'axios';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState} from 'react';

function registrasi(){
    const [registrasiTambah, setregistrasiTambah] = useState({
        username:'',
		password:''
    });

    const router = useRouter()

    const addTambah = (e)=>{
        setregistrasiTambah((preValue) => ({...preValue, [e.target.name] : e.target.value}))
    }

    const handlerSubmit = async (event)=> {
        event.preventDefault();
        console.log(registrasiTambah)

        const res = await axios.post('http://localhost:3001/users/register', {
            username: registrasiTambah.username,
            password:registrasiTambah.password
        }).then((payload)=>{
            console.log(payload)
            router.push('/toko/login')
        }).catch((payload)=>{
            console.log(payload)
            alert('harus diisi')
        })
        console.log(res);
        router.back();

		// console.log(res.data.data);
		// setPostTambah(res.data.data);

    }
    
    return(
        <div class="center">
        <h1>Registrasi</h1>
        <form method="post" onSubmit={handlerSubmit}>
          <div class="txt_field">
            <input type="text" required
             name="username" onChange={addTambah}/>
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input type="password" required
             name="password" onChange={addTambah}></input>
            <span></span>
            <label>Password</label>
          </div>
          <div class="pass"></div>

          <input type="submit" value="registrasi"></input>

          <div class="signup_link">
           
          </div>

        </form>
      </div>
    )
}

export default registrasi;