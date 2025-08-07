import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Holy Week Prayers – Most Sacred Week of the Year | Catholic Bible Online",
  description: "Sacred Holy Week prayers for Palm Sunday, Holy Thursday, Good Friday, and Easter Vigil. Walk with Christ through His passion, death, and resurrection.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/holy-week-prayers",
  },
  openGraph: {
    title: "Holy Week Prayers – Most Sacred Week of the Year",
    description: "Sacred Holy Week prayers for Palm Sunday, Holy Thursday, Good Friday, and Easter Vigil.",
    url: "https://www.catholicbibleonline.com/prayers/holy-week-prayers",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holy Week Prayers – Most Sacred Week of the Year",
    description: "Sacred Holy Week prayers for Palm Sunday, Holy Thursday, Good Friday, and Easter Vigil.",
  },
};

export default function HolyWeekPrayersPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/seasonal" className="hover:underline">Seasonal</Link> &gt; 
        Holy Week Prayers
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">✝️ Holy Week Prayers</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Holy Week is the most sacred time of the Christian year, when we walk with Jesus through His passion, 
        death, and resurrection. These prayers help us to enter deeply into the mystery of our salvation 
        and to experience the love of Christ in a profound way.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Palm Sunday Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, as we wave our palms in celebration of Your triumphant entry into Jerusalem,
          </p>
          <p className="mb-4">
            help us to remember that this same crowd would soon call for Your crucifixion.
          </p>
          <p className="mb-4">
            Teach us to be faithful to You not just in moments of joy and triumph,
          </p>
          <p className="mb-4">
            but also in times of suffering and difficulty.
          </p>
          <p className="font-semibold">
            Hosanna to the Son of David! Blessed is He who comes in the name of the Lord!
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Holy Thursday Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, on this night when You instituted the Holy Eucharist and the priesthood,
          </p>
          <p className="mb-4">
            we thank You for the gift of Your Body and Blood, given for our salvation.
          </p>
          <p className="mb-4">
            Help us to receive You worthily and to serve others as You served Your disciples.
          </p>
          <p className="mb-4">
            May we always remember Your commandment to love one another as You have loved us.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Good Friday Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, as we contemplate Your suffering and death on the cross,
          </p>
          <p className="mb-4">
            we are overwhelmed by the depth of Your love for us.
          </p>
          <p className="mb-4">
            Help us to understand that You died for our sins and to respond with gratitude and love.
          </p>
          <p className="mb-4">
            May Your sacrifice inspire us to carry our own crosses with courage and faith.
          </p>
          <p className="font-semibold">
            We adore You, O Christ, and we bless You, because by Your holy cross You have redeemed the world.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Holy Saturday Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, on this day when Your body lay in the tomb,
          </p>
          <p className="mb-4">
            we wait in hope for Your glorious resurrection.
          </p>
          <p className="mb-4">
            Help us to trust in Your promises and to believe that death is not the end.
          </p>
          <p className="mb-4">
            May we use this time of waiting to prepare our hearts to celebrate Your victory over death.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayers for Each Day of Holy Week</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-red-900 mb-3">Monday - Prayer for Humility</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, as You entered Jerusalem in humility, riding on a donkey, 
            teach us to be humble in our service to others. Help us to follow Your example 
            of selflessness and to put the needs of others before our own.
          </p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-orange-900 mb-3">Tuesday - Prayer for Faithfulness</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, as You faced increasing opposition and betrayal, 
            help us to remain faithful to You even when it is difficult. 
            Give us the courage to stand up for what is right and to follow You without compromise.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-yellow-900 mb-3">Wednesday - Prayer for Repentance</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, as Judas prepared to betray You, help us to examine our own hearts 
            and to repent of any ways in which we have betrayed You. 
            Grant us the grace to turn back to You with sincere contrition.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-900 mb-3">Thursday - Prayer for Service</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, as You washed the feet of Your disciples, teach us to serve others with love and humility. 
            Help us to see every person as Your beloved child and to treat them with dignity and respect.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Friday - Prayer for Compassion</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, as You suffered on the cross, help us to have compassion for all who suffer. 
            May Your suffering teach us to reach out to those in need and to offer comfort and support 
            to those who are hurting.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-900 mb-3">Saturday - Prayer for Hope</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, as we wait for Your resurrection, fill our hearts with hope. 
            Help us to trust that You are working even in the darkest moments of our lives 
            and that new life will come from death.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          Holy Week is the heart of the Christian faith, when we relive the central mystery of our salvation. 
          It is a time to walk with Jesus through His passion and death, so that we may also share in His resurrection.
        </p>
        
        <p className="text-gray-700 mb-4">
          Each day of Holy Week has its own spiritual focus: Palm Sunday calls us to examine our faithfulness, 
          Holy Thursday reminds us of the gift of the Eucharist and the call to service, Good Friday invites us 
          to contemplate the depth of Christ's love, and Holy Saturday teaches us to wait in hope.
        </p>
        
        <p className="text-gray-700 mb-6">
          These Holy Week prayers help us to enter more deeply into the mystery of Christ's passion and death. 
          They remind us that Jesus' suffering was not in vain, but was the means by which He won our salvation. 
          Through these prayers, we can experience the love of Christ in a profound way and be transformed by His grace.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/easter-prayers" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Seasonal
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Easter Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Celebrate the Resurrection of Jesus Christ with these joyful Easter prayers.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/lent-prayers" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Seasonal
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Lent Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prepare your heart for Holy Week with these Lenten prayers and devotions.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/our-father" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Our Father
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The prayer that Jesus taught us, perfect for daily prayer during Holy Week.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
} 