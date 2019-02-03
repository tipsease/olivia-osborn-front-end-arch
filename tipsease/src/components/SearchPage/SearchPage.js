import React from "react";

function SearchPage(props) {
    return (
        <div>
            <SearchBar />
            <CompanySearch />
            <EmployeeList />
        </div>
    )
}

export default SearchPage;