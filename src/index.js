import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');

// ReactDOM.render(<Badge firstName='Andres' lastName='Reyes' jobTitle='FrontEnd Developer' email='areyesdev@gmail.com' twitter='areyesdev' />, container);

ReactDOM.render(<BadgeNew />, container)
