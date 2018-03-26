import React, {Component} from 'react';

const LinkWhitePage = ({ href, name }) => (
    <a href={href} className="header-btn-link">
      {name}
    </a>
);

class WhitePage extends Component {
  render() {
    return (
       <div className="header-white-page">
         <LinkWhitePage href="#link-1" name="link 1" />
         <LinkWhitePage href="#link-2" name="link 2" />
         <LinkWhitePage href="#link-3" name="link 3" />
       </div>
    );
  }
}

export default WhitePage;
