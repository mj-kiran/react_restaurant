import React from 'react'
import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Restaurants from './Restaurants'
// import restaurantAction from '../actions/restaurantAction'
import {useDispatch,useSelector} from  'react-redux'
import { listRestaurants } from '../actions/restaurantAction'

function Home() {
    const [search, setSearch] = useState("")
    // const [hotels, setHotels] = useState([])
    const dispatch=useDispatch()
    const restaurantData=useSelector(state=>state.restaurantReducer)
    const {restaurants}=restaurantData


    useEffect(
        () => {
            // const fetchData = async () => {
            //     await fetch('/restaurants.json')
            //         .then((response) => response.json())
            //         .then((data) => setHotels(data.restaurants))
            // }
            // fetchData();
            dispatch(listRestaurants())
        }, []
    )

    // console.log("our Data is", hotels);
    return (
        <>
            <Row>
                <input type='text' value={search} placeholder='Search here ' onChange={event => setSearch(event.target.value)} className="my-3 mx-4 form-control rounded" />
                {restaurants ? (
                    restaurants.filter(item =>{
                        if(search === ""){
                            return item
                        }
                        else if(item.neighborhood.toLowerCase().includes(search.toLowerCase())){
                            return item
                        }
                    })
                    .map(item => (
                            // <p>{item.name}</p>
                            <Col sm={12} md={8} lg={6} xl={3}>
                                <Restaurants item={item} />

                            </Col>
                        )
                        )

                ) : ("error")
                }
            </Row>

        </>
    )
}

export default Home