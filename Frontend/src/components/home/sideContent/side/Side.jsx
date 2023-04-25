import React from "react"
import "./side.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { gallery } from "../../../../dummyData"
import Tpost from "../Tpost/Tpost"
import SocialMedia from "../social/SocialMedia"



const Side = () => {
  const settings = { 
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 2500,
    dots:false,
    autoplay:true,
    rows: 1,
  }

  const catgeory = ["world", "travel", "sport", "fun", "health", "fashion", "business", "technology"]
  return (
    <>
      <Heading title='Stay Connected' />
      <SocialMedia />

      <Heading title='Subscribe' />

      <section className='subscribe'>
        <h1 className='title'>Subscribe to our New Stories</h1>
        <form action=''>
          <input type='email' placeholder='Email Address...' />
          <button>
            <i className='fa fa-paper-plane'></i> SUBMIT
          </button>
        </form>
      </section>

      <section className='banner'>
        <img src='https://1.bp.blogspot.com/-DlaDT4nqF08/XWTyeDzFs2I/AAAAAAAAADs/JrMg0dnKS8otW1sHf9_YAEMPqtJFuOyMQCLcBGAs/s1600/IMG_20190827_141140.jpg' alt='' height={300} width={300} />
      </section>

      <Tpost />

      <section className='catgorys'>
        <Heading title='Catgeorys' />
        
        {catgeory.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>

      <section className='gallery'>
        <Heading title='Gallery' />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
            )
          })}
        </Slider>
      </section>
    </>
  )
}

export default Side
