import React, { useState, } from 'react'
import './pages.css'
import products from './Data';
import { Link } from 'react-router-dom';
function Home() {
    const [item, setItem] = useState(products);

    const handelCategory = (cat) => {
        let newcategory = products.filter(p => p.category === cat)
        setItem(newcategory);
    }
    return (
        <>
            <div className='container'>
                <hr />
                <ul className="nav justify-content-center my-4">
                    <li className="nav-item">
                        <button className='btn btn-outline-secondary mx-2' onClick={() => setItem(products)}>All products</button>
                    </li>
                    <li className="nav-item">
                        <button className='btn btn-outline-secondary mx-2' onClick={() => handelCategory("Men fashion")}>Men Fashion</button>
                    </li>
                    <li className="nav-item">
                        <button className='btn btn-outline-secondary mx-2' onClick={() => handelCategory("Women fashion")}>Women Fashion</button>
                    </li>
                    <li className="nav-item">
                        <button className='btn btn-outline-secondary mx-2'
                            onClick={() => handelCategory("Kids fashion")}>Kid's</button>
                    </li> <li className="nav-item">
                        <button className='btn btn-outline-secondary mx-2'
                            onClick={() => handelCategory('Smart watch band')}>Watch Band's</button>
                    </li><li className="nav-item">
                        <button className='btn btn-outline-secondary mx-2'
                            onClick={() => handelCategory('phone case and cover')}>Phone Case</button>
                    </li><li className="nav-item">
                        <button className='btn btn-outline-secondary mx-2'
                            onClick={() => handelCategory('Airpod')}>Airpod's</button>
                    </li>
                </ul>
                <hr />
                <div className='container my-5'>
                    <div className="box" >

                        {
                            item.map(product => {
                                return (
                                    <div key={product.id} >
                                        <div className='card mx-2 card-body' >
                                            <img src={product.imgurl} className="img-thumbnail" alt="..." />
                                            <p className="card-title">{product.name}</p>
                                            <p className='my-0'>{product.discription}</p>
                                            <p className="card-text">{product.price}</p>
                                          <Link to={`/singleproduct/${product.name}`}>  <button
                                                className='btn btn-primary btn-sm mx-3'
                                                // onClick={() => handlAddtoCart(product)

                                                // }
                                            >
                                                Add to cart
                                            </button></Link>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home

