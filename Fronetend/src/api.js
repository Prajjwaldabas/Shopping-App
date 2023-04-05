//reusable function to fecth all the products 
  export const getAllProducts = async () => {
    try {
    const response = await fetch('http://localhost:5000/items/all');
    const data = await response.json();

    console.log(data);
    return data;
  
   } catch (error) {
    console.log(error);
     }
   };

  export default getAllProducts;

