import { Badge } from "@/components/ui/badge";
import { NodeLogo } from "./icons/NodeLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { Section } from "./Section";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Skills</Badge>
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    I lOVE WORKING ON ...
                </h2>
            <div className="flex max-md:flex-col gap-4 flex-1">
                <div className="flex flex-col gap-2">
                <NodeLogo size={42} color="green" className="animate-spin" style={{animationDuration:"10s"}}/>
                <h3 className="text-2xl font-semibold tracking-tight">Node JS</h3>
                <p className="text-sm text-muted-foreground">My main programing language</p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                <ReactLogo size={42} color="cyan" className="animate-spin" style={{animationDuration:"10s"}}/>
                <h3 className="text-2xl font-semibold tracking-tight">React</h3>
                <p className="text-sm text-muted-foreground">My main programing language</p>
                </div>
          </div>
        </Section>
    );
};
