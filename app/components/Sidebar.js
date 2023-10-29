
"use client"

import localFont from 'next/font/local'
import Image from 'next/image'
// const bangla = localFont({ src: '../fonts/TiroBangla-Regular.ttf' })

export default function Sidebar() {
  return (
      <>
        <aside>
            <div className='featur_people text-center'>
                <h5 className='__label'>অধ্যক্ষ</h5>
                <div className='_thumbnail'>
                    <Image
                        src="https://shariatpurpolytechnic.gov.bd/wp-content/uploads/2023/02/1678164847082.jpeg"
                        height='485'
                        width='387'
                        className='img-fluid'
                    />
                </div>
                <h5>শেখ মুস্তাফিজুর রহমান</h5>
                <p>mussta230@gmail.com</p>
            </div>
            <div className='featur_people text-center'>
                <h5 className='__label'>অধ্যক্ষ</h5>
                <div className='_thumbnail'>
                    <Image
                        src="https://shariatpurpolytechnic.gov.bd/wp-content/uploads/2023/02/1678164847082.jpeg"
                        height='485'
                        width='387'
                        className='img-fluid'
                    />
                </div>
                <h5>শেখ মুস্তাফিজুর রহমান</h5>
                <p>mussta230@gmail.com</p>
            </div>
        </aside>
      </>
  )
}
