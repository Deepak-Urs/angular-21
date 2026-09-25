interface ListGroupModel {
  arry: string[],
  onSelectItem: (message:string) => void
}

const MyListGroup = ({arry, onSelectItem}: ListGroupModel) => {
  return (
    <ul className="list-group">
        {
            arry.map((item: string) => {
                return <li className="list-group-item" onClick={() => onSelectItem(item)}>{item}</li>
            })
        }
        <li className="list-group-item">Child to Parent Props Demo above [click the above list item/s]</li>
    </ul>
  )
}

export default MyListGroup
