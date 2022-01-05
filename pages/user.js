function User({ user }) {
  return (
    <h1>Bem vindo ao JOBS, {user.name}!</h1>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://swapi.dev/api/people/1')
  const user = await res.json()

  
  return {
    props: {
      user
    },
  }
}

export default User;