import "./navbar.css";
import { useState,useEffect } from "react";
import axios from 'axios';
export default function Nav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [visualizations, setVisualizations] = useState({});

  function toggleSidebar() {
    setSidebarOpen(!isSidebarOpen);
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/visualizations')
      .then(response => {
        setVisualizations(response.data);
      })
      .catch(error => {
        console.error('Error fetching visualizations:', error);
      });
  }, []);

  return (
    <div id="Total" className={isSidebarOpen ? "show-sidebar" : ""}>
      <div className="nav">
        <div id="mix">
          <svg
            onClick={toggleSidebar}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <h2>Overview</h2>
        </div>
      </div>
      <div className="main">
      
      <div className="Graph">
        {["category_pie", "payment_modes"].map((key) =>
          visualizations[key] ? (
            <div key={key} className="small">
              <img src={`http://127.0.0.1:5000${visualizations[key]}`} alt={key} />
            </div>
          ) : null
        )}
 
  
       </div>
       
       {Object.entries(visualizations)
        .filter(([key]) => !["category_pie", "payment_modes"].includes(key))
        .map(([key, value]) => (
          <div key={key} className="Big">
            <img src={`http://127.0.0.1:5000${value}`} alt={key} />
          </div>
        ))}
        
      </div >

      <div id="sidebar">
        <div id="Name">
          <h4>Expenso</h4>
        </div>
        <div>
            <div id="mix" className="box">
           <svg width="0.5rem" height="0.5rem" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M352.329143 79.286857c35.474286 0 64.146286 28.525714 64.146286 63.853714v190.902858a64 64 0 0 1-64.146286 63.853714H180.955429a63.926857 63.926857 0 0 1-64.073143-63.853714v-190.902858c0-35.254857 28.672-63.853714 64.073143-63.853714h171.373714z m0 510.244572c35.474286 0 64.146286 28.525714 64.146286 63.853714v190.902857a64 64 0 0 1-64.146286 63.853714H180.955429a63.926857 63.926857 0 0 1-64.073143-63.853714v-190.902857c0-35.328 28.672-63.853714 64.073143-63.853714h171.373714z m490.715428-510.244572c35.401143 0 64.073143 28.525714 64.073143 63.853714v190.902858a64 64 0 0 1-64.073143 63.853714H671.670857a63.926857 63.926857 0 0 1-64.146286-63.853714v-190.902858c0-35.254857 28.745143-63.853714 64.146286-63.853714h171.373714z m-669.988571 379.611429h187.172571c64.512 0 116.736-51.931429 116.736-116.077715v-208.457142A116.297143 116.297143 0 0 0 360.228571 18.285714H173.129143C108.617143 18.285714 56.32 70.217143 56.32 134.436571v208.384a116.297143 116.297143 0 0 0 116.736 116.077715z m0 510.244571h187.172571c64.512 0 116.736-51.931429 116.736-116.150857V644.608a116.297143 116.297143 0 0 0-116.736-116.077714H173.129143c-64.512 0-116.736 51.931429-116.736 116.077714v208.457143a116.297143 116.297143 0 0 0 116.736 116.077714z m490.788571-510.244571h187.026286c64.512 0 116.736-51.931429 116.736-116.077715v-208.457142A116.297143 116.297143 0 0 0 850.870857 18.285714H663.771429C599.259429 18.285714 547.108571 70.217143 547.108571 134.436571v208.384a116.297143 116.297143 0 0 0 116.736 116.077715z m178.980572 448.877714H663.698286c-38.619429 0-55.296-16.091429-55.296-54.784V644.608c0-38.546286 16.749714-55.369143 55.369143-55.369143h187.099428c38.765714 0 56.173714 16.749714 56.173714 55.296V853.138286c0 12.8 13.677714 27.501714 31.524572 27.501714s29.037714-14.701714 29.037714-27.501714V644.534857a116.297143 116.297143 0 0 0-116.736-116.004571H663.771429c-64.512 0-116.736 51.931429-116.736 116.077714v208.457143a116.297143 116.297143 0 0 0 116.662857 116.077714H850.285714c13.458286 0 30.72-10.971429 30.72-30.793143a30.72 30.72 0 0 0-30.134857-30.573714h-7.972571z" fill="#000000"></path></g></svg>
                <h3>Overivew</h3>
            </div>
            <div id="mix" className="box">
            <svg fill="#000000" width="0.5 rem" height="0.5 rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.0020048,13 C17.5542895,13 18.0020048,13.4477153 18.0020048,14 C18.0020048,14.5128358 17.6159646,14.9355072 17.1186259,14.9932723 L17.0020048,15 L5.41700475,15 L8.70911154,18.2928932 C9.0695955,18.6533772 9.09732503,19.2206082 8.79230014,19.6128994 L8.70911154,19.7071068 C8.34862757,20.0675907 7.78139652,20.0953203 7.38910531,19.7902954 L7.29489797,19.7071068 L2.29489797,14.7071068 C1.69232289,14.1045317 2.07433707,13.0928192 2.88837381,13.0059833 L3.00200475,13 L17.0020048,13 Z M16.6128994,4.20970461 L16.7071068,4.29289322 L21.7071068,9.29289322 C22.3096819,9.8954683 21.9276677,10.9071808 21.1136309,10.9940167 L21,11 L7,11 C6.44771525,11 6,10.5522847 6,10 C6,9.48716416 6.38604019,9.06449284 6.88337887,9.00672773 L7,9 L18.585,9 L15.2928932,5.70710678 C14.9324093,5.34662282 14.9046797,4.77939176 15.2097046,4.38710056 L15.2928932,4.29289322 C15.6533772,3.93240926 16.2206082,3.90467972 16.6128994,4.20970461 Z"></path> </g></svg>
            <h3>Transactions</h3>
            </div>
            <div className="box">
            <h3>Overview</h3>
            </div>
            <div className="box">
            <h3>Overview</h3>
            </div>
            <div className="box">
            <h3>Overview</h3>
            </div>
            <div className="box">
            <h3>Overview</h3>
            </div>
        </div>
      </div>
    </div>
  );
}