import React, { Component } from 'react';
import './styles.css'

class FilterTab extends Component {
  handleToggleTab = (e) => {
    e.target.dataset.tabName && this.props.toggleTab(e.target.dataset.tabName)
  }
  render() {
    const showTab = this.props.showTab;
    return (
      <ul onClick={this.handleToggleTab} className='filters'>
        <li className={showTab === 'All' ? 'selected' : ''}>
            <a href="#/" data-tab-name='All'>All</a>       
        </li>
        <li className={showTab === 'Active' ? 'selected' : '' }>
            <a href="#/Active" data-tab-name='Active'>Active</a>
        </li>
        <li className={showTab === 'Completed' ? 'selected' : '' }>
            <a href="#/Completed" data-tab-name='Completed'>Completed</a>
        </li>
      </ul>
    );
  }
}
 
export default FilterTab;