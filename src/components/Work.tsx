import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Matryoshka",
    category: "Nightclub Digital Menu Ecosystem",
    details:
      "Two connected products: a tablet app for guests and a dispatcher dashboard for managing menu items, prices, visuals, and live updates.",
    stack:
      "Swift, Firebase, Cloud Firestore, iPadOS, Admin Dashboard, REST API",
    image: "/images/portfolio/project-dashboard-ledger.png",
  },
  {
    name: "DispatchFlow",
    category: "Realtime Operations Platform",
    details:
      "Built a service platform with live status updates, dispatcher tools, location-aware workflows, payments, and backend integrations for fast-moving operations.",
    stack:
      "React Native, Node.js, TypeScript, WebSockets, Stripe, Google Maps API",
    image: "/images/gallery/gallery-19.png",
  },
  {
    name: "ServiceHub",
    category: "Mobile Product & Admin Suite",
    details:
      "Created a complete ecosystem with customer-facing mobile apps, operational web tools, push notifications, and scalable cloud-backed data flows.",
    stack:
      "SwiftUI, Firebase Auth, Cloud Firestore, REST API, TypeScript, Push Notifications",
    image: "/images/portfolio/project-ops-suite.png",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Selected <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Overview</h4>
                <p>{project.details}</p>
                <h4>Stack</h4>
                <p>{project.stack}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
