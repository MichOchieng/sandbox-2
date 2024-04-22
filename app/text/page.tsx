import GradientParagraph from "@/components/TextAnimations/GradientParagraph";

const paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

export default function Text() {

    return (
      <main className="flex flex-col items-center justify-start w-full gap-[5rem] py-[5rem] bg-black text-white">
        <h1 className="">Scroll down</h1>
        <span className="mt-[80vh]"/>
        <GradientParagraph paragraph={paragraph}/>
      </main>
    );
}