import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import Image from "next/image";

export function Services({ object }: HomeProps) {
  return (
    <>
      <section className={styles.containerAbout}>
        <article className={styles.innerAbout}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{object.metadata.about.description}</p>
        </article>

        <div className={styles.bannerAbout}>
          <Image
            className={styles.imageAbout}
            alt="Imagem ilustrativa"
            src={object.metadata.about.banner.url}
            quality={100}
            fill={true}
          />
        </div>
      </section>

      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>

      <section className={styles.services}>

        {object.metadata.services.map((service) => (
          <article key={service.description} className={styles.service}>

            <div className={styles.innerService}>
              <Image
                className={styles.imageService}
                alt="Imagem do serviço"
                src={service.image.url}
                quality={100}
                fill={true}
              />
            </div>
            
            <p>{service.description}</p>
          </article>
        ))}

      </section>
    </>
  );
}