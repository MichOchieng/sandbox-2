import ColourPlaceholder from "@/components/Placeholders/ColourPlaceholder";
import CustomBlur from "@/components/Placeholders/CustomBlur";
import DefaultBlur from "@/components/Placeholders/DefaultBlur";

export default function Placeholders() {

    return (
      <main className="flex flex-col items-center justify-start w-full gap-[5rem] py-[5rem]">
        <DefaultBlur/>
        <CustomBlur/>
        <ColourPlaceholder/>
      </main>
    );
}