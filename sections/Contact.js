import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle, FiImage, FiMail, FiPhone, FiZoomIn } from "react-icons/fi"
import { IoAccessibility, IoAccessibilityOutline, IoAdd, IoLocationOutline } from "react-icons/io5"

const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's Talk About Ideas" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <a href="https://drive.google.com/file/d/1kd0y_WToJWMH9myW5ojaKNo08wTDBeBm/view?usp=sharing">
                  <h3>DOWNLOAD BROCHURE</h3>
                  </a>
                  <span>Contact Us</span>
                </div>
                <div className='box'>
                  <IoAccessibilityOutline size={30} className='icons' />
                  <a href='https://docs.google.com/forms/d/e/1FAIpQLSdzQwat6ncrKleyjRUWK6XkwWccq5xSuyEKJPwbh9xiqGVzGA/viewform?usp=sf_link' target="_blank">
                  <h3>Fill Contact Form</h3>
                  <span>Fill Our Form</span>
                  </a>
                </div>
                <div className='box'>
                  <FiMail size={30} className='icons' />
                  <a href="mailto:setupweb01@gmail.com">
                  <h3>setupweb01@gmail.com</h3>
                  </a>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <FiImage size={30} className='icons' />
                  <a href="mailto:setupweb01@gmail.com">
                  <h3>setupweb01@gmail.com</h3>
                  </a>
                  <span>Send Your Ideas</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                <a href="https://www.facebook.com/profile.php?id=61550619808954 " target="_blank">
                  <BsFacebook size={25} />
                  </a>
                </li>
                <li className='icon'>
                <a href="https://twitter.com/SetupWeb01" target="_blank">
                  <AiFillTwitterCircle size={25} />
                  </a>

                </li>
                <li className='icon'>
                <a href="https://www.instagram.com/setupweb01/" target="_blank">
                  <AiFillInstagram size={25} />
                  </a>
                </li>
                <li className='icon'>
                  <a href="https://youtube.com/@setupweb01?si=O5nTQik3JE8mZbdA" target="_blank">
                  <AiFillYoutube size={25} />
                  </a>

                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>your budget</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>timeframe</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                
              </form>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSdzQwat6ncrKleyjRUWK6XkwWccq5xSuyEKJPwbh9xiqGVzGA/viewform?usp=sf_link'>
                <button  className='button-primary'>Submit</button>
                </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
