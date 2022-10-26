import React from 'react';

const Blog = () => {
    return (
        <div className='overflow-hidden bg-muted text-info mt-5'>
            <div className="card mb-2 ">
                <div className="card-body">
                    <h5 className='text-danger'>1. What is Cors?</h5>
                    <p>ross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                        An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

                        For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
                </div>
            </div>
            <div className="card mb-2 ">
                <div className="card-body">
                    <h5 className='text-danger'>2. Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p>Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Cross-Platform Solutions. Build Extraordinary Apps. Customize Your App.

                        If you're a big company with the necessary infrastructure to ensure data security and compliance, then you probably don't need a 3rd-party solution.

                        But it's quite the opposite if:

                        This isn't your domain of expertise.
                        You're a startup or simply can't bear the financial overhead.
                        You can't ensure the proper data management and security.
                        A data breach can break your organization.
                        So, don't make pizza if you aren't Dominos. Chances are you'll spoil it.

                        But since user data is a lot more serious than wasting a pepperoni pizza, let's check out some user authentication platforms. And while an average business person will straightaway run towards Auth0 or Firebase, there are others as well.</p>
                </div>
            </div>
            <div className="card mb-2 ">
                <div className="card-body">
                    <h5 className='text-danger'>3. How does private Route Work?</h5>
                    <p>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.

                        The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.</p>
                </div>
            </div>
            <div className="card mb-2 ">
                <div className="card-body">
                    <h5 className='text-danger'>4. What is Node? How does Node work?</h5>
                    <p>Whenever a client requests something from the client side of the application what happens is , the request is first sent to the server and then in that server some processing or calculations goes on for the validation of the client side request and after doing all such validation a response is sent to the client side. Basically for doing all such calculations and processing , this NodeJs framework of JavaScript is used.
                        If we talk about any application then the part with which the user is interacting is basically the frontend of our website whereas there are many things which happen in the background or in the backend of our website. Basically there are three parts of any application, one is Frontend with which the users are interacting, then comes to the backend server and backend database. For backend servers we can use NodeJS, Java, Python, etc. and for backend databases we use relational or non-relational databases.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;