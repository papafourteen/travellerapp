import React from "react";
import "./About.css";
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'

export const About = () => {
  return (
    <div className="about-container">
      <div className="holder">
        <h3 className="gradient-text">About Us</h3>
        <div className="about-section">
          <img src={about1} alt="about1" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            dignissimos repudiandae autem fuga ipsa cupiditate dicta ducimus
            expedita incidunt voluptatibus nulla doloribus, dolor illo quibusdam
            possimus suscipit consequuntur, odio minima. Accusantium quidem,
            culpa hic est inventore eos nam quisquam expedita facere architecto.
            Laborum culpa placeat quam eius enim sit officiis accusantium
            repellendus cupiditate autem! Quasi aliquid unde libero illo
            reprehenderit. Qui nisi sint accusamus natus iusto similique
            incidunt harum distinctio nesciunt doloremque pariatur veniam nihil
            cupiditate illo aperiam eveniet eos fuga ea, neque repellat ab ipsa
            earum. Tenetur, consequuntur quibusdam. Unde, mollitia inventore
            itaque voluptatem dolorum omnis praesentium. In nemo esse aspernatur
            perspiciatis sit molestias eos eligendi quod repellat sunt ea,
            consequatur commodi natus iste provident quae mollitia cum magnam.
            Voluptates consectetur placeat sequi in perferendis repellendus
            mollitia maiores omnis nobis, esse fuga, aliquam enim veniam quos
            reprehenderit odit dolores ad, laudantium explicabo ut eos at. Natus
            assumenda atque qui. Nostrum possimus reiciendis blanditiis
            inventore odio debitis doloribus iste! Corporis, accusamus? Animi
            numquam, necessitatibus ex tempora voluptatum quisquam impedit
            explicabo similique porro architecto voluptatem tenetur ratione, et,
            est maxime. Tempore!
          </p>
        </div>
        <div className="about-section">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            dignissimos repudiandae autem fuga ipsa cupiditate dicta ducimus
            expedita incidunt voluptatibus nulla doloribus, dolor illo quibusdam
            possimus suscipit consequuntur, odio minima. Accusantium quidem,
            culpa hic est inventore eos nam quisquam expedita facere architecto.
            Laborum culpa placeat quam eius enim sit officiis accusantium
            repellendus cupiditate autem! Quasi aliquid unde libero illo
            reprehenderit. Qui nisi sint accusamus natus iusto similique
            incidunt harum distinctio nesciunt doloremque pariatur veniam nihil
            cupiditate illo aperiam eveniet eos fuga ea, neque repellat ab ipsa
            earum. Tenetur, consequuntur quibusdam. Unde, mollitia inventore
            itaque voluptatem dolorum omnis praesentium. In nemo esse aspernatur
            perspiciatis sit molestias eos eligendi quod repellat sunt ea,
            consequatur commodi natus iste provident quae mollitia cum magnam.
            Voluptates consectetur placeat sequi in perferendis repellendus
            mollitia maiores omnis nobis, esse fuga, aliquam enim veniam quos
            reprehenderit odit dolores ad, laudantium explicabo ut eos at. Natus
            assumenda atque qui. Nostrum possimus reiciendis blanditiis
            inventore odio debitis doloribus iste! Corporis, accusamus? Animi
            numquam, necessitatibus ex tempora voluptatum quisquam impedit
            explicabo similique porro architecto voluptatem tenetur ratione, et,
            est maxime. Tempore!
          </p>
          <img src={about2} alt="about2" />
        </div>
      </div>
     
    </div>
  );
};
