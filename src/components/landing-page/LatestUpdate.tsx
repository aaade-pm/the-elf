import { useRef } from "react";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import RoundButton from "../common/RoundButton";
import newsImage from "../../assets/images/theelf-news.webp";

interface LatestUpdate {
  image: string;
  date: string;
  title: string;
  description: string;
}

const latestUpdates: LatestUpdate[] = [
  {
    image: newsImage,
    date: "December 20, 2024",
    title: "Event Highlights",
    description:
      "Check out the highlights from our recent events! Join the fun!",
  },
  {
    image: newsImage,
    date: "December 20, 2024",
    title: "Event Highlights",
    description:
      "Check out the highlights from our recent events! Join the fun!",
  },
  {
    image: newsImage,
    date: "December 20, 2024",
    title: "Event Highlights",
    description:
      "Check out the highlights from our recent events! Join the fun!",
  },
  {
    image: newsImage,
    date: "December 20, 2024",
    title: "Event Highlights",
    description:
      "Check out the highlights from our recent events! Join the fun!",
  },
  {
    image: newsImage,
    date: "December 20, 2024",
    title: "Event Highlights",
    description:
      "Check out the highlights from our recent events! Join the fun!",
  },
  {
    image: newsImage,
    date: "December 20, 2024",
    title: "Event Highlights",
    description:
      "Check out the highlights from our recent events! Join the fun!",
  },
  {
    image: newsImage,
    date: "December 20, 2024",
    title: "Event Highlights",
    description:
      "Check out the highlights from our recent events! Join the fun!",
  },
  {
    image: newsImage,
    date: "December 20, 2024",
    title: "Event Highlights",
    description:
      "Check out the highlights from our recent events! Join the fun!",
  },
  {
    image: newsImage,
    date: "December 20, 2024",
    title: "Event Highlights",
    description:
      "Check out the highlights from our recent events! Join the fun!",
  },
];

const LatestUpdate = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="h-screen w-screen px-10 py-[2%] flex flex-col gap-10">
        <p className="text-6xl font-thin">Latest Updates</p>
        <div
          ref={scrollContainerRef}
          className="h-[78%] w-full flex justify-center place-items-center gap-10 overflow-y-hidden overflow-x-scroll no-scrollbar"
        >
          {latestUpdates?.map((update, index) => (
            <div
              key={index}
              className="card flex-shrink-0 w-[450px] h-full border-[3px] border-black rounded-[0.9rem]"
            >
              <div
                style={{
                  backgroundImage: `url(${update?.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderTopLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                }}
                className="h-[40%]"
              ></div>
              <div className="h-[60%] w-full flex flex-col gap-6 bg-primary-100 border-t-[3px] border-black font-thin text-white px-5 py-6 rounded-b-xl">
                <p className="text-2xl text-secondary-500">{update?.date}</p>
                <p className="text-5xl">{update?.title}</p>
                <p className="text-2xl">
                  {update?.description.slice(0, 250)}...
                </p>
                <div className="w-full flex justify-end place-items-center">
                  <RoundButton
                    icon={<LuMoveRight color="black" size={24} />}
                    bg="bg-white"
                    width="50px"
                    height="50px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="navigation h-[10%] w-full flex justify-between place-items-center">
          <RoundButton
            icon={<LuMoveLeft color="black" size={24} />}
            bg="bg-white"
            width="60px"
            height="60px"
            onClick={scrollLeft}
          />
          <RoundButton
            icon={<LuMoveRight color="black" size={24} />}
            bg="bg-white"
            width="60px"
            height="60px"
            onClick={scrollRight}
          />
        </div>
      </section>
    </>
  );
};

export default LatestUpdate;
