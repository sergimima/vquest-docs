import { notFound } from 'next/navigation';
import { getPage, getPages } from '@/lib/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  // Cuando slug es undefined (ruta /docs), intentamos primero con undefined, luego con []
  const page = getPage(params.slug) || getPage(params.slug ?? []);

  if (!page) notFound();

  const data = page.data as any;
  const MDX = data.body;

  return (
    <DocsPage toc={data.toc}>
      <DocsBody>
        <h1>{data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getPages().map((page: any) => ({
    slug: page.slugs.length === 0 ? [] : page.slugs,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = getPage(params.slug) || getPage(params.slug ?? []);

  if (!page) notFound();

  const data = page.data as any;
  return {
    title: data.title,
    description: data.description,
  };
}
