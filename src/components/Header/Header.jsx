import React, { useEffect, useState } from "react";
import './Header.scss'

const Header = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false)
      })
  }, []);

  console.log(data);

  return (
    <>
      <section className="section">
        <div className="hero">
          <div className="hero__wrap">

            {loading ? (
                <h2 className="load">Это всего лишь загрузка...</h2>
            ) : (
        <>
        
        {data.map((post) => (
          <div key={post.id}  className="hero__card">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <h4>{post.price}</h4>
            <h3>{post.category}</h3>
            <img src={post.image} alt width={200}/>
          </div>
        ))}
        </>
        )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
