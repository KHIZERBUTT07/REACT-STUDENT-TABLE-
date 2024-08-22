import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const addStudent = (student) => {
    if (!student.name || !student.rollNo || !student.fatherName) {
      toast.error("All fields are required", {
        // position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        className: 'border-red-500 border-2',
        bodyClassName: 'text-red-500',
      });
      return;
    }

    if (editingStudent) {
      setStudents(students.map((s, i) => (i === editingStudent.index ? student : s)));
      toast.success("Student updated successfully!", {
        // position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        className: 'border-green-500 border-2',
        bodyClassName: 'text-green-500',
      });
      setEditingStudent(null);
    } else {
      setStudents([...students, student]);
      toast.success("Student added successfully!", {
        // position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        className: 'border-green-500 border-2',
        bodyClassName: 'text-green-500',
      });
    }
  };

  const editStudent = (index) => {
    setEditingStudent({ ...students[index], index });
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg max-w-6xl w-full">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-6 text-center">Students Management System</h1>
        
        {/* Main Content: Flex container for form and table */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Student Form */}
          <div className="mr-3 lg:w-1/2 mb-8 lg:mb-0">
            <StudentForm addStudent={addStudent} editingStudent={editingStudent} />
          </div>

          {/* Right Side: Student Table */}
          <div className="lg:w-1/2 overflow-auto text-black lg:mr-0">
            <StudentTable students={students} editStudent={editStudent} deleteStudent={deleteStudent} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
