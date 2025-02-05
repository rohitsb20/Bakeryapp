
const Slider = () => {
  return (
    <div className="mt-5 hidden md:flex ">
      <div
        id="auto-play"
        data-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true, "speed": 3000 }'
        className="relative w-2/3 "
      >
        <div className="carousel h-80 ">
          <div className="carousel-body opacity-0 h-full">
            <div className="carousel-slide">
              <div className="bg-base-300/60 flex h-full justify-center  ">
              
                  <img src="/images/1.jpg" alt="1" className="object-cover w-full" />
           
              </div>
            </div>

            <div className="carousel-slide">
              <div className="bg-base-300/80 flex h-full justify-center  ">
               
                  <img src="/images/2.jpg" alt="2" className="object-cover w-full" />
              
              </div>
            </div>

            <div className="carousel-slide">
              <div className="bg-base-300 flex h-full justify-center  ">
              
                  <img src="/images/3.jpg" alt="3" className="object-cover w-full" />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider