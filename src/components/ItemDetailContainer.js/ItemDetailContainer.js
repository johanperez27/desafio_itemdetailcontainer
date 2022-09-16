import ItemDetail from "../ItemDetail/ItemDetail";
import  {useState, useEffect} from "react"


const film =   {
  id: 1,
  title: 'Anturio',
  price: 500,
  image: "https://i.ibb.co/86DfFRd/Anturios.jpg"
}

const ItemDetailContainer = () => {

  const [data,setData] = useState({})

  useEffect(() => {
    const getData = new Promise((resolve,reject) => {
      setTimeout(() =>{
        resolve(film)
      },2000)
    });

    getData.then((res) => {
      setData(res);
    })

  }, [])

  return (
    <div>
      <ItemDetail data={data}/>
    </div>
  )
}

export default ItemDetailContainer;