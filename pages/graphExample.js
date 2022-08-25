import { useQuery, gql } from "@apollo/client"

const GET__ACTIVE_ITEMS = gql`
    {
        activeItems(first: 5) {
            id
            buyer
            seller
            nftAddress
            tokenId
            price
        }
    }
`

export default function GraphExample() {
    const { loading, error, data } = useQuery(GET__ACTIVE_ITEMS)
    console.log(data)
    return <div>hi</div>
}
