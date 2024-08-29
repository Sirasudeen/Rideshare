
import { useState } from 'react';

const PostRide = () => {
  const [formData, setFormData] = useState({
    startPoint: '',
    destination: '',
    date: '',
    time: '',
    availableSeats: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ride posted:', formData);
    // Add logic to handle form submission (e.g., send data to backend)
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Post a Ride</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Starting Point</label>
            <input
              type="text"
              name="startPoint"
              value={formData.startPoint}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter starting point"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Destination</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter destination"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Available Seats</label>
            <input
              type="number"
              name="availableSeats"
              value={formData.availableSeats}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              min="1"
              max="10"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Post Ride
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostRide;
