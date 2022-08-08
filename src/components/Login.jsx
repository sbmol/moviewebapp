import React from 'react';

function Login() {

  const submitHandler = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    // esta funcion mas abajo es para verificar un string de email
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    console.log(regexEmail.test(email));
    

    //Con este if verificamos que los valores esten presentes
    if (email === '' || password === '') {
      console.log("Los campos no pueden estar vacios");
      return;
    } 

    if (email !== '' && !regexEmail.test(email)) {
      console.log("Debes de escribir un email valido");
      return; 
    }

   if (email !== 'hola@hola.com' || password !== '123456') {
      console.log("El email o la contraseña son incorrectos");
  }
    console.log("Ok estamos listos para enviar la informacion!");
  }

  return (
    <>
      <h2>Formulario de contacto</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Ingrese su correo electronico:</span> <br />
          <input type="text" name="email" /> <br />

        </label> <br />
        <label>
          <span>Ingrese su contraseña:</span> <br />
          <input type="password" name="password" /> <br />
        </label> <br />
        <button type="submit">Ingresar</button>
      </form>
    </>
  )
}

export default Login;
