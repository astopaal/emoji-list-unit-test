import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (

      //BURADA İNPUTUMUZA HİÇ BİR ŞEKİLDE ERİŞEMEDİĞİM İÇİN PLACEHOLDER EKLEDİM
      <div className="component-search-input">
        <div>
        <label htmlFor="search-input">Search</label>
          <input id="search-input" placeholder="Search emoji..." onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
