import ColourPlaceholder from "@/components/Placeholders/ColourPlaceholder";
import CustomBlur from "@/components/Placeholders/CustomBlur";
import DefaultBlur from "@/components/Placeholders/DefaultBlur";
import DynamicBlur from "@/components/Placeholders/DynamicBlur";
import DynamicColourPlaceholder from "@/components/Placeholders/DynamicColourPlaceholder";
import FadeInPlaceholder from "@/components/Placeholders/FadeInPlaceholder";
import SlidePlaceholder from "@/components/Placeholders/SlidePlaceholder";

export default function Placeholders() {

    return (
      <main className="flex flex-col items-center justify-start w-full gap-[5rem] py-[5rem]">
        <DefaultBlur/>
        <CustomBlur/>
        <ColourPlaceholder/>
        <DynamicBlur/>
        <DynamicColourPlaceholder/>
        <FadeInPlaceholder/>
        <SlidePlaceholder/>
      </main>
    );
}