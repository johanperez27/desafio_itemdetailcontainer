const ItemDetail = ({data}) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.image}/>
      <h2>precio ${data.price}</h2>
    </div>
  )
}

export default ItemDetail;