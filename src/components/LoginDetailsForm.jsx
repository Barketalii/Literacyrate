import React from 'react';

function LoginDetailsForm({ prevPage }) {
  return (
    <form className="flex flex-col gap-6 w-full">
      <input type="password" placeholder="Password" className="border p-3 rounded-lg" />
      <input type="password" placeholder="Confirm Password" className="border p-3 rounded-lg" />
      <div className="flex justify-between">
        <button onClick={prevPage} className="bg-gray-600 text-white p-3 rounded-lg">Previous</button>
        <button type="submit" className="bg-green-600 text-white p-3 rounded-lg">Submit</button>
      </div>
    </form>
  );
}

export default LoginDetailsForm;
