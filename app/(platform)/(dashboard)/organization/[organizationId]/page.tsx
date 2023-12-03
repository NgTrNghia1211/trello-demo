import { auth, OrganizationSwitcher } from "@clerk/nextjs";

const OrganizationIdPage = ({
  params
} : { params: { organization: string } }) => {

  return (
    <div>
      Organization Page
    </div>
  )
}

export default OrganizationIdPage;