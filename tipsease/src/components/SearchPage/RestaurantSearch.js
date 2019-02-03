import React from "react";

function RestaurantSearch(props) {
    return (
        <div>
            <select name="restaurant">
                <option value="Denny's">Denny's</option>
                <option value="The Cheesecake Factory">The Cheesecake Factory</option>
                <option value="IHOP">IHOP</option>
            </select>
        </div>
    )
}

export default RestaurantSearch;

