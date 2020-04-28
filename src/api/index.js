import axios from 'axios' 

const url = 'https://www.themealdb.com/api/json/v1/1'

export const fetchData = async () => {
    
   try{
 
      const data = await (await axios.get(`${url}/categories.php`)).data.categories;
      
      return data
   } catch (error) {
      console.log(error)
   }
}

