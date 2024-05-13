import ColourPlaceholder from "@/components/Placeholders/ColourPlaceholder";
import CustomBlur from "@/components/Placeholders/CustomBlur";
import DefaultBlur from "@/components/Placeholders/DefaultBlur";
import DynamicBlur from "@/components/Placeholders/DynamicBlur";
import DynamicColourPlaceholder from "@/components/Placeholders/DynamicColourPlaceholder";
import FadeInPlaceholder from "@/components/Placeholders/FadeInPlaceholder";
import Pixelated from "@/components/Placeholders/Pixelated";
import SlidePlaceholder from "@/components/Placeholders/SlidePlaceholder";
import SlideUp from "@/components/buttons/SlideUp";

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
        <Pixelated/>
        <SlideUp text="Button"/>
      </main>
    );
}