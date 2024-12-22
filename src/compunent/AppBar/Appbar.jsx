import React from 'react'
import '../../App.css'
const Appbar = () => {
  return (
    <>
<nav className="main-nav">



    <div className="navbar-link">
          {/* 1st */}
    <div className="logo">
<img src="https://cdn.freelogovectors.net/wp-content/uploads/2023/05/realme_logo-freelogovectors.net_-640x400.png" alt="" />
</div>
{/* 2nd */}
<span><h5 a href="/" >narzoSmartphones</h5></span>
<span><h5 a href="/" >realme SmartPhones</h5></span>
<span><h5 a href="/" >realme Tv</h5></span>
<span><h5 a href="/" >Laptop & Tablet</h5></span>
<span><h5 a href="/" >Audio</h5></span>
<span><h5 a href="/" >Smart Life</h5></span>



    </div>
      {/* 3rd */}
    <div className=" right-links">
      <span>
        <h6 a href="/">Brand</h6>
      </span>
      <span>
        <h6 a href="/">Support</h6>
      </span>
      <span>
        <h6 a href="/">Community</h6>
      </span>
    </div>

</nav>







    </>
  )
}

export default Appbar