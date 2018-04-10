import React, { Component } from 'react';
import Color from './Color/Color';
import AddColor from './AddColor/AddColor';
import Search from './Search/Search';
import './Palette.css';
import { v4 } from 'uuid';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorsDefaults: {
                rating: 0,
                starsSelected: 0,
                totalStars: 10,
                show: true
            },
            colors: [
                {
                    id: "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
                    title: {
                        value: "ocean at dusk",
                        editingNow: false,
                        editHint: false
                    },
                    color: "#00c4e2",
                    rating: 5,
                    starsSelected: 5,
                    totalStars: 15,
                    show: true
                }, 
                {
                    id: "83c7ba2f-7392-4d7d-9e23-35adbe186046",
                    title: {
                        value: "lawn",
                        editingNow: false,
                        editHint: false
                    },
                    color: "#26ac56",
                    rating: 3,
                    starsSelected: 3,
                    totalStars: 5,
                    show: true
                }, 
                {
                    id: "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
                    title: {
                        value: "bright red",
                        editingNow: false,
                        editHint: false,
                    },
                    color: "#ff0000",
                    rating: 0,
                    starsSelected: 0,
                    totalStars: 10,
                    show: true
                } 
            ],
            AddColor: {
                show: true
            }
        };

        this.callBacks = { 
            onRemove: this.onRemove.bind(this), 
            onRate: this.onRate = this.onRate.bind(this), 
            onOverStar: this.onOverStar.bind(this),
            onOutStar: this.onOutStar.bind(this),
            onTitleUpdate: this.onTitleUpdate.bind(this),
            onTitleEdit: this.onTitleEdit.bind(this),
            onSetEditHint: this.onSetEditHint.bind(this),
            onAddColor: this.onAddColor.bind(this),
            onSearch: this.onSearch.bind(this)
        };
    }

    _findColorIndex(id) {
        if (this.state.colors.findIndex(item => item.id === id) !== -1 ) {
            return this.state.colors.findIndex(item => item.id === id);
        } else {
            console.error(`Color with id: ${id} not found`);
        }
    }

    _setColorsState(colors) {
        this.setState (
            {
            ...this.state,
            colors
            }
        ) 
    }

    _setColorsAndAddButtonState(newState) {
        this.setState(newState);
    }

    _getColorsState() {
        return [ ...this.state.colors ]
    }

    _generateNewColor(newTitle, newColor) {
        return {
            id: v4(),
            title: {
                value: newTitle,
                editingNow: false,
                editHint: false
            },
            color: newColor,
            rating: this.state.colorsDefaults.rating,
            starsSelected: this.state.colorsDefaults.starsSelected,
            totalStars: this.state.colorsDefaults.totalStars,
            show: this.state.colorsDefaults.show
        }
    }

    _showAddColor(currentState) {
        return {
            ...currentState,
            AddColor: {
                show: true
            }
        }
    }

    _hideAddColor(currentState) {
        return {
            ...currentState,
            AddColor: {
                show: false
            }
        }
    }

    _showAllColors({...currentState}) {
        currentState.colors.map((color) => 
                color.show = true
            )

        return currentState;
    }

    _showFilteredColors({...currentState}, input) {
        currentState.colors.map((color) => 
            color.title.value.toLowerCase().includes(input.toLowerCase()) ?
                color.show = true :
                    color.show = false
        )
        return currentState;
    }

    onSearch(searchInput) {
        let input = searchInput.target.value;
        let currentState = { ...this.state };
        if (input === '') {
            currentState = this._showAddColor(currentState);
            currentState = this._showAllColors(currentState);
            this._setColorsAndAddButtonState(currentState);
        } else {
            currentState = this._hideAddColor(currentState);
            currentState = this._showFilteredColors(currentState, input);
            this._setColorsAndAddButtonState(currentState);
        }
    }

    onRemove(id) {
        let colors = this.state.colors.filter(item => 
            item.id !== id
        )
        this._setColorsState(colors);
    }

    onRate(id, newRating) {
        let colors = this._getColorsState();
        colors[this._findColorIndex(id)].rating = newRating;
        this._setColorsState(colors); 
    }

    onOverStar(id, starsSelected) {
        let colors = this._getColorsState();
        colors[this._findColorIndex(id)].starsSelected = starsSelected;
        this._setColorsState(colors);
    }

    onOutStar(id) {
        let colors = this._getColorsState();
        colors[this._findColorIndex(id)].starsSelected = colors[this._findColorIndex(id)].rating;
        this._setColorsState(colors);
    }

    onTitleUpdate(id, newTitle) {
        let colors = this._getColorsState();
        colors[this._findColorIndex(id)].title = {
            ...colors[this._findColorIndex(id)].title,
            value: newTitle,
            editingNow: false
        }
        this._setColorsState(colors);
    }

    onTitleEdit(id) {
        let colors = this._getColorsState();
        colors[this._findColorIndex(id)].title = {
            ...colors[this._findColorIndex(id)].title,
            editingNow: true,
            editHint: false
        }
        this._setColorsState(colors);
    }

    onSetEditHint(id, hintState) {
        let colors = this._getColorsState();
        colors[this._findColorIndex(id)].title = {
            ...colors[this._findColorIndex(id)].title,
            editHint: hintState
        }
        this._setColorsState(colors);   
    }

    onAddColor(newTitle, newColor) {
        let colors = this._getColorsState();
        let color = this._generateNewColor(newTitle, newColor);
        colors.push(color)
        this._setColorsState(colors);
    }

    render() {
        let { colors } = this.state;
        return (
            <div className="Palette">
                <Search onSearch={this.callBacks.onSearch} />
                <AddColor onAddColor={this.callBacks.onAddColor} show={this.state.AddColor.show}/>
                { colors.map((color) => 
                  <Color key={color.id} state = { color } callBacks = { this.callBacks } onRemove = { this.callBacks.onRemove }/>
                )}
            </div>
        )
    }

}

export default Palette;