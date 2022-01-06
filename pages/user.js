function User({ name }) {
  return (
    <>
      <h1>Bem vindo ao JOBS, {name}!</h1>
      <p>
        A renderização dessa página é um exemplo de Static Generation com uso de dados externos.
        O nome do usuário está sendo buscado na api do github.
      </p>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/zorasantos')
  const user = await res.json()
  const name = user.name

  
  return {
    props: {
      name
    },
  }
}

export default User;