import Image from "next/image";
import styles from "../styles/ExperienceCard.module.css";

interface ExperienceCardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export default function ExperienceCard({
  icon,
  title,
  description,
  image,
}: ExperienceCardProps) {
  return (
    <div className={styles.card}>
      {/* Icon */}
      <div className={styles.iconContainer}>
        <Image
          src={icon}
          alt="icon"
          width={60}
          height={60}
          className={styles.iconImg}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.bottomImageWrapper}>
        <Image
          src={image}
          alt={title}
          className={styles.bottomImage}
          width={247.1}
          height={188.17}
          style={{ objectFit: "cover", borderRadius: "0.75rem" }}
        />
      </div>
    </div>
  );
}
