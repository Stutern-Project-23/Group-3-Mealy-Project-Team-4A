import React from 'react'
import map from '../images/Map.jpg'
import '../styles/deliveryAddress.css'
const DeliveryAddress = () => {
  return (
    <div className="DeliveryAddress">
      <div className="text">
        <h2>Add a delivery address</h2>

        <div class="search-bar">
          <input
            type="text"
            class="search-input"
            placeholder="Search street, city, district....."
          ></input>
        </div>
        {/* <input
          type="text"
          id="searchInput"
          placeholder="Search street, city, district....."
        ></input> */}

        <div className="loc">
          <svg
            className="icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_434_1289)">
              <path
                d="M17.4096 1.67163L17.4979 1.66663L17.6062 1.67329L17.6812 1.68663L17.7837 1.71579L17.8729 1.75413L17.9562 1.80163L18.0312 1.85746L18.0996 1.91996L18.1429 1.96913L18.2112 2.06579L18.2546 2.14579C18.2937 2.22913 18.3187 2.31746 18.3296 2.40913L18.3337 2.49746C18.3337 2.55996 18.3271 2.62163 18.3137 2.68079L18.2846 2.78329L12.8412 17.8475C12.738 18.0721 12.5726 18.2624 12.3644 18.3958C12.1563 18.5292 11.9143 18.6 11.6671 18.6C11.4444 18.6007 11.2254 18.5437 11.0313 18.4346C10.8372 18.3255 10.6747 18.168 10.5596 17.9775L10.5054 17.8716L7.71206 12.2866L2.15372 9.50663C1.94806 9.41257 1.77069 9.26615 1.63937 9.08204C1.50804 8.89792 1.42736 8.68254 1.40539 8.45746L1.40039 8.33329C1.40039 7.86663 1.65122 7.43996 2.10122 7.19163L2.21789 7.13329L17.2321 1.71163L17.3204 1.68663L17.4096 1.67163Z"
                fill="#381E72"
              />
            </g>
            <defs>
              <clipPath id="clip0_434_1289">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="text1">
            <a href="" className="link">
              Use current location
            </a>
          </span>
        </div>

        <div className="EE">
          <a href="" className="link">
            Or set your location on the map
          </a>
        </div>
      </div>

      <div className="map">
        <img src={map} className="" alt="map" />
      </div>
    </div>
  )
}

export default DeliveryAddress
