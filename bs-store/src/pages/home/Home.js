import React from 'react'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
import Sliders from '../../components/slider'
import { RightsContainer, RightsText } from './style'


export default function Home() {
  return (
    <>
      <Sliders />
      <Banner />
      <Footer />
      <RightsContainer>
        <RightsText alignItems={'center'}>
          <h6>Abdullah Özmen Tüm hakları saklıdır©</h6>
        </RightsText>
      </RightsContainer>
    </>
  )
}
