import React, { useState } from 'react'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
//import Carousel from '../components/Carousel'
import RestaurantMenuTwoToneIcon from '@mui/icons-material/RestaurantMenuTwoTone';

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
    //console.log(response[0],response[1]);
  }

  useEffect(() => {
    loadData();
  }, [])



  return (
    <div className='m-0'>
      <Navbar />

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 ">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://st2.depositphotos.com/1791505/8561/i/950/depositphotos_85619044-stock-photo-world-cuisine-collage.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" id="foodimg" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 fst-italic"> <RestaurantMenuTwoToneIcon fontSize='20' /> QuickCrave</h1>
            <p className="lead">Flavorful Journeys Await: Unleash Culinary Bliss with Our Seamless Food App Experience!</p>
            <div className="d-flex " role="search" id='form'>
              <input className="form-control me-2" type="search" placeholder="Search food" aria-label="Search" onChange={(e) => { setSearch(e.target.value) }} value={search} />
              {/*<button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>*/}
            </div>
          </div>
        </div>
      </div>

      {
        foodCat == [] ? <div> ""</div>
          : foodCat.map((data) => {
            return (
              <div className='row mb-3' id='main' >
                <div key={data._id} className='fs-3 m-3' >
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem == [] ? "No Such Data Found"
                  : foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map(filterItems => {
                    return (
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3' >
                        <Card
                          foodItem={filterItems}
                          options={filterItems.options[0]} />
                      </div>
                    )
                  })}
              </div>
            )
          })
      }


      <Footer />
    </div>
  )
}
