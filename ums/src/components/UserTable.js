import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function UserTable() {
  const { users, theme, loading } = useContext(UserContext);
  const [expandedUser, setExpandedUser] = useState(null);
  return (
    <div
      // className={"container mx-auto p-4 bg-black text-white"}
      className={`container mx-auto p-4 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {loading ? (
        <div className="flex justify-center items-center -h-40">Loading...</div>
      ) : (
        <table
          className={`min-w-full bg-white shadow-md rounded-lg ${
            theme === "dark" && "bg-black"
          }`}
        >
          <thead>
            <tr
              className={`bg-gray-200 text-gray-600 uppercase text-sm leading-normal ${
                theme === "dark" && "bg-gray-700 text-gray-200"
              }`}
            >
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Company</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody
            className={`text-gray-700 text-sm ${
              theme === "dark" && "text-gray-300"
            }`}
          >
            {users.length > 0 &&
              users.map((item) => (
                <>
                  <tr
                    className={`border-b border-gray-200 hover:bg-gray-100 ${
                      theme === "dark" && "hover:bg-gray-800"
                    }`}
                  >
                    <td className="py-3 px-6 text-left">{item.id}</td>
                    <td className="py-3 px-6 text-left">{item.name}</td>
                    <td className="py-3 px-6 text-left">{item.email}</td>
                    <td className="py-3 px-6 text-left">{item.company.name}</td>
                    <td className="py-3 px-6 text-center">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                        onClick={() =>
                          setExpandedUser(
                            expandedUser === item.id ? null : item.id
                          )
                        }
                      >
                        {expandedUser === item.id
                          ? "Hide Details"
                          : "Show details"}
                      </button>
                    </td>
                  </tr>
                  {expandedUser === item.id && (
                    <tr
                      className={`bg-gray-50 ${
                        theme === "dark" && "bg-gray-800"
                      }`}
                    >
                      <td colSpan={5} className="py-3 px-6 text-left">
                        <div>
                          <p>
                            <strong>Phone :</strong> {item.phone}
                          </p>
                          <p>
                            <strong>Address :</strong> {item.address?.street},
                            {item.address?.city}
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserTable;
