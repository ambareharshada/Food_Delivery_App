import HeaderSection from "./HeaderSection";

const ContactUs = () => {
  return (
    <>
      <HeaderSection />
      {/* <h2>Contact</h2> */}

      <div className="contact-form-container">
        <form action="/submit-your-form-handler" method="POST">
            <h2>Contact Us</h2>
            <p>Please fill in this form to contact us.</p>

            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />

            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    </div>
    </>
  );
};
export default ContactUs;