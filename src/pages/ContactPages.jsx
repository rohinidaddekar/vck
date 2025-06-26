import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="primary-heading">Contact Us</h1>

      <p className="text">
        We'd love to hear from you! Whether you have questions about admissions,
        programs, or campus life, our team is here to help.
      </p>

      <h2 className="secondary-heading">General Enquiries</h2>

      <h5>Vivekanand College Main Campus</h5>

      <p className="text">
        [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur,
        Mumbai,
        <br />
        Maharashtra 400071] <br />
        India <br />
      </p>
      <p className="text">
        Phone: **+91 12345 67890** <br />
        Email: **info@vivekanandcollege.edu** <br />
        Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
      </p>

      <h2 className="secondary-heading">Admissions Office</h2>

      <p className="text">
        For all admission-related queries regarding undergraduate or
        postgraduate programs: <br />
        Phone: +91 98765 43210 <br />
        Email: admissions@vivekanandcollege.edu
      </p>

      <h2 className="secondary-heading">Student Support Services</h2>

      <p className="text">
        For current student support, academic advising, or general assistance:{" "}
        <br />
        Phone: +91 87654 32109 <br />
        Email: studentsupport@vivekanandcollege.edu
      </p>

      <h2 className="secondary-heading">Find Us on the Map</h2>

      <p className="text">
        [You can embed a Google Map here later using an iframe or a React map
        library.]
      </p>

      <Link to="https://maps.app.goo.gl/rREAjNfAZtpTUkUy6" target="_blank">
        View on Google Maps
      </Link>

      <h2 className="secondary-heading">Send Us a Message</h2>

      <p className="text">
        [A contact form with fields for Name, Email, Subject, Message can be
        added here.]
      </p>
    </div>
  );
};

export default Contact;
