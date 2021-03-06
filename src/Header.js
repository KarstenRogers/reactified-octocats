import React, { Component } from 'react';

class Header extends Component {

    render() { 
        return (
            <div>
                <header>
    <p class="logo"><img class="header-img" src="https://octodex.github.com/ui/logo.png"/></p>
    <nav>
      <ul>
        <li><a href="http://feeds.feedburner.com/Octocats" target="_blank">RSS</a></li>
        <li><a href="https://octodex.github.com/faq.html" target="_blank">FAQ</a></li>
        <li><a href="https://github.com/" target="_blank">Back to GitHub</a></li>
      </ul>
    </nav>
  </header>
            </div>
         );
    }
}
 
export default Header;