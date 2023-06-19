import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="first-foot">
          <span className="foot-t">Quick Link</span>
          <Link className="link foot-item link-hover">About</Link>
          <Link className="link foot-item link-hover">Product</Link>
          <Link className="link foot-item link-hover">Responsibility</Link>
          <Link className="link foot-item link-hover">Career</Link>
          <Link className="link foot-item link-hover">Press</Link>
          <Link className="link foot-item link-hover">Image Bank</Link>
        </div>
        <div>
          <span className="foot-t">Customer Service</span>
          <Link className="link foot-item link-hover"> My Account</Link>
          <Link className="link foot-item link-hover">Checkout Page</Link>
          <Link className="link foot-item link-hover">Terms & Condition</Link>
          <Link className="link foot-item link-hover">
            Deliveries & Refunds
          </Link>
          <Link className="link foot-item link-hover">Cart Page</Link>
        </div>

        <div>
          <span className="foot-t">More</span>
          <Link className="link foot-item link-hover">Gift Card</Link>
          <Link className="link foot-item link-hover">Gift Card</Link>
          <Link className="link foot-item link-hover">Rewards Program</Link>
          <Link className="link foot-item link-hover">Wedding Dress</Link>
          <Link className="link foot-item link-hover">Host A Partyk</Link>
          <Link className="link foot-item link-hover">Extended Sizing</Link>
        </div>

        <div className="last-footer">
          <span className="foot-t">Don't Miss Any Update</span>
          <span className="label-text foot-item">
            Molestie vitae massa felis, aliquam lectus at. <br />
            Ultricies et, quis sit fermentum aliquam et.
          </span>
          <div className="form-control w-80">
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn sub-btn absolute top-0 right-0 rounded-l-none">
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
