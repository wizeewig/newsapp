import React from 'react'
import { Link } from 'react-router-dom';

const About =()=>{

    return (
        <>

<section class="py-3 py-md-5 py-xl-8">
          <div class="container">
            <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
              <div class="col-12 col-lg-6 col-xl-5">
                <img class="img-fluid rounded" loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvcTOSYe2wEAoq29JT71Ql1-d-lGQ2RzZvkXRtjnUmj5tbTTce1shy6ZaPABe4e95lFI&usqp=CAU" alt=""/>
              </div>
              <div class="col-12 col-lg-6 col-xl-7">
                <div class="row justify-content-xl-center">
                  <div class="col-12 col-xl-11">
                    <h2 class="h1 mb-3 my-4">CC NewsApp</h2>
                    <p class="lead fs-4 text-secondary mb-3">Welcome to CC-News, your go-to source for staying informed and connected to the world around you. We understand the importance of reliable and up-to-date news, which is why we've created a seamless platform that brings you the latest headlines from a variety of domains.</p>
                    <p class="mb-5">With our app, powered by the latest technology and the NewsAPI, you can access news from diverse categories such as Health, Sports, Technology, Business, and more. We believe in empowering our users to tailor their news consumption experience, allowing you to stay focused on the topics that matter most to you.</p>
                    <div class="row gy-4 gy-md-0 gx-xxl-5X">
                      <div class="col-12 col-md-6">
                        <div class="d-flex">
                          <div class="me-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                            </svg>
                          </div>
                          <div>
                            <h4 class="mb-3">Comprehensive Coverage</h4>
                            <p class="text-secondary mb-0">Stay well-informed with our extensive coverage across multiple domains. </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="d-flex">
                          <div class="me-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                              <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                            </svg>
                          </div>
                          <div>
                            <h4 class="mb-3">Customizable Feed</h4>
                            <p class="text-secondary mb-0">Tailor your news feed to match your interests. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
       
    )
  }

export default About;

