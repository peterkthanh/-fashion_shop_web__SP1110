import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Helmet from "../components/Helmet";

import productData from '../assets/fake-data/products';
import numberWithCommas from '../utils/numberWithCommas';
import Button from '../components/Button';

import CartItem from '../components/CartItem'

function Cart() {
  const cartItems = useSelector((state) => state.cartItems.value)

  const [cartProducts, setCartProducts] = useState(productData.getCartItemsDetail(cartItems))

  const [totalProducts, setTotalProducts] = useState(0)

  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    setCartProducts(productData.getCartItemsDetail(cartItems))
    setTotalProducts(cartItems.reduce((total, item) => total + (Number(item.quantity)), 0))
    setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
  }, [cartItems])
  return (


    < div>
      <Helmet title='Giỏ Hàng'>
        <div className="cart">
          <div className="cart__info">
            <div className="cart__info__txt">
              <p>
                bạn đang có {totalProducts} sản phảm trong giỏ hàng
              </p>
              <div className="cart__info__txt__price">
                <span>Thành tiền</span>
                <span>{numberWithCommas(totalPrice)}</span>
              </div>
            </div>
            <div className="cart__info__btn">
              <Button size="block">Đặt Hàng</Button>
              <Link to='/catalog'>
                <Button size="block">Tiếp tục mua hàng</Button>
              </Link>
            </div>
          </div>
          <div className="cart__list">
            {
              cartProducts.map((item, index) => (
                <CartItem item={item} key={index} />
              ))
            }
          </div>
        </div>
      </Helmet>


    </div >
  )
}

export default Cart