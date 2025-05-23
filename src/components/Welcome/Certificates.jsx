const certificatesData = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023"
  },
  {
    name: "Cisco Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "2022"
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2021"
  },
  {
    name: "Python for Everybody",
    issuer: "Coursera / University of Michigan",
    date: "2021"
  }
];

export default function Certificates() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certificate Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issuer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {certificatesData.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.issuer}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
