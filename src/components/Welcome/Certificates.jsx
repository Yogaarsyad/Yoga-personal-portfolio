import React from "react";
import CrtvktImg from '../../assets/crtvkt.svg';   // Sertifikat CCNA
import Crtvkt2Img from '../../assets/crtvkt2.svg'; // Sertifikat K3L

const certificatesData = [
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "February 2025",
    skills: "Computer Networking",
    url: "https://bit.ly/3SOIW0K",
    image: CrtvktImg,
  },
  {
    name: "Online Training Dasar K3L",
    issuer: "UPT K3L",
    date: "September 2023",
    skills: "Understanding the practical procedures",
    url: "https://bit.ly/3YYP8Hc",
    image: Crtvkt2Img
  }
];

export default function Certificates() {
  return (
    <div className="px-4 py-8 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-center text-black mb-10">Certificates</h2>

      <div className="flex flex-col items-center space-y-6 max-w-4xl mx-auto w-full">
        {certificatesData.map((item, index) => (
          <div
            key={index}
            className="w-full bg-gray-50 border border-gray-300 rounded-xl shadow p-6"
          >
            <h3 className="text-xl font-semibold text-black mb-4">{item.name}</h3>

            {item.image && (
              <img
                src={item.image}
                alt={`${item.name} Certificate`}
                className="w-full h-auto rounded-lg shadow mb-6"
              />
            )}

            <table className="w-full text-sm text-gray-800 border border-gray-300 border-collapse table-fixed mb-6">
              <tbody>
                <tr className="bg-gray-100 border border-gray-300">
                  <td className="p-3 font-medium text-black border border-gray-300 w-1/2">
                    Issuing Organization
                  </td>
                  <td className="p-3 border border-gray-300 w-1/2">
                    {item.issuer}
                  </td>
                </tr>
                <tr className="border border-gray-300">
                  <td className="p-3 font-medium text-black border border-gray-300 w-1/2">
                    Issue Date
                  </td>
                  <td className="p-3 border border-gray-300 w-1/2">
                    {item.date}
                  </td>
                </tr>
                <tr className="border border-gray-300">
                  <td className="p-3 font-medium text-black border border-gray-300 w-1/2">
                    Skills
                  </td>
                  <td className="p-3 border border-gray-300 w-1/2">
                    {item.skills}
                  </td>
                </tr>
                <tr className="border border-gray-300">
                  <td className="p-3 font-medium text-black border border-gray-300 w-1/2">
                    Credential URL
                  </td>
                  <td className="p-3 border border-gray-300 break-all w-1/2">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {item.url}
                      </a>
                    ) : (
                      <span className="italic text-gray-500">No URL</span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
