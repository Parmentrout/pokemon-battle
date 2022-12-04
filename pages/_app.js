import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export async function getServerSideProps(context) {
  console.log('Im here');
  return {
    props: {}, // will be passed to the page component as props
  }
}


// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
//   const data = await res.json()
//   console.log(data);

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default MyApp
