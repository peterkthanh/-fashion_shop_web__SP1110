import React from "react";
import { Link } from "react-router-dom";

import Section, { SectionTitle, SectionBody } from "../components/Section";
import HeroSliderData from "../assets/fake-data/hero-slider";
import ProductsData from '../assets/fake-data/products'
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Grid from '../components/Grid'
import ProductCard from "../components/ProductCard";
import PolicyCard from "../components/PolicyCard";
import policy from '../assets/fake-data/policy';
import banner from '../assets/images/banner.png'
const Home = () => {
  return (
    <div>
      <Helmet title="Trang Chủ" >
        {/* hero slider */}
        <HeroSlider
          data={HeroSliderData}
          control={true}
          auto={true}
        />

        {/* end hero slider */}
        {/* policy section */}
        <Section>
          <SectionBody>
            <Grid col={4}
              mdCol={2}
              smCol={1}
            >
              {policy.map((item, index) => <Link key={index} to="/policy">
                <PolicyCard

                  name={item.name}
                  description={item.description}
                  icon={item.icon}

                />
              </Link>
              )}
            </Grid>
          </SectionBody>
        </Section>
        {/* end policy section  */}
        {/* best selling section  */}
        <Section>
          <SectionTitle>
            Top Sản Phẩm Bán Chạy Trong Tuần
          </SectionTitle>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >

              {
                ProductsData.getProducts(4).map((item, index) => (
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
        {/*end best selling section  */}
        <Section>
          <SectionTitle>
            Sản Phẩm Mới
          </SectionTitle>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >

              {
                ProductsData.getProducts(8).map((item, index) => (
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

        {/*new arrival section  */}


        {/*end arrival section  */}
        {/* banner */}
        <Section>
          <SectionTitle>
            <Link to='/catalog'>
              <img src={banner} alt='' />
            </Link>
          </SectionTitle>
        </Section>
        {/* end banner */}
        {/* popular product section */}
        <Section>
          <SectionTitle>
            Sản Phẩm Phổ Biến
          </SectionTitle>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >

              {
                ProductsData.getProducts(12).map((item, index) => (
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
        {/* end popular product section */}



      </Helmet>


    </div>);
};

export default Home;
