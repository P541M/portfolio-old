import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Example placeholders (remove if not using)
import image1 from "../../assets/s24/disperse.PNG";
import image2 from "../../assets/s24/bosco.PNG";

// Replace these with your new images or remove them if not needed
import image3 from "../../assets/f24/d7Improv.png";
import image4 from "../../assets/f24/d9Hist.png";

/* ----------------------------------------------------------------------------
   GOALS ARRAY
   Here, we map each "Learning Goal" from your new content into the same
   expandable/collapsible structure used previously. Adjust as you see fit.
---------------------------------------------------------------------------- */

const goals = [
  {
    title:
      "Build personal confidence and become more outgoing by pushing beyond my comfort zone in group settings.",
    description: `I aimed to build my confidence in group settings by speaking up more often and initiating conversations. This involved contributing ideas in team meetings, scheduling one-on-one discussions with colleagues, and attending social or networking events to expand my comfort zone.`,
    challenges: `Early on, I tended to overthink before speaking, which caused me to rush my points. Slowing down and focusing on clarity was a key challenge as I balanced nerves with the desire to contribute meaningfully.`,
    skills: `Communication, Networking, Public Speaking, Confidence`,
    results: `Over time, I received positive feedback from my manager and colleagues. I now feel more at ease sparking conversations and leading discussions with greater clarity and composure.`,
  },
  {
    title:
      "Enhance conflict resolution and negotiation skills to improve group harmony and project outcomes.",
    description: `Navigating differing opinions effectively was essential in my role as a Website Redesign Coordinator. I studied conflict-resolution strategies, practiced empathetic listening, and sought inclusive solutions whenever disagreements arose, especially in web design decisions.`,
    challenges: `Balancing multiple viewpoints during the redesign process often required patience, tact, and the ability to mediate between creative ideas and practical constraints.`,
    skills: `Conflict Resolution, Empathetic Listening, Mediation, Collaborative Problem-Solving`,
    results: `By focusing on shared goals and clear communication, I helped transform conflicts into productive discussions. Team morale improved, and project timelines stayed on track.`,
  },
  {
    title:
      "Strengthen interpersonal skills to foster stronger, more authentic relationships in the workplace.",
    description: `Fostering authentic relationships in a diverse workplace was a priority. I organized informal gatherings, encouraged open dialogue, and learned about colleagues’ backgrounds to foster a more inclusive, supportive environment.`,
    challenges: `Moving past surface-level small talk and genuinely understanding different cultural perspectives required intentional effort and willingness to listen deeply.`,
    skills: `Intercultural Competence, Empathy, Active Listening, Team Bonding`,
    results: `As trust grew among team members, collaboration became smoother and our collective creativity flourished. We established a more welcoming environment that celebrated each person’s uniqueness.`,
  },
  {
    title:
      "Develop stronger time management skills to effectively balance the multiple responsibilities of maintaining both external and internal websites.",
    description: `Balancing external website migrations with new internal SharePoint sites demanded thorough organization. I used tools like MS Teams and Trello to assign tasks, track progress, and break large projects into manageable steps.`,
    challenges: `Adapting timelines and reprioritizing under tight deadlines occasionally resulted in juggling multiple tasks at once, testing both focus and flexibility.`,
    skills: `Time Management, Task Prioritization, Iterative Planning, MS Teams, Trello`,
    results: `Frequent check-ins and a systematic approach prevented overwhelm and ensured we delivered critical pages on schedule. The iterative process also reduced stress and boosted overall team productivity.`,
  },
  {
    title:
      "Develop leadership skills by taking initiative in organizing and managing small projects related to the website redesign.",
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
        From September to December 2024, I had the privilege of working at the
        University of Guelph, College of Arts, for my second co-op work term as
        a Website Redesign Coordinator. In this role, I got to dive into the ins
        and outs of website development—from content migration and page redesign
        to user experience improvements—while also gaining a firsthand look at
        how projects flow within a large academic institution. Throughout this
        report, I’ll share the highlights of my experience, focusing on the
        importance of collaboration in driving successful digital
        transformations, as well as the professional and personal growth that
        came with it. I hope you enjoy reading about my time in this supportive
        environment, and I’d love to leave you with a little food for thought on
        the value of embracing new challenges in a post-secondary setting.
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
          Our Marketing and Communications team sits in the Dean’s Office at the
          College of Arts, University of Guelph, and serves as a support hub for
          everything from marketing and communications to recruitment and web
          services—reaching a wide range of stakeholders such as students,
          staff, faculty, donors, and alumni. Within this team, there are three
          key service areas: Marketing and Communications, the Web Team, and
          Recruitment and Retention. Since my role focuses on the website, I
          belong to the Web Team!
        </p>
        <p className="mb-4 text-left text-lg text-text">
          Marketing and Communications handles strategic planning for the
          College, organizes university- and college-wide events, creates
          newsletters and story pieces, manages social and digital media, and
          ensures we follow the right branding guidelines.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          Recruitment and Retention looks after recruitment materials and
          events, coordinates volunteer outreach, handles room bookings and
          logistics, manages merchandise, and leads the Ambassador Team.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          Web Services is in charge of planning and developing website and
          intranet structures, improving user experience, and supporting our
          Drupal and SharePoint systems. We also produce strategic web content
          for future, current, and graduate students, making sure everyone stays
          informed and engaged.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          All together, our sub-teams collaborate to keep the College of Arts
          thriving—whether we’re welcoming new students, sharing stories and
          events, or fine-tuning the online experience.
        </p>
      </section>

      {/* 3. Goals */}
      <section className="mb-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          A Palette of Progress: Goals and Growth
        </h2>
        <hr className="mb-4 border-bgContrast" />

        <p className="mb-4 text-left text-lg text-text">
          During my work term at the University of Guelph, College of Arts, I
          set five key learning goals to enhance both my professional and
          interpersonal skills. Each goal was tied to a specific skill area,
          supported by an action plan, measures of success, and a personal
          reflection. Below is a summary of these goals—along with the
          challenges I encountered, the skills I refined, and the outcomes I
          achieved!
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
          Over the last four months, I’ve been diving deep into web migration,
          accessibility, and user experience design as the Website Redesign
          Coordinator for the College of Arts. My goal has been to figure out
          the “why” behind each decision—making sure our web pages aren’t just
          user-friendly, but also meaningful for the audiences we serve. In a
          project of this scale, I’ve sharpened my project management skills,
          learned how to collaborate with clients across different departments,
          and even dipped my toes into a few marketing and recruitment
          initiatives along the way.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          Main Systems: Drupal 7, Drupal 9 (Content Hub), & SharePoint
        </p>
        <p className="mb-4 text-left text-lg text-text">
          Drupal 7 As the University’s former content management system, Drupal
          7 hosts around 11,000 College of Arts pages. Faculty and staff can
          create and edit content, while our web team (including me!) has Site
          Manager access to oversee the entire platform. This setup has allowed
          me to flex my skills in HTML/CSS, visual design, and brand
          consistency.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          Drupal 9 / Content Hub The University is moving toward a more modern,
          user-friendly design with Drupal 9. My job has been to plan site
          structure and navigation, develop page layouts and wireframes, and
          make sure everything fits within accessibility and branding
          guidelines. This newer system has less coding involved but requires
          careful organization to ensure a smooth transition from Drupal 7.
        </p>
        <p className="mb-4 text-left text-lg text-text">
          SharePoint SharePoint is being rolled out as an internal intranet for
          faculty, staff, and students, offering a straightforward platform to
          share internal communications and resources. I’ve been helping
          configure its templates, branding, and navigation so departments can
          easily post and update their own content.
        </p>
        <p className="mb-4 text-left text-lg text-text">project 1 content</p>
        <p className="mb-4 text-left text-lg text-text">project 2 content</p>
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
        <p className="mb-4 text-left text-lg text-text">
          Overall, this role has given me the chance to blend tech-savvy tasks
          with creative thinking—whether I’m coding in Drupal, mapping out user
          flows, or helping a department bring their vision online. It’s been a
          rewarding experience to shape both public-facing and internal
          platforms that truly serve the College of Arts community.
        </p>
      </section>

      {/* 5. Acknowledgments */}
      <section className="mb-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary">
          A Gallery of Gratitude: Acknowledgments
        </h2>
        <hr className="mb-4 border-bgContrast" />

        <p className="mb-4 text-left text-lg text-text">
          Reflecting on these four months, I’m struck by just how much I’ve
          learned—and how much I’ve grown—through this Website Redesign
          Coordinator role. From tackling accessibility standards to refining
          user journeys and juggling multiple projects, every challenge pushed
          me to become more resourceful and communicative. I also discovered the
          power of teamwork: collaborating with different departments taught me
          the importance of empathy, active listening, and finding solutions
          that benefit everyone. This experience not only expanded my technical
          abilities but also enriched my perspective on how a well-designed
          digital environment can positively impact a community.
        </p>
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
          Muhammad Uzair—deserve special mention. They took me under their wing,
          shared valuable insights, and helped me transition smoothly into my
          role. The rest of the team, including Callie Gibson, Ella Holt,
          Rasneet Kaur, and Hannah Andrea Rosario, was equally supportive and
          passionate, contributing tirelessly to the College’s website success.
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
