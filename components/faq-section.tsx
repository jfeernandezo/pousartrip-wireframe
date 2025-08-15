import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    id: "item-1",
    question: "Como acompanhar o andamento da minha passagem?",
    answer:
      "Você pode acompanhar sua reserva através do nosso site ou aplicativo, usando o código de reserva enviado por email. Também enviamos atualizações automáticas sobre mudanças no seu voo.",
  },
  {
    id: "item-2",
    question: "Quais meios estão incluídos na minha passagem?",
    answer:
      "Nossas passagens incluem bagagem de mão padrão, assento econômico e todas as taxas obrigatórias. Serviços extras como bagagem despachada, seleção de assento e refeições podem ser adicionados conforme sua necessidade.",
  },
  {
    id: "item-3",
    question: "É seguro comprar passagens pela PousarTrip?",
    answer:
      "Sim, somos uma agência licenciada e certificada. Utilizamos conexões seguras para todas as transações e trabalhamos apenas com companhias aéreas reconhecidas. Seus dados pessoais e financeiros estão protegidos.",
  },
  {
    id: "item-4",
    question: "Como é feita a emissão da passagem?",
    answer:
      "Após a confirmação do pagamento, emitimos sua passagem em até 2 horas úteis. Você receberá o bilhete eletrônico por email, que deve ser apresentado no aeroporto junto com um documento de identidade.",
  },
  {
    id: "item-5",
    question: "O que acontece se a companhia cancelar o voo?",
    answer:
      "Em caso de cancelamento pela companhia aérea, você tem direito a reacomodação em outro voo ou reembolso integral. Nossa equipe te auxilia em todo o processo e busca as melhores alternativas disponíveis.",
  },
  {
    id: "item-6",
    question: "Como é feita a emissão da passagem cancelada?",
    answer:
      "Para cancelamentos, verificamos as regras tarifárias da sua passagem. Dependendo do tipo de tarifa, pode haver taxa de cancelamento. Processamos o reembolso conforme as condições da companhia aérea, que pode levar de 7 a 30 dias úteis.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dúvidas <span className="text-[#1e3a8a]">Frequentes</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossos serviços
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-gray-200 rounded-lg px-6 py-2 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#1e3a8a] transition-colors duration-200 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ainda tem dúvidas?</h3>
            <p className="text-white/90 mb-6">Nossa equipe está pronta para te ajudar com qualquer questão</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#1e3a8a] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Falar no WhatsApp
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1e3a8a] transition-colors duration-200">
                Enviar Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
