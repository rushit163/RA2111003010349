import laptop from './laptop.webp';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const options = ['Amazon', 'Flipcart', 'Snapdeal','Myntra','Ajio'];
  const options2 = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth",
  "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"]
  const [selected, setSelected] = useState(null);
  const [selected2, setSelected2] = useState(null);
  const [minPrice,setMinPrice] = useState(0);
  const [maxPrice,setMaxPrice] = useState(0);
  const [view,setView] = useState(false);
  function onChange(i) {
    setSelected((prev) => (i === prev ? null : i));
  }
  function onChange2(k) {
    setSelected2((p) => (k === p ? null : k));
  }
  function selectMin(l) {
    setMinPrice((p) => p=l);
  }
  function selectMax(k) {
    setMaxPrice((p) => p=k);
  } 
  const  handleSubmit= async()=>{
    setView(prev=>!prev)
    const retailerMap = {
      'Amazon': 'AMZ',
      'Flipcart': 'FLP',
      'Snapdeal': 'SNP',
      'Myntra': 'MYN',
      'Ajio': 'AZO'
  }
  console.log(retailerMap[options[selected]])
  try{
    const res = await axios.get(`http://localhost:5000/categories/${options2[selected2]}/products`, {
      params: {
          companyName: retailerMap[options[selected]],
          minPrice : minPrice,
          maxPrice : maxPrice
      }
  })
  console.log(res)
  }catch(e){
    console.log(e);
  }
}
  return (
    <>
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8  ">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Welcome to Codex
        </h2>
      </div>
      <div className=" mt-5">
        <h2 className="text-lg text-gray-900 sm:text-3xl">
          Select your filters here
        </h2>
        <div className=''>
        <h3 className="text-md text-gray-900 mt-3">
          Select Company:
        </h3>
        <div className='flex gap-4'>
        {options.map((o, i) => (
        <label key={i}>
          {o}
          <input
            type="checkbox"
            checked={i === selected}
            onChange={() => onChange(i)}
          />
        </label>
      ))}
        </div>
        </div>
        <div className=''>
        <h3 className="text-md text-gray-900 mt-3">
          Select Category:
        </h3>
        <div className='flex gap-4'>
        {options2.map((o, i) => (
        <label key={i}>
          {o}
          <input
            type="checkbox"
            checked={i === selected2}
            onChange={() => onChange2(i)}
          />
        </label>
      ))}
      
        </div>
        <div>
      <h3 className="text-md text-gray-900 mt-3">
          Select Price:
        </h3>
        <h1>
          minPrice
          <input
            type='number'
            onChange={(e) => selectMin(e.target.value)}
          />
        </h1>
        <h1>
          maxPrice
          <input
          className='bg-blue'
            type='number'
            onChange={(e) => selectMax(e.target.value)}
          />
        </h1>
      </div>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={handleSubmit}>
  View
</button>
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Products
        </h2>
      </div>
     {view &&
      <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        
          <li>
          <a href={`/product/`} className="block overflow-hidden group">
            <img
              src={laptop}
              alt=""
              className="h-[350px] w-full object-fill transition duration-500 group-hover:scale-105 sm:h-[450px]"
            
            />
  
            <div className="relative pt-3 bg-white">
              <h3
                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                hello
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-gray-900"> 2234 </span>
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href={`/product/`} className="block overflow-hidden group">
            <img
              src={laptop}
              alt=""
              className="h-[350px] w-full object-fill transition duration-500 group-hover:scale-105 sm:h-[450px]"
            
            />
  
            <div className="relative pt-3 bg-white">
              <h3
                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                hello
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-gray-900"> 2234 </span>
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href={`/product/`} className="block overflow-hidden group">
            <img
              src={laptop}
              alt=""
              className="h-[350px] w-full object-fill transition duration-500 group-hover:scale-105 sm:h-[450px]"
            
            />
  
            <div className="relative pt-3 bg-white">
              <h3
                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                hello
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-gray-900"> 2234 </span>
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href={`/product/`} className="block overflow-hidden group">
            <img
              src={laptop}
              alt=""
              className="h-[350px] w-full object-fill transition duration-500 group-hover:scale-105 sm:h-[450px]"
            
            />
  
            <div className="relative pt-3 bg-white">
              <h3
                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                hello
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-gray-900"> 2234 </span>
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href={`/product/`} className="block overflow-hidden group">
            <img
              src={laptop}
              alt=""
              className="h-[350px] w-full object-fill transition duration-500 group-hover:scale-105 sm:h-[450px]"
            
            />
  
            <div className="relative pt-3 bg-white">
              <h3
                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                hello
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-gray-900"> 2234 </span>
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href={`/product/`} className="block overflow-hidden group">
            <img
              src={laptop}
              alt=""
              className="h-[350px] w-full object-fill transition duration-500 group-hover:scale-105 sm:h-[450px]"
            
            />
  
            <div className="relative pt-3 bg-white">
              <h3
                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                hello
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-gray-900"> 2234 </span>
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href={`/product/`} className="block overflow-hidden group">
            <img
              src={laptop}
              alt=""
              className="h-[350px] w-full object-fill transition duration-500 group-hover:scale-105 sm:h-[450px]"
            
            />
  
            <div className="relative pt-3 bg-white">
              <h3
                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                hello
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-gray-900"> 2234 </span>
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href={`/product/`} className="block overflow-hidden group">
            <img
              src={laptop}
              alt=""
              className="h-[350px] w-full object-fill transition duration-500 group-hover:scale-105 sm:h-[450px]"
            
            />
  
            <div className="relative pt-3 bg-white">
              <h3
                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                hello
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-gray-900"> 2234 </span>
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href={`/product/`} className="block overflow-hidden group">
            <img
              src={laptop}
              alt=""
              className="h-[350px] w-full object-fill transition duration-500 group-hover:scale-105 sm:h-[450px]"
            
            />
  
            <div className="relative pt-3 bg-white">
              <h3
                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                hello
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-gray-900"> 2234 </span>
              </p>
            </div>
          </a>
        </li><li>
          <a href={`/product/`} className="block overflow-hidden group">
            <img
              src={laptop}
              alt=""
              className="h-[350px] w-full object-fill transition duration-500 group-hover:scale-105 sm:h-[450px]"
            
            />
  
            <div className="relative pt-3 bg-white">
              <h3
                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                hello
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-gray-900"> 2234 </span>
              </p>
            </div>
          </a>
        </li><li>
          <a href={`/product/`} className="block overflow-hidden group">
            <img
              src={laptop}
              alt=""
              className="h-[350px] w-full object-fill transition duration-500 group-hover:scale-105 sm:h-[450px]"
            
            />
  
            <div className="relative pt-3 bg-white">
              <h3
                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                hello
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-gray-900"> 2234 </span>
              </p>
            </div>
          </a>
        </li><li>
          <a href={`/product/`} className="block overflow-hidden group">
            <img
              src={laptop}
              alt=""
              className="h-[350px] w-full object-fill transition duration-500 group-hover:scale-105 sm:h-[450px]"
            
            />
  
            <div className="relative pt-3 bg-white">
              <h3
                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                hello
              </h3>
  
              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>
  
                <span className="tracking-wider text-gray-900"> 2234 </span>
              </p>
            </div>
          </a>
        </li>
      
      </ul>
}  
    </div>
  </>
  );
}

export default App;
