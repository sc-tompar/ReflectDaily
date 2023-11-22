
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Add your Navbar content here */}

      {/* Search bar */}
      <div className="search-topbar">
        <input
          type="text"
          placeholder="Type to Search..."
          className="input-topsearch"
          // Add your interactive logic here (e.g., onChange handler)
        />
      </div>

      {/* Add the image to the rightmost part */}
      <div className="profile-topcontainer">
        <img
          src="https://scontent.fdvo1-2.fna.fbcdn.net/v/t1.6435-9/178636103_296974451998382_1267186811635459138_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeHsUSrw8Ny5E1I5eX6aM3TU6gr5M2rzgKvqCvkzavOAqxkCwsOv_7boWXSoHtdVB6cdetDdOus_7_SQp-TiHgiw&_nc_ohc=pPn6yRz6keQAX9FAWMn&_nc_ht=scontent.fdvo1-2.fna&oh=00_AfCi_qMNCL6ByTuyJWWnC9nUljcP1j-5bR4PGGj9M-SmlQ&oe=657CE4B2"
          alt="Profile"
          className="profile-topimage"
        />
      </div>
    </nav>
  );
};

export default Navbar;
