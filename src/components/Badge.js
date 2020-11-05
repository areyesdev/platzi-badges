import React, { Component } from 'react';
import md5 from 'md5';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';


class Badge extends Component {
    render() {
        const {firstName, lastName, email, jobTitle, twitter } = this.props;
        return (
            <div className='badge'>
                <div className='badge_header'>
                    <img src={confLogo} alt='logo conferencia' />
                </div>
                <div className='badge_section-name '>
                    <img 
                        className='badge_avatar' 
                        src={`https://www.gravatar.com/avatar/${md5(email)}?s=120`} 
                        alt='Avatar' 
                    />
                    <h1>{firstName} <br /> {lastName}</h1>
                </div>
                <div className='badge_section-info'>
                    <h3>{jobTitle}</h3>
                    <div>@{twitter}</div>
                </div>
                <div className='badge_footer'>
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge;