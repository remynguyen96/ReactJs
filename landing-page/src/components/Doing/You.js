import React, { Component } from 'react';

class You extends Component {
  render() {
    const { title, infomation } = this.props;
    return (
      <div className="you">
        <h3 className="you-til">{title}</h3>
        <section className="you-desc">
          <ul className="you-list">
            {infomation.map((item) => (
                <li key={item} className="you-item">{item}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default You;
