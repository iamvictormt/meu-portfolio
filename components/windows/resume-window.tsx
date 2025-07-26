export default function ResumeWindow() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="space-y-6 pb-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Victor Torres</h1>
          <p className="text-xl text-gray-600">Full Stack Developer</p>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-4">Experience</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg">Senior Full Stack Developer</h3>
                <p className="text-green-600 font-medium">Tech Company • 2022 - Present</p>
                <ul className="mt-2 text-gray-700 text-sm space-y-1">
                  <li>• Led development of scalable web applications using React and Node.js</li>
                  <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
                  <li>• Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg">Full Stack Developer</h3>
                <p className="text-green-600 font-medium">Startup Inc • 2020 - 2022</p>
                <ul className="mt-2 text-gray-700 text-sm space-y-1">
                  <li>• Developed and maintained multiple client projects</li>
                  <li>• Built responsive web applications with modern frameworks</li>
                  <li>• Collaborated with design team to implement pixel-perfect UIs</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg">Junior Developer</h3>
                <p className="text-green-600 font-medium">Digital Agency • 2018 - 2020</p>
                <ul className="mt-2 text-gray-700 text-sm space-y-1">
                  <li>• Developed custom WordPress themes and plugins</li>
                  <li>• Created responsive landing pages for marketing campaigns</li>
                  <li>• Optimized website performance and SEO</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-4">Education</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg">Computer Science</h3>
                <p className="text-green-600 font-medium">University of São Paulo • 2016 - 2020</p>
                <p className="text-gray-700 text-sm mt-2">Bachelor's Degree in Computer Science</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg">Full Stack Web Development</h3>
                <p className="text-green-600 font-medium">Bootcamp XYZ • 2018</p>
                <p className="text-gray-700 text-sm mt-2">Intensive 6-month program covering modern web technologies</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "AWS",
                "Git",
                "Tailwind CSS",
                "GraphQL",
                "Redis",
                "Kubernetes",
                "Jest",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-green-100 text-green-800 px-2 py-1 rounded text-center text-xs font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-4">Certifications</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg">AWS Certified Solutions Architect</h3>
                <p className="text-green-600 font-medium">Amazon Web Services • 2023</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg">Google Cloud Professional Developer</h3>
                <p className="text-green-600 font-medium">Google Cloud • 2022</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-700 pb-2 mb-4">Languages</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <h3 className="font-bold text-base">Portuguese</h3>
                <p className="text-gray-600 text-sm">Native</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <h3 className="font-bold text-base">English</h3>
                <p className="text-gray-600 text-sm">Fluent</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <h3 className="font-bold text-base">Spanish</h3>
                <p className="text-gray-600 text-sm">Intermediate</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
