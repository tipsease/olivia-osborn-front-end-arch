import React from "react";

function RestaurantSearch(props) {
    return (
        <div>
            <select name="restaurant">
                <option value="selectRestaurant">Select Restaurant</option>
                {props.restaurantList.map(restaurant => 
                    <option key={restaurant.id} value={restaurant.name}>{restaurant.name}</option>    
                )}
            </select>
            <button>Search</button>
        </div>
    )
}

export default RestaurantSearch;

