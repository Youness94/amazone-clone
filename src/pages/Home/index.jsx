import React from "react";
import Product from "../../components/products";
import "./home.css";

const Home = (props) => {
  return (
    <div className="homa">
      <img
        className="home_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt=""
      />

      <div className="home_row">
        {/* product id, title, price, rating, image */}
        <Product
          id="1"
          title='Read "Rich Man, Poor Man A Novel" by Irwin Shaw available from Rakuten Kobo. This New York Times–bestselling saga of two brothers in postwar America,'
          price={11.99}
          rating={5}
          image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386921204l/19416241.jpg"
          qte={1}
        />
        <Product
          id="2"
          title="V-Walk Wireless Bluetooth Speaker with Rechargeable Battery, Compatible with MP3/4 devices, TF/USB Flash Drive, or any audio device which is Bluetooth ..."
          price={98.99}
          rating={5}
          image="https://n4.sdlcdn.com/imgs/j/e/9/V-Walk-VS-001BT-Portable-SDL808177368-1-68eb1.jpeg"
          qte={1}
        />
      </div>
      <div className="home_row">
        {/* product id, title, price, rating, image */}
        <Product
          id="3"
          title="Care Smart Watch: Put your mind at ease with a smartwatch that keeps seniors connected to loved ones. Simplified calling, texting & more."
          price={199.99}
          rating={5}
          image="https://ss7.vzw.com/is/image/VerizonWireless/vz-awi-care-smart-watch-blk?$device-lg$"
          qte={1}
        />
        <Product
          id="4"
          title="The best stand mixers are functional and powerful. We tested the KitchenAid Artisan Series 5-Quart Tilt-Head Stand Mixer to see how it ranked."
          price={239}
          rating={5}
          image="https://www.thespruceeats.com/thmb/oRNAc0IUMEMERgJP6S-wPDyFl4A=/1500x1125/smart/filters:no_upscale()/_hero_SQ_KitchenAid-Artisan-Series-5-Quart-Tilt-Head-Stand-Mixer-1-e9bae40724cc4f9c9620681ede7ad527.jpg"
          qte={1}
        />
        <Product
          id="5"
          title="Buy the Apple iPad Pro 12.9-inch 4th generation 128 GB in Space Gray from AT&T. Featuring a 12.9 inch Liquid Retina display, pro cameras, A12Z Bionic ..."
          price={599.99}
          rating={5}
          image="https://www.att.com/shopcms/media/att/2020/Shop/360s/1010153/6436C-1.jpg"
          qte={1}
        />
      </div>
      <div className="home_row">
        {/* product id, title, price, rating, image */}
        <Product
          qte={1}
          id="6"
          title="Great for a night of entertainment with the whole family, the Akai 32-inch HD LED LCD Smart TV lets you enjoy watching your favourite movies and shows ..."
          price={279.0}
          rating={5}
          image="https://azcd.harveynorman.com.au/media/catalog/product/a/k/ak3221nf-akai-32-inch-hd-smart-led-lcd-tv.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
