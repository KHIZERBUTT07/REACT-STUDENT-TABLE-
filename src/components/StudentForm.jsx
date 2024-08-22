import React, { useState, useEffect } from 'react';

const StudentForm = ({ addStudent, editingStudent }) => {
  const [student, setStudent] = useState({
    name: '',
    rollNo: '',
    fatherName: '',
  });

  useEffect(() => {
    if (editingStudent) {
      setStudent({
        name: editingStudent.name,
        rollNo: editingStudent.rollNo,
        fatherName: editingStudent.fatherName,
      });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
    setStudent({ name: '', rollNo: '', fatherName: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Roll No</label>
        <input
          type="text"
          name="rollNo"
          value={student.rollNo}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Father Name</label>
        <input
          type="text"
          name="fatherName"
          value={student.fatherName}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {editingStudent ? 'Update Student' : 'Add Student'}
      </button>
    </form>
  );
};

export default StudentForm;
