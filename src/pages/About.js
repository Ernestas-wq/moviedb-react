import React from 'react';
import Typewriter from 'typewriter-effect';
import { AiFillTwitterCircle, AiFillYoutube, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import bg from '../assets/images/bg-2.jpg';
const About = () => {
  return (
    <>
      <header style={{ backgroundImage: `url(${bg})`, height: '47vh' }}>
        <div className="header">
          <h1>
            <Typewriter
              options={{
                strings: ['THE ABOUT PAGE'],
                autoStart: true,
                loop: true,
              }}
            />
            <div className="header__blink"></div>
          </h1>
        </div>
      </header>
      <main className="about">
        <h2>Hi, this is the movie db...</h2>
        <article className="about__container">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio voluptates,
            ducimus ullam voluptate sed ea, laboriosam consequatur commodi excepturi autem explicabo
            incidunt ab. Rem illo officia facere earum exercitationem!Neque tenetur quaerat enim,
            accusamus ducimus, id recusandae numquam voluptate ea velit hic sed nisi obcaecati illum
            unde. Iste quas maxime harum sapiente obcaecati minus quod veniam tempore at nobis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente eveniet impedit
            provident delectus voluptatibus nihil! Voluptates mollitia quidem nobis iusto obcaecati
            ipsa quod excepturi ex cum doloremque, ad fugit!Neque ratione temporibus vel, maxime
            tempore assumenda doloremque excepturi quis blanditiis, dolore doloribus reprehenderit
            perspiciatis amet corrupti exercitationem, itaque voluptate aliquam voluptatum inventore
            ex. Fuga omnis ipsam culpa fugit quaerat? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perferendis doloremque officiis doloribus officia ipsum tempora
            laudantium ad odit laborum voluptatem, similique obcaecati veniam maiores ipsam quae
            aut, esse, dolor suscipit.Aut quis enim obcaecati doloribus natus quibusdam explicabo
            magni. Laboriosam mollitia at laborum earum error minima sapiente, iste, illo dolorum
            suscipit quae. Temporibus voluptatum pariatur quaerat dolorem adipisci harum fugiat!
          </p>
          <div className="about__bottom">
            <button className="btn">Contact Us</button>
            <div className="about__media">
              <a href="https://github.com/Ernestas-wq/" target="_blank">
                <AiFillGithub />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <AiFillYoutube />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://www.linkedin.com/in/ernestas-lak%C5%A1tinis-1334241bb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjITOZGWZS7CRCyYvqWq5BA%3D%3D"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default About;
