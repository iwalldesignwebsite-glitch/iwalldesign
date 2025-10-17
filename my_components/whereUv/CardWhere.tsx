import { LucideIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

const CardWhere = ({ image, title, description, Icon }: Props) => {
  return (
    <div className="border-2 rounded-md overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 duration-75">
      <figure className="relative    overflow-hidden">
        <div className="relative aspect-[5/2] lg:aspect-[5/3] xl:aspect-[5/2] w-full hover:scale-105 duration-200">
          <Image
            src={image}
            alt="Zespół WallDesign obsługuje maszynę do druku UV"
            fill
            priority
            className="object-cover "
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>
        <div className="absolute left-3 top-3 rounded-md bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur xl:px-2 ">
          <Icon className="w-4 aspect-square xl:w-6 " />
        </div>
      </figure>
      <div className="p-5 space-y-2">
        <h3 className="font-semibold text-xl xl:text-xl ">{title}</h3>
        <p className="text-black/70">{description}</p>
      </div>
    </div>
  );
};

export default CardWhere;
