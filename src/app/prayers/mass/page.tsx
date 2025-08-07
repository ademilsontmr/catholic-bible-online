import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orações da Missa – Orações Litúrgicas | Catholic Bible Online",
  description: "Coleção completa de orações da missa: Kyrie, Glória, Santo, Cordeiro de Deus e outras orações usadas durante a celebração da Santa Missa.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/mass",
  },
  openGraph: {
    title: "Orações da Missa – Orações Litúrgicas",
    description: "Coleção completa de orações da missa e textos litúrgicos.",
    url: "https://www.catholicbibleonline.com/prayers/mass",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orações da Missa – Orações Litúrgicas",
    description: "Coleção completa de orações da missa e textos litúrgicos.",
  },
};

const massPrayers = [
  {
    slug: 'kyrie-eleison',
    name: 'Kyrie Eleison',
    description: 'Senhor, tende piedade - oração penitencial',
    icon: '🙏',
    status: 'available'
  },
  {
    slug: 'gloria-in-excelsis',
    name: 'Gloria in Excelsis',
    description: 'Glória a Deus nas alturas',
    icon: '✨',
    status: 'available'
  },
  {
    slug: 'sanctus',
    name: 'Sanctus',
    description: 'Santo, Santo, Santo - aclamação antes da consagração',
    icon: '👑',
    status: 'available'
  },
  {
    slug: 'memorial-acclamation',
    name: 'Aclamação Memorial',
    description: 'Cristo morreu, Cristo ressuscitou, Cristo virá novamente',
    icon: '✝️',
    status: 'available'
  },
  {
    slug: 'agnus-dei',
    name: 'Agnus Dei',
    description: 'Cordeiro de Deus - oração antes da Comunhão',
    icon: '🐑',
    status: 'available'
  },
  {
    slug: 'spiritual-communion',
    name: 'Comunhão Espiritual',
    description: 'Oração quando não é possível receber a Comunhão',
    icon: '❤️',
    status: 'available'
  },
  {
    slug: 'confiteor',
    name: 'Confiteor',
    description: 'Eu confesso - ato penitencial',
    icon: '💔',
    status: 'available'
  },
  {
    slug: 'anima-christi',
    name: 'Anima Christi',
    description: 'Alma de Cristo - oração após a Comunhão',
    icon: '🍷',
    status: 'available'
  },
  {
    slug: 'divine-praises',
    name: 'Louvores Divinos',
    description: 'Bendito seja Deus - orações de louvor',
    icon: '🙌',
    status: 'available'
  },
  {
    slug: 'prayer-holy-spirit',
    name: 'Oração ao Espírito Santo',
    description: 'Vinde, Espírito Santo - invocação',
    icon: '🕊️',
    status: 'available'
  },
  {
    slug: 'prayer-faithful',
    name: 'Oração dos Fiéis',
    description: 'Oração universal pela Igreja e pelo mundo',
    icon: '🤝',
    status: 'available'
  },
  {
    slug: 'final-blessing',
    name: 'Bênção Final',
    description: 'Que Deus todo-poderoso vos abençoe - despedida',
    icon: '✝️',
    status: 'available'
  }
];

export default function MassPrayersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Início</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Orações</Link> &gt; 
        Orações da Missa
      </nav>
      
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">✞</div>
        <h1 className="text-4xl font-bold text-black mb-4">Orações da Missa</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Coleção completa de orações usadas durante a celebração da Santa Missa. Estas orações litúrgicas 
          nos ajudam a participar plenamente na maior oração da Igreja - a Eucaristia.
        </p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{massPrayers.length}</div>
            <div className="text-sm text-gray-600">Total de Orações</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">Litúrgicas</div>
            <div className="text-sm text-gray-600">Categoria</div>
          </div>
        </div>
      </div>

      {/* Prayer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {massPrayers.map((prayer) => (
          <div key={prayer.slug} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="text-3xl">{prayer.icon}</div>
              {prayer.status === 'available' ? (
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  Available
                </span>
              ) : (
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                  Em Breve
                </span>
              )}
            </div>
            
            <h3 className="text-lg font-semibold text-black mb-2">{prayer.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{prayer.description}</p>
            
            {prayer.status === 'available' ? (
              <Link
                href={`/prayers/${prayer.slug}`}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                Ler Oração
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <button
                disabled
                className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed text-sm"
              >
                Em Breve
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Mass Structure Section */}
      <section className="bg-red-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Estrutura da Missa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-black mb-4">Liturgia da Palavra</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Ritos Iniciais</li>
              <li>• Kyrie Eleison</li>
              <li>• Glória in Excelsis</li>
              <li>• Oração Coleta</li>
              <li>• Leituras Bíblicas</li>
              <li>• Aclamação ao Evangelho</li>
              <li>• Evangelho</li>
              <li>• Homilia</li>
              <li>• Credo</li>
              <li>• Oração dos Fiéis</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-black mb-4">Liturgia Eucarística</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Preparação das Ofertas</li>
              <li>• Oração sobre as Ofertas</li>
              <li>• Oração Eucarística</li>
              <li>• Santo</li>
              <li>• Consagração</li>
              <li>• Aclamação Memorial</li>
              <li>• Doxologia</li>
              <li>• Pai Nosso</li>
              <li>• Sinal da Paz</li>
              <li>• Cordeiro de Deus</li>
              <li>• Comunhão</li>
              <li>• Oração após a Comunhão</li>
              <li>• Bênção Final</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Mass Prayers Matter */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Por que as Orações da Missa Importam</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-black mb-2">Participação Ativa</h3>
            <p className="text-gray-600 text-sm">
              Estas orações nos ajudam a participar plenamente da Missa, fazendo dela nossa própria oração e não apenas assistir.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-semibold text-black mb-2">Unidade Litúrgica</h3>
            <p className="text-gray-600 text-sm">
              Estas orações unem católicos ao redor do mundo em uma celebração comum da Eucaristia.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-semibold text-black mb-2">Tradição Sagrada</h3>
            <p className="text-gray-600 text-sm">
              Estas orações foram transmitidas através dos séculos e contêm a sabedoria da Igreja.
            </p>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Categorias de Orações Relacionadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/basic" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Orações Básicas</h3>
              <p className="text-gray-600 text-sm">Orações católicas essenciais que todo católico deve conhecer</p>
            </div>
          </Link>
          
          <Link href="/prayers/rosary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">📿</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Orações do Rosário</h3>
              <p className="text-gray-600 text-sm">Orações completas do rosário e todos os mistérios</p>
            </div>
          </Link>
          
          <Link href="/prayers/devotional" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🕯️</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Orações Devocionais</h3>
              <p className="text-gray-600 text-sm">Devoções especiais e práticas espirituais</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Voltar para Todas as Orações
        </Link>
      </div>
    </main>
  );
} 