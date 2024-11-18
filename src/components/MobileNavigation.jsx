import React from "react";
import { mobileNavigation } from "../const/navigation";
import { NavLink } from "react-router-dom";

function MobileNavigation() {
  return (
    <section className="lg:hidden h-16 bg-neutral-600 bg-opacity-90 fixed bottom-0 w-full z-40 px-8">
      <div className="flex items-center justify-between text-neutral-400">
        {mobileNavigation.map((nav, index) => {
          return (
            <NavLink
              key={nav.label + "mobilenavigation"}
              to={nav.href}
              className={({ isActive }) =>
                `px-3 py-2 h-full items-center flex flex-col justify-center text-sm ${
                  isActive && "text-white"
                }`
              }
            >
              <div className="text-3xl z-50">{nav.icon}</div>
              <p>{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}

export default MobileNavigation;
