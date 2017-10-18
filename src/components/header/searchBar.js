'use strict';

import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="searchBarWrapper">
                <form action='javascript:void(0)' className="searchBar">
                    <div className="formFieldKeyword">
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
                    </div>
                    <button
                        className='searchSubmit'
                        name='SearchSubmit'
                        title='Find what are you looking for'
                    >
                    </button>
                </form>

            </div>
        );
    }
}

