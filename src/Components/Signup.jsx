const Signup =() => {
    const [email,setEmail] = usestate("");
    const [password ,setpasssword] = usestate("");
    const navigate = useNavigate();


    const handleSignup = (e) => {
     e.preventDefault ();
     localStorage.setItem("user", JSON.stringify({ email,password}));
     navigate("/login")

    };

    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
            <div>
                <label>Email:</label>
                <input
                type="email"
                value={email}
                onchange={(e) => setEmail(e.target.value)}
                required
                />
            </div> 
        </form>
      </div>
    )
     

}


         
    
     
