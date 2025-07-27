import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_siteLayout/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_SiteLayout/about"!</div>
}
