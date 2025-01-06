import Link from "next/link";
// Revalidacion de la pagina cada 10 segundos
// export const revalidate = 0 // 10 segundos
export default async function Page() {

  // Interface de usuario
  interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    date_created: string;
  }
  // Mostrar los usuarios obtenidos de la API

  // Fetch de datos a la API de usuarios
  // Revalidacion 
  const data = await fetch('http://127.0.0.1:5000/api/users/', {
    next: {revalidate : 0 },
  })
  if (!data.ok) throw new Error('Error al obtener los datos de la API') // Error en caso de no obtener respuesta de la API

  // Transformación de la respuesta en json y presentación de los datos en la interface de usuario
  const users: User[] = await data.json()
  // Error manejo y tratamiento de la respuesta del API en caso de error

  console.log(typeof users)
  console.log(users)

  return (
    <>

      <h2>Hola Users</h2>

      <h3>Listado de usuarios</h3>
      <ul>

        {/* Mapeo de los usuarios para mostrarlos en la lista */}
        {users.map((user: User) => (
          <li key={user.id}>
            ID : {user.id}
            - Nombre de usuario: {user.name}
            - Dirección de correo : {user.email}
            - Rol : {user.role}
            - Fecha de creación : {user.date_created}
            - <Link href={`users/${user.id}`}>Ver detalles del usuario {user.id}</Link>
          </li>
        ))}
      </ul>

    </>
  )
}