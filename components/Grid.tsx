import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(({ id, className, description, img, imgClassName, spareImg, title ,titleClassName}, i) => (
          <BentoGridItem
            id={id}
            key={i}
            title={title}
            description={description}
            // remove icon prop
            // remove original classname condition
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;