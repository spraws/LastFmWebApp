import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLastfm, faReact } from '@fortawesome/free-brands-svg-icons';

export default class ReactFooter extends Component {
  render() {
    return (
      <div className="builtWith">
        <p>
          Built with{' '}
          <a href="https://www.last.fm/api" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLastfm} className="lastfm-ico" />
          </a>{' '}
          and{' '}
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faReact} className="react-ico" />
          </a>
        </p>
      </div>
    );
  }
}