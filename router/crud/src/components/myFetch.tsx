
export default function myFetch(dataForFetch) {

      const {url, method, content, body} = dataForFetch
      const fetchData = async () => {
      try {
        const response = await fetch(url, {
            method: method,
            headers: {"Content-Type": content},
            body: body
        });
        const res = await response.json();
      }
  
      catch (e) { 
        console.log(e)
      } 
  
      };
  
      fetchData()

  
}
