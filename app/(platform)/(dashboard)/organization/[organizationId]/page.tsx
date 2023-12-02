import { auth, OrganizationSwitcher } from "@clerk/nextjs";

const OrganizationIdPage = ({
  params
} : { params: { organization: string } }) => {

  return (
    <div>
      <OrganizationSwitcher 
        hidePersonal
      />
    </div>
  )
}

export default OrganizationIdPage;