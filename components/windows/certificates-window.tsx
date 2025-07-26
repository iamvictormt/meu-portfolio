export default function CertificatesWindow() {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2023-11-15",
      credentialId: "AWS-SAP-2023-001",
      status: "Active",
      validUntil: "2026-11-15",
      icon: "🏆",
      color: "bg-orange-500",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023-08-22",
      credentialId: "GCP-PD-2023-002",
      status: "Active",
      validUntil: "2025-08-22",
      icon: "🥇",
      color: "bg-blue-500",
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2023-05-10",
      credentialId: "AZ-900-2023-003",
      status: "Active",
      validUntil: "Lifetime",
      icon: "🥈",
      color: "bg-blue-600",
    },
    {
      title: "Kubernetes Certified Application Developer",
      issuer: "Cloud Native Computing Foundation",
      date: "2023-03-18",
      credentialId: "CKAD-2023-004",
      status: "Active",
      validUntil: "2026-03-18",
      icon: "🥉",
      color: "bg-purple-500",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022-12-05",
      credentialId: "META-REACT-2022-005",
      status: "Active",
      validUntil: "2025-12-05",
      icon: "🏅",
      color: "bg-cyan-500",
    },
    {
      title: "Node.js Application Developer",
      issuer: "OpenJS Foundation",
      date: "2022-09-14",
      credentialId: "JSNAD-2022-006",
      status: "Active",
      validUntil: "2025-09-14",
      icon: "🎖️",
      color: "bg-green-500",
    },
  ]

  return (
    <div className="space-y-4 sm:space-y-6 h-full overflow-y-auto">
      {/* Orange header bar */}
      <div className="bg-orange-400 h-6 sm:h-8 w-full -mx-3 sm:-mx-6 lg:-mx-8 -mt-3 sm:-mt-6 lg:-mt-8"></div>

      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 tracking-wider mb-2">CERTIFICATES</h2>
        <p className="text-sm sm:text-base text-gray-600">Certificações e conquistas profissionais</p>
      </div>

      <div className="space-y-4 pb-4">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div
                className={`w-12 h-12 rounded-full ${cert.color} flex items-center justify-center text-white text-xl flex-shrink-0`}
              >
                {cert.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">{cert.title}</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium ml-2 flex-shrink-0">
                    {cert.status}
                  </span>
                </div>

                <p className="text-gray-600 font-medium mb-2">{cert.issuer}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-500">
                  <div>
                    <span className="font-medium">Emitido em:</span> {new Date(cert.date).toLocaleDateString("pt-BR")}
                  </div>
                  <div>
                    <span className="font-medium">Válido até:</span>{" "}
                    {cert.validUntil === "Lifetime"
                      ? "Vitalício"
                      : new Date(cert.validUntil).toLocaleDateString("pt-BR")}
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-medium">ID:</span> {cert.credentialId}
                  </div>
                </div>

                <div className="mt-3 flex items-center space-x-2">
                  <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium hover:bg-blue-200 transition-colors">
                    Ver Certificado
                  </button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition-colors">
                    Verificar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">🎯 Sempre em busca de novas certificações para me manter atualizado!</p>
      </div>
    </div>
  )
}
