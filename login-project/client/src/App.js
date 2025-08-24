import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [email, setEmail] = useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const [success,setSuccess]=useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('All fields required!');
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({email,password})
      });
      const data = await res.json();
      if (data.status === "success") {
        setSuccess(data.message);
        setError('');
      } else {
        setError(data.message);
        setSuccess('');
      }
    } catch {
      setError('Server error.');
    }
  };
  return (
    <div className="container mt-5 col-md-4">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input type="email" className="form-control" placeholder="Email"
            value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <input type="password" className="form-control" placeholder="Password"
            value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary">Login</button>
        {error && <div className="alert alert-danger mt-2">{error}</div>}
        {success && <div className="alert alert-success mt-2">{success}</div>}
      </form>
    </div>
  );
}
export default App;
