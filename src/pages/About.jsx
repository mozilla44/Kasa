import "./../styles/css/about.css";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import "./../styles/css/footer.css"

function About() {
  return (
    <div className="about-wrapper">
      <Banner imgSrc={"/assets/about_banner.png"} extraClass="about-banner" />
      <div className="about-collapse-wrapper">
          <Collapse extraClass={"about-collapse"}
            title={"Fiabilité"}
            description={
              "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            }
          />
          <Collapse extraClass={"about-collapse"}
            title={"Respect"}
            description={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />
          <Collapse extraClass={"about-collapse"}
            title={"Service"}
            description={
              "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            }
          />
          <Collapse extraClass={"about-collapse"}
            title={"Sécurité"}
            description={
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            }
          />
      </div>
    </div>
  );
}

export default About;
