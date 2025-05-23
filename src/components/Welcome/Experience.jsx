const experienceData = [
  {
    role: "Practical Assistant",
    place: "Basic Programming Course",
    period: "2023",
    description: "Assisted students in learning programming fundamentals"
  },
  {
    role: "Digital Simulation Training",
    place: "Quartus Platform",
    period: "2022",
    description: "Learned digital system simulation techniques"
  },
  {
    role: "Educational Content Creator",
    place: "CAPCUT Platform",
    period: "2021-Present",
    description: "Created technology-related educational content"
  }
];

export default function Experience() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Place</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {experienceData.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.role}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.place}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.period}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}