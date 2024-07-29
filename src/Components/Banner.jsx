const Banner = () => {

    return (
        <div className="lg:p-4">
            <div className="carousel rounded-box">
                <div className="carousel-item w-full">
                    <img 
                        src="https://i.ibb.co/BstZ2Xf/CF-570x312-Tourism-Preto-perola-Getty-Images-i-Stock-1011241694.jpg" 
                        alt="Tourism" 
                        className="w-full lg:h-12/14 object-cover" // Ensure all images have the same height and width
                    />
                </div>
                <div className="carousel-item w-full">
                    <img 
                        src="https://i.ibb.co/mhqfkxR/tropical-vacation-holiday-tourism-beach-concept-long-tail-boat-exotic-krabi-thailand-131621008.webp" 
                        alt="Tropical Vacation" 
                        className="w-full lg:h- object-cover" // Ensure all images have the same height and width
                    />
                </div>
                <div className="carousel-item w-full">
                    <img 
                        src="https://i.ibb.co/gMsjxNp/urban-austria-hallstatt-snow-wallpaper-preview.jpg" 
                        alt="Urban Austria" 
                        className="w-full lg:h- object-cover" // Ensure all images have the same height and width
                    />
                </div>
                <div className="carousel-item w-full">
                    <img 
                        src="https://i.ibb.co/Q9bYdVH/hallstatt-3609863-640.jpg" 
                        alt="Hallstatt" 
                        className="w-full lg:h- object-cover" // Ensure all images have the same height and width
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
