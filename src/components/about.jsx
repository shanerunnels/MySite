import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am first a husband to my wonderful wife, Erica. We've been married over five years now, and it's been a blast! I'm also a graduate from Vanderbilt University's Full Stack Coding Bootcamp. That is, of course, where I learned how to do the stuff I do now.</p>
                    <p>My hobbies are coding (duh), hanging out with my wife, our dog, and our cat. I also like playing video games, fishing, smoking cigars, and drinking whiskey.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Here's some stuff I can do</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                {/* <span className="icon">
                    <i className="icon-bulb" />
                </span> */}
                <div className="desc">
                    <h3>Front End </h3>
                    <p>I work with HTML/CSS, Javascript, and jQuery all the time in my current role. I really love working with React, as well!</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                {/* <span className="icon">
                    <i className="icon-phone3" />
                </span> */}
                <div className="desc">
                    <h3>Back end</h3>
                    <p>In my bootcamp I learned MySQL, Sequelize, and MongoDB. I enjoy working with MongoDB the most because of the flexibility; but there are downsides to that as well.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                {/* <span className="icon">
                    <i className="icon-data" />
                </span> */}
                <div className="desc">
                    <h3>googling</h3>
                    <p>Let's be honest... What is a coder other than a glorified 'googler'? Is 'googler' a word? Let's google it!</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
