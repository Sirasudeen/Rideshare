// src/components/InputItem.jsx

import React, { useState } from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';
import PropTypes from 'prop-types';
import GooglePlacesAutoComplete from 'react-google-places-autocomplete';
import { useMap } from '../context/MapContext';

function InputItem({ type }) {
  const [value, setValue] = useState(null);
  const { updateMarkerPosition } = useMap();
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const getLatAndLong = (place) => {
    if (window.google && window.google.maps) {
      const placeId = place.value.place_id;
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      service.getDetails({ placeId }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && place.geometry && place.geometry.location) {
          const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };
          updateMarkerPosition(location);  // Update position in context
        }
      });
    } else {
      console.error('Google Maps API not loaded correctly.');
    }
  };

  return (
    <div className='relative bg-gray-200 p-2 rounded-lg mt-3 flex items-center gap-3 border-2 border-transparent transition-all duration-300 ease-in-out focus-within:border-black focus-within:shadow-lg'>
      <AdjustIcon className='text-black' />
      <GooglePlacesAutoComplete 
        apiKey={apiKey}
        selectProps={{
          value,
          onChange: (place) => { getLatAndLong(place); setValue(place); },
          placeholder: type === 'source' ? 'Pickup Location' : 'Dropoff Location',
          isClearable: true,
          className: 'w-full',
          components: {
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          },
          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
            }),
            input: (provided) => ({
              ...provided,
              color: 'black',
            }),
            singleValue: (provided) => ({
              ...provided,
              color: 'black',
            }),
          },
        }}
      />
    </div>
  );
}

InputItem.propTypes = {
  type: PropTypes.oneOf(['source', 'destination']).isRequired,
};

export default InputItem;
