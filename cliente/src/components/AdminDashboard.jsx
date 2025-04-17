import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('citas');
  const [appointments, setAppointments] = useState([
    { id: 1, client: 'Juan Pérez', service: 'Corte Premium', barber: 'Carlos Gómez', date: '2023-06-15', time: '14:00', status: 'pendiente' },
    { id: 2, client: 'María López', service: 'Afeitado Tradicional', barber: 'Miguel Rodríguez', date: '2023-06-15', time: '10:00', status: 'confirmada' },
    { id: 3, client: 'Roberto Sánchez', service: 'Arreglo de Barba', barber: 'Juan Pérez', date: '2023-06-16', time: '11:00', status: 'cancelada' },
    { id: 4, client: 'Ana Martínez', service: 'Paquete Completo', barber: 'Carlos Gómez', date: '2023-06-16', time: '15:00', status: 'pendiente' },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setAppointments(prev => 
      prev.map(app => app.id === id ? { ...app, status: newStatus } : app)
    );
  };

  const handleReschedule = (id, newDate, newTime) => {
    setAppointments(prev => 
      prev.map(app => app.id === id ? { ...app, date: newDate, time: newTime } : app)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Panel de Administración</h1>
          <button className="text-sm hover:text-gray-300 transition-colors">
            Cerrar sesión
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('citas')}
            className={`py-4 px-6 font-medium ${activeTab === 'citas' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Gestión de Citas
          </button>
          <button
            onClick={() => setActiveTab('barberos')}
            className={`py-4 px-6 font-medium ${activeTab === 'barberos' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Barberos
          </button>
          <button
            onClick={() => setActiveTab('servicios')}
            className={`py-4 px-6 font-medium ${activeTab === 'servicios' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Servicios
          </button>
        </div>

        {activeTab === 'citas' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cliente
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Servicio
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Barbero
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha y Hora
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{appointment.client}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{appointment.service}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{appointment.barber}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {appointment.date} a las {appointment.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          appointment.status === 'confirmada' ? 'bg-green-100 text-green-800' :
                          appointment.status === 'cancelada' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          {appointment.status !== 'confirmada' && (
                            <button
                              onClick={() => handleStatusChange(appointment.id, 'confirmada')}
                              className="text-green-600 hover:text-green-900"
                            >
                              Confirmar
                            </button>
                          )}
                          {appointment.status !== 'cancelada' && (
                            <button
                              onClick={() => handleStatusChange(appointment.id, 'cancelada')}
                              className="text-red-600 hover:text-red-900"
                            >
                              Cancelar
                            </button>
                          )}
                          <button
                            onClick={() => {
                              const newDate = prompt('Nueva fecha (YYYY-MM-DD):', appointment.date);
                              const newTime = prompt('Nueva hora (HH:MM):', appointment.time);
                              if (newDate && newTime) {
                                handleReschedule(appointment.id, newDate, newTime);
                              }
                            }}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            Reagendar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'barberos' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Gestión de Barberos</h2>
            <p className="text-gray-600">Aquí puedes administrar la información de los barberos.</p>
          </div>
        )}

        {activeTab === 'servicios' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Gestión de Servicios</h2>
            <p className="text-gray-600">Aquí puedes administrar los servicios ofrecidos.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;