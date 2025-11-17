import notAloneImage from "@/assets/not-alone-image.webp";

const NotAloneSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              You Are Not Alone
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Eating disorders and body image struggles can affect anyone—adolescents, adults, and people of all gender identities and backgrounds, including those in the LGBTQiA+ community. Your experiences and challenges are valid and deserve compassionate support.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={notAloneImage}
              alt="Two people sitting together in supportive conversation, representing compassionate care and understanding in eating disorder recovery"
              className="rounded-lg shadow-xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotAloneSection;
