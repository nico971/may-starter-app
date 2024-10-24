import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkeIn } from "../_components/icons/LinkeIn";
import { Section } from "./Section";

export const Header = () => {
    return (
        <header className="sticky top-0">
            <Section className="flex items-baseline py-4">
                <h1 className="text-lg font-bold">
                    Nico Dev Portfolio
                </h1>
                <div className="flex-1"/>
                <ul>
                    <a href="https://www.linkedin.com" className={cn(buttonVariants({variant:"outline"}),"size-6 p-0")}>
                        <LinkeIn size={12} className="text-foreground"/>
                    </a>
                </ul>
            </Section>
        </header>
    );
};
