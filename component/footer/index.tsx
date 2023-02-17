import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact us</a>

        <a className="link link-hover">Blog</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Shipping policy</a>
      </div>

      <div>
        <span className="footer-title">Our Mission</span>
        <p>
          Quality materials, good designs, craftsmanship and sustainability.
        </p>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn bg-gray-700 absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
