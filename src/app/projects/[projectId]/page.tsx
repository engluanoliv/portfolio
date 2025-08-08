type ProjectIdPageProps = {
  params: Promise<{ projectId: string }>
}

export default async function ProjectIdPage({ params }: ProjectIdPageProps) {
  console.log(params)
  return <></>
}
