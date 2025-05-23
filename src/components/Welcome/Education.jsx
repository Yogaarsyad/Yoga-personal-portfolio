import ProfileImage from '../../assets/image1.svg';

const educationData = [
  {
    institution: "SMP Negeri 1 Sembalun",
    period: "2014-2017",
    description: "Junior High School Education"
  },
  {
    institution: "SMA Negeri 1 Selong",
    period: "2017-2020",
    description: "Science Program"
  },
  {
    institution: "Universitas Indonesia",
    period: "2023-Present",
    description: "Computer Engineering, Faculty of Engineering"
  }
];

export default function Education() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institution</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {educationData.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <img src={ProfileImage} alt="Institution" className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">{item.institution}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.period}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}