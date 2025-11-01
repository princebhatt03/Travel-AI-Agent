import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    interests: '',
  });

  const [loading, setLoading] = useState(false);
  const [travelPlan, setTravelPlan] = useState('');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setTravelPlan('');

    try {
      const { data } = await axios.post(`${API_URL}/api/travel/plan`, formData);

      if (data.success && data.plan) {
        setTravelPlan(data.plan);
        toast.success('Travel plan generated successfully!', {
          position: 'top-center',
        });
      } else {
        toast.error('Failed to generate travel plan.', {
          position: 'top-center',
        });
      }
    } catch (error) {
      const errMsg =
        error.response?.data?.message || 'Failed to generate travel plan.';
      toast.error(`${errMsg}`, { position: 'top-center' });
    } finally {
      setLoading(false);
    }
  };

  // Download travel plan as text file
  const handleDownload = () => {
    const blob = new Blob([travelPlan], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Travel_Plan_${formData.destination || 'Trip'}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <ToastContainer />
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          🧳 Plan Your Next Adventure
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="e.g. Paris, Japan..."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Budget (in USD)
            </label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g. 1500"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold text-gray-700">
              Interests
            </label>
            <textarea
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              placeholder="e.g. Beaches, food, culture, adventure..."
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              required></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all font-semibold disabled:opacity-50">
              {loading ? 'Generating Plan...' : 'Generate Travel Plan'}
            </button>
          </div>
        </form>

        {travelPlan && (
          <div className="mt-6 bg-gray-50 p-4 rounded-md shadow-inner">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              ✈️ Your Personalized Travel Plan
            </h3>
            <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {travelPlan}
            </pre>

            <button
              onClick={handleDownload}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all font-semibold">
              ⬇️ Download Plan
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
