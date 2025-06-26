import { Link } from "react-router-dom";

const HomePages = () => {
  return (
    <div id="home">
      <div className="hero-section">
        <img src="/images/college-banner.png" alt="college-banner" />

        <div className="hero-heading">
          <h1>Welcome To Vivekanand College!</h1>
          <p>your Journey To Excellence Start Here.</p>
          <Link to="/admissions" className="button">
            Apply Now!
          </Link>
        </div>
      </div>

      <p className="text">
        <b>Vivekanand College</b> is a premier educational institution dedicated
        to fostering academic excellence, innovation, and holistic development.
        Established in [Year of Establishment, e.g., 1980], we have proudly
        served generations of students, empowering them to achieve their full
        potential.
      </p>
      <p className="text">
        At Vivekanand College, we believe in a vibrant learning environment that
        extends beyond textbooks. Our state-of-the-art facilities, experienced
        faculty, and diverse student community create a unique ecosystem where
        curiosity thrives and future leaders are shaped.
      </p>

      <h2 className="secondary-heading">Why Choose Vivekanand College?</h2>

      <ul>
        <li>
          <span>Legacy of Excellence:</span> Decades of commitment to quality
          education.
        </li>
        <li>
          <span>Experienced Faculty:</span> Learn from renowned experts and
          passionate educators.
        </li>
        <li>
          <span>Modern Facilities:</span> Well-equipped labs, expansive library,
          and comfortable campus.
        </li>
        <li>
          <span>Holistic Development:</span> Focus on co-curricular activities,
          sports, and community service.
        </li>
        <li>
          <span>Strong Placements:</span> Excellent career opportunities with
          leading companies.
        </li>
      </ul>

      <h2 className="secondary-heading">Campus Life & Facilities</h2>
      <div className="image">
        <img src="/images/students-banner.jpeg" alt="student-banner" />
        <img src="/images/campus.jpg" alt="college" />
      </div>

      <p className="text">
        Explore our vibrant campus and state-of-the-art facilities designed to
        enhance your learning experience and personal growth.
      </p>

      <div className="bottom">
        <p className="text">Ready to start your journey with us?</p>
        <Link to="/courses" className="button">
          Explore Courses
        </Link>
      </div>
    </div>
  );
};

export default HomePages;
