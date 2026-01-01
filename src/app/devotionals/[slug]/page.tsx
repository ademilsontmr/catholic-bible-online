import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { devotionals, getDevotionalBySlug } from '@/data/devotionals'
import DevotionalContent from '@/components/DevotionalContent'

interface DevotionalPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return devotionals.map((devotional) => ({
    slug: devotional.slug,
  }))
}

export async function generateMetadata({ params }: DevotionalPageProps): Promise<Metadata> {
  const { slug } = await params
  const devotional = getDevotionalBySlug(slug)

  if (!devotional) {
    return { title: 'Devotional Not Found | Catholic Bible Online' }
  }

  return {
    title: `${devotional.title} - Daily Catholic Devotional`,
    description: devotional.longDescription,
    openGraph: {
      title: `${devotional.title} | Catholic Bible Online`,
      description: devotional.description,
      type: 'article',
    },
  }
}

export default async function DevotionalPage({ params }: DevotionalPageProps) {
  const { slug } = await params
  const devotional = getDevotionalBySlug(slug)

  if (!devotional) {
    notFound()
  }

  return <DevotionalContent devotional={devotional} slug={slug} />
}
