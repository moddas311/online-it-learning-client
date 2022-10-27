import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className='mt-5 sm:overflow-hidden'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. How Can I Join Your Team?</Accordion.Header>
                    <Accordion.Body>
                        If you want to join with us and you're interested to do our course.
                        at first you should registration our Online IT Learning page.
                        An HTML element is set off from other text in a document by "tags", which consist of the element name surrounded by The name of an element inside a tag is case insensitive. That is, it can be written in uppercase, lowercase, or a mixture. For example, the tag can be written in any other way. However, the convention and recommended practice is to write tags in lowercase.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        2. Tell About Your type of Courses.
                    </Accordion.Header>
                    <Accordion.Body>
                        We're stating with 6 courses like HTML5, CSS3, Bootstrap, JavaScrip, React and Firebase if you want to be a developer then you should try our course.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is the requirement for this course?</Accordion.Header>
                    <Accordion.Body>
                        You don't need to know anything before learning web development.

                        It doesn't matter where you stand with your education. Even if you are a college drop-out or you do not know anything about Internet, you can still learn web development.

                        There are a lot of things that can help you learn web development faster, like math, algorithms, networking, good logic, analytic thinking, graphic design, etc. None of these are required for you to learn web development.

                        If you even think that you should go to learn something else in order to be able to learn web development, you make a mistake. You will learn the other things on the way. You will learn algorithms while you learn web development. You can build a whole website without writing a single algorithm.

                        If you try to learn something else that will "prepare" you for learning web development, you are only wasting your time and you will end up knowing other things that will make you more confused about web development. Learning those before will probably change your mind about web development and try to pursue other skills, which will be good if that skill will suit your personality better. However, be aware of the "next shiny thing" syndrome. If you try to go for a skill and then you jump to another and another then you will never learn anything. If you decided that you would like to do web development, then stick with it.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>4. If you have more Question !</Accordion.Header>
                    <Accordion.Body>
                        <h5>Contact with us</h5>
                        email:onlineit@gmail.com
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <h3 className='text-primary text-center mt-5'>Thanks For Your Time</h3>

        </div>
    );
};

export default Faq;