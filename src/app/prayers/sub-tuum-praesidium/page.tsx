import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sub Tuum Praesidium – Ancient Prayer to Mary's Protection | Catholic Bible Online",
  description: "Learn the Sub Tuum Praesidium prayer, one of the oldest prayers to the Blessed Virgin Mary. Discover its history and meaning in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/sub-tuum-praesidium",
  },
  openGraph: {
    title: "Sub Tuum Praesidium – Ancient Prayer to Mary's Protection",
    description: "Learn the Sub Tuum Praesidium prayer, one of the oldest prayers to the Blessed Virgin Mary.",
    url: "https://www.catholicbibleonline.com/prayers/sub-tuum-praesidium",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sub Tuum Praesidium – Ancient Prayer to Mary's Protection",
    description: "Learn the Sub Tuum Praesidium prayer, one of the oldest prayers to the Blessed Virgin Mary.",
  },
};

export default function SubTuumPraesidiumPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/marian" className="hover:underline">Marian Prayers</Link> &gt; 
        Sub Tuum Praesidium
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🛡️ Sub Tuum Praesidium – Ancient Prayer to Mary's Protection</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Sub Tuum Praesidium is one of the oldest prayers to the Blessed Virgin Mary, dating from the 3rd century. 
        This beautiful prayer expresses our confidence in Mary's maternal protection and our seeking of her refuge 
        in times of need. It is a prayer of deep trust and filial devotion.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Oração Sub Tuum Praesidium</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Latim</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Sub tuum praesidium confugimus,</p>
            <p className="mb-2">Sancta Dei Genitrix.</p>
            <p className="mb-2">Nostras deprecationes ne despicias in necessitatibus,</p>
            <p className="mb-2">sed a periculis cunctis libera nos semper,</p>
            <p className="font-semibold">Virgo gloriosa et benedicta.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Português</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">À vossa proteção recorremos,</p>
            <p className="mb-2">Santa Mãe de Deus.</p>
            <p className="mb-2">Não desprezeis as nossas súplicas em nossas necessidades,</p>
            <p className="mb-2">mas livrai-nos sempre de todos os perigos,</p>
            <p className="font-semibold">ó Virgem gloriosa e bendita.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quando Rezar o Sub Tuum Praesidium</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Em tempos de perigo</strong> - Quando nos sentimos ameaçados ou em dificuldades</li>
          <li>• <strong>Antes de dormir</strong> - Para pedir a proteção de Maria durante a noite</li>
          <li>• <strong>Em viagens</strong> - Para pedir proteção durante deslocamentos</li>
          <li>• <strong>Em momentos de tentação</strong> - Para buscar refúgio na proteção de Maria</li>
          <li>• <strong>Oração diária</strong> - Como devoção regular à Santíssima Virgem</li>
          <li>• <strong>Em família</strong> - Para pedir proteção para toda a família</li>
          <li>• <strong>Em situações de emergência</strong> - Como oração rápida de proteção</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">História e Significado</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Origem Antiga</h3>
          <p className="text-gray-700 text-sm">
            O Sub Tuum Praesidium é uma das orações mais antigas à Virgem Maria, datando do século III. 
            Foi encontrada em um papiro egípcio, mostrando sua antiguidade e importância na tradição cristã.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Confiança Filial</h3>
          <p className="text-gray-700 text-sm">
            Esta oração expressa nossa confiança filial em Maria como nossa mãe espiritual e protetora. 
            Mostra nossa dependência de sua intercessão e proteção.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Busca de Refúgio</h3>
          <p className="text-gray-700 text-sm">
            A palavra "confugimus" (recorremos) indica uma busca ativa de refúgio na proteção de Maria, 
            como filhos que correm para os braços de sua mãe.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Proteção Universal</h3>
          <p className="text-gray-700 text-sm">
            A oração pede proteção contra "todos os perigos", mostrando que Maria pode nos proteger 
            em qualquer situação ou dificuldade.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Como Rezar o Sub Tuum Praesidium</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Estrutura da Oração</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">1. Invocação</h4>
            <p className="text-gray-700 text-sm">
              "À vossa proteção recorremos, Santa Mãe de Deus" - Reconhecemos Maria como nossa protetora.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">2. Súplica</h4>
            <p className="text-gray-700 text-sm">
              "Não desprezeis as nossas súplicas em nossas necessidades" - Pedimos que ela nos ouça.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">3. Petição</h4>
            <p className="text-gray-700 text-sm">
              "Mas livrai-nos sempre de todos os perigos" - Pedimos proteção específica.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">4. Louvor</h4>
            <p className="text-gray-700 text-sm">
              "Ó Virgem gloriosa e bendita" - Honramos Maria com títulos de louvor.
            </p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Dicas para Rezar</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• Reze com confiança filial, como um filho que corre para sua mãe</li>
            <li>• Medite no significado de "recorrer" à proteção de Maria</li>
            <li>• Peça proteção específica para suas necessidades atuais</li>
            <li>• Confie na intercessão poderosa de Maria</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fundamento Bíblico</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <p className="text-gray-700 mb-4">
          O Sub Tuum Praesidium está enraizado na Escritura e na tradição da Igreja:
        </p>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900">João 19:26-27</h4>
            <p className="text-gray-700 text-sm">
              "Mulher, eis aí o teu filho... Eis aí a tua mãe" - Jesus nos deu Maria como nossa mãe.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900">Lucas 1:28</h4>
            <p className="text-gray-700 text-sm">
              "Ave, cheia de graça, o Senhor está contigo" - Maria é cheia de graça e poder.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900">Salmo 91:1-2</h4>
            <p className="text-gray-700 text-sm">
              "Aquele que habita no esconderijo do Altíssimo... dirá ao Senhor: Meu refúgio e minha fortaleza" - 
              O conceito de buscar refúgio em Deus.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefícios Espirituais</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Proteção Espiritual</h3>
          <p className="text-gray-700 text-sm">
            O Sub Tuum Praesidium nos traz proteção espiritual contra as tentações e perigos do mundo.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Confiança em Maria</h3>
          <p className="text-gray-700 text-sm">
            Fortalece nossa confiança na intercessão maternal de Maria e nossa devoção filial a ela.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Paz Interior</h3>
          <p className="text-gray-700 text-sm">
            Traz paz interior ao saber que temos uma mãe celestial que nos protege e intercede por nós.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Conexão com a Tradição</h3>
          <p className="text-gray-700 text-sm">
            Nos conecta com a rica tradição da Igreja e com os cristãos que rezaram esta oração por séculos.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Variações da Oração</h2>
      
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Versão Expandida</h3>
        
        <div className="text-gray-700 mb-6">
          <p className="mb-2">À vossa proteção recorremos, Santa Mãe de Deus.</p>
          <p className="mb-2">Não desprezeis as nossas súplicas em nossas necessidades,</p>
          <p className="mb-2">mas livrai-nos sempre de todos os perigos,</p>
          <p className="mb-2">ó Virgem gloriosa e bendita.</p>
          <p className="mb-2">Rogai por nós, Santa Mãe de Deus,</p>
          <p className="font-semibold">para que sejamos dignos das promessas de Cristo.</p>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Versão para Crianças</h3>
        <div className="text-gray-700">
          <p className="mb-2">Mãe querida, eu me refugio em vós.</p>
          <p className="mb-2">Protegei-me sempre do mal,</p>
          <p className="font-semibold">ó Mãe de Deus, tão boa e santa.</p>
        </div>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Orações Relacionadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/memorare" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Memorare</h3>
              <p className="text-gray-600 text-sm">Poderosa oração de intercessão à Santíssima Virgem Maria</p>
            </div>
          </Link>
          
          <Link href="/prayers/hail-mary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🌹</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Ave Maria</h3>
              <p className="text-gray-600 text-sm">Oração fundamental à Santíssima Virgem Maria</p>
            </div>
          </Link>
          
          <Link href="/prayers/angelus" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🕰️</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Angelus</h3>
              <p className="text-gray-600 text-sm">Oração tradicional recitada três vezes ao dia</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/marian"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Voltar para Orações Marianas
        </Link>
      </div>
    </main>
  );
} 