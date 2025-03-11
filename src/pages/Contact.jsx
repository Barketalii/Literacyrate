import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "loading...",
    phone: "loading...",
    offices: [],
    team: [],
  });

  useEffect(() => {
    
    fetch("/api/contact-info")
      .then((response) => response.json())
      .then((data) => setContactInfo(data))
      .catch((error) => console.error("Error fetching contact info:", error));
  }, []);

  return (
    <div>
      
      <section className="p-6 bg-gradient-to-r from-green-300 to-blue-300">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p>Email: {contactInfo.email}</p>
        <p>Phone: {contactInfo.phone}</p>

        
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Send Us a Message</h3>
          <form className="mt-4">
            <label className="block">
              Name:
              <input type="text" className="mt-1 block w-full" />
            </label>
            <label className="block mt-4">
              Email:
              <input type="email" className="mt-1 block w-full" />
            </label>
            <label className="block mt-4">
              Message:
              <textarea className="mt-1 block w-full"></textarea>
            </label>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          </form>
        </div>

        
        {contactInfo.offices.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Our Offices</h3>
            <ul className="mt-2">
              {contactInfo.offices.map((office, index) => (
                <li key={index}>
                  <p>{office.address}</p>
                  <p>{office.phone}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Team Members */}
        {contactInfo.team.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Meet Our Team</h3>
            <ul className="mt-2">
              {contactInfo.team.map((member, index) => (
                <li key={index}>
                  <p>{member.name} - {member.role}</p>
                  <p>{member.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Social Media Links */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <ul className="mt-2">
            <li>
              <a href="https://www.facebook.com/YourOrganization" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/YourOrg" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/yourorganization" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
