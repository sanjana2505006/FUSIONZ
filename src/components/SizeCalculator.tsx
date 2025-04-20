import React, { useState } from 'react';
import { SizeRecommendation } from '../types';

const SizeCalculator: React.FC = () => {
  const [formData, setFormData] = useState<SizeRecommendation>({
    height: 0,
    weight: 0,
    age: 0,
    gender: 'other'
  });
  const [recommendedSize, setRecommendedSize] = useState<string>('');

  const calculateSize = () => {
    const { height, weight, gender } = formData;
    let size = '';

    // Basic size calculation logic based on height and weight
    const bmi = weight / ((height / 100) * (height / 100));

    if (gender === 'male') {
      if (bmi < 18.5) size = 'S';
      else if (bmi < 25) size = 'M';
      else if (bmi < 30) size = 'L';
      else size = 'XL';
    } else {
      if (bmi < 18.5) size = 'XS';
      else if (bmi < 25) size = 'S';
      else if (bmi < 30) size = 'M';
      else size = 'L';
    }

    setRecommendedSize(size);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Size Calculator</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200"
            value={formData.height || ''}
            onChange={(e) => setFormData({ ...formData, height: Number(e.target.value) })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200"
            value={formData.weight || ''}
            onChange={(e) => setFormData({ ...formData, weight: Number(e.target.value) })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200"
            value={formData.age || ''}
            onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'male' | 'female' | 'other' })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          onClick={calculateSize}
          className="w-full bg-pink-400 text-white py-2 px-4 rounded-md hover:bg-pink-500 transition-colors"
        >
          Calculate Size
        </button>
        {recommendedSize && (
          <div className="mt-4 p-4 bg-pink-50 rounded-md">
            <p className="text-center text-lg font-medium text-pink-600">
              Recommended Size: {recommendedSize}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SizeCalculator;