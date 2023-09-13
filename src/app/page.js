import config from '@/config';

// const fetchProduct = async () => {
//   const reqOptions = {
//     headers: {
//       Authorization: `Bearer ${process.env.API_TOKEN}`,
//     },
//   };
//   const request = await fetch(`http://localhost:1337/api/products?populate=*`, reqOptions);
//   const response = await request.json();

//   return response;
// };

const Home = async () => {

    // const products = await fetchProduct();
    // console.log('products', products.data);

    return (
      <>
      <main>
        <h2>Home</h2>
        {/* <h2>{products.data[0].id.name}</h2>   */}
      </main>
      </>
    );
 
};

export default Home;
