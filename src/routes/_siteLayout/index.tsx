import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_siteLayout/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="text-primary"> Hello World </div>;
}
