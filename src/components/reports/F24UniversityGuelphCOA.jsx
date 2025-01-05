import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Replace these with your new images or remove them if not needed
import image1 from "../../assets/s24/me.jpeg";
import image2 from "../../assets/s24/work.jpeg";

// Example placeholders (remove if not using)
import image3 from "../../assets/s24/disperse.PNG";
import image4 from "../../assets/s24/bosco.PNG";

/* ----------------------------------------------------------------------------
   GOALS ARRAY
   Here, we map each "Learning Goal" from your new content into the same
   expandable/collapsible structure used previously. Adjust as you see fit.
---------------------------------------------------------------------------- */

const goals = [
  {
    title:
      "Goal 1: Build personal confidence and become more outgoing by pushing beyond my comfort zone in group settings. (Communicating – Oral Communication)",
    description: `I aimed to build my confidence in group settings by speaking up more often and initiating conversations. This involved contributing ideas in team meetings, scheduling one-on-one discussions with colleagues, and attending social or networking events to expand my comfort zone.`,
    challenges: `Early on, I tended to overthink before speaking, which caused me to rush my points. Slowing down and focusing on clarity was a key challenge as I balanced nerves with the desire to contribute meaningfully.`,
    skills: `Communication, Networking, Public Speaking, Confidence`,
    results: `Over time, I received positive feedback from my manager and colleagues. I now feel more at ease sparking conversations and leading discussions with greater clarity and composure.`,
  },
  {
    title:
      "Goal 2: Mastering Harmony (Professional & Ethical Behaviour – Ethical Reasoning)",
    description: `Navigating differing opinions effectively was essential in my role as a Website Redesign Coordinator. I studied conflict-resolution strategies, practiced empathetic listening, and sought inclusive solutions whenever disagreements arose, especially in web design decisions.`,
    challenges: `Balancing multiple viewpoints during the redesign process often required patience, tact, and the ability to mediate between creative ideas and practical constraints.`,
    skills: `Conflict Resolution, Empathetic Listening, Mediation, Collaborative Problem-Solving`,
    results: `By focusing on shared goals and clear communication, I helped transform conflicts into productive discussions. Team morale improved, and project timelines stayed on track.`,
  },
  {
    title:
      "Goal 3: Cross-Cultural Connections (Global Understanding – Intercultural Competence)",
    description: `Fostering authentic relationships in a diverse workplace was a priority. I organized informal gatherings, encouraged open dialogue, and learned about colleagues’ backgrounds to foster a more inclusive, supportive environment.`,
    challenges: `Moving past surface-level small talk and genuinely understanding different cultural perspectives required intentional effort and willingness to listen deeply.`,
    skills: `Intercultural Competence, Empathy, Active Listening, Team Bonding`,
    results: `As trust grew among team members, collaboration became smoother and our collective creativity flourished. We established a more welcoming environment that celebrated each person’s uniqueness.`,
  },
  {
    title:
      "Goal 4: Navigating Multiple Canvases (Professional & Ethical Behaviour – Time Management)",
    description: `Balancing external website migrations with new internal SharePoint sites demanded thorough organization. I used tools like MS Teams and Trello to assign tasks, track progress, and break large projects into manageable steps.`,
    challenges: `Adapting timelines and reprioritizing under tight deadlines occasionally resulted in juggling multiple tasks at once, testing both focus and flexibility.`,
    skills: `Time Management, Task Prioritization, Iterative Planning, MS Teams, Trello`,
    results: `Frequent check-ins and a systematic approach prevented overwhelm and ensured we delivered critical pages on schedule. The iterative process also reduced stress and boosted overall team productivity.`,
  },
  {
    title:
      "Goal 5: Leading the Collective Imagination (Professional & Ethical Behaviour – Leadership)",
    description: `My final objective was to enhance my leadership skills by volunteering for mini-projects tied to the website redesign. I focused on delegation, mentorship, and maintaining clear communication channels with the team.`,
    challenges: `Coordinating with various stakeholders, each with unique priorities and workflows, required patience and careful oversight. Handling unexpected hurdles—like technical glitches—demanded quick thinking and collaboration.`,
    skills: `Leadership, Delegation, Mentorship, Stakeholder Engagement`,
    results: `By playing to each team member’s strengths, we consistently met our milestones. Team feedback indicated an improvement in morale and cohesion, affirming the value of empathetic leadership.`,
  },
];

