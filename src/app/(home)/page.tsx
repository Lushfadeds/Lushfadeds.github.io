export default function Page() {
  return (
    <><div className={"container"}>
  <div className={"card-container"}>
    <div className={"card"}>
      <img src={"https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"} />
      <div className={"body"}>
        <div className={"title"}>Tom & Jerry Crackers</div>
      </div>
      <div className={"footer"}>
        <input type="number" value={1}></input>
        <button>Add to Cart</button>
      </div>
    </div>
    <div className={"card"}>
      <img src={"https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"} />
      <div className={"body"}>
        <div className={"title"}>Big Bang Seaweed</div>
      </div>
      <div className={"footer"}>
        <input type="number" value={1}></input>
        <button >Add to Cart</button>
      </div>
    </div>
  </div>
</div></>

  );

}