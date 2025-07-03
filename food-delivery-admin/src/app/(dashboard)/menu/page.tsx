
import { MenuList } from "@/components/menu/list"
import PageHeading from "@/components/ui/page-heading"


const Page = () =>{
    return (
        <div>
           <PageHeading title="Menu List" link="/menu/create" buttonText="Add New Food" />
        <div>
            <MenuList/>
        </div>
        </div>
    )
}

export default Page