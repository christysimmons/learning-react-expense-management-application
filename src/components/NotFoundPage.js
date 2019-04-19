import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <p>404 not found. <Link to="/"> Go home instead?</Link></p>
    </div>
)

export default NotFoundPage;