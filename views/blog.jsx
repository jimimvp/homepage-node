import React from "react";
import Layout from "./layout";


export default class Blog extends React.Component {


    render() {

        return (
        <Layout>
        <header className="intro-header" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="site-heading">
                            <h1>Clean Blog</h1>
                            <hr className="small" />
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">
                                Man must explore, and this is exploration at its greatest
                            </h2>
                            <h3 className="post-subtitle">
                                Problems look mighty small from 150 miles up
                            </h3>
                        </a>
                        <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 24, 2014</p>
                    </div>
                    <hr />
                    <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">
                                I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
                            </h2>
                        </a>
                        <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 18, 2014</p>
                    </div>
                    <hr />
                    <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">
                                Science has not yet mastered prophecy
                            </h2>
                            <h3 className="post-subtitle">
                                We predict too much for the next year and yet far too little for the next ten.
                            </h3>
                        </a>
                        <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on August 24, 2014</p>
                    </div>
                    <hr />
                    <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">
                                Failure is not an option
                            </h2>
                            <h3 className="post-subtitle">
                                Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                            </h3>
                        </a>
                        <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on July 8, 2014</p>
                    </div>
                    <hr />

                    <ul className="pager">
                        <li className="next">
                            <a href="#">Older Posts &rarr;</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <hr />

        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <ul className="list-inline text-center">
                            <li>
                                <a href="#">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <p className="copyright text-muted">Copyright &copy; Your Website 2016</p>
                    </div>
                </div>
            </div>
        </footer>
        </Layout>
            )



    }



}