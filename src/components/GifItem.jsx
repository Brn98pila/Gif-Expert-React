export const GifItem = ({title, id, url}) => {
  return (
    <div className="card" key={id}>
      <img src={url}  alt={title} />
      <p>{title}</p>
    </div>
  )
}
