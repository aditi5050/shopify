import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +91 9876543211</label>
            <i className='fa fa-envelope'></i>
            <label> support@shopify.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <span>Rs.   </span>
            <label>  India</label>
            <span>$ </span>
            <label> USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
