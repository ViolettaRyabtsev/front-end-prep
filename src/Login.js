const Login = ({ setUserName }) => {
  return (
    <div>
      <input
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
    </div>
  );
};

export default Login;
