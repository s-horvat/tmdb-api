import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <footer className="text-center bg-neutral-800 opacity-60 text-neutral-50">
        <div className="flex items-center justify-center gap-4 opacity-100">
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
        <p>Created by Slaven Horvat</p>
        <p>Used tmdb API</p>
      </footer>
    </footer>
  );
}

export default Footer;
