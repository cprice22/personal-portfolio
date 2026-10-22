import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Engineer
            </h3>

            <p className="text-muted-foreground">
              I’m a student and aspiring software developer who enjoys turning ideas into useful applications. Through coursework and personal projects, I’m building my skills in Java, JavaScript, and React while learning how to create intuitive, responsive web experiences.
            </p>

            <p className="text-muted-foreground">
              My capstone project has also introduced me to business process automation with Microsoft Power Platform, showing me how software can help solve problems beyond the screen. I’m looking for an internship where I can contribute, learn from experienced developers, and continue growing through hands-on work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              {/* Download Resume */}
              <a
                href={`${import.meta.env.BASE_URL}Cassidy-Price-Resume.pdf`}
                download="Cassidy-Price-Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download Resume
                </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Development</h4>
                  <p className="text-muted-foreground">
                    Developing my foundation in Java, object-oriented programming, and problem-solving through coursework and personal projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Workflow Automation</h4>
                  <p className="text-muted-foreground">
                    Exploring Power Automate and SharePoint through a team capstone focused on streamlining document workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};