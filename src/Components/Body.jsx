import React, { useEffect, useState } from "react";

function Body() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    console.log(result?.data?.cards[0]?.card?.card.imageGridCards?.info);
    setData(result?.data?.cards[0]?.card?.card.imageGridCards?.info);
  };
  // https://media-assets.swiggy.com/swiggy/image/upload
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="w-full ">
        <div className="w-[70%] mx-auto ">
          {data.map((items) => (
            <img
              key={items.id}
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${items.imageId}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Body;
