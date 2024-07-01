import { Link } from "react-router-dom";


const Countries = () => {

    return (
        <div className="mx-auto justify-center">
            <h2 className="text-2xl text-center m-3 font-bold">Countries</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/spots/Bangladesh">
                    <div className="card my-2 w-full h-full bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/7jk9m0C/download-5.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Bangladesh
                            </h2>
                            <p>Located in South Asia, Bangladesh is known for its lush greenery, rivers, and rich cultural heritage. It's the world's eighth-most populous country and is famous for its vibrant festivals, including Bengali New Year and Durga Puja. Dhaka, the capital, is a bustling city with a mix of modern and traditional architecture.</p>
                        </div>
                    </div>
                </Link>
                <Link to="/spots/Thailand">
                    <div className="card my-2 w-full h-full bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/Ry9hJ49/download-6.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Thailand
                            </h2>
                            <p> Known as the "Land of Smiles," Thailand is famous for its tropical beaches, ornate temples, and delicious cuisine. Bangkok, the capital, is a bustling metropolis with vibrant street markets and historic landmarks like the Grand Palace and Wat Arun. Thailand's other attractions include picturesque islands like Phuket and Koh Samui, as well as cultural gems like Chiang Mai and Ayutthaya.</p>
                        </div>
                    </div>
                </Link>
                <Link to="/spots/Indonesia">
                    <div className="card my-2 w-full h-full bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/h1SmS3y/download-7.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Indonesia
                            </h2>
                            <p>As the largest archipelago in the world, Indonesia is home to diverse cultures, landscapes, and wildlife. It boasts stunning beaches, ancient temples like Borobudur and Prambanan, and lush rainforests teeming with biodiversity. Jakarta, the capital, is a dynamic metropolis, while Bali is famous for its beaches and vibrant nightlife.</p>
                        </div>
                    </div>
                </Link>
                <Link to="/spots/Malaysia">
                    <div className="card my-2 w-full h-full bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/0X15vX9/download-8.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Malaysia
                            </h2>
                            <p>Malaysia is a Southeast Asian country known for its cultural diversity, modern cities, and natural beauty. Kuala Lumpur, the capital, is home to the iconic Petronas Twin Towers and vibrant street food scene. Malaysia also boasts pristine beaches, lush rainforests, and UNESCO World Heritage Sites like George Town and Melaka.</p>
                        </div>
                    </div>
                </Link>
                <Link to="/spots/Vietnam">
                    <div className="card my-2 w-full h-full bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/C5NMnYF/download-9.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Vietnam
                            </h2>
                            <p>Vietnam is a Southeast Asian country known for its stunning landscapes, rich history, and delicious cuisine. Hanoi, the capital, is famous for its centuries-old architecture and vibrant street life, while Ho Chi Minh City (formerly Saigon) is a bustling metropolis with French colonial landmarks. Vietnam's natural beauty includes scenic rice terraces, limestone karsts in Halong Bay, and pristine beaches.</p>
                        </div>
                    </div>
                </Link>
                <Link to="/spots/Cambodia">
                    <div className="card my-2 w-full h-full bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/n13fJrg/download-10.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Cambodia
                            </h2>
                            <p>Cambodia is renowned for its ancient temples, including the majestic Angkor Wat, a UNESCO World Heritage Site. The capital, Phnom Penh, offers a blend of colonial and modern architecture, along with bustling markets and vibrant nightlife. Cambodia's natural attractions include pristine beaches, lush mountains, and the scenic Tonle Sap Lake.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};


export default Countries;




