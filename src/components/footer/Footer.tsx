import iconDiscord from '../../assets/images/icon_discord.png'
import iconInstagram from '../../assets/images/icon_instagram.png'
import iconTech from '../../assets/images/tech_logos.png'
const Footer = () =>{
    return(
        <footer className="h-auto bg-gray-light text-blue-800 py-6">
        <section className="flex flex-wrap items-center justify-center">
          <article className="w-full md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
            <div className="text-center md:text-left">
              <h1 className="text-blue-light font-ow text-3xl md:text-4xl mb-4">SIGA-NOS</h1>
              <p className="text-lg font-bold w-full md:w-6/10 mx-auto md:mx-0 mb-4">
                Siga nossas comunidades e canais de divulgação.
              </p>
              <div className="flex justify-center md:justify-start">
                <a className="mr-7" href="#"><img src={iconDiscord} alt="Discord" /></a>
                <a href="#"><img src={iconInstagram} alt="Instagram" /></a>
              </div>
            </div>
          </article>
          <article className="w-full md:w-1/3 flex justify-center items-center">
            <div className="text-center md:text-left">
              <h1 className="text-blue-light font-ow text-3xl md:text-4xl mb-4">DEVELOPED</h1>
              <p className="text-lg font-bold w-full md:w-6/10 mx-auto md:mx-0 mb-4">
                Node React, TypeScript and Tailwind CSS.
              </p>
              <div className="flex justify-center md:justify-start">
                <img src={iconTech} alt="Tech Icons" />
              </div>
            </div>
          </article>
        </section>
        <section className="text-center font-bold mt-6">
          <p>© 2025 PixelAzul - developed by santtdev</p>
        </section>
      </footer>
      
    )
}

export default Footer