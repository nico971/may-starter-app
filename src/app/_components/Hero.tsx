import { Code } from "./Code";
import { LinkeIn } from "./icons/LinkeIn";
import { Section } from "./Section";

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary">Nico</h2>
                <h3 className="text-3xl font-caption">Dev Ops Engineer</h3>
                <a href="https://youtube.com" className="text-base" > I love creating content on {" "}
                    <Code className="inline-flex items-center gap-1">
                        <LinkeIn size={16} className="inline"/>Youtube
                    </Code>
                </a>
            </div>
            <div className="flex-[2] w-full max-md:m-auto ml-auto">
                <img 
                src="https://www.format.com/wp-content/uploads/portrait_of_black_man.jpg" 
                className="w-full max-w-xs h-80 rounded-full max-md:w-56"
                alt="Nico's picture" />
            </div>
        </Section>
    );
};
