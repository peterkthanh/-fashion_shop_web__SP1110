import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux'

import productData from '../assets/fake-data/products'
import { addItem } from '../redux/shopping-cart/cartItemsSlide'
import Button from "./Button";
import numberWithCommas from '../utils/numberWithCommas'




const ProductView = props => {



    const dispatch = useDispatch()

    let product = props.product

    if (product === undefined) product = {
        price: 0,
        title: "",
        colors: [],
        size: [],
    }



    const [previewImg, setPreviewImg] = useState(product.image01);

    const [descriptionExpand, setDescriptionExpand] = useState(false);

    const [color, setColor] = useState(undefined);

    const [size, setSize] = useState(undefined);

    const [quantity, setQuantity] = useState(0);

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
        }

    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)


    }, [product])
    const check = () => {
        if (color === undefined) {
            alert('Vui lòng chọn màu sắc!')
            return false
        }

        if (size === undefined) {
            alert('Vui lòng chọn kích cỡ!')
            return false
        }

        return true
    }

    const addToCart = () => {
        if (check()) {
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price
            }))
            alert("success")
        }




    }


    const goTocart = () => {
        if (check()) {
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price
            }))
            props.history.push('/cart')
        }
    }
    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item"
                        onClick={() => setPreviewImg(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="product__images__list__item"
                        onClick={() => setPreviewImg(product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={previewImg} alt="" />
                </div>
                <div className={`product__desription mobile ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product__desription__title">
                        Chi Tiết Sản Phẩm
                    </div>
                    <div className="product__desription__content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                    <div className="product__desription__toggle">
                        <Button size='sm' onClick={() => setDescriptionExpand(!descriptionExpand)}>
                            {
                                descriptionExpand ? 'Thu Gọn' : 'Xem Thêm'
                            }
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__title">
                    {product.title}
                </h1>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {numberWithCommas(product.price)}
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Màu Sắc
                    </div>
                    <div className="product__info__item__list" >
                        {product.colors.map((item, index) => (
                            <div key={index} className={`product__info__item__list__item ${color === item ? 'active' : ''}`} onClick={() => setColor(item)}>
                                <div className={`circle bg-${item}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Kích Cỡ
                    </div>
                    <div className="product__info__item__list">
                        {product.size.map((item, index) => (
                            <div key={index} className={`product__info__item__list__item ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>
                                <span className="product__info__item__list__item__size">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Số Lượng
                    </div>
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product__info__item">
                    <Button onClick={() => addToCart()} size='sm' animeHover={true}>Thêm vào giỏ</Button>
                    <Button onClick={() => goTocart()} size='sm' animeHover={true}>mua Ngay</Button>
                </div>
            </div>
        </div>
    );

}

ProductView.propTypes = {
    product: PropTypes.object,
};

export default ProductView;
