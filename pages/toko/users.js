// import axios from 'axios';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { useState, useEffect} from 'react';


// function users(){
//     const [loginUsers, setLoginUsers] = useState([]);


// 	const getUsers = async () => {
// 		const res = await axios.get('http://localhost:3001/users');
// 		console.log(res);
// 		setLoginUsers(res.data.data)
// 	};

//     useEffect(()=>{
       
//         getUsers();
//     }, []);


// 	const router = useRouter()

//     return(
//       <>
//       <section id="sidebar">
// 		<a href="#" class="brand">
// 			<i class='bx bxs-smile'></i>
// 			<span class="text">Admin</span>
// 		</a>
// 		<ul class="side-menu top">
// 			<li class="active">
// 			<Link href={'/toko/dashboard'}>
// 					<i class='bx bxs-doughnut-chart' ></i>
// 					<span class="text">Dashboard</span>
// 				</Link>
// 			</li>
// 			<li>
// 				<Link href={'/toko/produk'}>
// 					<i class='bx bxs-doughnut-chart' ></i>
// 					<span class="text">produk</span>
// 				</Link>
// 			</li>
// 		</ul>
// 		<ul class="side-menu">
// 			<li>
// 				<a href="#" class="logout">
// 					<i class='bx bxs-log-out-circle' ></i>
// 					<span class="text">Logout</span>
// 				</a>
// 			</li>
// 		</ul>
// 	</section>





// 	<section id="content">
	
// 		<nav>
// 			<i class='bx bx-menu' ></i>
// 			<a href="#" class="nav-link">Categories</a>
// 			<form action="#">
// 				<div class="form-input">
// 					<input type="search" placeholder="Search..."/>
// 					<button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
// 				</div>
// 			</form>
// 			<input type="checkbox" id="switch-mode" hidden/>
// 			<label for="switch-mode" class="switch-mode"></label>
// 			<a href="#" class="notification">
// 				<i class='bx bxs-bell' ></i>
// 				<span class="num">8</span>
// 			</a>
// 			<a href="#" class="profile">
// 				<img src="img/people.png"/>
// 			</a>
// 		</nav>

// 		<main>
// 			<div class="head-title">
// 				<div class="left">
// 					<h1>Dashboard</h1>
// 					<ul class="breadcrumb">
// 						<li>
// 							<a href="#">Dashboard</a>
// 						</li>
// 						<li><i class='bx bx-chevron-right' ></i></li>
// 						<li>
// 							<a class="active" href="#">Home</a>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>

			

// 			<div class="table-data">
// 				<div class="order">
// 					<div class="head">
// 					  <h3>terdapat {loginUsers.length} users dalam database</h3>
// 						<i class='bx bx-search' ></i>
// 						<i class='bx bx-filter' ></i>
// 					</div>
					

//                 <table className="tabel_produk">
//                 <thead>
//                     <tr className="tr_produk">
//                     <th>id</th>
//                     <th>Username</th>
//                     <th>Password</th>
//                     </tr>
//                 </thead>
//                 <tbody className="td_produk">
// 					{
// 						loginUsers.map((data)=>(
// 							<tr>
// 							<td>{data.id}</td>
// 							<td>{data.username}</td>
// 							<td>{data.password}</td>						
// 							</tr>
// 						))
// 					}
					    
//                 </tbody>
//                 </table>

// 				</div>
				
// 			</div>
// 		</main>
// 	</section>
//       </>
//     )
// }

// export default users;