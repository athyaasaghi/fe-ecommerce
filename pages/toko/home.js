import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


function homeToko(){
    const[postProduk, setPostProduk] = useState([]);

    const getProduk = async()=>{
        const res = await axios.get('http://localhost:3001/produk')
        console.log(res)
        setPostProduk(res.data.data)
    }

    useEffect(()=>{
        getProduk();
    }, [])

    const router = useRouter();

        return (
            <>
            <div class='container_semua'>
              <div class="hero">
            <div class="tulisan">
                <h1> Fitur Your Apps</h1>
                <h3> Fitur Your Device Mobile App </h3>
            </div>
            
            <button className="btn btn-secondary me-2 loginHome" onClick={()=> { router.push('/toko/login')}}>Login</button>

        </div>

        <div class="about">
            <h1>Produk kami</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti corrupti, repellendus asperiores atque quod beatae molestias dignissimos a, facere illo. Optio, quas earum quisquam molestias saepe deserunt esse aspernatur at ullam quasi temporibus non iste consequatur odio nostrum, vitae laborum! Aspernatur error distinctio quas animi tempore alias impedit ad.</p>
        </div>

        {/* <!-- Featured Starts Here --> */}
        <section class="produks">

            {
                postProduk.map((data)=>(
                    <div class="produk">
                    <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_960_720.png"/>
                    <div class="caption">
                        <h1>{data.nama_produk}</h1>
                        <h2>{data.harga_produk}</h2>
                        <Link href={`/toko/detail/${data.id}`}>Lihat detail
                        </Link>
                    </div>
                </div>
                ))
            }
            
        </section>

        <div class="footer">
            <h1>Athya asaghi</h1>
            <p>Terimakasih telah berkunjung || 2022</p>
        </div>
        </div>
            </>
        )
}

export default homeToko;