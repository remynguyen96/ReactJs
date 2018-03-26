import React, {Component} from 'react';

const mockData = [
  { link: 'https://hotschedules.com', name: 'test link 1'},
  { link: 'https://hotschedules.com', name: 'test link 2'},
  { link: 'https://hotschedules.com', name: 'test link 3'},
];

const LinkWhitePage = ({ href, name }) => <a href={href} target="_blank" className="header-btn-link">{name}</a>;

class WhitePage extends Component {
  render() {
    return (
       <div className="header-white-page">
         {
           mockData.map(({ name, link }) => (
             <LinkWhitePage key={name} href={link} name={name} />
           ))
         }
       </div>
    );
  }
}
export default WhitePage;
