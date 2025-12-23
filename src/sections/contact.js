import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-5 py-16 bg-bg text-white min-h-screen" >
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-bg-variant outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-bg-variant outline-none"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-bg-variant outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-primary py-3 rounded font-semibold hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
