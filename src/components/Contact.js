import React from 'react';
import { Link } from 'react-router-dom';
// import './Contact.css';

function Contact() {
  return (
    <>
  {/*? Preloader Start */}
  {/* <div id="preloader-active">
  <div className="preloader d-flex align-items-center justify-content-center">
    <div className="preloader-inner position-relative">
      <div className="preloader-circle" />
      <div className="preloader-img pere-text">
        <img src="assets/img/logo/loder.png" alt="" />
      </div>
    </div>
  </div>
</div> */}
{/* Preloader Start */}
{/* Header Start */}
<div className="header-area header-transparent">
  <div className="main-header ">
    <div className="header-bottom  header-sticky">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-xl-2 col-lg-2">
            <div className="logo">
              
            <Link to="/#">
                <img src="assets/img/logo/logo.png" alt="" />
              
              </Link>
            </div>
          </div>
          <div className="col-xl-10 col-lg-10">
            <div className="menu-wrapper d-flex align-items-center justify-content-end">
              {/* Main-menu */}
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li className="active">
                      {/* <a href="index.html">Home</a> */}
                      <Link to="/#">Home</Link>
                    </li>
                    <li>
                      {/* <a href="courses.html">Courses</a> */}
                      <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                      {/* <a href="about.html">About</a> */}
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      {/* <a href="#">Blog</a> */}
                      <Link to="/blog">Blog</Link>
                      <ul className="submenu">
                        <li>
                          {/* <a href="blog.html">Blog</a> */}
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          {/* <a href="blog_details.html">Blog Details</a> */}
                          <Link to="/blod_details">Blog Details</Link>
                        </li>
                        <li>
                          {/* <a href="elements.html">Element</a> */}
                          <Link to="/elements">Elements</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {/* <a href="contact.html">Contact</a> */}
                      <Link to="/contact">Contact</Link>
                    </li>
                    {/* Button */}
                    <li className="button-header margin-left ">
                      <a href="#" className="btn">
                        Join
                      </a>
                    </li>
                    <li className="button-header">
                      {/* <a href="login.html" className="btn btn3"> */}
                        {/* Log in */}
                      {/* </a> */}
                      <Link to="/login" className="btn btn3">Login</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className="col-12">
            <div className="mobile_menu d-block d-lg-none" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Header End */}
<main>
  {/*? slider Area Start*/}
  <section className="slider-area slider-area2">
    <div className="slider-active">
      {/* Single Slider */}
      <div className="single-slider slider-height2">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-11 col-md-12">
              <div className="hero__caption hero__caption2">
                <h1 data-animation="bounceIn" data-delay="0.2s">
                  Contact us
                </h1>
                {/* breadcrumb Start*/}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      {/* <a href="index.html">Home</a> */}
                      <Link to="/#">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="contact">Contact</a>
                    </li>
                  </ol>
                </nav>
                {/* breadcrumb End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*?  Contact Area start  */}
  <section className="contact-section">
    <div className="container">
      <div className="d-none d-sm-block mb-5 pb-4">
        <div
          id="map"
          style={{ height: 480, position: "relative", overflow: "hidden" }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "rgb(229, 227, 223)"
            }}
          >
            <div
              className="gm-style"
              style={{
                position: "absolute",
                zIndex: 0,
                left: 0,
                top: 0,
                height: "100%",
                width: "100%",
                padding: 0,
                borderWidth: 0,
                margin: 0
              }}
            >
              <div
                tabIndex={0}
                style={{
                  position: "absolute",
                  zIndex: 0,
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: "100%",
                  padding: 0,
                  borderWidth: 0,
                  margin: 0,
                  cursor:
                    'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default',
                  touchAction: "pan-x pan-y"
                }}
              >
                <div
                  style={{
                    zIndex: 1,
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: "100%",
                    transform: "translate(0px, 0px)"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      zIndex: 100,
                      width: "100%"
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 0
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          zIndex: 991,
                          transform: "matrix(1, 0, 0, 1, -100, -189)"
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 256,
                            height: 256
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: "-256px",
                            top: 0,
                            width: 256,
                            height: 256
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: "-256px",
                            top: "-256px",
                            width: 256,
                            height: 256
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "-256px",
                            width: 256,
                            height: 256
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 256,
                            top: "-256px",
                            width: 256,
                            height: 256
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 256,
                            top: 0,
                            width: 256,
                            height: 256
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 256,
                            top: 256,
                            width: 256,
                            height: 256
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 256,
                            width: 256,
                            height: 256
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: "-256px",
                            top: 256,
                            width: 256,
                            height: 256
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: "-512px",
                            top: 256,
                            width: 256,
                            height: 256
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: "-512px",
                            top: 0,
                            width: 256,
                            height: 256
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: "-512px",
                            top: "-256px",
                            width: 256,
                            height: 256
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 512,
                            top: "-256px",
                            width: 256,
                            height: 256
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 512,
                            top: 0,
                            width: 256,
                            height: 256
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 512,
                            top: 256,
                            width: 256,
                            height: 256
                          }}
                        >
                          <div style={{ width: 256, height: 256 }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      zIndex: 101,
                      width: "100%"
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      zIndex: 102,
                      width: "100%"
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      zIndex: 103,
                      width: "100%"
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: -1
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          zIndex: 991,
                          transform: "matrix(1, 0, 0, 1, -100, -189)"
                        }}
                      >
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: 0,
                            top: 0
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: "-256px",
                            top: 0
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: "-256px",
                            top: "-256px"
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: 0,
                            top: "-256px"
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: 256,
                            top: "-256px"
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: 256,
                            top: 0
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: 256,
                            top: 256
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: 0,
                            top: 256
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: "-256px",
                            top: 256
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: "-512px",
                            top: 256
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: "-512px",
                            top: 0
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: "-512px",
                            top: "-256px"
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: 512,
                            top: "-256px"
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: 512,
                            top: 0
                          }}
                        />
                        <div
                          style={{
                            width: 256,
                            height: 256,
                            overflow: "hidden",
                            position: "absolute",
                            left: 512,
                            top: 256
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      zIndex: 0
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        zIndex: 991,
                        transform: "matrix(1, 0, 0, 1, -100, -189)"
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: 256,
                          height: 256,
                          transition: "opacity 200ms linear 0s"
                        }}
                      >
                        <img
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i470!3i302!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=70038"
                          style={{
                            width: 256,
                            height: 256,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none"
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: 256,
                          top: 0,
                          width: 256,
                          height: 256,
                          transition: "opacity 200ms linear 0s"
                        }}
                      >
                        <img
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i471!3i302!4i256!2m3!1e0!2sm!3i476185840!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=84496"
                          style={{
                            width: 256,
                            height: 256,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none"
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: 256,
                          top: 256,
                          width: 256,
                          height: 256,
                          transition: "opacity 200ms linear 0s"
                        }}
                      >
                        <img
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i471!3i303!4i256!2m3!1e0!2sm!3i476185840!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=107953"
                          style={{
                            width: 256,
                            height: 256,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none"
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 256,
                          width: 256,
                          height: 256,
                          transition: "opacity 200ms linear 0s"
                        }}
                      >
                        <img
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i470!3i303!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=93495"
                          style={{
                            width: 256,
                            height: 256,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none"
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: "-256px",
                          top: 256,
                          width: 256,
                          height: 256,
                          transition: "opacity 200ms linear 0s"
                        }}
                      >
                        <img
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i469!3i303!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=85128"
                          style={{
                            width: 256,
                            height: 256,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none"
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: "-512px",
                          top: 256,
                          width: 256,
                          height: 256,
                          transition: "opacity 200ms linear 0s"
                        }}
                      >
                        <img
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i468!3i303!4i256!2m3!1e0!2sm!3i476185504!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=46831"
                          style={{
                            width: 256,
                            height: 256,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none"
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: "-512px",
                          top: 0,
                          width: 256,
                          height: 256,
                          transition: "opacity 200ms linear 0s"
                        }}
                      >
                        <img
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i468!3i302!4i256!2m3!1e0!2sm!3i476184952!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=10814"
                          style={{
                            width: 256,
                            height: 256,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none"
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: "-512px",
                          top: "-256px",
                          width: 256,
                          height: 256,
                          transition: "opacity 200ms linear 0s"
                        }}
                      >
                        <img
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i468!3i301!4i256!2m3!1e0!2sm!3i476184952!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=118428"
                          style={{
                            width: 256,
                            height: 256,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none"
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: 512,
                          top: "-256px",
                          width: 256,
                          height: 256,
                          transition: "opacity 200ms linear 0s"
                        }}
                      >
                        <img
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i472!3i301!4i256!2m3!1e0!2sm!3i476185636!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=43995"
                          style={{
                            width: 256,
                            height: 256,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none"
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: 512,
                          top: 0,
                          width: 256,
                          height: 256,
                          transition: "opacity 200ms linear 0s"
                        }}
                      >
                        <img
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i472!3i302!4i256!2m3!1e0!2sm!3i476185840!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=905"
                          style={{
                            width: 256,
                            height: 256,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none"
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: 512,
                          top: 256,
                          width: 256,
                          height: 256,
                          transition: "opacity 200ms linear 0s"
                        }}
                      >
                        <img
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i472!3i303!4i256!2m3!1e0!2sm!3i476185840!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=24362"
                          style={{
                            width: 256,
                            height: 256,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none"
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: "-256px",
                          top: 0,
                          width: 256,
                          height: 256,
                          transition: "opacity 200ms linear 0s"
                        }}
                      >
                        <img
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i469!3i302!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=61671"
                          style={{
                            width: 256,
                            height: 256,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none"
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: "-256px",
                          top: "-256px",
                          width: 256,
                          height: 256,
                          transition: "opacity 200ms linear 0s"
                        }}
                      >
                        <img
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i469!3i301!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=38214"
                          style={{
                            width: 256,
                            height: 256,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none"
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "-256px",
                          width: 256,
                          height: 256,
                          transition: "opacity 200ms linear 0s"
                        }}
                      >
                        <img
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i470!3i301!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=46581"
                          style={{
                            width: 256,
                            height: 256,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none"
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: 256,
                          top: "-256px",
                          width: 256,
                          height: 256,
                          transition: "opacity 200ms linear 0s"
                        }}
                      >
                        <img
                          draggable="false"
                          alt=""
                          role="presentation"
                          src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i9!2i471!3i301!4i256!2m3!1e0!2sm!3i476185792!2m3!1e2!6m1!3e5!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&token=94061"
                          style={{
                            width: 256,
                            height: 256,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0,
                            maxWidth: "none"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="gm-style-pbc"
                  style={{
                    zIndex: 2,
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    padding: 0,
                    borderWidth: 0,
                    margin: 0,
                    left: 0,
                    top: 0,
                    opacity: 0
                  }}
                >
                  <p className="gm-style-pbt" />
                </div>
                <div
                  style={{
                    zIndex: 3,
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    padding: 0,
                    borderWidth: 0,
                    margin: 0,
                    left: 0,
                    top: 0,
                    touchAction: "pan-x pan-y"
                  }}
                >
                  <div
                    style={{
                      zIndex: 4,
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      width: "100%",
                      transform: "translate(0px, 0px)"
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 104,
                        width: "100%"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 105,
                        width: "100%"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 106,
                        width: "100%"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 107,
                        width: "100%"
                      }}
                    />
                  </div>
                </div>
              </div>
              <iframe
                aria-hidden="true"
                frameBorder={0}
                style={{
                  zIndex: -1,
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  border: "none"
                }}
                src="about:blank"
              />
              <div
                style={{
                  marginLeft: 5,
                  marginRight: 5,
                  zIndex: 1000000,
                  position: "absolute",
                  left: 0,
                  bottom: 0
                }}
              >
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://maps.google.com/maps?ll=-31.197,150.744&z=9&t=m&hl=en-US&gl=US&mapclient=apiv3"
                  title="Open this area in Google Maps (opens a new window)"
                  style={{
                    position: "static",
                    overflow: "visible",
                    float: "none",
                    display: "inline"
                  }}
                >
                  <div style={{ width: 66, height: 26, cursor: "pointer" }}>
                    <img
                      alt=""
                      src="https://maps.gstatic.com/mapfiles/api-3/images/google_white5.png"
                      draggable="false"
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 66,
                        height: 26,
                        userSelect: "none",
                        border: 0,
                        padding: 0,
                        margin: 0
                      }}
                    />
                  </div>
                </a>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "15px 21px",
                  border: "1px solid rgb(171, 171, 171)",
                  fontFamily: "Roboto, Arial, sans-serif",
                  color: "rgb(34, 34, 34)",
                  boxSizing: "border-box",
                  boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 16px",
                  zIndex: 10000002,
                  display: "none",
                  width: 300,
                  height: 180,
                  position: "absolute",
                  left: 315,
                  top: 150
                }}
              >
                <div
                  style={{
                    padding: "0px 0px 10px",
                    fontSize: 16,
                    boxSizing: "border-box"
                  }}
                >
                  Map Data
                </div>
                <div style={{ fontSize: 13 }}>Map data ©2019 Google</div>
                <button
                  draggable="false"
                  title="Close"
                  aria-label="Close"
                  type="button"
                  className="gm-ui-hover-effect"
                  style={{
                    background: "none",
                    display: "block",
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    cursor: "pointer",
                    userSelect: "none",
                    top: 0,
                    right: 0,
                    width: 37,
                    height: 37
                  }}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                    style={{
                      pointerEvents: "none",
                      display: "block",
                      width: 13,
                      height: 13,
                      margin: 12
                    }}
                  />
                </button>
              </div>
              <div
                className="gmnoprint"
                style={{
                  zIndex: 1000001,
                  position: "absolute",
                  right: 166,
                  bottom: 0,
                  width: 121
                }}
              >
                <div
                  draggable="false"
                  className="gm-style-cc"
                  style={{ userSelect: "none", height: 14, lineHeight: 14 }}
                >
                  <div
                    style={{
                      opacity: "0.7",
                      width: "100%",
                      height: "100%",
                      position: "absolute"
                    }}
                  >
                    <div style={{ width: 1 }} />
                    <div
                      style={{
                        backgroundColor: "rgb(245, 245, 245)",
                        width: "auto",
                        height: "100%",
                        marginLeft: 1
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      paddingRight: 6,
                      paddingLeft: 6,
                      boxSizing: "border-box",
                      fontFamily: "Roboto, Arial, sans-serif",
                      fontSize: 10,
                      color: "rgb(68, 68, 68)",
                      whiteSpace: "nowrap",
                      direction: "ltr",
                      textAlign: "right",
                      verticalAlign: "middle",
                      display: "inline-block"
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        display: "none"
                      }}
                    >
                      Map Data
                    </a>
                    <span>Map data ©2019 Google</span>
                  </div>
                </div>
              </div>
              <div
                className="gmnoscreen"
                style={{ position: "absolute", right: 0, bottom: 0 }}
              >
                <div
                  style={{
                    fontFamily: "Roboto, Arial, sans-serif",
                    fontSize: 11,
                    color: "rgb(68, 68, 68)",
                    direction: "ltr",
                    textAlign: "right",
                    backgroundColor: "rgb(245, 245, 245)"
                  }}
                >
                  Map data ©2019 Google
                </div>
              </div>
              <div
                className="gmnoprint gm-style-cc"
                draggable="false"
                style={{
                  zIndex: 1000001,
                  userSelect: "none",
                  height: 14,
                  lineHeight: 14,
                  position: "absolute",
                  right: 95,
                  bottom: 0
                }}
              >
                <div
                  style={{
                    opacity: "0.7",
                    width: "100%",
                    height: "100%",
                    position: "absolute"
                  }}
                >
                  <div style={{ width: 1 }} />
                  <div
                    style={{
                      backgroundColor: "rgb(245, 245, 245)",
                      width: "auto",
                      height: "100%",
                      marginLeft: 1
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    paddingRight: 6,
                    paddingLeft: 6,
                    boxSizing: "border-box",
                    fontFamily: "Roboto, Arial, sans-serif",
                    fontSize: 10,
                    color: "rgb(68, 68, 68)",
                    whiteSpace: "nowrap",
                    direction: "ltr",
                    textAlign: "right",
                    verticalAlign: "middle",
                    display: "inline-block"
                  }}
                >
                  <a
                    href="https://www.google.com/intl/en-US_US/help/terms_maps.html"
                    target="_blank"
                    rel="noopener"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "rgb(68, 68, 68)"
                    }}
                  >
                    Terms of Use
                  </a>
                </div>
              </div>
              <button
                draggable="false"
                title="Toggle fullscreen view"
                aria-label="Toggle fullscreen view"
                type="button"
                className="gm-control-active gm-fullscreen-control"
                style={{
                  background: "none rgb(255, 255, 255)",
                  border: 0,
                  margin: 10,
                  padding: 0,
                  position: "absolute",
                  cursor: "pointer",
                  userSelect: "none",
                  borderRadius: 2,
                  height: 40,
                  width: 40,
                  boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                  overflow: "hidden",
                  top: 0,
                  right: 0
                }}
              >
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%20018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                  style={{ height: 18, width: 18 }}
                />
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                  style={{ height: 18, width: 18 }}
                />
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                  style={{ height: 18, width: 18 }}
                />
              </button>
              <div
                draggable="false"
                className="gm-style-cc"
                style={{
                  userSelect: "none",
                  height: 14,
                  lineHeight: 14,
                  position: "absolute",
                  right: 0,
                  bottom: 0
                }}
              >
                <div
                  style={{
                    opacity: "0.7",
                    width: "100%",
                    height: "100%",
                    position: "absolute"
                  }}
                >
                  <div style={{ width: 1 }} />
                  <div
                    style={{
                      backgroundColor: "rgb(245, 245, 245)",
                      width: "auto",
                      height: "100%",
                      marginLeft: 1
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    paddingRight: 6,
                    paddingLeft: 6,
                    boxSizing: "border-box",
                    fontFamily: "Roboto, Arial, sans-serif",
                    fontSize: 10,
                    color: "rgb(68, 68, 68)",
                    whiteSpace: "nowrap",
                    direction: "ltr",
                    textAlign: "right",
                    verticalAlign: "middle",
                    display: "inline-block"
                  }}
                >
                  <a
                    target="_blank"
                    rel="noopener"
                    title="Report errors in the road map or imagery to Google"
                    href="https://www.google.com/maps/@-31.197,150.744,9z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3"
                    style={{
                      fontFamily: "Roboto, Arial, sans-serif",
                      fontSize: 10,
                      color: "rgb(68, 68, 68)",
                      textDecoration: "none",
                      position: "relative"
                    }}
                  >
                    Report a map error
                  </a>
                </div>
              </div>
              <div
                className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom"
                draggable="false"
                controlwidth={40}
                controlheight={81}
                style={{
                  margin: 10,
                  userSelect: "none",
                  position: "absolute",
                  bottom: 95,
                  right: 40
                }}
              >
                <div
                  className="gmnoprint"
                  controlwidth={40}
                  controlheight={81}
                  style={{ position: "absolute", left: 0, top: 0 }}
                >
                  <div
                    draggable="false"
                    style={{
                      userSelect: "none",
                      boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                      borderRadius: 2,
                      cursor: "pointer",
                      backgroundColor: "rgb(255, 255, 255)",
                      width: 40,
                      height: 81
                    }}
                  >
                    <button
                      draggable="false"
                      title="Zoom in"
                      aria-label="Zoom in"
                      type="button"
                      className="gm-control-active"
                      style={{
                        background: "none",
                        display: "block",
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        cursor: "pointer",
                        userSelect: "none",
                        overflow: "hidden",
                        width: 40,
                        height: 40,
                        top: 0,
                        left: 0
                      }}
                    >
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                        style={{ height: 18, width: 18 }}
                      />
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23333%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                        style={{ height: 18, width: 18 }}
                      />
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23111%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                        style={{ height: 18, width: 18 }}
                      />
                    </button>
                    <div
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: 30,
                        height: 1,
                        margin: "0px 5px",
                        backgroundColor: "rgb(230, 230, 230)",
                        top: 0
                      }}
                    />
                    <button
                      draggable="false"
                      title="Zoom out"
                      aria-label="Zoom out"
                      type="button"
                      className="gm-control-active"
                      style={{
                        background: "none",
                        display: "block",
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        cursor: "pointer",
                        userSelect: "none",
                        overflow: "hidden",
                        width: 40,
                        height: 40,
                        top: 0,
                        left: 0
                      }}
                    >
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                        style={{ height: 18, width: 18 }}
                      />
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                        style={{ height: 18, width: 18 }}
                      />
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                        style={{ height: 18, width: 18 }}
                      />
                    </button>
                  </div>
                </div>
                <div
                  className="gmnoprint"
                  controlwidth={40}
                  controlheight={40}
                  style={{ display: "none", position: "absolute" }}
                >
                  <div style={{ width: 40, height: 40 }}>
                    <button
                      draggable="false"
                      title="Rotate map 90 degrees"
                      aria-label="Rotate map 90 degrees"
                      type="button"
                      className="gm-control-active"
                      style={{
                        background: "none rgb(255, 255, 255)",
                        display: "none",
                        border: 0,
                        margin: "0px 0px 32px",
                        padding: 0,
                        position: "relative",
                        cursor: "pointer",
                        userSelect: "none",
                        width: 40,
                        height: 40,
                        top: 0,
                        left: 0,
                        overflow: "hidden",
                        boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                        borderRadius: 2
                      }}
                    >
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                        style={{ height: 18, width: 18 }}
                      />
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                        style={{ height: 18, width: 18 }}
                      />
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                        style={{ height: 18, width: 18 }}
                      />
                    </button>
                    <button
                      draggable="false"
                      title="Tilt map"
                      aria-label="Tilt map"
                      type="button"
                      className="gm-tilt gm-control-active"
                      style={{
                        background: "none rgb(255, 255, 255)",
                        display: "block",
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        cursor: "pointer",
                        userSelect: "none",
                        width: 40,
                        height: 40,
                        top: 0,
                        left: 0,
                        overflow: "hidden",
                        boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                        borderRadius: 2
                      }}
                    >
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                        style={{ width: 18 }}
                      />
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                        style={{ width: 18 }}
                      />
                      <img
                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                        style={{ width: 18 }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              fontWeight: 500,
              fontFamily: "Roboto, sans-serif",
              padding: "15px 25px",
              boxSizing: "border-box",
              top: 5,
              border: "1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: 5,
              left: "50%",
              maxWidth: 375,
              position: "absolute",
              transform: "translateX(-50%)",
              width: "calc(100% - 10px)",
              zIndex: 1
            }}
          >
            <div>
              <img
                alt=""
                src="https://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg"
                draggable="false"
                style={{
                  padding: 0,
                  margin: 0,
                  border: 0,
                  height: 17,
                  verticalAlign: "middle",
                  width: 52,
                  userSelect: "none"
                }}
              />
            </div>
            <div style={{ lineHeight: 20, margin: "15px 0px" }}>
              <span style={{ color: "rgba(0, 0, 0, 0.87)", fontSize: 14 }}>
                This page can't load Google Maps correctly.
              </span>
            </div>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ lineHeight: 16, verticalAlign: "middle" }}>
                    <a
                      href="https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&utm_medium=degraded&utm_campaign=billing#api-key-and-billing-errors"
                      target="_blank"
                      rel="noopener"
                      style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: 12 }}
                    >
                      Do you own this website?
                    </a>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <button className="dismissButton">OK</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2 className="contact-title">Get in Touch</h2>
        </div>
        <div className="col-lg-8">
          <form
            className="form-contact contact_form"
            action="contact_process.php"
            method="post"
            id="contactForm"
            noValidate="novalidate"
          >
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <textarea
                    className="form-control w-100"
                    name="message"
                    id="message"
                    cols={30}
                    rows={9}
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Message'"
                    placeholder=" Enter Message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control valid"
                    name="name"
                    id="name"
                    type="text"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter your name'"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control valid"
                    name="email"
                    id="email"
                    type="email"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter email address'"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="subject"
                    id="subject"
                    type="text"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Subject'"
                    placeholder="Enter Subject"
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <button
                type="submit"
                className="button button-contactForm boxed-btn"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-3 offset-lg-1">
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-home" />
            </span>
            <div className="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-tablet" />
            </span>
            <div className="media-body">
              <h3>+1 253 565 2365</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-email" />
            </span>
            <div className="media-body">
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Area End */}
</main>
<footer>
  <div className="footer-wrappper footer-bg">
    {/* Footer Start*/}
    <div className="footer-area footer-padding">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="single-footer-caption mb-30">
                {/* logo */}
                <div className="footer-logo mb-25">
                  {/* <a href="index.html"> */}
                  <Link to="/#">
                    <img src="assets/img/logo/logo2_footer.png" alt="" />
                  {/* </a> */}
                  </Link>
                </div>
                <div className="footer-tittle">
                  <div className="footer-pera">
                    <p>
                      The automated process starts as soon as your clothes go
                      into the machine.
                    </p>
                  </div>
                </div>
                {/* social */}
                <div className="footer-social">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://bit.ly/sai4ull">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Our solutions</h4>
                <ul>
                  <li>
                    <a href="#">Design &amp; creatives</a>
                  </li>
                  <li>
                    <a href="#">Telecommunication</a>
                  </li>
                  <li>
                    <a href="#">Restaurant</a>
                  </li>
                  <li>
                    <a href="#">Programing</a>
                  </li>
                  <li>
                    <a href="#">Architecture</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a href="#">Design &amp; creatives</a>
                  </li>
                  <li>
                    <a href="#">Telecommunication</a>
                  </li>
                  <li>
                    <a href="#">Restaurant</a>
                  </li>
                  <li>
                    <a href="#">Programing</a>
                  </li>
                  <li>
                    <a href="#">Architecture</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#">Design &amp; creatives</a>
                  </li>
                  <li>
                    <a href="#">Telecommunication</a>
                  </li>
                  <li>
                    <a href="#">Restaurant</a>
                  </li>
                  <li>
                    <a href="#">Programing</a>
                  </li>
                  <li>
                    <a href="#">Architecture</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* footer-bottom area */}
    <div className="footer-bottom-area">
      <div className="container">
        <div className="footer-border">
          <div className="row d-flex align-items-center">
            <div className="col-xl-12 ">
              <div className="footer-copy-right text-center">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End*/}
  </div>
</footer>
<div id="back-top">
  <a title="Go to Top" href="#">
    {" "}
    <i className="fas fa-level-up-alt" />
  </a>
</div>
</>

  );
}

export default Contact;
