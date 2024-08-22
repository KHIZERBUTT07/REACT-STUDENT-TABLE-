import React from 'react';

const StudentTable = ({ students, editStudent, deleteStudent }) => {
  return (
    <div className=" bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Roll No</th>
                <th className="py-2 px-4 border-b">Father Name</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{student.name}</td>
                  <td className="py-2 px-4">{student.rollNo}</td>
                  <td className="py-2 px-4">{student.fatherName}</td>
                  <td className="py-2 px-4">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={() => editStudent(index)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteStudent(index)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentTable;
