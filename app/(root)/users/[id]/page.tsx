
// Se extrae el id de la url destructurando params para sacar id
// Se requiere que el uso de una funcion asincrona para obtener el id por parametro
const Page = async ({ params }: { params: { id: string } }) => {

    const { id } = await params;
    
    interface User {
        id: number;
        name: string;
        email: string;
        role: string;
        create_at: string;
    }

    const data = await fetch(`http://127.0.0.1:5000/api/users/${id}`)
    if (!data.ok) throw new Error('Error al obtener los datos de la API')
    
    console.log("Tipo de data de la respuesta fecth: " + typeof data)
    console.log("Data resultado del fetch: ", data)
    
    
    const responseData = await data.json()
    console.log("Tipo de resonseData en Json:" + typeof responseData)
    console.log("Datos de respuesta en Json:", responseData)
    
    const user: User = responseData.user    
    console.log("Tipo de user: " + user)
    console.log("Datos del usuario:", user)

    return (
        <>
            <h2>User profile: {id}</h2>
            <h3>User details</h3>
            <p>Name: {user.name}</p>
            <p>- Nombre de usuario: {user.name}</p>
            <p>- Dirección de correo : {user.email}</p>
            <p>- Rol : {user.role}</p>
            - Fecha de creación : {user.create_at}

        </>
    )
}

export default Page

