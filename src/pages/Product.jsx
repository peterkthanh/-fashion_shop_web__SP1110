import React, { useEffect } from 'react'
import ProductData from '../assets/fake-data/products';
import Helmet from '../components/Helmet';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import ProductView from '../components/ProductView';
import { useParams } from 'react-router-dom';


function Product(props) {
  const params = useParams();
  const product = ProductData.getProductBySlug(params.slug)

  const relatedProduct = ProductData.getAllProducts(8);

  useEffect(() => {
    window.scrollTo(0, 0)



  }, [])


  return (
    <Helmet title={'Sản Phẩm'}>
      <Section>
        <SectionTitle>
          <ProductView product={product} />
        </SectionTitle>
      </Section>
      <Section>
        <SectionTitle>
          Khám Phá Thêm
        </SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {relatedProduct.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}

          </Grid>
        </SectionBody>
      </Section>

    </Helmet>
  )
}

export default Product