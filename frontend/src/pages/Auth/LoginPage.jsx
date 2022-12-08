import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "react-query";

function LoginPage() {

  const [form, setForm] = useState(null)
  const [errors, setErrors] = useState(null)
  const [onLoad, setOnLoad] = useState(false)

  const auth = useUser()
  const navigate = useNavigate()

	const handleLoginMutation = useMutation({
		mutationFn: (() =>
			fetch('http://localhost:3001/auth/login', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify(form)
			}).then(res =>
				res.json()
			)
		),
		onSuccess: () => {
			if (handleLoginMutation.data.token) {
				console.log(handleLoginMutation.data.token);
			} else {
				console.log('error')
			}
		}
	})

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!form || !form.email || !form.password) {
      setErrors("Ingrese contraseña y email")
      setTimeout(() => {
        setErrors(null)
      }, 3000)
    }

    else {
		handleLoginMutation.mutate()
    }

  }

  return (
    <div>
      
      <h1>Login</h1>

      <h3>{errors}</h3>

      <form onSubmit={handleLogin}>

        <input type="email" onChange={((e) => setForm({...form, email: e.target.value}))} />

        <input type="password" onChange={((e) => setForm({...form, password: e.target.value}))} />

        <button type="sumbit">Login</button>
      </form>

    </div>
  )
}

export default LoginPage