const F24UoGCollegeOfArts = () => {
  const navigate = useNavigate();
  const [expandedGoals, setExpandedGoals] = useState({});

  const handleBack = () => {
    navigate(-1);
  };

  const handleToggleGoal = (index) => {
    setExpandedGoals((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      id="f24-uofg-college-of-arts-wtr"
      className="min-h-screen px-6 pb-20 pt-10 text-text transition-all duration-300 sm:px-8 md:px-16 lg:px-20"
    >
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={handleBack}
          className="inline-block rounded-full bg-primary px-6 py-3 text-center text-bg shadow-md transition-all duration-300 hover:scale-105 hover:bg-bgContrast"
        >
          Back to Portfolio
        </button>
      </div>

      {/* Main Title */}
      <h1 className="text-center text-4xl font-bold leading-snug text-text">
        A Canvas of Opportunity: Fall 2024 at the College of Arts
      </h1>

      <p className="mb-4 mt-3 text-left text-lg text-text">
        During the fall 2024 academic term, from September 10 to December 20, I
        served as a Website Redesign Coordinator at the University of Guelph.
        Stationed in the College of Arts—within the Mackinnon Building—I had the
        chance to explore the multifaceted world of website development,
        including content migration, page redesign, and user experience
        improvements.
      </p>

      <p className="mb-4 text-left text-lg text-text">
        The primary goal of this report is to share insights from my experience
        at the University of Guelph. I hope readers will gain a better
        understanding of the project workflow within a post-secondary
        institution and recognize the importance of collaboration in achieving
        successful digital transformations. Ultimately, I want to highlight the
        professional and personal growth I experienced throughout this process,
        and offer a “food for thought” on the benefits of working within a
        supportive academic environment.
      </p>

      {/* Images Section (Optional) */}
      <section className="mb-20">
        <div className="mx-auto flex max-w-3xl justify-between gap-10">
          {/* Image 1 */}
          <div className="flex flex-col items-center">
            <img
              src={image1}
              alt="Snapshot of the University of Guelph campus"
              className="h-80 w-80 rounded-md object-cover shadow-md"
            />
            <p className="mt-4 text-center text-base text-text">
              A glimpse of campus life at the University of Guelph’s College of
              Arts.
            </p>
          </div>

          {/* Image 2 */}
          <div className="flex flex-col items-center">
            <img
              src={image2}
              alt="Workspace or environment in the College of Arts"
              className="h-80 w-80 rounded-md object-cover shadow-md"
            />
            <p className="mt-4 text-center text-base text-text">
              My workspace in the Mackinnon Building, home to the College of
              Arts.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Information about the Employer */}
      <section className="mb-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          Behind the Scenes: Exploring the College of Arts
        </h2>
        <hr className="mb-4 border-bgContrast" />

        <p className="mb-4 text-left text-lg text-text">
          My role was situated in the University of Guelph’s College of Arts
          under the guidance of my manager, Rachel Ruston. The College of Arts
          is part of a thriving educational institution known for its commitment
          to interdisciplinary learning, community engagement, and research
          excellence. Housed in the Mackinnon Building, the College brings
          together diverse departments—from languages to performing arts—each
          contributing to a vibrant campus culture.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          While the University of Guelph primarily operates in the
          post-secondary education sector, my responsibilities focused on a
          technology-driven project: website development using Drupal and
          SharePoint. This meant leveraging computing science fundamentals—like
          web design principles, coding, and user experience design—to modernize
          and improve the College of Arts’ online presence.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          I was fortunate to collaborate with a dynamic group of individuals,
          including three other full-time co-op students (Lyna Tran, Hannah
          Andrea Rosario, and Kaye Tschirhart) and four part-time or work-study
          students (Callie Gibson, Ella Holt, Muhammad Uzair, and Rasneet Kaur).
          Collectively known as “the Websters,” we worked out of the Dean’s
          Suite to tackle everything from core website functionality to layout
          and accessibility. Together, we formed a strong team dedicated to
          enhancing the user experience for both the external College of Arts
          website and internal SharePoint resources.
        </p>
      </section>

      {/* 3. Goals */}
      <section className="mb-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          A Palette of Progress: Goals and Growth
        </h2>
        <hr className="mb-4 border-bgContrast" />

        <p className="mb-4 text-left text-lg text-text">
          Throughout this co-op term, I set five key learning goals to guide my
          professional development. Each goal was tied to a specific skill area,
          accompanied by an action plan, measures of success, and a personal
          reflection. Click on each goal below to see how I addressed
          challenges, expanded my skill set, and measured results.
        </p>

        {/* Expandable Goals */}
        <div>
          {goals.map((goal, index) => (
            <div key={index}>
              <button
                onClick={() => handleToggleGoal(index)}
                className="flex w-full items-center justify-between py-2 text-left text-lg font-semibold transition-all duration-300 hover:text-primary"
                aria-expanded={expandedGoals[index]}
                aria-controls={`goal-details-${index}`}
              >
                <span>{goal.title}</span>
                <div className="flex items-center">
                  <span
                    className={`transform transition-transform duration-300 ${
                      expandedGoals[index] ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </div>
              </button>

              <div
                id={`goal-details-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedGoals[index]
                    ? "max-h-screen translate-y-0 opacity-100"
                    : "max-h-0 translate-y-4 opacity-0"
                }`}
              >
                <div className="pb-4">
                  <h3 className="text-lg font-semibold text-primary">
                    Goal Description:
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                    {goal.description}
                  </p>

                  {goal.challenges && (
                    <>
                      <h3 className="mt-2 text-lg font-semibold text-primary">
                        Challenges:
                      </h3>
                      <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                        {goal.challenges}
                      </p>
                    </>
                  )}

                  <h3 className="mt-2 text-lg font-semibold text-primary">
                    Skills Developed:
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                    {goal.skills}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-primary">
                    Results:
                  </h3>
                  <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
                    {goal.results}
                  </p>
                </div>
              </div>

              {/* Divider between goals */}
              {index < goals.length - 1 && (
                <hr className="my-4 border-bgContrast" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Job Description */}
      <section className="mb-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          Crafting a Digital Experience: My Role in the Redesign
        </h2>
        <hr className="mb-4 border-bgContrast" />

        <p className="mb-4 text-left text-lg text-text">
          As Website Redesign Coordinator, my main responsibility was to ensure
          the College of Arts’ digital presence was both engaging and
          functional. I spearheaded content migration from Drupal 7 to Drupal 9
          and contributed to the creation of new SharePoint sites for internal
          users. Key projects included overhauling “Current Student” pages—
          resources for undergraduates seeking department-specific information—
          and redesigning “Graduate Student” pages for Master’s and PhD
          programs.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          One highlight of this position was the chance to see how different
          College departments work together behind the scenes. Observing the
          collaborative nature of the entire university during a large-scale
          website migration gave me a deeper appreciation for cross-functional
          teamwork. Additionally, learning new platforms like Drupal 9 and
          SharePoint enriched my technical skill set and expanded my knowledge
          of user-centered web design.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          I came into this role with prior knowledge of HTML, CSS, JavaScript,
          and basic project management. Throughout my term, I refined those
          skills further and gained proficiency in Drupal 7, Drupal 9, and
          advanced SharePoint tools. Understanding accessibility requirements,
          such as AODA compliance, was also crucial for ensuring each page met
          user needs across various devices.
        </p>

        {/* Optional Placeholder Images/Links for demonstration */}
        <section className="my-6">
          <div className="flex justify-between gap-14 px-5">
            <div className="flex flex-col items-center">
              <div className="aspect-w-16 aspect-h-9 w-full">
                {/* Example link or remove if not needed */}
                <a
                  href="https://uoguelph.ca/arts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={image4}
                    alt="Placeholder for the new College of Arts website"
                    className="h-full w-full rounded-md object-cover shadow-md transition-all duration-300 hover:scale-105"
                  />
                </a>
              </div>
              <p className="mt-8 text-center text-base text-text">
                Placeholder for a screenshot of the redesigned external College
                of Arts website.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="aspect-w-16 aspect-h-9 w-full">
                {/* Example link or remove if not needed */}
                <a
                  href="https://www.uoguelph.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={image3}
                    alt="Placeholder for internal SharePoint site"
                    className="h-full w-full rounded-md object-cover shadow-md transition-all duration-300 hover:scale-105"
                  />
                </a>
              </div>
              <p className="mt-8 text-center text-base text-text">
                Placeholder for a screenshot of the internal SharePoint site for
                faculty and students.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* 5. Conclusions */}
      <section className="mb-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          Splashes of Accomplishment: Closing Reflections
        </h2>
        <hr className="mb-4 border-bgContrast" />

        <p className="mb-4 text-left text-lg text-text">
          Working at the College of Arts was a rewarding journey filled with
          constant learning and personal growth. I relished the high level of
          collaboration and support from both full-time and part-time teammates,
          who became more like close friends than just colleagues. Transitioning
          from a high-pressure environment to this more open and supportive
          setting taught me to value balance and to cherish the people around
          me.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          This co-op term reaffirmed my enthusiasm for collaborative work
          environments and piqued my interest in project management as a career
          path. Being part of a unified team drove me to improve my
          communication and leadership capabilities. Moreover, working for my
          own university instilled a sense of pride in advancing the digital
          landscape of an institution I care about.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          I am honored to have contributed to the College of Arts’ mission and
          am grateful for the incredible network I have built here. The good
          news is that I’ll be returning for the Winter 2025 term, where I look
          forward to pushing the College of Arts’ web presence to new heights.
          It has been a privilege to serve the school I attend, and I cannot
          wait to continue this rewarding journey.
        </p>
      </section>

      {/* 6. Acknowledgments */}
      <section className="mb-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          A Gallery of Gratitude: Acknowledgments
        </h2>
        <hr className="mb-4 border-bgContrast" />

        <p className="mb-4 text-left text-lg text-text">
          I would like to extend my heartfelt gratitude to my manager, Rachel
          Ruston, for her exceptional mentorship. Her supportive leadership
          style made it possible for me to learn and grow with confidence. I
          also owe a big thank-you to Kate Tschirhart, whose warm and caring
          nature contributed greatly to the positive atmosphere in our
          workspace.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          My close collaborators, the Websters—particularly Lyna Tran and
          Muhammad Uzair—deserve special mention. They onboarded me seamlessly
          and shared valuable insights, which helped me transition smoothly into
          my role. The rest of the team, including Callie Gibson, Ella Holt,
          Rasneet Kaur, and Hannah Andrea Rosario, was equally supportive and
          passionate, contributing tirelessly to the College’s website redesign
          success.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          I am thankful for everyone in the College of Arts, whose collective
          efforts made my co-op term both enriching and enjoyable. From personal
          growth to professional achievements, this experience has reshaped my
          understanding of teamwork and has motivated me to stay engaged with
          the College in future projects. I’m excited to return in the Winter
          2025 term, carry forward the lessons I’ve learned, and maintain the
          long-lasting relationships I’ve established.
        </p>
      </section>
    </div>
  );
};

export default F24UoGCollegeOfArts;
