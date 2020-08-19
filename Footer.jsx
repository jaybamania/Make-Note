import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Makenote.css';

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <div className="footer">
        <footer id="sticky-footer" className="py-4  bg-warning text-white-50 mt-4">
            <div className="container text-center ">
                CreatedBy &copy; JayBamania {year}
            </div>
        </footer>
    </div>
  );
}

export default Footer;
