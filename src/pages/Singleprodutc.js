import React, { useState } from 'react'
import products from './Data'
import { useParams } from 'react-router-dom'


function Singleprodutc() {
  const { name } = useParams();
  const product = products.find(p => p.name === name);
  const [item, setItem] = useState(products);
  const [cart, setCart] = useState([]);
  const handlAddtoCart = (product) => {
    setEmpty(false)
    setItem(item)
    const findItemincart = cart.find(i => {
      return i.id === product.id
    })
    if (findItemincart) {
      let newcart = [];
      let newItem;
      cart.forEach(cartItem => {
        if (cartItem.id === product.id) {
          newItem = {
            ...product,
            quantity: cartItem.quantity + 1,
            totalamount: cartItem.price * (cartItem.quantity + 1)
          }
          newcart.push(newItem);
        } else {
          newcart.push(cartItem);
        }
      })
      setCart(newcart)

    }

    else {
      const addingItem = {
        ...product,
        'quantity': 1,
        'totalamount': product.price
      }
      setCart([...cart, addingItem])
    }
  }
  const grandTotal = (cart) => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
  const handelRemove = (product) => {
    let del;
    del = cart.filter(cartItem => cartItem.id !== product.id);
    setCart(del)
  }
  const onAddQuantity = (product) => {

    let newcart = [];
    let newItem;
    cart.forEach(cartItem => {
      if (cartItem.id === product.id) {
        newItem = {
          ...product,
          quantity: cartItem.quantity + 1,
          totalamount: cartItem.price * (cartItem.quantity + 1)
        }
        newcart.push(newItem);
      } else {
        newcart.push(cartItem);
      }
    })
    setCart(newcart)

  }
  const onDeleteQuantity = (product) => {

    let newcart = [];
    let newItem;
    cart.forEach(cartItem => {
      if (cartItem.id === product.id) {
        newItem = {
          ...product,
          quantity: cartItem.quantity - 1,
          totalamount: cartItem.price * parseInt(cartItem.quantity - 1)
        }
        newcart.push(newItem);
      } else {
        newcart.push(cartItem);
      }
    })
    setCart(newcart)

  }
  const [empty, setEmpty] = useState(true);

     
   
  return (
    <div className='conatiner'>
      <div className='row'>
        <div className="col-md-6">

          <img src={product.imgurl} alt={product.name} className='img-fluid' />

        </div>

        <div className="col-md-6">

          <h4 className="text-uppercase text-black-50">

            {product.category}

          </h4>

          <h1 className="display-5">{product.name}</h1>

          <h3 className="display-6 fw-bold my-4">

            Rs:
            {product.price}

          </h3>

          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark" onClick={() => handlAddtoCart(product)}>Check Out</button>
          {
          empty ? " " :  <>
          <div className="container my-3 pb-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
  
                {
                  cart.map((cartItem) => (
                    <tr key={cartItem.id}>
                      <td>{cartItem.id}</td>
                      <td>{cartItem.name}</td>
                      <td>{cartItem.price}</td>
                      <td><button className="btn btn-outline-success" style={{ color: "black" }} onClick={() => onAddQuantity(cartItem)}>ADD</button></td>
                      <td>{cartItem.quantity}</td>
                      <td><button className="btn btn-outline-danger" style={{ color: "black" }} onClick={() => onDeleteQuantity(cartItem)}>DELL</button></td>
                      <td>{cartItem.price * cartItem.quantity}</td>
                      <td><button className="btn btn-danger" onClick={() => handelRemove(cartItem)}>Delete</button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <h3 className='btn btn-warning'>Grand total= Rs:{grandTotal(cart)}</h3>
            <div>
            </div>
          </div>
        </>
          }
        </div>
      </div>

    </div>
  )
}

export default Singleprodutc