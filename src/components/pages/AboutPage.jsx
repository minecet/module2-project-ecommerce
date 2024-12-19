import'./AboutPage.css';

const AboutPage = ()=> {
   
    return(
    <div className="bodyAbout">
       <h1>AboutPage</h1>

       <div className='introductionBox'>
        <p>Welcome to our E-commerce Project, crafted with passion by Mine and Patricio! 

This project showcases a fully functional e-commerce website with a sleek, user-friendly interface. Here’s what makes it stand out:

Dynamic Product Management: Explore a comprehensive list of products where users can effortlessly interact. You can create, edit, and delete products, making it versatile and practical for any e-commerce platform.

Multi-page Design:

Main Page: Displays the full product catalog, inviting users to manage and engage with the items.
About Page: A thoughtfully designed section that provides a brief overview of the project and introduces the developers behind the scenes.
Every line of code and design choice reflects our collaborative effort and dedication to delivering an intuitive and polished experience. We hope you enjoy exploring it as much as we enjoyed creating it! 
        </p>
       </div>
    <div className='boxProfile'>
        <h3>Mine Profile</h3>
        <p> <strong>Linkedin:</strong> linkedin.com/in/mine-cetinkaya</p>
        <p> <strong>GitHub:</strong> github.com/minecet</p>
    </div> 
    <div className='boxProfile'>
    <h3>Patricio Profile</h3>
    <p> <strong>Linkedin:</strong>linkedin.com/in/patricio-andr%C3%A9s-arellano-79b6022b4/</p>
    <p> <strong>GitHub:</strong>github.com/patoare</p>
    </div>

    </div>
    )
}
export default AboutPage;