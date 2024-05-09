
import React, { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEmployee = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        id: Date.now(),
      }),
    })
      .then(response => response.json())
      .then(data => {
        setEmployees([...employees, data]);
        setFormData({ name: '', email: '', phone: '' });
      })
      .catch(error => {
        console.error('Error adding data:', error);
      });
  };

  const handleDeleteEmployee = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setEmployees(employees.filter(employee => employee.id !== id));
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  const handleEditEmployee = (id) => {
    const employeeToEdit = employees.find(employee => employee.id === id);
    setFormData({ name: employeeToEdit.name, email: employeeToEdit.email, phone: employeeToEdit.phone });
    setEditing(id);
  };

  const handleUpdateEmployee = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1/${editing}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        const updatedEmployees = employees.map(employee => {
          if (employee.id === editing) {
            return { ...employee, ...formData };
          }
          return employee;
        });
        setEmployees(updatedEmployees);
        setFormData({ name: '', email: '', phone: '' });
        setEditing(null);
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-[35px] font-bold mb-4">Customer information</h1>

      <div className="flex mb-4">
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="w-[500px] text-[22px] border rounded py-2 px-3 mr-4" />
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="w-[500px] text-[22px] border rounded py-2 px-3 mr-4" />
        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" className="w-[500px] text-[22px] border rounded py-2 px-3 mr-4" />
        {editing ? (
          <button onClick={handleUpdateEmployee} className="w-[400px] bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Update Employee</button>
        ) : (
          <button onClick={handleAddEmployee} className="w-[400px] bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Add New Employee</button>
        )}
      </div>

      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border text-[22px] border-black px-4 py-2">Name</th>
            <th className="border text-[22px] border-black px-4 py-2">Email</th>
            <th className="border text-[22px] border-black px-4 py-2">Phone</th>
            <th className="border text-[22px] border-black px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td className="border border-gray-400 px-4 py-2 text-[21px]">{employee.name}</td>
              <td className="border border-gray-400 px-4 py-2 text-[21px]">{employee.email}</td>
              <td className="border border-gray-400 px-4 py-2 text-[21px]">{employee.phone}</td>
              <td className="border border-gray-400 px-4 py-2 text-[21px]">
                <button onClick={() => handleEditEmployee(employee.id)} className="bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded mr-2">Edit</button>
                <button onClick={() => handleDeleteEmployee(employee.id)} className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
