const Footer = () => {
  return <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
    <h1 className="text-2xl font-bold">Portofolio</h1>
    <div className="flex gap-7">
       <a href="#beranda">Beranda</a>
       <a href="#tentang">Tentang</a>
       <a href="#proyek">Proyek</a>
    </div>
    <div className="flex items-center gap-3">
      <a href="https://github.com/revalinawandasari-ai">
       <i className="ri-github-fill ri-2x"></i> 
      </a>
      <a href="https://www.instagram.com/revalinawrr?igsh=dW90eDVkN2doYWdm&utm_source=qr">
       <i className="ri-instagram-fill ri-2x"></i> 
      </a> 
      <a href="https://id.linkedin.com/in/revalina-wanda-sari-665a2832a">
       <i className="ri-linkedin-fill ri-2x"></i> 
      </a> 
      <a href="https://www.youtube.com/@revvvvv-h3l">
       <i className="ri-youtube-fill ri-2x"></i> 
      </a>  
    </div>
  </div>
}

export default Footer