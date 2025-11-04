import { CircleQuestionMark } from "lucide-react";
import { ShinyWord } from "../navbar/ShinyWord";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqAnimateImage from "./FaqAnimateImage";
import Title from "../assets/Title";
import Container from "../assets/Container";

const content = {
  titleId: "najczesciej-zadawane-pytania", 
  leadId: "najczesciej-zadawane-pytania-lead",
  description:
    "Nie jesteś pewien, czy druk UV to rozwiązanie dla Ciebie? Zebraliśmy odpowiedzi na najczęstsze pytania klientów, aby rozwiać Twoje wątpliwości.",
};

const faqs = [
  {
    q: "Czy druk UV jest trwały i odporny na uszkodzenia?",
    a: "Tak, druk UV należy do najtrwalszych technologii druku bezpośredniego. Nadruki są odporne na promieniowanie UV, zarysowania, ścieranie, wilgoć i wahania temperatur.",
  },
  {
    q: "Ile czasu trwa realizacja zamówienia na druk UV?",
    a: "Standardowo 2–5 dni roboczych, zależnie od złożoności projektu i nakładu. W przypadku prostszych zleceń realizujemy szybciej — skontaktuj się z nami, aby ustalić ekspresowy termin.",
  },
  {
    q: "Na jakim obszarze realizujecie usługi druku UV?",
    a: "Koszalin, Kołobrzeg, Białogard, Świdwin i cały region zachodniopomorski. Większe projekty realizujemy także na terenie całej Polski.",
  },
  {
    q: "Czy mogę zamówić nadruk UV z własnym projektem graficznym?",
    a: "Oczywiście. Akceptujemy popularne formaty (PDF, JPG, PNG). Możemy też przygotować projekt od podstaw lub dostosować Twój do wymogów technologii.",
  },
  {
    q: "Czy druk UV jest bezpieczny i ekologiczny?",
    a: "Tak. Używamy tuszy utwardzanych światłem UV — bez rozpuszczalników i bezwonnych, więc bezpiecznych do wnętrz. Technologia dodatkowo ogranicza zużycie energii i materiałów.",
  },
  {
    q: "Czy nadruki UV nadają się na zewnątrz?",
    a: "Tak. Są odporne na warunki atmosferyczne, dlatego świetnie sprawdzają się na szyldach i tablicach zewnętrznych — nie blakną i nie zdzierają się.",
  },
  {
    q: "Jak przygotować pliki do druku UV?",
    a: "Najlepiej w PDF/JPG/PNG, CMYK, min. 300 dpi, z odpowiednimi spadami (3–5 mm). Jeśli potrzeba — doradzimy lub przygotujemy plik pod druk.",
  },
  {
    q: "Czy mogę zamówić próbkę druku UV?",
    a: "Tak. Próbka pozwala sprawdzić jakość i kolorystykę przed większym nakładem.",
  },
];

function Faq() {
  return (
    <section
      className="bg-white content-visibility-auto"
      id="faq"
      aria-labelledby={content.titleId}
      aria-describedby={content.leadId}
    >
      <Container>
        <Title
          titleId={content.titleId}
          lead={content.leadId}
          description={content.description}
        >
          Najczęściej zadawane <ShinyWord>pytania</ShinyWord>
        </Title>

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-16 mt-16">
          <div className="w-full flex items-center">
            <FaqAnimateImage />
          </div>

          <div className="w-full">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full"
            >
              {faqs.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i + 1}`}
                  className="rounded-md p-2"
                >
                  <AccordionTrigger className="w-full hover:cursor-pointer text-black/90">
                    <span className="inline-flex items-center gap-4">
                      <CircleQuestionMark
                        className="mt-0.5 h-5 w-5 shrink-0"
                        aria-hidden="true"
                      />
                      {item.q}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="text-black/70">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Faq;
