import '../estilos/dashboard.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Dashboard() {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers()
  }, []);

  //Obtener usuarios
  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:3000/users')
    setUsers(response.data)
    console.log("Datos de la api")
    console.log(response)
  }

  //Eliminar usuario
  const HandeDelete = async (id) => {
    const response = await axios.delete(`http://localhost:3000/users/${id}`);
    if (response.status == 200) {
      alert("Se borro correctamente")
    } else {
      alert("Sucedio un error")
    }
    fetchUsers();
  }

  return (
    <>
      <div className="dashboard">
        <div className="sidebar">
          <div className="logo">Logo</div>
          <ul className="nav">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Usuarios</a>
            </li>
            <li>
              <a href="#">Configuración</a>
            </li>
            <li>
              <a href="#">Salir</a>
            </li>
          </ul>
        </div>
        <div className="content">
          <h1>Bienvenido al Dashboard</h1>
          <div class="p-4 sm:ml-50">
            <div class="p-20 border-dashed">

              <div class="flex items-center justify-center h-48 mb-4 rounded">
                <div class="container">
                  <div class="relative  left-70 top-24">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            Usuario
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Password
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Fecha de creacion
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          Users.map((users) => (
                            <tr key={users.id}>
                              <td>{users.username}</td>
                              <td>{users.password}</td>
                              <td>{users.createdAT}</td>
                              <td>{users.authStrategy}</td>
                              <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-700 dark:text-blue-500 hover:underline" onClick={() => HandeDelete(users.id)}>Eliminar</a>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;