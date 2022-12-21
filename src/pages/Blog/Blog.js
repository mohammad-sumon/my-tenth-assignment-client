import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div className="text-center">
      <h3 className="my-4" style={{ color: "orange" }}>
        Welcome to my Blog Section
      </h3>
      <Container className="mt-4">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is cors?</Accordion.Header>
            <Accordion.Body>
              CORS Stands for Cross-Origin Resource Sharing. It is an
              HTTP-header based mechanism that allows a server to indicate any
              origins (domain, scheme, or port) other than its own from which a
              browser should permit loading resources. CORS also relies on a
              mechanism by which browsers make a "preflight" request to the
              server hosting the cross-origin resource, in order to check that
              the server will permit the actual request. In that preflight, the
              browser sends headers that indicate the HTTP method and headers
              that will be used in the actual request. The Cross-Origin Resource
              Sharing standard works by adding new HTTP headers that let servers
              describe which origins are permitted to read that information from
              a web browser. Additionally, for HTTP request methods that can
              cause side-effects on server data (in particular, HTTP methods
              other than GET, or POST with certain MIME types), the
              specification mandates that browsers "preflight" the request,
              soliciting supported methods from the server with the HTTP OPTIONS
              request method, and then, upon "approval" from the server, sending
              the actual request. Servers can also inform clients whether
              "credentials" (such as Cookies and HTTP Authentication) should be
              sent with requests. CORS is implemented primarily in web browsers,
              but it can also be used in API clients as an option. It's present
              in all popular web browsers like Google Chrome, Firefox, Opera,
              and Safari. The standard has been accepted as a W3C Recommendation
              in January 2014. Based on that, we can assume that it is
              implemented in all currently available and other than listed web
              browsers.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Why am i using firebase? What other options do you have to
              implement authentication?
            </Accordion.Header>
            <Accordion.Body>
              I choose firebase because it's an Google product. I trust Google
              very much cz we all know that in the world Google has a vast and
              experienced lot of highly qualified develpers for exploring and
              problem solving. There is also many reasons for choosing firebase,
              cz it Reliable, Fast & Safe Hosting. Provides A Free Start to
              Newbies.Google Analytics. Firebase Cloud Messaging for
              Cross-Platform. Free Multi-Platform Firebase Authentication.
              Firebase Testing Services to Improve App Quality. Increment in
              Revenues with App Indexing API etc. <br />
              There are many other options as a alternate of firebase. Such as
              Back4App, Parse, AWS Amplify, backendless, supabase, appWrite,
              HASURA, deployd etc.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How does the private route work?
            </Accordion.Header>
            <Accordion.Body>
              The react private route component renders child components (
              children ) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property. It means Private Routes in React Router
              (also called Protected Routes) require a user being authorized to
              visit a route (read: page). So if a user is not authorized for a
              specific page, they cannot access it. The most common example is
              authentication in a React application where a user can only access
              the protected pages when they are authorized (which means in this
              case being authenticated). Authorization goes beyond
              authentication though. For example, a user can also have roles and
              permissions which give a user access to specific areas of the
              application.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What is Node? How does Node work?
            </Accordion.Header>
            <Accordion.Body>
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on a JavaScript Engine and executes
              JavaScript code outside a web browser, which was designed to build
              scalable network applications. <br />
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive. Several features make
              Node.js a popular choice for software architects. It is
              asynchronous, event-driven, and swift. It is also highly scalable
              even though it is single-threaded, and Node.js applications never
              buffer any data.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Blog;
