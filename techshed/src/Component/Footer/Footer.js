import React from 'react'
import { HelpCenter } from '../FooterBanner/HelpCenter'
import { FooterDeatils } from '../FooterBanner/FooterDeatils'
import { Payment } from '../FooterBanner/Payment'

export const Footer = () => {
  return (
    <div className='py-5'>
        <HelpCenter />
        <FooterDeatils />
        <Payment />
    </div>
  )
}
