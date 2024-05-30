import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import MyCart from '../components/Cart/MyCart.jsx'

function Home() {

  const products = [

    {
      images: ['https://images.pexels.com/photos/5692269/pexels-photo-5692269.jpeg?auto=compress&cs=tinysrgb&w=600'],
      title: 'Cow Milk',
      price: '$26',
    },
    {
      images: ['https://images.pexels.com/photos/5947032/pexels-photo-5947032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
      title: 'Yogurt',
      price: '$20',
    },
    {
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9pygKXN60R8fzbO2nFEaGbLA6E2IVzbefQ&s'],
      title: 'Lassi',
      price: '$15',
    },
    {
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdslyxMlkOkl_O_7c7GamIfw7JV4Lszu0UQ&s'],
      title: 'Gir Cow Milk',
      price: '$23',
    },
  ];

  return (
    <HomeLayout>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/12429218/pexels-photo-12429218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" style={{ height: "400px" }} alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://www.midwestdairy.com/wp-content/uploads/dairy-cow-upcycling-2022-768x508.webp" class="d-block w-100" alt="..." style={{ height: "400px" }} />
    </div>
    <div class="carousel-item">
      <img src="https://templates.mindthegraph.com/milk-and-dairy-products/milk-and-dairy-products-presentation-template-preview-1.png" class="d-block  w-100" alt="..." style={{ height: "400px" }} />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
 
    

    {/* -------------------- */}


  


    <div className="container-fluid bg-secondary">
      <h1 style={{ textAlign: 'center' }} className="text-success bg-white">Featured Products</h1>
      <div id="carouselExample" className="carousel slide bg-dark" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[0, 1, 2, 3].map((carouselIndex) => (
            <div className={`carousel-item ${carouselIndex === 0 ? 'active' : ''}`} key={carouselIndex}>
              <div className="row p-3 gy-3 my-3">
                {products.map((product, itemIndex) => (
                  <div
                    className={`col-lg-3 col-md-4 col-sm-6 ${
                      itemIndex > carouselIndex ? 'd-none d-sm-block' : ''
                    } ${itemIndex > 1 ? 'd-none d-md-block' : ''} ${itemIndex > 2 ? 'd-none d-lg-block' : ''} p-auto`}
                    key={itemIndex}
                  >
                    <MyCart
                      images={product.images}
                      title={product.title}
                      price={product.price}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>


    {/* ----------------------- */}
  
  
    </HomeLayout>
  );
}

export default Home;
