import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_siteLayout/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_SiteLayout/home"!</div>
}
