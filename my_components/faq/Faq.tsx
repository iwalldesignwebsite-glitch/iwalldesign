import { ShinyWord } from "../navbar/ShinyWord";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { CircleQuestionMark } from "lucide-react";
import FaqAnimateImage from "./FaqAnimateImage";
import Title from "../assets/Title";
import Container from "../assets/Container";

const content = {
  titleId: "najczęściej-zadawane-pytania",
  leadId: "najczęściej-zadawane-pytania-lead",
  description:
    "Nie jesteś pewien, czy druk UV to rozwiązanie dla Ciebie? Zebraliśmy odpowiedzi na najczęstsze pytania klientów, aby rozwiać Twoje wątpliwości.",
};

function Faq() {
  return (
    <section
      className="bg-white"
      aria-labelledby="najczęściej-zadawane-pytania"
      aria-describedby="najczęściej-zadawane-pytania-lead"
    >
      <Container>
        <Title
          titleId={content.titleId}
          lead={content.leadId}
          description={content.description}
        >
          Najczęściej zadawane <ShinyWord>pytania</ShinyWord>
        </Title>

        <div className="grid grid-cols-1 lg:grid-cols-2  justify-items-center gap-16  mt-16  ">
          <div className="w-full flex items-center">
            <FaqAnimateImage />
          </div>
          <div className="w-full  ">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full"
            >
              <AccordionItem value="item-1" className=" rounded-md  p-2">
                <AccordionTrigger className="  w-full hover:cursor-pointer text-black/90">
                  <h4 className="inline-flex items-center gap-4 ">
                    <CircleQuestionMark className="mt-0.5 h-5 w-5 shrink-0 " />
                    Czy druk UV jest trwały i odporny na uszkodzenia?
                  </h4>
                </AccordionTrigger>
                <AccordionContent className="text-black/70">
                  Tak, druk UV należy do najtrwalszych technologii druku
                  bezpośredniego dostępnych na rynku. Nadruki wykonane w tej
                  technice są odporne na promieniowanie UV, dzięki czemu nie
                  blakną nawet przy długiej ekspozycji na światło.
                  Charakteryzują się również wysoką odpornością na zarysowania,
                  ścieranie, wilgoć i zmiany temperatury.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className=" rounded-md p-2 ">
                <AccordionTrigger className="  w-full hover:cursor-pointer text-black/90">
                  <h4 className="inline-flex items-center gap-4 ">
                    <CircleQuestionMark className="mt-0.5 h-5 w-5 shrink-0" />
                    Ile czasu trwa realizacja zamówienia na druk UV?
                  </h4>
                </AccordionTrigger>
                <AccordionContent className="text-black/70">
                  Czas realizacji zamówienia zależy od stopnia skomplikowania
                  projektu i wielkości nakładu. Standardowo nadruki UV
                  wykonujemy w terminie od 2 do 5 dni roboczych. W przypadku
                  prostszych zleceń jesteśmy w stanie zrealizować zamówienie
                  nawet szybciej. Jeśli zależy Państwu na ekspresowej realizacji
                  – prosimy o kontakt, abyśmy mogli indywidualnie dopasować
                  harmonogram.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className=" rounded-md p-2 ">
                <AccordionTrigger className="  w-full hover:cursor-pointer text-black/90">
                  <h4 className="inline-flex items-center gap-4 ">
                    <CircleQuestionMark className="mt-0.5 h-5 w-5 shrink-0" />
                    Na jakim obszarze realizujecie usługi druku UV?
                  </h4>
                </AccordionTrigger>
                <AccordionContent className="text-black/70">
                  Nasza drukarnia UV obsługuje klientów głównie z Koszalina,
                  Kołobrzegu, Białogardu, Świdwina i okolic, ale w przypadku
                  większych projektów przyjmujemy zlecenia również z całego
                  regionu zachodniopomorskiego.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className=" rounded-md p-2 ">
                <AccordionTrigger className="  w-full hover:cursor-pointer text-black/90">
                  <h4 className="inline-flex items-center gap-4 ">
                    <CircleQuestionMark className="mt-0.5 h-5 w-5 shrink-0" />
                    Czy mogę zamówić nadruk UV z własnym projektem graficznym?
                  </h4>
                </AccordionTrigger>
                <AccordionContent className="text-black/70">
                  Tak, oczywiście! Realizujemy nadruki UV na podstawie projektów
                  graficznych dostarczonych przez klientów. Akceptujemy pliki w
                  popularnych formatach (m.in. PDF, JPG, PNG). Jeśli nie
                  posiadają Państwo gotowego projektu, nasi graficy mogą
                  przygotować profesjonalny design od podstaw lub dostosować
                  istniejące materiały do wymogów technologii druku UV.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className=" rounded-md p-2 ">
                <AccordionTrigger className="  w-full hover:cursor-pointer text-black/90">
                  <h4 className="inline-flex items-center gap-4 ">
                    <CircleQuestionMark className="mt-0.5 h-5 w-5 shrink-0" />
                    Czy druk UV jest bezpieczny i ekologiczny?
                  </h4>
                </AccordionTrigger>
                <AccordionContent className="text-black/70">
                  Tak, druk UV to nowoczesna technologia, która łączy wysoką
                  jakość z bezpieczeństwem i dbałością o środowisko. W procesie
                  druku wykorzystujemy specjalne tusze utwardzane światłem UV,
                  które nie zawierają szkodliwych rozpuszczalników i są
                  bezwonne. Dzięki temu nadruki UV są w pełni bezpieczne w
                  użytkowaniu, również we wnętrzach. Co więcej, technologia UV
                  ogranicza zużycie energii i materiałów, dlatego jest przyjazna
                  ekologicznie.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className=" rounded-md p-2 ">
                <AccordionTrigger className="  w-full hover:cursor-pointer text-black/90">
                  <h4 className="inline-flex items-center gap-4 ">
                    <CircleQuestionMark className="mt-0.5 h-5 w-5 shrink-0" />
                    Czy nadruki UV są odporne na warunki zewnętrzne?
                  </h4>
                </AccordionTrigger>
                <AccordionContent className="text-black/70">
                  Tak, nadruki wykonane technologią UV cechuje wyjątkowa
                  trwałość i odporność na warunki atmosferyczne. Są odporne na
                  działanie promieniowania słonecznego, deszczu, wilgoci oraz
                  zmiany temperatury. Nie blakną, nie ścierają się i zachowują
                  estetyczny wygląd przez długi czas, nawet przy ekspozycji na
                  zewnątrz. To idealne rozwiązanie dla szyldów, tablic
                  informacyjnych i reklam montowanych na otwartej przestrzeni.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className=" rounded-md p-2 ">
                <AccordionTrigger className="  w-full hover:cursor-pointer text-black/90">
                  <h4 className="inline-flex items-center gap-4 ">
                    <CircleQuestionMark className="mt-0.5 h-5 w-5 shrink-0" />
                    Jak przygotować pliki do druku UV?
                  </h4>
                </AccordionTrigger>
                <AccordionContent className="text-black/70">
                  Pliki do druku UV najlepiej przygotować w formacie PDF, JPG,
                  lub PNG, w przestrzeni barwnej CMYK i rozdzielczości minimum
                  300 dpi. Warto także pamiętać o odpowiednich spadach
                  (najczęściej 3–5 mm). Jeśli nie mają Państwo doświadczenia w
                  przygotowaniu plików do druku, nasz zespół chętnie doradzi lub
                  dostosuje projekt, aby uzyskać najwyższą jakość nadruku.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className=" rounded-md p-2 ">
                <AccordionTrigger className="  w-full hover:cursor-pointer text-black/90">
                  <h4 className="inline-flex items-center gap-4 ">
                    <CircleQuestionMark className="mt-0.5 h-5 w-5 shrink-0" />
                    Czy mogę zamówić próbkę nadruku UV przed większym nakładem?
                  </h4>
                </AccordionTrigger>
                <AccordionContent className="text-black/70">
                  Tak, istnieje możliwość wykonania próbki nadruku UV, aby
                  sprawdzić jakość i kolorystykę projektu przed realizacją
                  pełnego zamówienia. To rozwiązanie szczególnie polecane przy
                  dużych zleceniach lub nietypowych materiałach. Dzięki temu
                  mają Państwo pewność, że efekt końcowy spełni wszystkie
                  oczekiwania.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Faq;
