import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useQuery } from 'react-query'

export default function ProtectRoutes({ children, redirectTo='/login' }) {

    const auth = useUser()

    const { isLoading, error, data } = useQuery('verifyToken', () =>
        fetch('http://localhost:3001/users', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) return <div>Cargando...</div>

    if (data['error']) return <Navigate to={redirectTo} />
    auth.login('user')
    return children ? children : <Outlet />
}

// eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NzAwNTE1ODl9._bSQaNtt5MnqQ9wG0ivhIj42effAPw8jT4jNQ7zbKVA