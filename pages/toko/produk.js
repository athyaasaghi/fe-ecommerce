import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect} from 'react';


function produk(){
    const [posts, setPost] = useState([]);


	const getPosts = async () => {
		const res = await axios.get('http://localhost:3001/produk');
		console.log(res.data.data);
		setPost(res.data.data);
	};

    useEffect(()=>{
       
        getPosts();
    }, []);

	const hapusProduk = async (id) => {
		const res = await axios.delete(`http://localhost:3001/produk/${id}`);
		getPosts();
		
	}

	const router = useRouter()

    return(
      <>
      <section id="sidebar">
		<a href="#" class="brand">
			<i class='bx bxs-smile'></i>
			<span class="text">Admin</span>
		</a>
		<ul class="side-menu top">
			<li class="active">
			<Link href={'/toko/dashboard'}>
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">Dashboard</span>
				</Link>
			</li>
			<li>
				<Link href={'/toko/produk'}>
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">produk</span>
				</Link>
			</li>
		</ul>
		<ul class="side-menu">
			<li>
			    <Link href={'/toko/home'}>
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text">Logout</span>
				</Link>
			</li>
		</ul>
	</section>


	<section id="content">
	
		<nav>
			<i class='bx bx-menu' ></i>
			<a href="#" class="nav-link">Categories</a>
			<form action="#">
				<div class="form-input">
					<input type="search" placeholder="Search..."/>
					<button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
				</div>
			</form>
			<input type="checkbox" id="switch-mode" hidden/>
			<label for="switch-mode" class="switch-mode"></label>
			<a href="#" class="notification">
				<i class='bx bxs-bell' ></i>
				<span class="num">8</span>
			</a>
			<a href="#" class="profile">
				<img src="img/people.png"/>
			</a>
		</nav>

		<main>
			<div class="head-title">
				<div class="left">
					<h1>Dashboard</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Home</a>
						</li>
					</ul>
					<button className="btn btn-primary me-2"  onClick={()=> { router.push(`/toko/tambah`)}}>Tambah</button>
				</div>
			</div>

			

			<div class="table-data">
				<div class="order">
					<div class="head">
					  <h3>terdapat {posts.length} data dalam database</h3>
						<i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					

                <table className="tabel_produk">
                <thead>
                    <tr className="tr_produk">
                    <th>id</th>
                    <th>Nama produk</th>
                    <th>harga produk</th>
                    <th>Aksi</th>
                    </tr>
                </thead>
                <tbody className="td_produk">
					{
						posts.map((data)=>(
							<tr>
							<td>{data.id}</td>
							<td>{data.nama_produk}</td>
							<td>{data.harga_produk}</td>
							<td>
{/* 
							<Link href={`/toko/update/${data.id}`}> */}
								<button className="btn btn-secondary me-2" onClick={()=> { router.push(`/toko/update/${data.id}`)}}>Edit</button>
							{/* </Link> */}

								<button onClick={()=>hapusProduk(data.id)} className="btn btn-danger">Hapus</button>

							</td>						
							</tr>
						))
					}
					    
                </tbody>
                </table>

				</div>
				
			</div>
		</main>
	</section>
      </>
    )
}

export default produk;