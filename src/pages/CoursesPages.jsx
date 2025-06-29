import { Link } from "react-router-dom";

const CoursesPages = () => {
  return (
    <div id="courses">
      <h1 className="primary-heading">Our Academic Programs</h1>
      <p className="text">
        Vivekanand College offers a comprehensive range of undergraduate and
        postgraduate programs designed to equip students with the knowledge and
        skills demanded by today's dynamic global landscape. Our curriculum is
        regularly updated to reflect industry trends and academic advancements.
      </p>

      <h2 className="secondary-heading">Discover Campus Life</h2>

      <div className="video-container">
        <video src="/videos/college-tour.mp4" controls></video>

        <p>
          Get a glimpse of the vibrant academic and social life at Vivekanand
          College.
        </p>
      </div>

      <h2 className="secondary-heading">Undergraduate Programs (UG)</h2>

      <li className="heading">Bachelor of Science (B.Sc.)</li>
      <ul>
        <li>Computer Science (3 years)</li>
        <li>Information Technology (3 years)</li>
        <li>Biotechnology (3 years)</li>
      </ul>
      <li className="heading">Bachelor of Commerce (B.Com)</li>
      <ul>
        <li>Accounting & Finance (3 years)</li>
        <li>Banking & Insurance (3 years)</li>
      </ul>
      <li className="heading">Bachelor of Arts (B.A.)</li>
      <ul>
        <li>English Literature (3 years)</li>
        <li>Psychology (3 years)</li>
      </ul>

      <h2 className="secondary-heading">Postgraduate Programs (PG)</h2>

      <li className="heading">Master of Science (M.Sc.)</li>
      <ul>
        <li>Computer Science (2 years)</li>
        <li>Information Technology (2 years)</li>
      </ul>
      <li className="heading">Master of Commerce (M.Com) (2 years)</li>
      <li className="heading">Master of Arts (M.A.) (2 years)</li>

      <h2 className="secondary-heading">
        Program Details & Fee Structure (Annual)
      </h2>

      <table>
        <thead>
          <tr>
            <th>Program Type</th>
            <th>Course Name </th>
            <th>Duration </th>
            <th>Annual Fee (INR)</th>
            <th>Eligibility</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>UG</td>
            <td>B.Sc. Computer Science </td>
            <td>3 Years </td>
            <td>₹ 85,000 </td>
            <td>10+2 with PCM (50%)</td>
          </tr>

          <tr>
            <td>UG</td>
            <td>B.Com. Accounting & Finance </td>
            <td>3 Years </td>
            <td>₹ 70,000 </td>
            <td>10+2 Commerce (45%)</td>
          </tr>

          <tr>
            <td>UG</td>
            <td>M.Sc. Information Technology </td>
            <td>2 Years </td>
            <td>₹ 95,000 </td>
            <td>B.Sc. IT/CS (50%)</td>
          </tr>
        </tbody>
      </table>

      <h2 className="secondary-heading">Specialized & Vocational Courses</h2>

      <p className="text">
        In addition to traditional degree programs, we offer various certificate
        and diploma courses in areas like Digital Marketing, Web Development,
        Data Analytics, and Soft Skills Development, providing specialized
        training for career enhancement.
      </p>
      <div className="bottom">
        <p className="text">
          Explore detailed syllabi and admission criteria on our Admissions
          page.
        </p>
        <Link to="/contact" className="button">
          Inquire About Courses
        </Link>
      </div>
    </div>
  );
};

export default CoursesPages;
