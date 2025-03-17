export default function ServiceList() {
  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold text-center mb-6">Services</h1>
      <p className="text-center text-gray-600 mb-10">
        Supporting Your Success, One Task at a Time.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-2xl p-6 flex gap-4 items-start border-t-4 
            border-[${service.borderColor}] transition-all duration-300 cursor-pointer hover:bg-[${service.borderColor}] hover:scale-105 hover:shadow-2xl`}
          >
            <span className={`text-[${service.borderColor}] text-3xl`}>{service.icon}</span>
            <div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-lg font-semibold">
          "Let's tailor our services to meet your needs. Book a discovery call today!"
        </p>
      </div>
    </div>
  );
}

const services = [
  {
    icon: "💼",
    title: "General Admin Support",
    description: "Email and calendar management, document organization, data entry & research.",
    borderColor: "#0d4a3a",
  },
  {
    icon: "📷",
    title: "Social Media Assistance",
    description: "Content scheduling & posting, engagement & community management, caption writing & branding support.",
    borderColor: "#fcc811",
  },
  {
    icon: "📃",
    title: "Project & Task Management",
    description: "Organizing tasks & deadlines, process automation, meeting notes & action item tracking.",
    borderColor: "#0d4a3a",
  },
  {
    icon: "📞",
    title: "Customer Support Assistance",
    description: "Responding to inquiries, managing support tickets, live chat & email support.",
    borderColor: "#fcc811",
  },
  {
    icon: "📝",
    title: "Research & Reporting",
    description: "Market research & competitor analysis, report creation, presentation preparation.",
    borderColor: "#0d4a3a",
  },
  {
    icon: "🛠️",
    title: "Additional Custom Support",
    description: "Need something specific? Let’s discuss your needs!",
    borderColor: "#fcc811",
  },
];
