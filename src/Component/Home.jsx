import React from 'react'
import './Home.scss'


const Card = ({img})=>(
  <img className='card' src={img} alt="cover" />
)

const Row = ({title, arr=[{
  img: "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg" 
},
{
  img: "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg" 
},{
  img: "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg" 
},{
  img: "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg" 
},{
  img: "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg" 
},{
  img: "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg" 
},{ 
  img: "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg" 
}
] }) =>(
  <div className='row'>
    <h2>{title}</h2>

    <div>
      {
        arr.map((item)=>(
        <Card img={item.img}/>
        ))
      }
    </div>   
  </div>
)

const Home = () => {
  return (
    <section className="home">
      <div className="banner">
        <img className='bannerimg' src={"https://pbs.twimg.com/media/Dpd70YSVsAIbOMB?format=jpg&name=large"} alt="" />
      </div>
      <Row title={"Popular on Netflix"}/>
      <Row title={"Trending Now"}/>
      <Row title={"New Releases"}/>
      <Row title={"My List"}/>
    </section>

  )
}

export default Home