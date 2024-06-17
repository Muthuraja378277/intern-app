import React from 'react'
import './home.css'
import Header from './Header'
import img1 from '../Asserts/img1.jpeg'
import img2 from '../Asserts/img2.jpeg'
import img3 from '../Asserts/img3.jpeg'
import img4 from '../Asserts/img4.jpeg'
import img5 from '../Asserts/img5.jpeg'
import img6 from '../Asserts/img6.jpeg'
import intro  from '../Asserts/intro.jpg'
import { Link } from 'react-router-dom';

import img7 from '../Asserts/img7.jpeg'

import img8 from '../Asserts/img8.jpeg'
import img9 from '../Asserts/img9.jpeg'
import img10 from '../Asserts/img10.jpeg'
import img11 from '../Asserts/img11.jpeg'

function Home() {

// makePayment = async ()=>{
// const stripe = await loadStripe("")
// }


  return (
    <>
    
    <div className="home">
    <div className='flex justify-center text-4xl font-bold'>
  <div id='home'>Welcome to Intern</div>

 <br />
</div>
<div className='flex justify-center text-2xl'> we are <span className='type'> Your GateWay to Tech Excellence . . . .</span></div>
<br />
<div className='flex justify-center'><img src={intro} alt="" /></div><br />
</div>
<br /><br />
<div className="about">
<div className='flex flex-col items-center'>
  <div className='text-center text-2xl font-bold mb-4'>WHO ARE WE?</div>
  <div className=' flex justify-center'>
    <div className='content'>
    Built upon the conviction that knowledge has the power to change lives,
     Intern was born out of a deep-seated dedication to education and groundbreaking ideas.
      Our mission is to transform dreams into realities through an unparalleled digital learning experience.
       At Intern, we celebrate each step forward and inspire learners with rewards as symbols of achievement
        for their completed tasks. Recognizing that the journey of learning should be filled with happiness,
         support, and tangible acknowledgments, we ensure every milestone is met with
          enthusiasm and a hearty 'Well done!'
    </div>
  </div>
</div><br /><br /><br /><br /><br />
<div id='about' className='text-center text-4xl font-bold mb-4'>WHY CHOOSE US?</div><br /><br />
<div className="flex flex-row justify-evenly">
 <div className='image'>
  <br />
 <div className='flex justify-center fle'><br />
    <img src={img1} width={"300px"} alt=""  />
    </div> <br />
  <h1 className='text-center font-bold text-2xl'>NETWORING</h1>
  
  <p className='text-slate-500 p-5'>
  Connect with a diverse community of learners. Our networking opportunities go beyond the virtual classroom, 
  opening doors for collaboration and potential career growth.
  </p>
 </div>

 <div className='image'>
  <br />
 <div className='flex justify-center'><br />
    <img src={img2} width={"300px"} alt=""  />
    </div><br />
  <h1 className='text-center font-bold text-2xl'>MENTORSHIP</h1>
  <p className='text-slate-500 p-5'>Explore personalized guidance in our mentorship program, where dedicated mentors support you 
    throughout your learning journey. Receive tailored advice for a well-rounded education,
     ensuring practical wisdom and success tools in a one-on-one setting.</p>
 </div>
 <div className='image'>
  <br />
 <div className='flex justify-center'><br />
    <img src={img3} width={"300px"} alt=""  />
    </div><br />
  <h1 className='text-center font-bold text-2xl'>SWAGS AND GOODIES</h1>
  <p className='text-slate-500 p-5'>Celebrate your achievements with exclusive Shadow Fox merchandise and goodies.
     It's our way of appreciating your dedication and creating a positive, rewarding learning environment.</p>
    </div>
</div>
</div>
<br /><br /><br /><br /><br />


<div id='in'>
<div className='text-center text-4xl font-bold mb-4'>Internships that we offer</div>
<p  className='text-center text-1xl text-slate-500 mb-4'>Embark on a Learning Journey: Unleash Your Potential in Our Virtual Internship Programs!</p><br />
<div className='course flex flex-row flex-wrap gap-y-11 gap-x-56 justify-center' >
  <div className='internship '> <br />
  <h1 className='text-center font-bold text-2xl'>Cyber Security</h1><br />
    <div className='flex justify-center'><br />
    <img src={img4} width={"300px"} alt=""  />
    </div>
    <p className='p-5'>
    Discover our Cybersecurity program designed to explore essential techniques for safeguarding digital environments. Learn to identify vulnerabilities,
     devise strategies, and defend against evolving cyber threats in this crucial and ever-changing field.</p>
        <button className=' bg-black w-40 h-10 text-white ml-40 mb-8' > <Link to={'/subscribe'}>Apply Now</Link> </button>
  </div>
  <div className='internship '> <br />
  <h1 className='text-center font-bold text-2xl'>Data Science</h1><br />
    <div className='flex justify-center'><br />
    <img src={img5} width={"300px"} alt=""  />
    </div>
    <p className='p-5'>
    Discover our Data Science program, where you'll delve into data analysis, machine learning, and predictive modeling. Apply your expertise to 
    real-world projects that uncover valuable insights.</p>
        <button className=' bg-black w-40 h-10 text-white ml-40 mb-8'><Link to={'/subscribe'}>Apply Now</Link></button>
  </div>
  <div className='internship '> <br />
  <h1 className='text-center font-bold text-2xl'>AI/ML</h1><br />
    <div className='flex justify-center'><br />
    <img src={img6} width={"300px"} alt=""  />
    </div>
    <p className='p-5'>Enroll in our AI/ML program and unleash the power of Artificial Intelligence and Machine Learning. Dive into advanced
       technologies, algorithms, and real-world applications that drive the development of intelligent systems.</p>
        <button className=' bg-black w-40 h-10 text-white ml-40 mb-8'><Link to={'/subscribe'}>Apply Now</Link></button>
  </div>
  <div className='internship '> <br />
  <h1 className='text-center font-bold text-2xl'>Android App Development</h1><br />
    <div className='flex justify-center'><br />
    <img src={img7} width={"300px"} alt=""  />
    </div>
    <p className='p-5'>Start your journey in Android App Development with our specialized program. Acquire expertise in 
      creating innovative and user-friendly Android applications that meet a wide range of user requirements.</p>
        <button className=' bg-black w-40 h-10 text-white ml-40 mb-8'><Link to={'/subscribe'}>Apply Now</Link></button>
  </div>
  <div className='internship '> <br />
  <h1 className='text-center font-bold text-2xl'>Java Development</h1><br />
    <div className='flex justify-center'><br />
    <img src={img8} width={"300px"} alt=""  />
    </div>
    <p className='p-5'>Begin your Java Development journey with our specialized program. 
      Gain mastery in the fundamentals of the Java programming language and learn to create robust, 
      scalable applications for diverse platforms.</p>
        <button className=' bg-black w-40 h-10 text-white ml-40 mb-8'><Link to={'/subscribe'}>Apply Now</Link></button>
  </div>
  <div className='internship '> <br />
  <h1 className='text-center font-bold text-2xl'>Web Development</h1><br />
    <div className='flex justify-center'><br />
    <img src={img9} width={"300px"} alt=""  />
    </div>
    <p className='p-5'>Begin your journey in Web Development with our comprehensive program. Gain practical experience in creating 
      responsive and intuitive websites using cutting-edge tools and frameworks.</p>
        <button className=' bg-black w-40 h-10 text-white ml-40 mb-8'><Link to={'/subscribe'}>Apply Now</Link></button>
  </div>
  <div className='internship '> <br />
  <h1 className='text-center font-bold text-2xl'>UI/UX Design
  </h1><br />
    <div className='flex justify-center'><br />
    <img src={img10} width={"300px"} alt=""  />
    </div>
    <p className='p-5'>
    Transform the digital landscape with our UI/UX Design program. Delve into design thinking, user research, 
    and interactive prototyping to craft compelling and user-friendly digital interfaces.</p>
        <button className=' bg-black w-40 h-10 text-white ml-40 mb-8'><Link to={'/subscribe'}>Apply Now</Link></button>
  </div>
  <div className='internship '> <br />
  <h1 className='text-center font-bold text-2xl'>Python Development</h1><br />
    <div className='flex justify-center'><br />
    <img src={img11} width={"300px"} alt=""  />
    </div>
    <p className='p-5'>
    Join our Python Development program to excel in coding efficiency and construct scalable applications. Engage in hands-on
     projects that leverage Python's capabilities across diverse applications.</p>
        <button className=' bg-black w-40 h-10 text-white ml-40 mb-8'><Link to={'/subscribe'}>Apply Now</Link></button>
  </div>

  
</div>

</div>



 
    </>
  )
}

export default Home