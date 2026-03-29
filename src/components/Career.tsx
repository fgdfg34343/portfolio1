import "./styles/Career.css";

const experience = [
  {
    role: "Native iOS Developer",
    company: "Remote Client Projects",
    period: "2018",
    description:
      "Started delivering production iOS features in Swift, working across UI implementation, API integrations, push notifications, and App Store release cycles.",
  },
  {
    role: "Mobile & Backend Engineer",
    company: "Independent Product Work",
    period: "2021",
    description:
      "Expanded mobile products into full ecosystems with Firebase, Cloud Firestore, realtime updates, internal tools, and operational dashboards.",
  },
  {
    role: "Senior Mobile App Developer",
    company: "Remote Product Teams",
    period: "NOW",
    description:
      "Building scalable mobile platforms end to end, combining native iOS, cross-platform delivery, backend architecture, and real-time product flows.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Selected <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experience.map((item) => (
            <div className="career-info-box" key={`${item.period}-${item.role}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.period}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
