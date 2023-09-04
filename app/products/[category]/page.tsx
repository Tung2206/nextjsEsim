import { useEffect } from "react";

async function getdata (title: string){
    const result = await   fetch("http://localhost:3000/api/product/"+title);
    return result.json()
}
export default  async function Page({ params }: { params: { slug: string } }) {
 

   const keyword =  params.category
   console.log(keyword)
 
   const data = await getdata(keyword)
   console.log(data.data[0].logo)
   
  return <div>My Post:aaaaaaaaaaaaaa {data.data[0].country_image_url} aaâ  {data.data[0]['listdata'][0].logo}</div>
}