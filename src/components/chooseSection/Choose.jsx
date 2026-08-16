import { useEffect, useState } from "react";
import ChooseCard from "../../ui/ChooseCard";

const Choose = () => {
    const [chooseData, setChooseData] = useState([]);

    useEffect(() => {
        fetch("/chooseData.json")
            .then((res) => res.json())
            .then((data) => setChooseData(data));
    }, []);

    return (
        <section className="my-container my-[clamp(7rem,6vw,7.5rem)]">
            {/* heading  */}
            <h2 className="text-[clamp(2.75rem,5vw,3rem)] font-bold mb-2 text-center">
                Get Started in 3 Steps
            </h2>
            <p className="text-sm text-gray-400 mb-8 text-center">
                Start using premium digital tools in minutes, not hours.
            </p>

            {/* card */}
            <div className="grid gap-10 lg:grid-cols-3 md:gap-7 lg:gap-10">
                {chooseData.map((details) => (
                    <ChooseCard key={details.id} details={details}></ChooseCard>
                ))}
            </div>
        </section>
    );
};

export default Choose;
