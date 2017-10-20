'use strict';

import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="searchBarWrapper">
                <form action='javascript:void(0)' className="searchBar">
                    <div className="formFieldKeyword formFieldKeyword__on">
                        <label htmlFor="SearchKeyword" className="searchLabel">
                            Search
                        </label>
                        <input
                            type="text"
                            className="inputKeyword"
                            id="SearchKeyword"
                            placeholder='Search for anything...'
                            autoComplete='Off'

                        />
                    </div>
                    <div className="formFieldCategory">
                        <label htmlFor="SearchCategory" className="searchLabel">
                            Categories
                        </label>
                        <select name="SearchCategory" id="SearchCategory" className="selectCategory">
                            <option selected value="0">All Ads</option>
                            <option value="1">buy and sell</option>
                            <option value="2">services</option>
                        </select>
                        <svg viewBox="0 0 612 326.663" className="icon selectCategoryIcon" width="100%" height="100%"><path fill="currentColor" fill-rule="evenodd" d="M610.455 14.108C607.075 4.815 598.75 0 589.467 0H22.524C13.242 0 4.912 4.815 1.544 14.108-1.834 23.403.44 33.326 7.267 40.088L290.73 320.425c4.313 4.272 9.79 6.237 15.263 6.237 5.472 0 10.95-2.21 15.267-6.48L604.73 40.13c6.826-6.755 9.105-16.726 5.725-26.022z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className="formFieldLocationPicker">
                        <label htmlFor="SearchLocationPicker" className="searchLabel">
                            Location
                        </label>
                        <input
                            name='SearchLocationPicker'
                            className="inputLocationPicker"
                            placeholder='Select Location...'
                            value='City of Toronto'
                            readOnly={true}
                        />
                        <svg viewBox="0 0 612 326.663" className="icon inputLocationPickerIcon" width="100%" height="100%"><path fill="currentColor" fill-rule="evenodd" d="M610.455 14.108C607.075 4.815 598.75 0 589.467 0H22.524C13.242 0 4.912 4.815 1.544 14.108-1.834 23.403.44 33.326 7.267 40.088L290.73 320.425c4.313 4.272 9.79 6.237 15.263 6.237 5.472 0 10.95-2.21 15.267-6.48L604.73 40.13c6.826-6.755 9.105-16.726 5.725-26.022z" clip-rule="evenodd"></path></svg>
                    </div>
                    <button
                        className='searchSubmit searchSubmit__on'
                        name='SearchSubmit'
                        title='Find what are you looking for'
                    >
                        <svg viewBox="0 0 612 612" className='icon searchSubmitIcon' width="100%" height="100%"><path fill="currentColor" d="M608.76 530.96L463.98 385.1c23.56-38.47 37.18-83.874 37.18-132.61C501.16 113.15 388.902 0 250.59 0 112.033 0 0 113.152 0 252.49c0 139.602 112.046 252.757 250.59 252.757 50.814 0 97.9-15.232 137.3-41.21l143.755 144.852c7.442 7.48 26.028 1.004 41.413-14.453l21.555-21.776c15.385-15.46 21.813-34.19 14.148-41.7zM250.583 421.315c-92.46 0-167.552-75.665-167.552-168.826 0-93.16 75.092-168.588 167.552-168.588 92.442 0 167.31 75.427 167.31 168.588 0 93.18-74.87 168.826-167.31 168.826z"></path></svg>
                    </button>
                </form>

            </div>
        );
    }
}

